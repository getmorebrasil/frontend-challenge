import styled from 'styled-components'
import { centerFlex } from '../../../styles/shared'

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
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media only screen and (max-width: 1080px) {
    margin-top: 8rem;
  }

  @media only screen and (max-width: 720px) {
    margin-top: 0rem;
  }

  @media only screen and (max-width: 560px) {
    margin-top: -4rem;
  }
`

export const Movie = styled.div`
  ${centerFlex};
  gap: 5rem;

  min-height: 350px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.contrastColor};

  @media only screen and (max-width: 1080px) {
    flex-direction: column;
    height: unset;
    min-height: 200px;
    padding: 4rem;
  }

  @media only screen and (max-width: 720px) {
    padding: 2rem;
    margin-top: -2rem;
  }
`

export const MoviePoster = styled.img`
  flex: 0 0 320px;
  max-height: 350px;
  object-fit: cover;
  border-radius: 10px 30px 30px 10px;

  @media only screen and (max-width: 1080px) {
    display: none;
  }
`

export const CenterContent = styled.div`
  flex: 1;

  & > h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.42rem;
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
    font-size: 1.4rem;
    font-weight: 400;
    max-width: 550px;
  }

  @media only screen and (max-width: 1200px) {
    & > h2 {
      font-size: 2rem;
    }

    & > h3 {
      margin-top: 1.8rem;
      margin-bottom: 1rem;
      font-size: 2rem;
    }

    & > p {
      font-size: 1.3rem;
      max-width: unset;
    }
  }

  @media only screen and (max-width: 1080px) {
    & > h2 {
      font-size: 2.1rem;
    }

    & > h3 {
      margin-top: 1.8rem;
      margin-bottom: 1.4rem;
      font-size: 2.2rem;
    }

    & > p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 680px) {
    & > h2 {
      font-size: 1.4rem;
    }

    & > h3 {
      font-size: 1.2rem;
    }

    & > p {
      font-size: 1rem;
    }
  }
`

export const RightSide = styled.div`
  text-align: right;
  margin-right: 4rem;

  & button {
    margin: 4rem auto 6rem auto;
  }

  & h5 {
    font-size: 1.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.secondary};

    & > span {
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 1080px) {
    margin-right: 0;

    & h5 {
      display: none;
    }

    & button {
      margin: 4rem 0 3rem 0;
    }

    & > p {
      display: none;
    }
  }

  @media only screen and (max-width: 680px) {
    text-align: center;

    & > summary {
      margin-top: 0.6rem;
    }
  }
`
