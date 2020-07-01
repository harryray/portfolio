document.addEventListener("load", function() {

// TODO: Implement slow scroll on anchor tags

	function parallax() {
		var s1 = document.getElementsByClassName("project__image-inner")[0];
	  	var yPos1 = 0 - window.pageYOffset/100;	
		var s2 = document.getElementsByClassName("bg-container")[0];
	  	var yPos2 = 0 - window.pageYOffset/200;	

	  	if(s1 && s2) {
		  	s1.style.transform = "translateY(" + yPos1 + "%)";/*= 50 + yPos1 + "%";*/
		  	s2.style.transform = "translateX(-50%) translateY(" + yPos2 + "%)";/*= 50 + yPos2 + "%";*/
		  }
	};

	window.addEventListener("scroll", function(){
		parallax();	
	});

});