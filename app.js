const express = require('express');
const mongoose = require('mongoose');
const app = express();

// To access env variables
require('dotenv/config');

//== Import routes
const postsRoute = require('./routes/posts');

//== Middlewares
// Replaces app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Everytime we go to '/posts', we use postRoutes
// We can now use multiple routes with '/posts' base url
// for example: '/posts/specific' -> all you need is to create a route '/specific' in './routes/posts'
app.use('/posts', postsRoute);

//== Routes
app.get('/', (req, res) => {
  res.send('Hello World !');
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    dbName: 'restAPI',
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err);
  });

// We start listening port 3000
app.listen(3000);