import { RefObject } from 'react'
import { FormHandles } from '@unform/core'

export interface IFormContainerProps {
  formRef: RefObject<FormHandles>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit(data: any): Promise<void>
}
