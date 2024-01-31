import { useEffect, useState } from "react";
import Post from "../Post";
import './createpage.css'

export default function ForumPage() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts)
      })
    })
  }, [] );
  return (
    
      <>
        <div className="post_container">
          <p className="description">You are now viewing the forums</p>
          {posts.length > 0 && posts.map(post => (
            //grabs all the info from Post.js
            <Post {...post} />
          ))}
          {  (
            <>
              <div className="no-posts">There are no more posts, You should post something</div>
            </>
          )
          }
        </div>
      </>
  );
}