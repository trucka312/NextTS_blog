import * as React from 'react'
import { Box, Card, CardContent, Typography, Stack } from '@mui/material'
import { Post } from '@/models/post'
import Divider from '@mui/material/Divider'
import { format } from 'date-fns'
import PostItem from '../blog/post-item'
export interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  )
}
