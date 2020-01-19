const React = require('react')
const { CartProvider } = require('./src/Context')
const { GlobalStyles } = require('./src/styles')
const Layout = require('./src/components/layout').default

exports.wrapRootElement = ({ element }) => {
  return (
    <CartProvider>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </CartProvider>
  )
}
