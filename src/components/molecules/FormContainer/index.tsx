import { Logo } from '../../atoms'
import { Container, FormChildren } from './styles'
import { IFormContainerProps } from '../../../libs/interfaces/molecules'

const FormContainer: React.FC<IFormContainerProps> = ({ formRef, handleSubmit, children }) => {
  return (
    <Container>
      <Logo />
      <FormChildren ref={formRef} onSubmit={handleSubmit}>
        {children}
      </FormChildren>
    </Container>
  )
}

export default FormContainer
