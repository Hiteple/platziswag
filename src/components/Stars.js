import React, { useState } from 'react'
import { SelectStars } from '../styles/components'

export default function Stars() {
  const [stars, setStars] = useState(5)

  return (
    <SelectStars selected={stars}>
      <span role="img" aria-label="emoji" onClick={() => setStars(1)}>
        ★
      </span>
      <span role="img" aria-label="emoji" onClick={() => setStars(2)}>
        ★
      </span>
      <span role="img" aria-label="emoji" onClick={() => setStars(3)}>
        ★
      </span>
      <span role="img" aria-label="emoji" onClick={() => setStars(4)}>
        ★
      </span>
      <span role="img" aria-label="emoji" onClick={() => setStars(5)}>
        ★
      </span>
    </SelectStars>
  )
}
