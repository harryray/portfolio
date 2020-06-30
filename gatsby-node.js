/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions

	const result = await graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							cat
							path
						}
					}
				}
			}
		}
	`)
	if (result.errors) {
		console.error(result.errors)
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		console.log(node.frontmatter.cat)
		if(node.frontmatter.cat == 'blog') {
			createPage({
				path: node.frontmatter.path,
				component: path.resolve(`src/templates/blog-single-template.js`),
			})
		} else if(node.frontmatter.cat == 'portfolio') {
			createPage({
				path: node.frontmatter.path,
				component: path.resolve(`src/templates/portfolio-single-template.js`),
			})
		}
	})
}