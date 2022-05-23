// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Tweet } from '../../typings'
import { groq } from 'next-sanity'

/**
 * If the queuery is blocked, then it will be filtered out 
 * of the data base
 */
const feedQuery = groq`
    *[_type == "tweet" && !blockTweet] {
        id,
        ...
    } | order(_createdAt desc)
`

type Data = {
  tweets: Tweet[]
}

/**
 * Fetches the tweets
 * @param req 
 * @param res 
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const tweets: Tweet[] = await sanityClient.fetch(feedQuery)
    res.status(200).json({ tweets })
}
