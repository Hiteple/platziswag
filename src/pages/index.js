import React from 'react'
import { graphql } from 'gatsby'

import { Jumbo, SEO, Products } from '../components'

export const descriptionQuery = graphql`
  query GET_DATA {
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
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              description
              img
              wear
            }
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
      <Products products={data.allStripeSku.edges} />
    </>
  )
}

export default IndexPage
