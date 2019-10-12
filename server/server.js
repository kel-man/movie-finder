require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movieInfo/:title', (req, res) => {
  let title = req.params.title;
    return axios({
      url: `http://omdbapi.com/?s=${title}&apikey=${process.env.OMDB_API_KEY}`,
      method: 'get'
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch(err => console.log(err))
  });

app.get('/movie/:id', (req, res) => {
  let id = req.params.id;
    return axios({
        url: `http://omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`,
        method: 'get'
    })
    .then((response) => {
        res.send(response.data);
    })
    .catch(err => console.log(err))
});

module.exports = app;
