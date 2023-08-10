import { AdminLayout, MainLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { roboto, theme } from '../utils'
export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter()
  const [postList, setPostList] = useState([])

  console.log('About query: ', router.query)

  const page = router.query?._page

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const url = `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      const response = await fetch(url)
      const data = await response.json()

      setPostList(data.data)
    })()
  }, [page])

  function handleChangeClick() {
    router.push(
      {
        pathname: '/about',
        query: { _page: (Number(router.query?._page) || 1) + 1 },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About Page
      </Typography>
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleChangeClick}>next page</button>
    </Box>
  )
}
AboutPage.Layout = AdminLayout
export async function getStaticProps() {
  console.log('get static props about')
  return {
    props: {}, // will be passed to the page component as props
  }
}
