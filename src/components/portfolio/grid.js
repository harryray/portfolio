import React from "react"

import Tile from "./tile"

const PortfolioGrid = () => {
	return (
		<>
			<div className="filters"><span className="filters__title">I WANT TO SEE:</span><span className="filters__filter">SHOPIFY</span><span className="filters__filter">SEO</span><span className="filters__filter">WORDPRESS</span><span className="filters__filter">PERCH CMS</span><span className="filters__filter">CONCEPT</span></div>
		    <div className="grid__wrap">
		      <div className="grid__container">
		        <Tile slug='keith-scarrott' cat='shopify' title='Keith Scarrott' />
		        <div id="cargilfield" className="grid__item" ><a href="projects/cargilfield.html">
		          <div className="grid__item-inner">
		            <div className="grid__item-meta">
		              <p>PERCH CMS</p>
		            </div>
		            <p className="grid__item-title">CARGILFIELD</p>
		          </div>
		        </a></div>
		        <div id="nowrevive" className="grid__item grid__item-2x2"><a href="projects/nowrevive.html">
		          <div className="grid__item-inner">
		            <div className="grid__item-meta">
		              <p>PERCH CMS</p>
		            </div>
		            <p className="grid__item-title">NOWREVIVE</p>
		          </div>
		        </a></div>
		        <div id="ethical-giving" className="grid__item" ><a href="projects/ethical-giving.html">
		          <div className="grid__item-inner">
		            <div className="grid__item-meta">
		              <p>WORDPRESS</p>
		            </div>
		            <p className="grid__item-title">ETHICAL GIVING</p>
		          </div>
		        </a></div>
		        <div id="shadowplay" className="grid__item" ><a href="projects/shadowplay.html">
		          <div className="grid__item-inner">
		            <div className="grid__item-meta">
		              <p>PERCH CMS</p>
		            </div>
		            <p className="grid__item-title">SHADOWPLAY</p>
		          </div>
		        </a></div>
		        <div id="stella-mannering" className="grid__item grid__item-1x2"><a href="projects/stella-mannering.html">
		          <div className="grid__item-inner">
		            <div className="grid__item-meta">
		              <p>PERCH CMS</p>
		            </div>
		            <p className="grid__item-title">STELLA MANNERING</p>
		          </div>
		        </a></div>
		        <div id="adidas" className="grid__item"><a href="projects/holly-tree-melody.html">
		          <div className="grid__item-inner">
		            <div className="grid__item-meta">
		              <p>SEO</p>
		            </div>
		            <p className="grid__item-title">HOLLY TREE MELODY</p>
		          </div>
		        </a></div>
		        <div id="shoko-asahara" className="grid__item grid__item--speculative"><a href="projects/ollie-eats.html">
		          <div className="grid__item-inner">
		            <div className="grid__item-meta">
		              <p>CONCEPT</p>
		            </div>
		            <p className="grid__item-title">OLLIE EATS</p>
		          </div>
		        </a></div>
		      </div>
		    </div>
		</>
	)
}
export default PortfolioGrid