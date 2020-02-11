## GraphQL-server with React frontend and Apollo

## About
We used SpaceX API to retrieve data and GraphQL server to manage it. Frontend is built on React.js. You'll learn how to setup the server make get request to third party API and finally deployement in Heroku. <br>
Client folder is the view part of the project. Run scripts when you are onestep outside of client dir except when you need to install node
modules for client.
We can view all the Launches of SpaceX missions and details of individual mission too.
This project was built following the tutorials of Brad traversy aka Traversy media on 
[YouTube](https://www.youtube.com/playlist?list=PLillGF-RfqbZrjw48EXLdM4dsOhURCLZx) <br>
In the tutorial some components are class based and some functionals, but i have tried it using **functional components only using apollo hooks for react. Loading spinners and error messages are extra things that i added apart from tutorials.**

Demo: https://glacial-brook-29255.herokuapp.com

## Available script
We used a package called concurrent to run both the server and client side at different port at the same time. <br>
Server is running on http:localhost:5000 <br>
Client is running on http:localhost:3000 <br>

### `npm i`
Installs node modules required for the project (Do it both on server and client)

### `npm run dev`
Runs the both frontend and backend concurrently

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
