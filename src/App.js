import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const App = ({ games, loading }) => (
  <div className="pa4">
    { loading ? 'Loading' :
    <div className="overflow-auto">
      <table className="f6 w-100 mw8 center" cellSpacing="0">
        <thead>
          <tr className="stripe-dark">
            <th className="fw6 tl pa3 bg-white">Team Name</th>
            <th className="fw6 tl pa3 bg-white">Team Name</th>
            <th className="fw6 tl pa3 bg-white">Score</th>
          </tr>
        </thead>
        <tbody className="lh-copy">
        {games.map(game =>
          <tr className="stripe-dark">
            <td className="pa3">{game.teamAName}</td>
            <td className="pa3">{game.teamBName}</td>
            <td className="pa3">{game.teamAScore} - {game.teamBScore}</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
    }
  </div>
)

const AllGames = gql`
  query AllGames {
    allGames {
      teamAName
      teamBName
      teamAScore
      teamBScore
    }
  }
`

export default graphql(AllGames, {
  props: ({ data: { loading, allGames } }) => ({
    loading: loading,
    games: allGames
  })
})(App)
