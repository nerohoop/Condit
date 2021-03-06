https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507#5511507
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction

## Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.

## Router

A Node.js application consists of the following three important components
* Import required modules − We use the require directive to load Node.js modules.
* Create server − A server which will listen to client's requests.
* Read request and return response.

### Route parameters
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

## NPM
Node Package Manager (NPM) provides two main functionalities −
* Online repositories for node.js
* Command line utility to install Node.js packages

## Callback
* Callback is an asynchronous equivalent for a function.
* A callback function is called at the completion of a given task.
* Any async function accepts a callback as the last parameter and a callback function accepts an error as the first parameter.

## Event Loop
Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks.

## Nodemon
Will automatically monitor the folder and reboot our server.

# ExpressJS

## Core Features
* Allows to set up middlewares to respond to HTTP Requests.
* Defines a routing table which is used to perform different actions based on HTTP Method and URL.
* Allows to dynamically render HTML Pages based on passing arguments to templates.
