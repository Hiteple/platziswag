import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

export default function thanks() {
  return (
    <div>
      <SEO title="Thank you!" />
      <Purchase>
        <h2>Your purchase was successful</h2>
        <p>We hope that you'll enjoy the product</p>
        <span role="img" aria-label="emoji">
          ❤️
        </span>
        <Link to="/">
          <Button>Back to catalog</Button>
        </Link>
      </Purchase>
    </div>
  )
}
