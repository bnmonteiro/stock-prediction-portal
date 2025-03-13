import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <>
      {/* <a href={props.href} className={props.className}>
        {props.text}
      </a> */}
      <Link to={props.url} className={props.className}>
        {props.text}
      </Link>
    </>
  );
};

export default Button;
