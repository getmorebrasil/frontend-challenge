import styled from "styled-components";
import { fade, makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";

export const NavBar = styled.div`
  display: flex;
  flex-grow: 1;
  font-size: 8rem;
`;

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 9,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      fontWeight: "bold",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginBottom: "10px",
    fontSize: "400px,",
  },

  searchInput: {
    width: "150px",
    margin: "5px",
    fontWeight: "bold",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "10ch",
      },
    },
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexFlow: "row wrap",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1.5rem",
    ["@media(max-width: 359px)"]: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  cardMedia: {
    margin: "auto",
    fontWeight: "bold",
    ["@media(max-width: 500px)"]: {
      padding: "1.2rem",
    },
    ["@media(max-width: 360px)"]: {
      padding: "3px",
    },
  },
  cardContent: {
    textAlign: "center",
    fontWeight: "bold",
    boxSizing: "border-box",
    ["@media(max-width: 500px)"]: {
      padding: "1.2rem",
    },
    ["@media(max-width: 360px)"]: {
      padding: "3px",
    },
    "&:hover": {
      transition: "0.7s",
      background: "#3b88c3",
      color: "white",
      cursor: "pointer",
      fontWeight: "bold",
      
    },
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
    borderRadius: "10px",
  },
}));

export const PokedexDiv = styled.div`
  margin-top: 100px;
`;
export const PokedexP = styled.p`
  font-weight: 900;
  text-align: center;
  font-weight: bold;
`;

export const CardMediaUI = styled(CardMedia)`
  width: 130px;
  height: 130px;
  border-radius: 50px;
  @media screen and (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;
