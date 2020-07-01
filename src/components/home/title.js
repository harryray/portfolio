import React from "react"

class Title extends React.Component {

	constructor(props) {
		super(props)
		this.handleLoad = this.handleLoad.bind(this)
	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad())
	}

	handleLoad() {
		
		var time = 500,
			time2 = 500,
			introSpan = document.querySelectorAll('#live-heading span'),
			fakeSpan = document.querySelectorAll('#fake-heading span'),
			allSpans = document.querySelectorAll('#section__home__splash span');

		function animateHomeSplashLetters() {
			if(introSpan) {
				introSpan.forEach(function(el, i) {
					setTimeout(function(introSpan){

						el.classList.toggle('ghost')

					}, time);
					time += 50;
				});
				fakeSpan.forEach(function(el, i) {
					setTimeout(function(fakeSpan){

						el.classList.toggle('ghost')

					}, time2);
					time2 += 50;
				});
			}
		}

		setInterval(function() { animateHomeSplashLetters() }, 1000);

	}

	render() {
		return (
			<>
				<h1   id="live-heading"><div><span className="ghost">H</span><span className="ghost">A</span><span className="ghost">R</span><span className="ghost">R</span><span className="ghost">Y</span></div><div><span className="ghost">R</span><span className="ghost">A</span><span className="ghost">Y</span></div></h1>
				<span id="fake-heading"><div><span>H</span><span>A</span><span>R</span><span>R</span><span>Y</span></div><div><span>R</span><span>A</span><span>Y</span></div></span>
			</>
		)
	}
}

export default Title