import React from "react"

import BlogTile from "./tile"

import "./blog-grid.css"

const blogTiles = [
	{
		slug: 'web-development-pizza-three-steps-to-the-perfect-recipe',
		id: 'web-dev-pizza',
		title: 'Web Development & Pizza: 3 Steps to the Perfect Recipe'
	},
	{
		slug: 'dog'
	},
	{
		slug: 'cat'
	},
	{
		slug: 'cow'
	}
]

const BlogGrid = () => {
	return (
		<>
			<div className="container--small background--red padding--large height--100 box-sizing-border-box">
		      <div className="grid__wrap height--100">
		        <div className="grid__container">
		          { blogTiles.map( tile => <BlogTile { ...tile } key={ tile.slug } />) }
		        </div>
		      </div>
		      <span className="display-title"><span>H</span><span>O</span><span>T</span><span>&nbsp;</span><span>O</span><span>F</span><span>F</span></span>
		      <span className="display-title"><span>T</span><span>H</span><span>E</span><span>&nbsp;</span><span>P</span><span>R</span><span>E</span><span>S</span><span>S</span></span>
		    </div>
	    </>
	)
}

export default BlogGrid