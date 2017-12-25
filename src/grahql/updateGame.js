import gql from 'graphql-tag'

export default gql`
  mutation updateGame($index: String!, $value: String!) {
    updateGame(index: $index, value: $value) @client {
      teamAScore
      teamBScore
      teamAName
      teamBName
    }
  }
`
