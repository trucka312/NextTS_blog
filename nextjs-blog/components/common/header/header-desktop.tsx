import { useAuth } from '@/hooks'
import { Container, Link as MuiLink, Stack } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ROUTER_LIST } from './routes'
export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter()
  const { profile, logout } = useAuth()
  const isLoggedIn = Boolean(profile?.username)
  const routeList = ROUTER_LIST.filter((route) => !route.requireLogin || isLoggedIn)
  // const [routeList, setRouteList] = useState(() =>
  //   ROUTER_LIST.filter((route) => !route.requireLogin)
  // )
  // useEffect(() => {
  //   // after the first render
  //   // calc routeList and setRouteList
  //   setRouteList(ROUTER_LIST.filter((route) => !route.requireLogin || isLoggedIn))
  // }, [isLoggedIn])
  return (
    <Box display={{ xs: 'none', lg: 'block' }} mt={2}>
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="flex-end">
          {routeList.map((route) => (
            <Link key={route.path} href={route.path} passHref legacyBehavior>
              <MuiLink
                className={clsx({ active: router.pathname === route.path })}
                variant="body1"
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 'medium',
                }}
                mx={1}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
          {!isLoggedIn && (
            <Link href="/login" passHref legacyBehavior>
              <MuiLink
                variant="body1"
                sx={{
                  color: '#000000',
                  textDecoration: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 'medium',
                }}
                mx={1}
              >
                Login
              </MuiLink>
            </Link>
          )}
          {isLoggedIn && (
            <MuiLink
              variant="body1"
              sx={{
                color: '#000000',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: 'medium',
              }}
              mx={1}
              onClick={logout}
            >
              Logout
            </MuiLink>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
