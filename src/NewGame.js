import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const NewGame = ({ games, loading }) => (
  <div className="pa4 flex justify-center">
    <article class="mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 w-25 pa3 mr2">
      <div class="tc">
        <h1 class="f3 mb2 avenir">Team A</h1>
        <h2 class="f5 fw4 gray mt0 avenir">0</h2>
        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-blue no-outline">
					Goal
        </button>
      </div>
    </article>
    <article class="mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 w-25 pa3 mr2">
      <div class="tc">
        <h1 class="f3 avenir mb2">Team B</h1>
        <h2 class="f5 fw4 avenir gray mt0">0</h2>
        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-blue no-outline">
					Goal
        </button>
      </div>
    </article>
  </div>
)

export default NewGame
