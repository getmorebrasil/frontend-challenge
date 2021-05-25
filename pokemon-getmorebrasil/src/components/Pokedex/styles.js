import styled from "styled-components";
import { fade, makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core"; 

export const NavBar = styled.div`
  display: flex;
  flex-grow: 1;
  font-size: 8rem;
`;

export const MenuIcon = styled.img`
    width: 180px;
    height: 65px;
`;

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "flex-end",
    marginBottom: "10px",
    fontSize: "400px,"
},

searchInput: {
  width: "150px",
  margin: "5px",
},
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '10ch',
      },
    },
  },     
    cardContainer: {
      paddingTop: "2rem",
      paddingLeft: "5rem",
      paddingRight: "5rem",
    },
    cardMedia: {
      margin: "auto",
    },
    cardContent: {
      textAlign: "center",
      background: "#F9B81F",
      '&:hover': {
        transition: '0.7s',
        background: "#3b88c3",
        color: "white",
        cursor: "pointer",
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
`;

export const CardMediaUI = styled(CardMedia)`
    width: 130px;
    height: 130px;
    border-radius: 50px;
`;