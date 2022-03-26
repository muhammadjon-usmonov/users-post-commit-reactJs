import React from "react";
import './Posts.css';

import {Link, useNavigate, useParams} from "react-router-dom";

const Posts = () =>{
    const navigate = useNavigate();

    const {userId} = useParams();

    const [posts, setPosts] = React.useState([]);


    React.useEffect(() =>{
        (async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId);

            const data = await response.json();

            if(data){
                setPosts(data);
            }
        })();
    }, [userId]);


    return (
        <main>

            <button onClick={()=> navigate(-1)}>back</button>

            <ul>
              {posts && posts.map((post) =>(
                  <li key={post.id}>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                      <Link className="posts__link" to={"/comments/" + post.id}>Comments</Link>

                  </li>
              ))}
            </ul>
        </main>
    );
};

export default Posts;