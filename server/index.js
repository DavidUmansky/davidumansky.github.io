// 1
// console.log('Hello World');

// 2

// setInterval(()=> {
//     console.log('Hello World');
//   },2000
// )

// 3
/*
function check() {
    console.log('Hello World');
}

setInterval(()=> {
    check()
  },2000
)
*/

// 4

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

// 5
/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
*/

// 6

// const http = require("http");
// // Create HTTP server and listen on port 8000 for requests

// http.createServer((request, response) => {
//  // Set the response HTTP header with HTTP status and Content type
//  response.writeHead(200, {'Content-Type': 'text/plain'});
//  // Send the response body "Hello World"
//  response.end('Hello World\n');
// }).listen(8000);
// // Print URL for accessing server
// console.log('Server running at http://127.0.0.1:8000/');

// 7
/*
const http = require("http");
const fs= require("fs");

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/json'});
  fs.readFile('todos.json', (err, content) => {
    // console.log(content);
    response.write(content)
    response.end()
  })
}).listen(8000);
*/

// 8
/*
var http = require('http');
var uc = require('upper-case');

//create a server object:
http.createServer(function (req, res) {
  res.write(uc.upperCase('Hello World!')); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
*/

// 9
/*
const http = require('http');
const express = require('express');
const app = express();

app.get('/', function(req,res) {
    res.send('Hello World');
});

app.listen(8080)
*/

// Extra
// 1

// const moreWork = () => {
//     console.log('Hello');
// } 

// const fs = require('fs');
// const data = fs.readFileSync('./file.txt', 'utf8'); // blocks here until file is read
// console.log(data);

// moreWork(); // will run after console.log

// const fs = require('fs');

// fs.readFile('./file.txt', 'utf8' , (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// moreWork(); // will run before console.log

// 2
/*
const fs = require("fs");
// Read users.json file
fs.readFile("todos.json", function(err, data) {
 
 // Check for errors
 if (err) throw err;
 // Converting to JSON
 const users = JSON.parse(data);
 console.log(users); // Print users 
});
*/

// 3
/*
const fs = require("fs");
// STEP 1: Reading JSON file
const todos = require("./todos.json");
// Defining new user

let task = {
id: "3",
title: "Go play",
complited: true
};

// STEP 2: Adding new data to users object
todos.push(task);
// STEP 3: Writing to a file
fs.writeFile("todos.json", JSON.stringify(todos), err => {
// Checking for errors
if (err) throw err;
console.log("Done writing"); // Success
});
// */

//  console.log(process.argv);

//  let myArgs = process.argv.slice(2);
//  console.log('myArgs: ', myArgs);

//Leason 32
// 1
/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World123!');
  res.end();
}).listen(8080);
*/

// const http = require('http');
// const express = require('express');
// const app = express();

// app.get('/', function(req,res) {
//     res.send('Hello World');
// });

// app.listen(8080)

// 2
/*
const express = require('express')
const app = express();
app.get('/', (req, res) => {
 res.send('Hello World!')
});

// app.get('/check', (req, res) => {
//     res.send('Hello Check!')
//    });
   
app.listen(8000, () => {
 console.log('Example app listening on port 8000!')
})
// */

// 3

const express = require('express');
const app = express();

const initialTodos = [
    {
        id: 1,
        title: 'Throw garbage',
        completed: false
    },
    {
        id: 2,
        title: 'Wash the dishes',
        completed: false
    }
];

const store = {
    async read() {
        try {
            await fs.access(fileName);
            this.todos = JSON.parse((await fs.readFile(fileName)).toString());
        } catch (e) {
            this.todos =  initialTodos;
        }
        
        return this.todos;
    },
    async save() {
        await fs.writeFile(fileName, JSON.stringify(this.todos));
    },
    async getIndexById(id) {
        try {
            const todos = await this.read();
            return todos.findIndex(todo => todo.id === +id);
        } catch (e) {
            console.log(e);
        }
    },
    async getNextTodoId() {
        let maxId = 1;
        const todos = await this.read();
        todos.forEach(todo => {
            if (todo.id > maxId) maxId = todo.id;
        });
        return maxId + 1;
    },
    todos: []
};

app.get('/todos', (req, res) => {
    res.json(store.read());
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
})











