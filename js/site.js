$(document).ready(function(){
	var time = 500,
		time2 = 500,
		introSpan = $('#live-heading span'),
		fakeSpan = $('#fake-heading span'),
		allSpans = $('#section__home__splash span');

	function animateHomeSplashLetters() {
		$(introSpan).each(function(i, el) {
			setTimeout(function(introSpan){

			$(el).removeClass('ghost')

			}, time);
			time += 50;
		});
		$(fakeSpan).each(function(i, el) {
			setTimeout(function(fakeSpan){

			$(el).addClass('ghost')

			}, time2);
			time2 += 50;
		});
	}

	setTimeout(function() { animateHomeSplashLetters() }, 1500);

});

$(document).ready(function() {
})