import styled from 'styled-components';

export const Container = styled.section`
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

  & > p {
    font-family: 'Montserrat';
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & button {
    margin: 4rem 0 6rem 0;
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

export const Classification = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    font-family: 'Montserrat';
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.border};
    margin-top: 0.8rem;
    text-transform: uppercase;
  }
`;
