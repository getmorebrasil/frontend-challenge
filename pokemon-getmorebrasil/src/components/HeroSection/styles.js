import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
  @media screen and (max-width: 768px) {
    object-fit: fill;
    width: 30%;
    height: 30%;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  @media screen and (max-width: 768px) {
    object-fit: fill;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuIcon = styled.img`
  width: 380px;
  height: 190px;
  @media screen and (max-width: 768px) {
    width: 280px;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroButton = styled(LinkScroll)`
  border-radius: 50px;
  background: #f9b81f;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #010606;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
    inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  -moz-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
    inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  -o-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
    inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
    inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3b88c3;
    border-color: none;
    color: white;
    outline: none;
    text-decoration: none;
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -moz-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -o-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: -100px;
    margin-bottom: 45px;
  }
`;

export const CatchPokedex = styled(DonutLargeIcon)`
  margin-left: 8px;
  font-size: 20px;
`;
