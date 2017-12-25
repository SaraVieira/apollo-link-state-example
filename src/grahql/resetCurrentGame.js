import gql from 'graphql-tag'

export default gql`
  mutation {
    resetCurrentGame @client {
      teamAScore
      teamBScore
      teamAName
      teamBName
    }
  }
`
