import gql from 'graphql-tag'

export default gql`
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
