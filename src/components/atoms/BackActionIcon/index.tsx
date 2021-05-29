import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { IMAGES } from '../../../constants'
import { Container } from './styles'

const BackActionIcon: React.FC = () => {
  const router = useRouter()

  const handleBack = useCallback(() => {
    router.back()
  }, [router])

  return <Container src={IMAGES.backIcon} alt="Voltar para página anterior" onClick={handleBack} />
}

export default BackActionIcon
