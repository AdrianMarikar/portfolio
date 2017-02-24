const path = require('path');
const http = require('http');
const express = require('express');

const publicPath = path.join(__dirname, '../docs');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);

app.use(express.static(publicPath));


//listen for requests
server.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app};
