'use strict'
let express = require ('express')
let app = express();
let port = 3000;
function handleServerListen() {
    console.log(`Server is listening on port ${port}`);
  }
  app.listen(port, handleServerListen);
  
  