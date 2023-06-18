import {useState} from 'react'

function VideoComments({comments}){
const [toggleComments, setToggleComments] = useState(true)

const changeComments = () => setToggleComments( !toggleComments)

const commentDiv = 
<div>
    <h2>{comments.length} Comments</h2>
    <ul>
    {comments.map((comment) => (
        <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            
        </div>
    ))}
    </ul>
</div>

    return(
        <div>
            <button onClick={changeComments}>{toggleComments ? "Hide Comments" : "Show Comments"}</button>
            {toggleComments ? commentDiv : null}
        </div>
    )
}


export default VideoComments