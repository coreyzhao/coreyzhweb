import React, { useContext, useEffect, useState } from "react";
import {Navigate} from "react-router-dom";
import "./createpage.css"
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
import { format } from 'date-fns';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

export default function CreatePage() {
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [day, setDay] = useState('');
  
  const [redirect, setRedirect] = useState(false)

  //creating a post form
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('date', date)
    data.set('title', title)
    const strippedContent = content.replace(/<p>|<\/p>/g, '');
    data.set('content', strippedContent);
    
   
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    
    //redirect to home page after creating a page
    if (response.ok) {
      setRedirect(true);
    }
  }
    if (redirect) {
      return <Navigate to={'/'} />
    }
    return (
        
        <form className="forum-popup" onSubmit={createNewPost}>
            
            <div className="login-description">
                <p className="signin-text">Create a new post !</p>
                <p className="signin-description-text">Ask questions and inquire about clothing pieces</p>
            </div>
            <div className="login-inputs">
                <p className="input-name" >Video Post Information</p>
                <DatePicker className="input-bar input-password" 
                  placeholder="Enter Date Here" 
                  dateFormat="yyyy/MM/dd"
                  selected={date} 
                  type="date"
                  value={date} 
                  onChange={(date) => setDate(date)} 
                  />
            </div>
            <div className="login-inputs">
                <p className="input-name" >Title</p>
                <input className="input-bar input-password" 
                  type="title"
                  placeholder="Enter Title Here" 
                  value={title} 
                  onChange={ev => setTitle(ev.target.value)}/>
                
            </div>
            <div className="login-inputs">
                <p className="input-name" >Description</p>
                <ReactQuill className="input-bar-quill " 
                  value={content} 
                  onChange={newValue => setContent(newValue)} 
                  modules={modules} 
                  formats={formats}></ReactQuill>
               
                
            </div>
            <div className="login-options">
                <div className="login-button-container">
                    <button className="createpost-button">Create Post</button>
                </div>
            </div>
            
        </form>
    
    );
  }