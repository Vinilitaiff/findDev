const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://user:vcv123@cluster0-zhlc4.mongodb.net/test?retryWrites=true&w=majority',{useUnifiedTopology:true,useNewUrlParser:true});

app.use(express.json());
app.use(routes);

app.listen(3333);