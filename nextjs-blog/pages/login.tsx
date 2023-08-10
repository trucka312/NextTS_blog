import LoginForm from '@/components/auth/login-form'
import { MainLayout } from '@/components/layout'
import { useAuth } from '@/hooks'
import { LoginPayload } from '@/models'
import { getErrorMessage } from '@/utils'
import { Box, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth({
    revalidateOnMount: false,
  })

  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload)
      router.push('/')
    } catch (error) {
      const message = getErrorMessage(error)
      console.log('fail to login', message)
      toast.error(message)
    }
  }
  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          mx: 'auto',
          my: 8,
          p: 4,
          maxWidth: '480px',
          textAlign: 'center',
        }}
      >
        <Typography component="h1" variant="h5" fontWeight="bold" mb={2}>
          Login Page
        </Typography>
        <LoginForm onSubmit={handleLoginSubmit} />
      </Paper>
    </Box>
  )
}
LoginPage.Layout = MainLayout
