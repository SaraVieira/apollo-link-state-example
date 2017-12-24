import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

const App = ({ games, loading }) => (
  <div className="pa4">
    <Link
      className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-gray"
      to="/new-game"
    >
      New Game
    </Link>
    {loading ? (
      'Loading'
    ) : (
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr className="stripe-dark">
              <th className="fw6 tl pa3 bg-white avenir">Team Name</th>
              <th className="fw6 tl pa3 bg-white avenir">Team Name</th>
              <th className="fw6 tl pa3 bg-white avenir">Score</th>
            </tr>
          </thead>
          <tbody className="lh-copy">
            {games.map(game => (
              <tr className="stripe-dark" key={game.id}>
                <td className="pa3 avenir">{game.teamAName}</td>
                <td className="pa3 avenir">{game.teamBName}</td>
                <td className="pa3 avenir">
                  {game.teamAScore} - {game.teamBScore}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
)

const AllGames = gql`
  query AllGames {
    allGames {
      teamAName
      teamBName
      teamAScore
      teamBScore
      id
    }
  }
`

export default graphql(AllGames, {
  props: ({ data: { loading, allGames } }) => ({
    loading: loading,
    games: allGames,
  }),
})(App)
