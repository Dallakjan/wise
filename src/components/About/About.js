import React from "react";
import "./about.scss";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

// import { faInstagram } from "@fortawesome/react-fontawesome";

// const instagram = <FontAwesomeIcon icon={faInstagram} className="instagram" />;

export default function About() {
  return (
    <>
      <Header />
      <div className="info">
        <div class="background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="about_info_container">
          <div className="about_info">
            <h4>You Can Change The World!</h4>
          </div>
        </div>
        <article>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor.
        </article>
      </div>
      <Footer />
    </>
  );
}
