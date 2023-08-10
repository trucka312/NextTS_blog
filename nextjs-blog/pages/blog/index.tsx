import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import Link from 'next/link'
import { getPostList } from '@/utils/posts'
import { Post } from '@/models'
import { MainLayout } from '@/components/layout'
import PostItem from '@/components/blog/post-item'
import { Box, Container, Typography } from '@mui/material'

export interface BlogListPageProps {
  posts: Post[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <Box>
      <Container>
        <Typography component="h1" variant="h4" fontWeight="bold" pb={5}>
          Blog
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} legacyBehavior>
                <a>
                  <PostItem post={post} />
                </a>
              </Link>
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // convert markdown files into list of javascript object
  const postList = await getPostList()

  return {
    props: {
      posts: postList,
    },
  }
}
