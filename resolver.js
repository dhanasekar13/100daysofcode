const { GraphQLObjectType, GraphQLInt, GraphQLString,GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql')
const axios = require('axios')
const {LaunchType, RocketType} = require('./schema')
//Root Query(Resolver)
const RootQuery = new GraphQLObjectType({
    name:"Root",
    fields:{
        launches:{
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                    return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data)
            }
        },
        launch:{
            type:LaunchType,
            args:{
                flight_number:{
                    type:GraphQLInt
                }
            },
            resolve(parent, args){
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                .then(res => res.data)
            }
        },
        rockets:{
            type: new GraphQLList(RocketType),
            resolve(parent, args) {
                    return axios.get('https://api.spacexdata.com/v3/rockets')
                    .then(res => res.data)
            }
        },
        rocket:{
            type:RocketType,
            args:{
                id:{
                    type:GraphQLInt
                }
            },
            resolve(parent, args){
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
                .then(res => res.data)
            }
        }
    }
})


module.exports =new GraphQLSchema({
    query: RootQuery
})
