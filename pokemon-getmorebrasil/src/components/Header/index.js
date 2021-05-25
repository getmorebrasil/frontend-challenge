import React from "react";
import { animateScroll } from "react-scroll";
import { MenuIcon } from "./styles";
import PokeLogo from "../../assets/images/pokemonLogo.svg";

const Header = () => {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return <MenuIcon src={PokeLogo} onClick={toggleHome} />;
};

export default Header;
