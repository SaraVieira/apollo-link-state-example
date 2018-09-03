import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons'
import App from './App'
import NewGame from './NewGame'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withClientState } from 'apollo-link-state'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'

const cache = new InMemoryCache()

const defaultState = {
  currentGame: {
    __typename: 'currentGame',
    teamAScore: 0,
    teamBScore: 0,
    teamAName: 'Team A',
    teamBName: 'Team B'
  }
}

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateGame: (_, { index, value }, { cache }) => {
        const query = gql`
          query GetCurrentGame {
            currentGame @client {
              teamAScore
              teamBScore
              teamAName
              teamBName
            }
          }
        `
        const previous = cache.readQuery({ query })
        const data = {
          currentGame: {
            ...previous.currentGame,
            [index]: value
          }
        }

        cache.writeQuery({ query, data })
        return null;
      },
      resetCurrentGame: (_, d, { cache }) => {
        cache.writeData({ data : defaultState })
        return null;
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
