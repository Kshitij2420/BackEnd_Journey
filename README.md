# 📘 Node.js Learning Journey

This repository documents my step-by-step learning of **Node.js**, starting from the basics to building practical applications. The goal of this repo is to strengthen backend development skills and understand how server-side JavaScript works.

---

## 🚀 What is Node.js?

Node.js is a **JavaScript runtime environment** that allows us to run JavaScript outside the browser. It is built on Chrome's V8 engine and is widely used for building scalable network applications.

---

## 📚 Topics Covered

### 🔰 Basics

* Introduction to Node.js
* Installing Node.js & Setup
* Running JavaScript using Node
* Understanding REPL

### 📦 Core Modules

* `http` module (creating servers)
* `fs` module (file handling)
* `path` module
* `os` module

### 🌐 Creating Server

* Creating a basic server using `http`
* Handling requests & responses
* Routing (basic URL handling)

### 📝 Working with Files

* Reading files
* Writing files
* Appending data
* Deleting files

### 📡 Handling Requests

* Understanding request object
* Sending responses
* Working with headers
* Handling form data

### 🔄 Event Loop & Async Programming

* Callbacks
* Promises
* Async/Await
* Event-driven architecture

### 📦 NPM (Node Package Manager)

* Installing packages
* Using external modules
* Creating `package.json`

### ⚙️ Express.js (Intro)

* Installing Express
* Creating routes
* Middleware basics

---

## 🛠️ Projects Included

* ✅ Basic HTTP Server
* ✅ Form Handling Application
* ✅ File System Operations
* ✅ Simple Routing System

---

## 💻 Example Code

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello from Node.js Server</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

## 🎯 Learning Goals

* Understand how backend works
* Build server-side applications
* Handle client requests efficiently
* Work with APIs and databases (next step)

---

## 📈 Future Improvements

* 🔜 Connect with MongoDB / MySQL
* 🔜 Build REST APIs
* 🔜 Authentication (JWT)
* 🔜 Full-stack integration

---

## 🙌 Conclusion

This repository reflects my journey of learning Node.js from scratch. Each concept is practiced with code examples to build a strong foundation in backend development.

---

⭐ If you like this repo, feel free to give it a star!
