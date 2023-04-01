// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req:NextApiRequest,res:NextApiResponse) {
  console.log(`url: ${req.url}`)
  console.log(`query:`,req.query)
  console.log(`method: ${req.method}`)
  console.log(`body:`,req.body)

  res.send('we received your message')
}
