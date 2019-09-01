const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
require('./config')
const typeDefs = require('./graphql/typeDefs')
const resolvers  = require('./graphql/resolvers')
const server = new ApolloServer({
   typeDefs,
   resolvers,
})

const app = express()
server.applyMiddleware({app})

app.listen(1111,()=> console.log('the server is running in 1111'))
