import { RefObject } from 'react'
import { FormHandles } from '@unform/core'

export interface IFormContainerProps {
  formRef: RefObject<FormHandles>
  handleSubmit(data: any): Promise<void>
}
