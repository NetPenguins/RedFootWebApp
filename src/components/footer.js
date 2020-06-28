import "bulma/css/bulma.css";
import link from "bulma/css/bulma.css";
import React from "react";
import "../components/main.css";
const Footer = () => (
  <footer className="hero-foot is-dark">
    <div>
      <a href={"/"}>
        {/* <img src="/icons/icon-72x72.png" alt="KC Adventures"/> */}
      </a>
    </div>
    <a
      href={"http://github.com/NetPenguins"}
      target="_blank"
      rel="noreferrer noopener"
      className="tag is-link"
    >
      Made @ NetPenguins
      </a>
    <div />
    <strong style={{ color: "white" }}>Chad Wilson © 2020</strong>
  </footer>
)

export default Footer
