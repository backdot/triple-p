const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadSocialLinks = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulSocialLink(filter: {node_locale: {eq: "de"}}) {
          edges {
            node {
              name
              url
            }
          }
        }
      }
    `).then(result => {
      const socialLinks = result.data.allContentfulSocialLink.edges
      socialLinks.map(({ node: link }) => console.log(link))
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadSocialLinks, loadPages])
}
