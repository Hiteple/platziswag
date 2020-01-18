import React from 'react'
import { graphql } from 'gatsby'

import { Jumbo } from '../components'
import { SEO } from '../components'
import styled from 'styled-components'

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

const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover {
    transform: scale(1.4);
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
      <Button color={'gray'}>Buy</Button>
    </>
  )
}

export default IndexPage
