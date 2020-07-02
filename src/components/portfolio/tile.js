import React from "react"

const Tile = ({ slug, modifier, cat, title }) => (
	<div id={slug} className={modifier ? "grid__item " + modifier : "grid__item"} >
		<a href={"projects/" + slug}>
			<div className="grid__item-inner">
				<div className="grid__item-meta">
					<p>{cat}</p>
				</div>
				<p className="grid__item-title">{title}</p>
			</div>
		</a>
	</div>
)

export default Tile