import { Work } from '@/models'
import * as React from 'react'
import { Box, Stack, Typography, Chip } from '@mui/material'
import Image from 'next/image'
import { format } from 'date-fns'
export interface WorkCardProps {
  work: Work
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} my={2}>
      <Box width={{ xs: '100%', md: '246px' }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          alt="thumbnail card featured"
          // layout="responsive"
          width={246}
          height={180}
        />
      </Box>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          {work.title}
        </Typography>
        <Stack direction="row" justifyContent="flex-start" spacing={4} alignItems="center" my={2}>
          <Chip
            color="secondary"
            label={new Date(Number(work.createdAt)).getFullYear()}
            size="small"
          />
          <Typography color="GrayText" ml={3}>
            {work.tagList.join(', ')}
          </Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
