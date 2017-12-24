import React from 'react'
import { Link } from 'react-router-dom'

export const Success = () => (
  <div className="flex items-center justify-center pa4 bg-green navy">
    <svg
      className="w1"
      data-icon="info"
      viewBox="0 0 32 32"
      style={{ fill: 'white' }}
    >
      <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
    </svg>
    <span className="lh-title ml3 white">
      Game Created. Go back to{' '}
      <Link
        className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-gray"
        to="/"
      >
        Homepage
      </Link>
    </span>
  </div>
)

export const Error = () => (
  <div className="flex items-center justify-center pa4 bg-red navy">
    <svg
      className="w1"
      data-icon="info"
      viewBox="0 0 32 32"
      style={{ fill: 'white' }}
    >
      <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6" />
    </svg>
    <span className="lh-title ml3 white">Oh no</span>
  </div>
)
