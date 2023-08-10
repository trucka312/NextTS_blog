import { Work } from '@/models'
import React, { Fragment } from 'react'
import { Box, Typography, Divider } from '@mui/material'
import { WorkCard } from './work-card'
import Image from 'next/image'
import { WorkSkeleton } from './work-skeleton'
export interface WorkListProps {
  workList: Work[]
  loading?: boolean
}

export function WorkList({ workList, loading }: WorkListProps) {
  if (loading)
    return (
      <Box>
        {Array.from({ length: 3 }).map((_, index) => (
          <Fragment key={index}>
            <WorkSkeleton />
            <Divider />
          </Fragment>
        ))}
      </Box>
    )
  if (workList.length === 0)
    return (
      <Box textAlign="center" mt={5}>
        <Image
          src="https://res.cloudinary.com/kimwy/image/upload/v1680947456/learn-nextjs/no-data_liu3mu.svg"
          alt="no data"
          width={246}
          height={180}
        />
        <Typography variant="body1">No data</Typography>
      </Box>
    )
  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider />
        </Fragment>
      ))}
    </Box>
  )
}
