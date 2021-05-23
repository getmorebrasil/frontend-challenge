import styled from "styled-components";

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
