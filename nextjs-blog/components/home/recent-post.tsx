import * as React from 'react'
import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { PostCard } from './post-card'
import { Post } from '@/models'

export function RecentPost() {
  const postList: Post[] = [
    {
      id: '1',
      slug: '',
      title: 'Making a design system from scratch',
      publishedDate: '2022-06-15T03:00:00Z',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: '2',
      slug: '',
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: '2022-06-16T03:00:00Z',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ]
  return (
    <Box component="section" sx={{ bgcolor: 'primary.light' }} pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={4}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
        >
          <Typography variant="h5">Recent posts</Typography>
          <Link href="/blog" passHref legacyBehavior>
            <MuiLink sx={{ color: 'secondary.light', display: { xs: 'none', md: 'inline' } }}>
              View all
            </MuiLink>
          </Link>
        </Stack>
        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            '&> div ': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
