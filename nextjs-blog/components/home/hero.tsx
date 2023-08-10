import * as React from 'react'
import { Box, Container, Stack, Typography, Button } from '@mui/material'
import Image from 'next/image'
const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}
export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={4}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          justifyContent="space-around"
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{ xs: 3, md: 5 }}
              mt={{ xs: 2 }}
            >
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>

            <Typography variant="body1" mb={{ xs: 3, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet
            </Typography>
            <Button
              variant="contained"
              sx={{ minWidth: '210px', minHeight: '50px', fontSize: '18px' }}
            >
              Download Resume
            </Button>
          </Box>
          <Box sx={{ minWidth: '240px', boxShadow: '-5px 13px #EDF7FA', borderRadius: '50%' }}>
            <Image
              src="https://res.cloudinary.com/phucdev/image/upload/v1683821042/341712628_664985225395100_512739856662977406_n_wbxhho.jpg"
              width={243}
              height={243}
              alt="avatar"
              style={imageStyle}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
