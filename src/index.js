import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons'
import App from './App'
import NewGame from './NewGame'
import { ApolloProvider } from 'react-apollo'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withClientState } from 'apollo-link-state'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: { isConnected }
        }
        cache.writeData({ data })
      }
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: 'https://api.graph.cool/simple/v1/cjbl0bxmq04570186hqlvgpmg'
    })
  ]),
  cache
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/new-game" component={NewGame} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
