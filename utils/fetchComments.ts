import { Comment } from '../typings'
export const fetchComments = async (tweetId: string) => {
    // Pass in a URL query param. Safe for tweet id because it is somthing we dont care about
    const res = await fetch(`/api/getComments?tweetId=${tweetId}`)

    // Object is going to hold the comments
    const comments: Comment[] = await res.json()

    return comments
}