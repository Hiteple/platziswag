import React from 'react'
import { StyledJumbo } from '../styles/components'
import { Image } from './'

export default function Jumbo({ description, title }) {
  return (
    <StyledJumbo>
      <div>
        <h2>{title}</h2>
        <small>{description}</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}
