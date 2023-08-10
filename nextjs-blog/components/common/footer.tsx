import React from 'react'
import { Facebook, Instagram,LinkedIn, Twitter} from '@mui/icons-material'
import { Box, Stack, Typography, Icon } from '@mui/material'

export function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com' },
    { icon: Instagram, url: 'https://instagram.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: LinkedIn, url: 'https://linkedin.com' }
  ]
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" spacing={1.5} justifyContent="center" mb={2} >
        {socialLinks.map((item, idx) => (
          <Box key={idx} component="a"href={item.url} px={1} target="_blank" rel="noopener noreferrer">
            <Icon component={item.icon}  sx={{fontSize:'32px' }} />
          </Box>
        ))}
      </Stack>
      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
    </Box>
  )
}
