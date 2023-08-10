import { Seo } from '@/components/common/seo'
import { FeaturedWork, HeroSection, RecentPost } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'
const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'Minh Phuc Blog:Trang chủ',
          description:
            'Minh Phuc viết blog từ năm 2022 và đã có một gia tài các bài viết hay về kỹ thuật, review sách và chuyện làm nghề. Phong cách viết của anh ngắn gọn và thực tế nên ...',
          url: 'https://minhphucblog.vercel.app/',
          thumbnailUrl:
            'https://velog.velcdn.com/images/real-bird/post/18fd2f9c-8a9e-459b-adc5-9142ee1a9a9b/image.png',
        }}
      />
      <HeroSection />
      <RecentPost />
      <FeaturedWork />
    </Box>
  )
}
Home.Layout = MainLayout
export default Home
