import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import DropDown from "./DropDown";
import { styled } from "styled-components";

const Hamburger = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const [isOn, setIsOn] = useState(false);
  const modalHandler = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/">
          <div className="logo-img">
            <img src="logo.png" alt="logo" />
          </div>
        </Link>
        <span className="logo-title">COZ Shopping</span>
      </div>
      <div>
        <Hamburger
          src="hamburger.png"
          alt="hamburger menu"
          onClick={modalHandler}
        />
        {isOn ? <DropDown /> : ""}
      </div>
    </header>
  );
};

export default Header;
