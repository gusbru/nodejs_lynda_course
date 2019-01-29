import express from 'express';

// create an instance of express
const app = express();

// using a static file
app.use(express.static(__dirname));

// start the server and listen for incoming requests
const PORT = 3001;
const server = app.listen(PORT, () => {
    console.log('server is listening on port ', server.address().port);
});
