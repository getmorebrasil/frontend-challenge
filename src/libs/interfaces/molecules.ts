import { RefObject } from 'react'
import { FormHandles } from '@unform/core'

export interface IWithSSGAuthProps {
  pageTitle: string
  isLoading: boolean
  isFallback: boolean
  metaContent: string
  isAuthenticated: boolean
}

export interface IFormContainerProps {
  formRef: RefObject<FormHandles>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit(data: any): Promise<void>
}
