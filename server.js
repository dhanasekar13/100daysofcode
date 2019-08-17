var express = require('express')
var { ApolloServer, gql } = require('apollo-server-express')
var cors = require('cors')
const typeDefs = gql`
    type Query {
        hello:String
    }
`
const resolvers = {
    Query:{
        hello:()=> 'HEy Dhanasekar'
    }
}
var app = express()
app.use(cors())
var apollo = new ApolloServer({
    typeDefs,
    resolvers
})
apollo.applyMiddleware({ 
    app
})
app.listen(1212,()=>{
    console.log('${apollo.graphqlPath}----',apollo.graphqlPath)
})
