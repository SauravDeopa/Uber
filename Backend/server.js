const http = require('http');
const app = require('./app');
const port = process.env.PORT;


const server= http.createServer(app); // created  serve and passed the app 


server.listen(port ,() =>{
  console.log(`server is running at port port ${port}`);
});