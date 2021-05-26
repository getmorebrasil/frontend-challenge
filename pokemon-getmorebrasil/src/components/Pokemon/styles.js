import styled from "styled-components";

export const CardSection = styled.div`
  width: 550px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  box-shadow: 5px 5px 10px black;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #bbb;
  border-radius: 10px;
  transition: all 0.3s linear;
  background: #3f51b5; /* Old browsers */
  background: -moz-linear-gradient(top, #F9B81F0%, #febf04 100%); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #3f51b5),
    color-stop(100%, #febf04)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #F9B81F0%,
    #febf04 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #F9B81F0%,
    #febf04 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, #F9B81F0%, #febf04 100%); /* IE10+ */
  background: linear-gradient(top, #F9B81F0%, #febf04 100%); /* W3C */
  &:hover {
    -webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -moz-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    -o-box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px,
      inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
  }

  @media screen and (max-width: 768px) {
    width: 18rem;
    height: 38rem;
  }
`;

export const CardContainer = styled.div`
  text-align: center;
  padding: 8px;
  background-color: #f6d743;
  border: 1px solid #120136;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  min-width: 150px;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    width: 15.5rem;
    height: 35.5rem;
  }
`;

export const PokeImage = styled.img`
  width: 300px;
  height: 300px;
  @media screen and (max-width: 768px) {
    width: 7rem;
    height: 7rem;
  }
`;

export const ButtonReturn = styled.label`
  background-color: yellow;
  top: 10rem;
  right: 0;
  position: fixed;
  transform: translate(0, 24px) scale(1);
  border-radius: 10px;
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

  @media screen and (max-width: 768px) {
    width: 1rem;
    height: 1rem;
  }
`;