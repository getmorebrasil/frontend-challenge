import styled, { css } from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 60px);
  color: ${({ theme }) => theme.colors.secondary};

  & > footer {
    margin-top: 5rem;
  }
`;

export const ShowCase = styled.section<{ imagePath: string }>`
  display: flex;
  justify-content: space-between;
  text-align: right;

  width: 100%;
  height: 50rem;
  margin-bottom: 18rem;
  background: #333;
  padding: 5rem 5rem 0;
  background: ${({ theme }) => theme.colors.contrastColor};

  @media (max-width: 1280px) {
    margin-bottom: 15rem;
  }

  @media (max-width: 1100px) {
    margin-bottom: 22rem;
  }

  @media (max-width: 960px) {
    margin-bottom: 12rem;
  }

  @media (max-width: 860px) {
    margin-bottom: 7rem;
  }
`;

export const MoviePoster = styled.img`
  display: block;
  max-width: 400px;
  margin-top: -5rem;
  border-radius: 0 0 10px 10px;

  @media (max-width: 1280px) {
    max-width: 370px;
  }

  @media (max-width: 1100px) {
    max-width: 340px;
    margin-right: 2rem;
  }

  @media (max-width: 960px) {
    max-width: 280px;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

export const RightSide = styled.aside`
  & > h3 {
    display: inline-block;
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: 300;
    background: ${({ theme }) => theme.colors.background};
    margin-top: 1rem;

    & > span {
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 1280px) {
      font-size: 1.2rem;
    }

    @media (max-width: 720px) {
      font-size: 0.8rem;
    }

    @media (max-width: 580px) {
      display: none;
    }
  }

  & > h4 {
    max-width: 700px;
    font-weight: 400;
    margin-top: 3.2rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.border};

    @media (max-width: 1280px) {
      font-size: 1.2rem;
      max-width: 600px;
    }

    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }

  & > button {
    margin-top: 16rem;
    margin-left: auto;
    border-color: ${({ theme }) => theme.colors.secondary};

    & > h3 {
      color: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: 1280px) {
      margin-top: 6rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 300;

  @media (max-width: 1280px) {
    font-size: 3rem;
  }

  @media (max-width: 720px) {
    font-size: 2rem;
  }
`;

const showCaseText = css`
  font-size: 1.5rem;
  margin-top: 2rem;
  font-weight: 300;

  & > span {
    font-weight: 700;
  }

  @media (max-width: 720px) {
    font-size: 1rem;
  }
`;

export const MainInfo = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  & > div {
    display: flex;
    align-items: flex-end;
    gap: 4rem;
    margin-top: 2rem;

    @media (max-width: 720px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  & > h5 {
    ${showCaseText};
  }

  & > h6 {
    ${showCaseText};
  }

  & strong {
    @media (max-width: 720px) {
      font-size: 1rem;
    }
  }

  & summary {
    & > p {
      margin-right: 1.4rem;

      @media (max-width: 680px) {
        display: none;
      }
    }

    @media (max-width: 680px) {
      margin-top: 1.4rem;
    }
  }
`;
