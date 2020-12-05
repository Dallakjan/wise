import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function BestShopModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sklepy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.bestShops &&
            props.bestShops.map((shop) => {
              return (
                <p key={shop.name}>
                  {shop.name} - {parseFloat(shop.totalPrice).toFixed(2)} zł
                </p>
              );
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
