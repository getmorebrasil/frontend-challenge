import { CategoriesProps } from '../../../libs/types/atoms'
import { Container } from './styles'

const Categories: React.FC<CategoriesProps> = ({ fontSize, children }) => (
  <Container fontSize={fontSize}>{children}</Container>
)

export default Categories
