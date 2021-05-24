import styled from "styled-components";

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
`;

export const MoviePoster = styled.img`
  display: block;
  max-width: 400px;
  margin-top: -5rem;
  border-radius: 0 0 10px 10px;
`;

export const RightSide = styled.aside`
  & > h3 {
    display: inline-block;
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: 300;
    background: ${({ theme }) => theme.colors.background};
    margin-top: 1rem;

    & > span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & > h4 {
    max-width: 700px;
    font-weight: 400;
    margin-top: 3.2rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.border};
  }

  & > button {
    margin-top: 18rem;
    margin-left: auto;
    border-color: ${({ theme }) => theme.colors.secondary};

    & > h3 {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.8rem;
  font-weight: 300;
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
  }

  & > h5 {
    font-size: 1.5rem;
    margin-top: 2rem;
    font-weight: 300;

    & > span {
      font-weight: 700;
    }
  }

  & > h6 {
    font-size: 1.5rem;
    margin-top: 1rem;
    font-weight: 300;

    & > span {
      font-weight: 700;
    }
  }

  & summary > p {
    margin-right: 1.4rem;
  }
`;
