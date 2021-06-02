import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from '../../atoms'
import { Container, Block, AuthIcon } from './styles'

const Unauthorized: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Não autorizado | Página restrita para usuários do portal</title>
        <meta
          name="description"
          content="Esta página está restrita apenas para usuários já cadastrados no portal, por favor faça login para obter o acesso ou crie uma nova conta."
        />
      </Head>
      <Block>
        <AuthIcon size={140} />
        <h1>Unauthorized!</h1>
        <p>
          This page is restricted to users already registered on the portal, login to gain access or
          create a new account...
        </p>

        <Button handleAction={() => router.push('/signin')} text="Sign In" />
      </Block>
    </Container>
  )
}

export default Unauthorized
