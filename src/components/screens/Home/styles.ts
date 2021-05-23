import styled from "styled-components";
import { scrollBarStyle } from "../../../styles/global";

export const Container = styled.main`
  min-height: calc(100vh - 60px);
  color: ${({ theme }) => theme.name === "light" ? theme.colors.contrastColor : theme.colors.secondary};
`;

export const ShowCase = styled.section<{ imagePath: string }>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 49rem;
  background: #333;
  padding: 5rem 5rem 0;
  position: relative;
  background: ${({ imagePath }) => `url(https://image.tmdb.org/t/p/w1280${imagePath})`} rgba(0, 0, 0, 0.8);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;

  & > button {
    margin-top: 10rem;
    border-color: ${({ theme }) => theme.name === "light" ? theme.colors.contrastColor : theme.colors.secondary};

    & > h3 {
      color: ${({ theme }) => theme.name === "light" ? theme.colors.contrastColor : theme.colors.secondary};
    }
  }
`;

export const Title = styled.h1`
  font-size: 4.4rem;
  font-weight: 300;
`;

export const LeftSide = styled.aside`
  max-width: 700px;

  & > h3 {
    font-size: 2.8rem;
    font-weight: 600;
    margin-top: 3rem;
  }

  & > h4 {
    font-size: 1.7rem;
    font-weight: 300;
    margin-top: 1rem;
  }
`;

export const PopularMovies = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  position: absolute;
  z-index: 100;
  padding: 0 5rem;
  width: 100%;
  margin: 0 auto;
  margin-top: -11rem;

  & > h2 {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

export const PopularMovieList = styled.div`
  display: flex;
  align-items: baseline;
  padding: 1px;
  gap: 1.8rem;
  overflow-x: scroll;

  & > div:last-of-type {
    visibility: hidden;
  }

  ${scrollBarStyle};
`;

export const PopularMovieCard = styled.div<{ imagePath: string }>`
  flex: 0 0 180px;
  height: 260px;
  background: white;
  margin: 1rem 0;
  background: ${({ imagePath }) => `url(https://image.tmdb.org/t/p/w342${imagePath})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    margin: 0 0.8rem;
  }

  &::after {
    position: absolute;
    top: -1px; bottom: -1px;
    left: -1px; right: -1px;
    filter: brightness(0.7);
    background: ${({ theme }) => `linear-gradient(to top, transparent, ${theme.colors.primary})`};
    content: '';
    z-index: -100;
    border-radius: 10px;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(to bottom, transparent, black 98%);
  z-index: 200;

  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-end;
  padding: 0.8rem;

  & > p {
    color: ${({ theme }) => theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
    font-weight: 700;
    font-family: 'Montserrat';
    font-size: 0.8rem;
  }
`

export const Classification = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > p {
    color: ${({ theme }) => theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
    font-weight: 400;
    font-family: 'Montserrat';
    font-size: 0.8rem;
    text-transform: uppercase;

    margin-right: 1rem;
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 0.4rem;

  & img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;



export const MoreMovies = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 3rem;

  position: relative;
  top: 27rem;
  padding: 0 5rem;

  & > h2 {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
`;

export const Movie = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  gap: 5rem;

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.contrastColor};
`;

export const MoviePoster = styled.img`
  flex: 0 0 320px;
  max-height: 318px;
  object-fit: cover;
  border-radius: 10px 30px 30px 10px;
`;

export const CenterContent = styled.div`
  flex: 1;

  & > h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.6rem;
    font-weight: 500;
  }

  & > h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.2rem;
    font-weight: 700;
  }

  & > p {
    color: ${({ theme }) => theme.colors.neutralColor};
    font-size: 1.5rem;
    font-weight: 400;
    max-width: 550px;
  }
`;

export const RightSide = styled.div`
  text-align: right;
  margin-right: 4rem;

  & p {
    font-family: 'Montserrat';
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.border};
    margin-top: 0.8rem;
  }

  & > p {
    font-family: 'Montserrat';
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & button {
    margin: 4rem 0 6rem 0;
  }

  & img {
    width: 3rem;
    height: 3rem;
  }

  & h5 {
    font-size: 1.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.secondary};

    & > span {
      font-weight: 700;
    }
  }
`;
