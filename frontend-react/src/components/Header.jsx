import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to="/">
          Stock Predicition Portal
        </Link>
        <div>
          <Button url="/login" className="btn btn-outline-info" text="Login" />
          &nbsp;
          <Button url="/register" className="btn btn-info" text="Register" />
        </div>
      </nav>
    </>
  );
};

export default Header;
