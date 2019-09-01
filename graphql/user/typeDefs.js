const { gql } = require('apollo-server-express')
const typeDefs = gql`
type Query {
        getUsers:[User],
        getUser(email:String!):[User]
}

type User {
        id:ID!
        userName:String
        email:String
}

type Mutation {
        addUser(userName:String!, email:String!): User
}
`

module.exports = typeDefs