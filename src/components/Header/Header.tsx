"use client";

//style
import "./styles.scss";

import Logo from "../LogoCompany/Logo";
import { useState } from "react";

const Header = () => {
  const [btnSelected, setBtnSelected] = useState("btn-help");

  const handlebtnToHelp = () => {
    setBtnSelected("btn-help");
  };

  const handlebtnToService = () => {
    setBtnSelected("btn-service");
  };

  return (
    <header id="header-container">
      <div id="logo-and-content-container">
        <div id="logo-and-title">
          <Logo />
          <div id="title-header">
            <h1>Serviços de mudança</h1>
            <p>Itapetininga</p>
          </div>
        </div>
        <div id="content-header-container">
          <h2>
            {btnSelected === "btn-help"
              ? "Serviços de mudança"
              : "Quais os serviços"}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            alias? Aspernatur atque laudantium recusandae necessitatibus
            voluptate, architecto et sint, nihil quidem aut aliquid laboriosam
            magnam inventore ipsum dignissimos quaerat at
          </p>
          <div className="btn-header-container">
            <button
              onClick={handlebtnToHelp}
              style={
                btnSelected === "btn-help"
                  ? { background: "#EFD063", color: "black" }
                  : { background: "#4d6bb9" }
              }
            >
              Eu preciso de ajuda
            </button>
            <button
              onClick={handlebtnToService}
              style={
                btnSelected === "btn-service"
                  ? { background: "#EFD063", color: "black" }
                  : { background: "#4d6bb9" }
              }
            >
              Quais os serviços
            </button>
          </div>
        </div>
      </div>
      <div
        id="help-container"
        style={{
          backgroundImage: "url('/bg-header.jpg')",
        }}
      >
        <div id="card-header">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            iusto iure vero suscipit! Pariatur laudantium eligendi repellendus
            dolorum, rem tempore error maxime blanditiis temporibus magni quia.
            Perferendis numquam voluptatem nisi?
          </p>
          <div className="btn-header-container">
            <button
              onClick={handlebtnToHelp}
              style={
                btnSelected === "btn-help"
                  ? { background: "#4d6bb9", color: "white" }
                  : { background: "#fff", color: "#4d6bb9" }
              }
            >
              Eu preciso de ajuda
            </button>
            <button
              onClick={handlebtnToService}
              style={
                btnSelected === "btn-service"
                  ? { background: "#4d6bb9", color: "white" }
                  : { background: "#fff", color: "#4d6bb9" }
              }
            >
              Quais os serviços
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
