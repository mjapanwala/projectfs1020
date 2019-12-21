'Use strict'
let express = require('express')
let app = express();
let port = 4000;
let fs = require('fs');
let fetch = require("node-fetch");

let util = require('util');
app.use(express.json());

app.listen(port, handleServerListen => {
  console.log(`Port is listening on ${port}`)
});

/* Get all the data
app.get('/', (req, res) => {
  res.send('get all the data')
});

//Create submission
app.post('/submissions', async (req, res) => {
  
  res.send('Create submission')
})



//Create new user
app.post('/user', (req, res) => {
  console.log(req.body); // { a: 1 }
  res.send('new user')
})
*/

//Attempt at Async Function for new user above`//////Same thing
 url = "http://localhost:4000/user"
app.post('/user', async (req, res) => {
  const body = req.body;

try {
  const response = await fetch(url, {
      method: 'POST',
      body: body
      
    });
    const json = await response.json();
} catch (error) {
  console.log(error);
}
});

//Route to log a registered user in to create a session.
app.post('/session', (req, res) => {
  res.send('new session')
})
// Route to get a listing of all submissions.
app.get('/allsubmissions', (req, res) => {
    res.send('All submissions')
});

// Default error handling
app.use(function (error, req, res, next) {
  console.error(error); 
  res.sendStatus(500); 
});

