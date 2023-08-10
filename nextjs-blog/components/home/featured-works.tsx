import * as React from 'react'
import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { PostCard } from './post-card'
import { Work } from '@/models'
import { WorkList } from '../work'

export function FeaturedWork() {
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      tagList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      createdAt: '1683900904637',
      updatedAt: '1683900904637',
      thumbnailUrl:
        'https://res.cloudinary.com/phucdev/image/upload/v1683901391/Rectangle_30_bjarmx.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      tagList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      createdAt: '1683900904637',
      updatedAt: '1683900904637',
      thumbnailUrl:
        'https://res.cloudinary.com/phucdev/image/upload/v1683901388/Rectangle_32_nul1lo.jpg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      tagList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      createdAt: '1683900904637',
      updatedAt: '1683900904637',
      thumbnailUrl:
        'https://res.cloudinary.com/phucdev/image/upload/v1683901388/Rectangle_34_isiiiw.jpg',
    },
  ]
  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={4} mt={2}>
          Featured works
        </Typography>
        <WorkList workList={workList} />
      </Container>
    </Box>
  )
}
