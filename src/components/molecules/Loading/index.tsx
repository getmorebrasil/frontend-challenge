import { ClipLoader } from 'react-spinners'
import { Container } from './styles'
import { useTheme } from '../../../hooks'

const Loading: React.FC<{ size?: number }> = ({ size }) => {
  const { theme } = useTheme()
  return (
    <Container>
      <ClipLoader size={size ?? 140} color={theme.colors.neutralColor} />
    </Container>
  )
}

export default Loading
