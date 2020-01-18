import React from 'react'
import { Link, graphql } from 'gatsby'

import { Jumbo } from '../components'
import { SEO } from '../components'

export const descriptionQuery = graphql`
  query GET_JUMBO_INFO {
    allSite {
      edges {
        node {
          siteMetadata {
            title
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
        title={data.allSite.edges[0].node.siteMetadata.title}
      />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/thanks">Go to thank you</Link>
    </>
  )
}

export default IndexPage
