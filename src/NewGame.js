import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import TeamCard from './teamCard'
import { Error, Success } from './Alerts'
import {resetCurrentGame,
  getCurrentGame,
  updateGame,
  createGame } from './grahql'

class NewGame extends Component {
  state = {
    created: false,
    error: false
  }

  createGame = async () => {
    const { createGame, currentGame, resetCurrentGame } = this.props
    try {
      await createGame({
        variables: {
          ...currentGame
        }
      })
      await resetCurrentGame()
      this.setState({ created: true })
    } catch (err) {
      this.setState({ error: true })
    }
  }

  render () {
    const { currentGame, updateGame } = this.props
    const { created, error } = this.state

    return (
      <div className="pa4 flex flex-column items-center">
        {created && <Success />}
        {error && <Error />}
        <div className="flex justify-center">
          <TeamCard
            name={currentGame.teamAName}
            onChangeName={e =>
              updateGame({
                variables: {
                  index: 'teamAName',
                  value: e.target.value
                }
              })
            }
            goals={currentGame.teamAScore}
            onGoal={() =>
              updateGame({
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
              updateGame({
                variables: {
                  index: 'teamBName',
                  value: e.target.value
                }
              })
            }
            goals={currentGame.teamBScore}
            onGoal={() =>
              updateGame({
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

export default compose(
  graphql(createGame, { name: 'createGame' }),
  graphql(resetCurrentGame, { name: 'resetCurrentGame' }),
  graphql(updateGame, {name: 'updateGame'}),
  graphql(getCurrentGame, {
    props: ({ data: { currentGame, loading } }) => ({
      currentGame,
      loading
    })
  })
)(NewGame)
