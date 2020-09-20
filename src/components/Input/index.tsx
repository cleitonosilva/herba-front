import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Input as CInput } from './styles'

const Input = ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,

      ref: inputRef.current,

      path: 'value'
    })
  }, [fieldName, registerField])
  return <CInput ref={inputRef} defaultValue={defaultValue} {...rest} />
}

export default Input
