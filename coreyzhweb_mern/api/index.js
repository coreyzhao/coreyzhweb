const express = require('express')
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");

const User = require('./models/User')

const bcrypt = require('bcryptjs')
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds);
const secret = 'gagnfagona14bo11'

const jwt = require('jsonwebtoken');

//load the cookies
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());

//cookie parser
const cookieParser  = require('cookie-parser')
app.use(cookieParser());

//multer (when creating a new post)
const multer = require('multer')
const upload = multer();
// const uploadMiddleware = multer({dest: 'uploads/'})

//RENAMING FILE
const fs = require('fs');

//post schema to mongoDB
const Post = require('./models/Post')

//loading all the images
// app.use('/uploads', express.static(__dirname + '/uploads'))

//connecting to mongoDB
mongoose.connect('mongodb+srv://coreyzhwebmern:<password>@cluster0.tpyisgv.mongodb.net/?retryWrites=true&w=majority');


app.post('/signup', async (req,res) => {
  const {username, password} = req.body;

  try {
    //creating a user
    const userDoc = await User.create({
      username, 
      password:bcrypt.hashSync(password,salt),
    });
    res.json(userDoc);

  } catch(e) {
    console.log(e);
    res.status(400).json(e)
  }
  
  
});

app.post('/login', async (req,res) => {
  const {username, password} = req.body;
  const userDoc = await User.findOne({username:username});

  //checks if password is correct
  const passOk = bcrypt.compareSync(password, userDoc.password)

  //logged in and put the right user
  if (passOk) {
    jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id: userDoc._id,
        username,
      })

    })

  } else {
    res.status(400).json('wrong credentials');
  }
});

//createing an endpoint (check if logged in)
app.get('/profile', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  })
  res.json(req.cookies)
})

app.get('/profile', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      // Handle the error
      res.status(401).json({message: "Invalid token"});
    } else {
      // Send the decoded information along with the cookies
      res.json({info, cookies: req.cookies});
    }
  });
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok')
})

// 
// uploadMiddleware.single('file')
//endpoint for creating new post
//renaming the file
  // const {originalname, path} = req.file
  // const parts = originalname.split('.');
  // const ext = parts[parts.length - 1]
  // const newPath = path+'.'+ext
  // fs.renameSync(path, newPath)
app.post('/post', upload.none(), async (req,res) => {

  

  //moving to MONGODB
  //postDoc from database
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const {title, content, date} = req.body;
    const postDoc = await Post.create({
    title, 
    content,
    date,
    author:info.id,
    })

    res.json(postDoc)
  
  })
})

app.get('/post', async (req,res) => {
  res.json(
    await Post.find()
      .populate('author', ['username'])
      //sorts most recent on the top
      .sort({createdAt: -1})
      .limit(20)
    
    );
})

app.listen(4000);

//
