import React from 'react'
import { StyledJumbo } from '../styles/components'

export default function Jumbo({ description, title }) {
  return (
    <StyledJumbo>
      <div>
        <h2>{title}</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  )
}
