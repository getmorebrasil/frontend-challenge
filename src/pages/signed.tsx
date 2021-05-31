import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { Button } from '../components/atoms'
import { centerFlex } from '../styles/global'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const WhiteBlock = styled.section`
  flex: 1;
  ${centerFlex};
  justify-content: baseline;
  flex-direction: column;
  max-width: 580px;
  border-radius: 1.5rem;
  margin: 8px;
  padding: 4rem;

  & > h1 {
    font-weight: 400;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
    margin: 1rem 0 4rem 0;
  }
`

export const CompleteImage = styled.img`
  max-width: 5rem;
  margin-bottom: 1.8rem;
`

const Signed: React.FC = () => {
  const router = useRouter()

  const handleGetMovies = useCallback(() => {
    router.push('/')
  }, [router])

  return (
    <Container>
      <WhiteBlock>
        <CompleteImage src="done-icon.png" />
        <h1>Successful registration!</h1>
        <p>Nice! Now you can access our platform, find your favorite movie clicking below</p>
        <Button text="Get Movies" handleAction={handleGetMovies} />
      </WhiteBlock>
    </Container>
  )
}

export default Signed
