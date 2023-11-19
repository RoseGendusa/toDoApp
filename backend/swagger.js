const HOST = '127.0.0.1';
const PORT = 5000;


//npm i swagger-autogen
const swaggerAutogen = require('swagger-autogen')();
const {title, description, author} = require("./package.json")
const doc = {
  info: {
    title,
    description,
    contact: {
        name: author.name,
        email: author.email,
      },
  },
  host:`${HOST}:${PORT}`,
  schemes:['http','https'],
  security:[{"JWT":true}],
  definition:{
    
  }
};

const outputFile = './swagger.json';
const routes = ['./server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);