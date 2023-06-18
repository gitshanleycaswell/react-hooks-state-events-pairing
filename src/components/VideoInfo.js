import { useState } from "react"

function VideoInfo({video}){
const [upvote, setUpvote] = useState(9210)
const [downvote, setDownvote] = useState(185)
const handleUpvote = () => setUpvote(upvote => upvote + 1)
const handleDownvote = () =>setDownvote(downvote => downvote + 1)
    return(
        <div>
         <h1>{video.title}</h1>
         <p>{video.views} | {video.createdAt}</p>
         <button onClick={handleUpvote}>{upvote}👍</button>
         <button onClick={handleDownvote}>{downvote}👎</button>
         
        </div>
    )
}

export default VideoInfo