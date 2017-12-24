import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import TeamCard from './teamCard'
import { Error, Success } from './Alerts'

class NewGame extends Component {
  state = {
    created: false,
    error: false
  }

  createGame = async () => {
    const { createGame, currentGame } = this.props
    try {
      await createGame({
        variables: {
          ...currentGame
        }
      })
      this.setState({ created: true })
    } catch (err) {
      this.setState({ error: true })
    }
  }

  render () {
    const { currentGame, mutate } = this.props
    const { created, error } = this.state

    return (
      <div className="pa4 flex flex-column items-center">
        {created && <Success />}
        {error && <Error />}
        <div className="flex justify-center">
          <TeamCard
            name={currentGame.teamAName}
            onChangeName={e =>
              mutate({
                variables: {
                  index: 'teamAName',
                  value: e.target.value
                }
              })
            }
            goals={currentGame.teamAScore}
            onGoal={() =>
              mutate({
                variables: {
                  index: 'teamAScore',
                  value: parseInt(currentGame.teamAScore, 10) + 1
                }
              })
            }
          />
          <TeamCard
            name={currentGame.teamBName}
            onChangeName={e =>
              mutate({
                variables: {
                  index: 'teamBName',
                  value: e.target.value
                }
              })
            }
            goals={currentGame.teamBScore}
            onGoal={() =>
              mutate({
                variables: {
                  index: 'teamBScore',
                  value: parseInt(currentGame.teamBScore, 10) + 1
                }
              })
            }
          />
        </div>
        <button
          onClick={this.createGame}
          className="f6 link dim br3 ph3 pv2 mb2 dib white bg-blue no-outline"
        >
          Game Finished
        </button>
      </div>
    )
  }
}

const createGame = gql`
  mutation createGame(
    $teamAScore: Int!
    $teamBScore: Int!
    $teamAName: String!
    $teamBName: String!
  ) {
    createGame(
      teamAScore: $teamAScore
      teamBScore: $teamBScore
      teamAName: $teamAName
      teamBName: $teamBName
    ) {
      teamAName
      teamBName
      teamAScore
      teamBScore
    }
  }
`

const getCurrentGame = gql`
  query {
    currentGame @client {
      teamAScore
      teamBScore
      teamAName
      teamBName
    }
  }
`

const updateGame = gql`
  mutation updateGame($index: String!, $value: String!) {
    updateGame(index: $index, value: $value) @client {
      teamAScore
      teamBScore
      teamAName
      teamBName
    }
  }
`

export default compose(
  graphql(createGame, { name: 'createGame' }),
  graphql(updateGame),
  graphql(getCurrentGame, {
    props: ({ data: { currentGame, loading } }) => ({
      currentGame,
      loading
    })
  })
)(NewGame)
