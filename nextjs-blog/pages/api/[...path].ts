// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies'
// type Data = {
//   name: string
// }
export const config = {
  api: {
    bodyParser: false,
  },
}
const proxy = httpProxy.createProxyServer()
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise((resolve) => {
    // convert cookies  to header authorization
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access_token')
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }
    // dont send cookies to  API server
    // req.headers.cookie = ''
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    })
  })

  // res.status(200).json({ name: 'PATH - MATCH all here' })
}
