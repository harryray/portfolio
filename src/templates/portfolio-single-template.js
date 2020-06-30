import React from "react"
import { graphql } from "gatsby"

export default function TemplatePortfolioSingle({ data }) {
	const { markdownRemark } = data // data.markdownRemark holds post data
	const { frontmatter, html } = markdownRemark
	console.log(data)
	console.log(html)
	return (
		<div>
			<h1>{ frontmatter.title }</h1>
			<span className="legal-text">{ frontmatter.date }</span>
		</div>
	)
}


export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: {eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				cat
			}
		}
	}
`