import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
  padding: 0 5rem;
  width: 100%;

  & > h2 {
    font-size: 2.8rem;
    font-weight: 600;
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 680px) {
    & > h2 {
      font-size: 1.8rem;
    }
  }
`;

export const RolesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 174.7px);
  padding: 1px;
  gap: 1.8rem;

  @media (max-width: 680px) {
    gap: 0.8rem;
  }

  @media (max-width: 520px) {
    margin: 0 auto;
  }
`;

export const Artist = styled.div<{ imagePath: string }>`
  height: 260px;
  background: white;
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
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(to bottom, transparent, black 98%);
  z-index: 200;
  padding: 0.8rem;

  & > p:first-of-type {
    color: ${({ theme }) => theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
    font-weight: 700;
    font-family: 'Montserrat';
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }

  & > p:last-of-type {
    color: ${({ theme }) => theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
    font-weight: 400;
    font-family: 'Montserrat';
    font-size: 1rem;
  }
`
