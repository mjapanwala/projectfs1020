
let express = require('express')
let app = express();
let port = 4001;

app.use(express.json());

app.listen(port, handleServerListen => {
  console.log(`Port is listening on ${port}`)
});

// Get all the data
app.get('/', (req, res) => {
  res.send('get all the data')
});

//Create submission
app.post('/user/submissions', (req, res) => {
  res.send('Create submission')
})
//Create new user
app.post('/userform', (req, res) => {
  console.log(req.body); // { a: 1 }
  res.send('new user')
})

//Route to log a registered user in to create a session.
app.post('/user/session', (req, res) => {
  res.send('new session')
})
// Route to get a listing of all submissions.
app.get('/submissions', (req, res) => {
    res.send('All submissions')
});

// Default error handling
app.use(function (error, req, res, next) {
  console.error(error); 
  res.sendStatus(500); 
});

