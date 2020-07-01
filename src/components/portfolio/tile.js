import React from "react"

const Tile = ({props}) => {

	console.log( props )

	return (
		<div id={ props.slug } className={ props.modifier ? "grid__item " + props.modifier : "grid__item" } ><a href={ "projects/" + props.slug }>
		  <div className="grid__item-inner">
		    <div className="grid__item-meta">
		      <p>{ props.cat }</p>
		    </div>
		    <p className="grid__item-title">{ props.title }</p>
		  </div>
		</a></div>
	)
}

export default Tile