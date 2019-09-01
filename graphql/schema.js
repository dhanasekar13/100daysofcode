const {makeExecutableSchema} = require('graphql-tools')
const usertypes = require('./user/typeDefs')
const userresolvers = require('./user/resolvers')

const schema = makeExecutableSchema({
    typeDefs: [usertypes],
    resolvers: [userresolvers],
  });

  module.exports = schema