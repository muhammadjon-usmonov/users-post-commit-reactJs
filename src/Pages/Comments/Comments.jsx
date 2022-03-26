import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const Comments = () =>{
    const {postsId} = useParams();

    const [comments, setcomments] = React.useState([]);

    const navigate = useNavigate();

    React.useEffect(()=>{
        (async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId="+ postsId);

            const data = await response.json();

            if(data){
                setcomments(data);
            }
        })();
    }, [postsId])

    return(

        <main>
            <button onClick={()=>navigate(-1)}>back</button>

        <ul>
         {comments && comments.map((comment)=>(
            <li key={comment.id}>
                <h3>{comment.title}</h3>
                <p>{comment.body}</p>
            </li>
        ))}
        </ul>
        </main>
    )
} 

export default Comments;