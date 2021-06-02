import styled from 'styled-components'
import { backgroundImageStyle, scrollBarStyle } from '../../../styles/shared'

export const Container = styled.section`
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
    color: ${({ theme }) =>
      theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
  }
`

export const MoviesList = styled.div`
  display: flex;
  align-items: baseline;
  padding: 1px;
  gap: 1.8rem;
  overflow-x: scroll;

  ${scrollBarStyle};
`

export const MovieCard = styled.div<{ imagePath: string }>`
  flex: 0 0 180px;
  height: 260px;
  background: white;
  margin: 1rem 0;
  background: ${({ imagePath }) => `url(https://image.tmdb.org/t/p/w342${imagePath})`};
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${backgroundImageStyle};

  :hover {
    transform: scale(1.05);
    margin: 0 0.8rem;
  }

  &::after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    filter: brightness(0.7);
    background: ${({ theme }) => `linear-gradient(to top, transparent, ${theme.colors.primary})`};
    content: '';
    z-index: -100;
    border-radius: 10px;
  }
`

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

  & > summary {
    margin-top: 1rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    & > p {
      color: ${({ theme }) =>
        theme.name === 'light' ? theme.colors.contrastColor : theme.colors.secondary};
      font-weight: 400;
      font-family: 'Montserrat';
      font-size: 0.8rem;
      text-transform: uppercase;

      margin-right: 1rem;
    }
  }
`
