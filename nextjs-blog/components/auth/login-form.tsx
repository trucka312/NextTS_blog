import { Box, Button, CircularProgress, IconButton, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { LoginPayload } from '@/models'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
export interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup.object().shape({
    username: yup.string().required('Vui lòng nhập Username').min(4, 'Username phải từ 4 kí tự'),
    password: yup.string().required('Vui lòng nhập Password').min(6, 'Password phải từ 6 kí tự'),
  })
  const [showPassword, setShowPassword] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  async function handleLoginSubmit(payload: LoginPayload) {
    await onSubmit?.(payload)
  }
  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField label="Username" type="text" name="username" control={control} />
      <InputField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        name="password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((x) => !x)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        disabled={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress color="inherit" size="1em" /> : null}
        type="submit"
        color="secondary"
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Box>
  )
}
