import {formatISO9075, format} from "date-fns"
import './post.css'


export default function Post({date, title, content, author, createdAt}) {
  

  const formattedDate = format(date, 'eeee, MMMM do yyyy');

  return (
    <div className="post">
      <div className="texts">
      <div className="title">
        <h2>{title}</h2> 
        <p className="author">- {author.username}</p>
        
      </div>
      
      <p className="info">
        
        <p className="tiktok_date"> Tiktok featured was posted on {formattedDate}</p>
        
      </p>
      <p className="summary">{content}</p>
      </div>
      <time className="post_date">Posted {formatISO9075(new Date(createdAt))}</time>
    </div>
  )
}