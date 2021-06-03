import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { GetServerSideProps } from 'next'
import { Button } from '../components/atoms'
import { withSSRAuth } from '../utils'
import { Container, WhiteBlock, CompleteImage } from '../styles/pages/signed'

export default function Signed() {
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

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  }
})
