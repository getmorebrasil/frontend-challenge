import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Section = styled.div`
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
`;

export const Container = styled.div`
  text-align: center;
  padding: 8px;
  background-color: #f6d743;
  border: 1px solid #120136;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  min-width: 150px;
  flex-grow: 1;
`;

export const PokemonProfile = styled.img`
  width: 300px;
  height: 300px;
`;

export const Label = styled.label`
  top: 10rem;
  right: 0;
  position: fixed;
  transform: translate(0, 24px) scale(1);
`;

export const ButtonUI = styled(Button)`
  margin-top: 20px;
  padding: 8px 10px;
  line-height: 1.2;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 8px rgba(0,0,0,.3), inset 0 1px rgba(255,255,255,.6);
  border: 1px solid rgba(0,0,0,.15);
  border-right-color: rgba(0, 0, 0, 0.15);
  border-right-style: solid;
  border-right-width: 1px;
  border-right: 0;
  font-size: 20px;
  background-color: #3f51b5;
  color: #fff;
  cursor: pointer;
  
`;
