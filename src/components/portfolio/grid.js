import React from "react"

import Tile from "./tile"

import "./portfolio-grid.css"

const PortfolioGrid = () => {
	return (
		<>
			<div className="filters">
				<span className="filters__title">I WANT TO SEE:</span>
				<span className="filters__filter">SHOPIFY</span>
				<span className="filters__filter">SEO</span>
				<span className="filters__filter">WORDPRESS</span>
				<span className="filters__filter">PERCH CMS</span>
				<span className="filters__filter">CONCEPT</span>
			</div>
		    <div className="grid__wrap">
		      <div className="grid__container">
		        <Tile slug='keith-scarrott' cat='shopify' title='Keith Scarrott' />
	            <Tile slug='cargilfield' cat='perch cms' title='Cargilfield' />
	            <Tile slug='nowrevive' cat='perch cms' title='Nowrevive' modifier='grid__item-2x2' />
		        <Tile slug='ethical-giving' cat='wordpress' title='Ethical Giving' />
		        <Tile slug='shadowplay' cat='perch cms' title='Shadowplay' />
		        <Tile slug='stella-mannering' cat='perch cms' title='Stella Mannering' modifier='grid__item-1x2' />
		        <Tile slug='holly-tree-melody' cat='SEO' title='Holly Tree Melody' />
		        <Tile slug='ollie-eats' cat='Concept' title='Ollie Eats' modifier='grid__item--speculative' />
		      </div>
		    </div>
		</>
	)
}
export default PortfolioGrid