
		var a = document.querySelector(".a").offsetWidth ; 
		var aWidth = "-" + (document.querySelector(".a").offsetWidth) + "px"; 

		var b = document.querySelector(".b").offsetWidth ; 
		var bWidth = "-" + (a + b) + "px"; 

		var c = document.querySelector(".c").offsetWidth ; 
		var cWidth = "-" + (a + b + c) + "px"; 

		var d = document.querySelector(".d").offsetWidth ; 
		var dWidth = "-" + (a + b + c + d) + "px"; 

		var e= document.querySelector(".e").offsetWidth ; 
		var eWidth = "-" + (a + b + c + d + e) + "px"; 

		var f= document.querySelector(".f").offsetWidth ; 
		var fWidth = "-" + (a + b + c + d + e + f) + "px"; 

		var g= document.querySelector(".g").offsetWidth ; 
		var gWidth = "-" + (a + b + c + d + e + f + g) + "px";
		

		function arrowL () {
			 document.querySelector(".tabs").style.left="-100%";
			 document.querySelector(".arrowR").style.display="block";
			  document.querySelector(".arrowL").style.display="none";
		
		}

		function arrowL2 () {
			 document.querySelector(".tabs").style.left="-200%";
			 document.querySelector(".arrowR").style.display="block";
			  document.querySelector(".arrowL").style.display="none";
		
		}

		function arrowR () {
			 document.querySelector(".tabs").style.left="0%";
			  document.querySelector(".arrowL").style.display="block";
			  document.querySelector(".arrowR").style.display="none";
			  document.querySelector(".arrowR2").style.display="block";
		
		}

		function arrowR2 () {
			 document.querySelector(".tabs").style.left="0%";
			  document.querySelector(".arrowL").style.display="block";
			  document.querySelector(".arrowR").style.display="none";
			  document.querySelector(".arrowR2").style.display="block";
		
		
		}


		function tabA () {
			 document.querySelector(".imgContent").style.left="0px";
		}

		function tabB () {
			 document.querySelector(".imgContent").style.left=aWidth;
		}

		function tabC () {
			 document.querySelector(".imgContent").style.left=bWidth;
		}

		function tabD () {
			 document.querySelector(".imgContent").style.left=cWidth;	 
		}

		function tabE () {
			 document.querySelector(".imgContent").style.left=dWidth;	 
		}

		function tabF () {
			 document.querySelector(".imgContent").style.left=eWidth;
		}

		function tabG () {
			 document.querySelector(".imgContent").style.left=fWidth;
		}

	
		$('.tabA , .a').click(function () {
		    window.location = 'Barnes&Noble.html';
		});

		$('.tabB , .b').click(function () {
		    window.location = 'neutrogena.html';
		});

		$('.tabC , .c').click(function () {
		    window.location = 'Philadelphia.html';
		});

		$('.tabD , .d').click(function () {
		    window.location = 'ky.html';
		});

		$('.tabE , .e').click(function () {
		    window.location = 'chase.html';
		});

		$('.tabF , .f').click(function () {
		    window.location = 'Splenda.html';
		});

		$('.tabG , .g').click(function () {
		    window.location = 'Motrin.html';
		});

		$('.mContent , .a').click(function () {
		    window.location = 'Barnes&Noble.html';
		});

		$('.mContent , .b').click(function () {
		    window.location = 'neutrogena.html';
		});

		$('.mContent , .c').click(function () {
		    window.location = 'Philadelphia.html';
		});

		$('.mContent , .d').click(function () {
		    window.location = 'ky.html';
		});

		$('.mContent, .e').click(function () {
		    window.location = 'chase.html';
		});

		$('.mContent , .f').click(function () {
		    window.location = 'Splenda.html';
		});

		$('.mContent , .g').click(function () {
		    window.location = 'Motrin.html';
		});