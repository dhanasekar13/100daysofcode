// where all graphql stuff going to stay

const { GraphQLObjectType, GraphQLInt, GraphQLString,GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql')
const axios = require('axios')
 const LaunchType = new GraphQLObjectType({
    name:"Launch",
    fields:()=>({
        flight_number:{
            type:GraphQLInt
        },
        mission_name:{
            type:GraphQLString
        },
        launch_year:{
            type:GraphQLString
        },
        launch_date_local:{
            type:GraphQLString
        },
        launch_success:{
            type:GraphQLBoolean
        },
        rocket:{
            type: RocketType// this is other type
        }
    })
})

 const RocketType = new GraphQLObjectType({
    name:"rocket",
    fields:()=>({
        rocket_id:{
            type:GraphQLString
        },
        rocket_name:{
            type:GraphQLString
        },
        rocket_type:{
            type:GraphQLString
        }
    })
})



module.exports ={
    LaunchType,
    RocketType
}