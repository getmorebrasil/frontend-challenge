import React, { useState } from "react";
import Video from "../../assets/video/intro.mp4";
import PokeLogo from '../../assets/images/pokemonLogo.svg';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  MenuIcon,
  HeroContent,
  HeroButton,
  HeroBtnWrapper,
  CatchPokedex,
} from "./styles";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(hover ? false : true);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
      <MenuIcon src={PokeLogo} />
        <HeroBtnWrapper>
          <HeroButton
            to="calculator"
            smooth={true}
            duration={1900}
            offset={-90}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
           <CatchPokedex /> Catch 'Em All
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;