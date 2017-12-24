import React from 'react'

const TeamCard = ({ onGoal, goals, name, onChangeName }) => (
  <article className="mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 pa3 mr2">
    <div className="tc">
      <div className="measure">
        <label htmlFor="name" className="f6 b db mb2">
          Team A Name
        </label>
        <input
          placeholder={name}
          id="name"
          onChange={onChangeName}
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
        />
      </div>
      <h2 className="f5 fw4 gray mt0 avenir">{parseInt(goals, 10)}</h2>
      <button
        onClick={onGoal}
        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-blue no-outline"
      >
        Goal
      </button>
    </div>
  </article>
)

export default TeamCard
