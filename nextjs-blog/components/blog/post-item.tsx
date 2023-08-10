import { Post } from '@/models'
import { Box, Stack, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { format } from 'date-fns'
export interface PostItemProps {
  post: Post
}

export default function PostItem({ post }: PostItemProps) {
  // const locale = new Locale("vi","VN");
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }} my="3">
        {post.title}
      </Typography>
      <Stack direction="row" my={1.5}>
        <Typography variant="body1" sx={{ display: 'flex' }}>
          {format(new Date().getTime(), 'dd MMM yyy')}
        </Typography>
        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
        <Typography variant="body1">{post.tagList.join(', ')}</Typography>
      </Stack>
      <Typography variant="body2">{post.description}</Typography>
    </Box>
  )
}
