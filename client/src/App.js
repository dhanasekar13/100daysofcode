import React from 'react';
import './App.css';
import Launches from './Launchers'
import ApolloClient from 'apollo-boost'
import { ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  uri:'http://localhost:1212/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
      <h2>dhanasekar</h2>
      <Launches></Launches>
    </div>
    </ApolloProvider>
  );
}

export default App;
