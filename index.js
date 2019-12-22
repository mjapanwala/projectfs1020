'Use strict'
let express = require('express')
let app = express();
let port = 4000;
let fs = require('fs');
<<<<<<< HEAD
let path = require('path');
let util = require('util')
console.log(path.resolve('db.json'))

=======
let util = require('util');
let path = require('path');
>>>>>>> 70eb7c55ceab7a1d003ae3463ed412f3d3d68383

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
<<<<<<< HEAD
  //The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  let json = JSON.stringify(dbItems, null, 2);
  await writeFile(dbPath, json);
}
=======
  // The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
  let json = JSON.stringify(dbItems, null, 2);
  await writeFile(dbPath, json);
}

>>>>>>> 70eb7c55ceab7a1d003ae3463ed412f3d3d68383
async function addItem(item) {
  const dbItems = await read();
  dbItems.push(item);
  await write(dbItems);
}


<<<<<<< HEAD
=======
/**a
 *
 */
// async function write(dbItems) {
//   // The parameters for `null` and `2` are so it's formatted with 2 spaces of indentation
//   let json = JSON.stringify(dbItems, null, 2);
//   await writeFile(dbPath, json);
// }

// /**
//  *
//  */
// async function addItem(item) {
//   const dbItems = await read();
//   dbItems.push(item);
//   await write(dbItems);
// }
>>>>>>> 70eb7c55ceab7a1d003ae3463ed412f3d3d68383


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
<<<<<<< HEAD
  res.send( await read());
=======
  res.send(read());
>>>>>>> 70eb7c55ceab7a1d003ae3463ed412f3d3d68383
});


//Create new user
//Attempt at Async Function for new user above`//////Same thing
<<<<<<< HEAD
 app.post('/user', (req, res) => {
  console.log(req.body); 
  res.send(addItem) })

//Route to log a registered user in to create a session.
 app.post('/session', (req, res) => {
   res.send('new session')
 })
=======
// app.post('/user', (req, res) => {
//   console.log(req.body); 
//   res.send('new user')
// })

// //Route to log a registered user in to create a session.
// app.post('/session', (req, res) => {
//   res.send('new session')
// })
>>>>>>> 70eb7c55ceab7a1d003ae3463ed412f3d3d68383

// Default error handling
app.use(function (error, req, res, next) {
  console.error(error); 
  res.sendStatus(500); 
});


