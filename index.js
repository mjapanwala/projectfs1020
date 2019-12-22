'Use strict'
let express = require('express')
let app = express();
let port = 4000;
let fs = require('fs');
let path = require('path');
let util = require('util');
console.log(path.resolve('db.json'))


app.use(express.json());

app.listen(port, handleServerListen => {
  console.log(`Port is listening on ${port}`)
});


/**
 * Database
 */

// We want to promisify two functions from `fs` that use callbacks
// fs.readFile
// fs.writeFile

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

let dbPath = path.resolve('db.json');

async function read() {
  let json = await readFile(dbPath);
  return JSON.parse(json);
}

async function write(dbItems) {
  //The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  let json = JSON.stringify(dbItems, null, 2);
  await writeFile(dbPath, json);
}
async function addItem(item) {
  const dbItems = await read();
  dbItems.push(item);
  await write(dbItems);
}




/**
 * Routes
 */

// Create submission
app.post('/submissions', async (req, res) => {
  res.send('Create submission');
});

// Route to get a listing of all submissions.
app.get('/allsubmissions', (req, res) => {
  // res.send('All submissions');
  res.send( await read());
});


//Create new user
//Attempt at Async Function for new user above`//////Same thing
 app.post('/user', (req, res) => {
  console.log(req.body); 
  res.send(addItem) })

//Route to log a registered user in to create a session.
 app.post('/session', (req, res) => {
   res.send('new session')
 })

// Default error handling
app.use(function (error, req, res, next) {
  console.error(error); 
  res.sendStatus(500); 
});


