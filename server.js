const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./resolver')
const app = express()

app.use('/graphql', graphqlHTTP({
    // we need to define schema
    schema,
    graphiql:true
}))

app.listen(1212,()=>{
    console.log('-------------the server is running in 1212--------------')
})