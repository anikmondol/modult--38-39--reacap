import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

const Posts = () => {
    const [posts, setPost] = useState([])
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map((post,idx) => <Post key={idx} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;