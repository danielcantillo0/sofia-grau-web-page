import "./header.scss";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [obras, setObras] = useState(false);

  const toggleObras = () => setObras(!obras);
  return (
    <>
      <header className="header">
        <div className="sofia-grau">
          <Link to="/">
            <h1>Sofia Grau </h1>
          </Link>
        </div>
        <div className="links">
          <Link to="about">
            <h2>About</h2>
          </Link>

          <h2 className="obras-click" onClick={toggleObras}>
            Obras
          </h2>
        </div>
      </header>
      {obras && (
        /* Esto toca cambiarlo. Recuerda que cada categorias es un enlace */
        <h3 className="categorias">
          <span>Pinturas</span>
          <span>Dibujos</span>
          <span>Animaciones</span>
          <span>Videos</span>
          <span>Textos</span>
          <span>Fotos</span>
        </h3>
      )}
      <Outlet />
    </>
  );
};

export default Header;
