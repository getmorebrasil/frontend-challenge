import { useField } from '@unform/core'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { IInputProps } from '../../../libs/interfaces/atoms'
import { Container } from './styles'

const Input: React.FC<IInputProps> = ({ name, label, required, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <Container withError={!!error} isFocused={isFocused} isFilled={isFilled}>
      <label htmlFor={name}>
        {label}
        {required && ' *'}
      </label>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        id={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />

      {!!error && <em>{error}</em>}
    </Container>
  )
}

export default Input
