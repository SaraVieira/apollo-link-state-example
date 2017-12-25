import gql from 'graphql-tag'

export default gql`
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
