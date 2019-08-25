import React from 'react'
import gql from 'graphql-tag'
import {Query } from 'react-apollo'

//this is the query for backend
const LAUNCH_QUERY = gql`
   query launchesapp1 {
    launches{
        flight_number,
          mission_name
      }
    }
`


class Launches extends React.Component{
    render(){
        return (
            <div>
                    <h1>Launches</h1>
                    <Query query={LAUNCH_QUERY}>
                        {
                                ({loading,error,data})=>{
                                    if(loading) return <h4>Loading...........</h4>
                                    if(error) return <h4>Error</h4>
                                    console.log(data)
                                    return <h2>Hi dhanasekar no error</h2>
                                }
        
                        }
                    </Query>
            </div>
        )
    }
}

export default  Launches