const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
require('./config')
const schema = require('./graphql/schema')
const server = new ApolloServer({
   schema
})

const app = express()
server.applyMiddleware({app})

app.listen(1111,()=> console.log('the server is running in 1111'))
