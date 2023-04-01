// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {createUser} from '../../database/users'


export default async function handler(req:NextApiRequest,res:NextApiResponse) {
  console.log(`url: ${req.url}`)
  console.log(`query:`,req.query)
  console.log(`method: ${req.method}`)
  console.log(`body:`,req.body)

  try{

      // authenticate user : 401
      // authorize : 403
      // validate input : 404

      // save to db
      await createUser(req.body.id, req.body)
      res.status(201).send({success:true}) // 200
  }catch(error){
    console.error(error)
    res.status(500).end('something went wrong in the universe!')
  }
}
