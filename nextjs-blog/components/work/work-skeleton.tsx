import { Box, Skeleton, Stack, Typography } from '@mui/material'

export function WorkSkeleton() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} my={2}>
      <Box width={{ xs: '100%', md: '246px' }} flexShrink={0}>
        <Skeleton variant="rectangular" width={246} height={168} />
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h4" fontWeight="bold">
          <Skeleton />
        </Typography>
        <Stack direction="row" justifyContent="flex-start" spacing={4} alignItems="center" my={2}>
          <Skeleton variant="rectangular" width={50} height={24} />
          <Typography color="GrayText" ml={3} flexGrow={1}>
            <Skeleton width="30%" />
          </Typography>
        </Stack>
        <Typography>
          <Skeleton />
          <Skeleton />
          <Skeleton width="40%" />
        </Typography>
      </Box>
    </Stack>
  )
}
