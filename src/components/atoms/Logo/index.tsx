import Link from 'next/link'
import { Container } from './styles'
import { useTheme } from '../../../hooks'
import { IMAGES } from '../../../constants'
import { LogoProps } from '../../../libs/types/atoms'

const Logo: React.FC<LogoProps> = ({ size }) => {
  const { theme } = useTheme()

  return (
    <Container size={size}>
      <Link href="/">
        <img src={theme.name === 'light' ? IMAGES.darkLogo : IMAGES.logo} alt="getmovies Logo" />
      </Link>
    </Container>
  )
}

export default Logo
