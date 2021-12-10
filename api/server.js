const express = require('express');

const server = express();

const FootballersRouter = require('./footballers/footballersRouter')

server.use(express.json());

server.use('/api/footballers', FootballersRouter)

module.exports = server