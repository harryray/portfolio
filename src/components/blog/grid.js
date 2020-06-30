import { React, Link } from "gatsby"

const BlogGrid = () => {
	return (
		<>
		<div className="container--small background--red padding--large height--100 box-sizing-border-box">
	      <div className="grid__wrap height--100">
	        <div className="grid__container">
	          <div id="cargilfield" className="grid__item" ><Link to="projects/cargilfield.html"></Link></div>
	          <div id="cargilfield" className="grid__item" ><Link to="projects/cargilfield.html"></Link></div>
	          <div id="cargilfield" className="grid__item" ><Link to="projects/cargilfield.html"></Link></div>
	          <div id="cargilfield" className="grid__item" ><Link to="projects/cargilfield.html"></Link></div>
	        </div>
	      </div>
	      <span className="display-title"><span>H</span><span>O</span><span>T</span><span>&nbsp;</span><span>O</span><span>F</span><span>F</span></span>
	      <span className="display-title"><span>T</span><span>H</span><span>E</span><span>&nbsp;</span><span>P</span><span>R</span><span>E</span><span>S</span><span>S</span></span>
	    </div>
		</>
	)
}

export default BlogGrid