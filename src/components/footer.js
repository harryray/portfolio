import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({dateString}) => (
	<footer>
				
		<div className="footer__navigation">
			<ul>
				<li><span>NAVIGATION</span></li>
				<li><Link to="/">HOME</Link></li>
				<li><Link to="/">PROJECTS</Link></li>
				<li><Link to="/">BLOG</Link></li>
				<li><Link to="/">CONTACT</Link></li>
			</ul>
		</div>
		<div className="copyright__notice">
			<p className="no-margin-bottom"><span className="legal-text">Built on Gatsby</span></p>
			<p className="no-margin-bottom"><span className="legal-text">&copy; 2020 - Design &amp; Development by Harry Ray</span></p>
		</div>
		<div>
			<span className="display-title">HARRY</span>
			<span className="display-title">RAY</span>
		</div>

	</footer>
)

Footer.propTypes = {
	dateString: PropTypes.number
}
Footer.defaultProps = {
	dateString: ''
}

export default Footer