import { TextField, TextFieldProps } from '@mui/material'
import { Box } from '@mui/system'
import React, { ChangeEvent } from 'react'
import { useController, Control } from 'react-hook-form'

export type InputFieldProps = TextFieldProps & {
  name: string
  label?: string
  control: Control<any>
  type: string
}
export function InputField({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  value: externalValue,
  ref: externalRef,
  ...rest
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })
  return (
    <TextField
      size="small"
      fullWidth
      color="secondary"
      name={name}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChange(event)
        externalOnChange?.(event)
      }}
      onBlur={onBlur}
      inputRef={ref}
      margin="normal"
      {...rest}
      error={!!error}
      helperText={error?.message}
    />
  )
}
