import React from "react";
// import React, { Component } from "react";
import "./history.scss";
import * as ReactBootStrap from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "./../footer/Footer";
import { db } from "./../../firebase";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import BestShopModal from "./BestShopModal";

export default function Hisotry() {
  const [products, setProduct] = useState(false);
  const [inputList, setInputList] = useState([""]);
  const [bestShops, setBestShops] = useState(null);
  const [errors, setErrors] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    db.collection("products")
      .get()
      .then(function (querySnapshot) {
        const tmp = [];
        querySnapshot.forEach(function (doc) {
          tmp.push({
            ...doc.data(),
            id: doc.id,
          });
          console.log(doc.id, " => ", doc.data());
        });
        setProduct(tmp);
      });
  }, []);

  if (!products) {
    return (
      <div className="text-center text-primary">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const handleInputChange = (e, i) => {
    const list = [...inputList];
    list[i] = e.target.value.toLowerCase();
    setInputList(list);
    //////////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\|||||\\||||||||||
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, ""]);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const shopNames = products[0].shops.map((shop) => {
      return {
        name: shop.name,
        totalPrice: 0,
      };
    });

    shopNames.forEach((shop) => {
      inputList.forEach((input) => {
        const foundProduct = products.find((product) => {
          return product.name === input;
        });
        const foundShop = foundProduct.shops.find((shp) => {
          return shp.name === shop.name;
        });
        console.log(foundShop);
        shop.totalPrice += foundShop.price;
      });
    });
    console.log(shopNames);

    shopNames.sort((shopA, shopB) => {
      return shopA.totalPrice < shopB.totalPrice ? -1 : 1;
    });
    setBestShops(shopNames);
    setShow(true);
  };

  return (
    <>
      <Header />
      <div className="formContainer">
        <Form>
          <Form.Label className="form" htmlFor="product">
            Wpisz produkt
          </Form.Label>
          {inputList.map((x, i) => {
            return (
              <div className="box" key={i}>
                <Form.Control
                  onChange={(e) => handleInputChange(e, i)}
                  value={x}
                />
                <div className="btn-box">
                  {inputList.length !== 1 && (
                    <Button
                      variant="secondary"
                      className="mr10"
                      onClick={() => handleRemoveClick(i)}
                    >
                      Usuń
                    </Button>
                  )}
                  {inputList.length - 1 === i && (
                    <Button className="mr10" onClick={handleAddClick}>
                      Dodaj
                    </Button>
                  )}
                </div>
              </div>
            );
          })}

          <br />
          <Button
            className="mr10"
            variant="primary"
            type="submit"
            onClick={handleSearch}
          >
            Wyszukaj
          </Button>
        </Form>
      </div>
      <br />
      <div className="tableContainer">
        <ReactBootStrap.Table striped bordered hover>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  {product.shops.map((shop) => (
                    <div key={shop.name}>
                      Cena: {shop.price}, {shop.name}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </ReactBootStrap.Table>
      </div>
      <Footer />
      <BestShopModal
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        bestShops={bestShops}
      />
    </>
  );
}
