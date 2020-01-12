/*NODES SCRIPTS*/
const express = require "express"
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
/*FIN NODES SCRIPTS*/
/*--------------------------------------------*/
/*LOCALS SCRIPTS*/
// const myRoute = require('./node/routes/myRoute');
/*FIN LOCALS SCRIPTS*/

/*--------------------------------------------*/

/*CONNECTIONS*/
// mongoose.connect("").then(()=>{console.log("successfully connected to mongoDB");}).catch((error)=>{console.log("Unabled to connect to mongoDB");console.log(error);})
/*FIN CONNECTIONS*/

/*--------------------------------------------*/

/*MIDDLEWARES*/
// app.use('/public', express.static(path.join(__dirname, "public")));
// app.use(bodyParser.json());
/*
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
  // console.log(req.originalUrl);
  // console.log(req.method);
  // console.log(req.body);
  // console.log(req.body);
  // console.log(req.headers);
});
*/
/*FIN MIDDLEWARES*/

/*--------------------------------------------*/

/*ROUTES*/
// app.use('/chemin', myRoute);
/*FIN ROUTES*/

/*--------------------------------------------*/
