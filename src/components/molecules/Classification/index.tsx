import { memo } from 'react'
import { Container } from './styles'
import { Stars } from '../../molecules'
import { ClassificationProps } from '../../../libs/types/molecules'

const Classification: React.FC<ClassificationProps> = ({ classification, starsSize }) => (
  <Container>
    <p>Classification</p>
    <Stars classification={classification} size={starsSize} />
  </Container>
)

export default memo(Classification, (prevProps, nextProps) => {
  return Object.is(prevProps.classification, nextProps.classification)
})
