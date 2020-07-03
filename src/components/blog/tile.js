import React from "react"
import { Link } from "gatsby"

const BlogTile = ({ slug, id, title }) => (
	<div id='cargilfield' className="grid__item grid__item--blog" >
		<Link to={ "blog/" + slug  }>
			<div className="grid__item-inner">
				<p className="grid__item-title">{title}</p>
			</div>
		</Link>
		<div className="grid__item--outline">
			<span />
			<span />
			<span />
			<span />
			<span />
			<span />
			<span />
			<span />
		</div>
		</div>
)

export default BlogTile