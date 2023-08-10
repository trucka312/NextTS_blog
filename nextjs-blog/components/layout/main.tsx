import { LayoutProps } from '@/models'
import Link from 'next/link'
import * as React from 'react'
import { Stack } from '@mui/material'
import { Box, Container } from '@mui/system'
import { Footer } from '../common'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../common/header'), { ssr: false })
export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
