import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Second from './Second'


const client = new ApolloClient({
    uri:'http://localhost:1212/graphql'
})

const First = () =>(
    <div>
        <ApolloProvider client={client}>
        <Second></Second>
        </ApolloProvider>
        </div>
)

export default First