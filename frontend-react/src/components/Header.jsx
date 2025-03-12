import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <a href="/" className="navbar-brand text-light">
          Stock Predicition Portal
        </a>
        <div>
          <Button href="/login" className="btn btn-outline-info" text="Login" />
          &nbsp;
          <Button href="/register" className="btn btn-info" text="Register" />
        </div>
      </nav>
    </>
  );
};

export default Header;
