const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ProductTemplate = path.resolve(`src/templates/Product.js`)
  const results = await graphql(`
    query GET_SKUS {
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
  `)

  if (results.errors) {
    throw results.errors
  }

  results.data.allStripeSku.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: ProductTemplate,
      context: node,
    })
  })
}
