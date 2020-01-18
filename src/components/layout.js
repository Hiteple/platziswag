/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Content, Footer } from '../styles/components'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        <main>{children}</main>
        <Footer>
          with{' '}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
          with a<a href="https://www.platzi.com">Platzi</a>
        </Footer>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
