import React from "react"
import { graphql } from "gatsby"
import {Link} from "gatsby"

import Layout from "../components/layout"

import "./blog-post.css"

export default function TemplateBlogSingle({ data }) {
	const { markdownRemark } = data // data.markdownRemark holds post data
	const { frontmatter, html } = markdownRemark
	return (

  <Layout>
		<div className="blog-post">
			<div className="blog-post__back-to-blog">
				<Link to="/">HTB</Link>
			</div>
			<div className="blog-post__content">
					<div className="blog-post__header">
						<h1>{ frontmatter.title }</h1>
						<span className="meta-text">{ frontmatter.date }</span>
					</div>
					<div 
						className="blog-post__body" 
						dangerouslySetInnerHTML={{ __html: html }}
					/>
			</div>
		</div>
	</Layout>
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