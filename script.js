$(document).ready(function() {
	// piano key audio
	var pianoA = document.getElementById('pianoA');
	var pianoAS = document.getElementById('pianoASharp');
	var pianoB = document.getElementById('pianoB');
	var pianoBS = document.getElementById('pianoBSharp');
	var pianoC = document.getElementById('pianoC');
	var pianoCS = document.getElementById('pianoCSharp');
	var pianoD = document.getElementById('pianoD');
	var pianoDS = document.getElementById('pianoDSharp');
	var pianoE = document.getElementById('pianoE');
	var pianoF = document.getElementById('pianoF');
	var pianoFS = document.getElementById('pianoFSharp');
	var pianoG = document.getElementById('pianoG');
	var pianoGS = document.getElementById('pianoGSharp');

	// playing the piano keys
	$('#pA').mousedown(function() {
		pianoA.currentTime = 0;
		pianoA.play();
	});
	$('#pB').mousedown(function() {
		pianoB.currentTime = 0;
		pianoB.play();
	});
	$('#pC').mousedown(function() {
		pianoC.currentTime = 0;
		pianoC.play();
	});
	$('#pD').mousedown(function() {
		pianoD.currentTime = 0;
		pianoD.play();
	});
	$('#pE').mousedown(function() {
		pianoE.currentTime = 0;
		pianoE.play();
	});
	$('#pF').mousedown(function() {
		pianoF.currentTime = 0;
		pianoF.play();
	});
	$('#pG').mousedown(function() {
		pianoG.currentTime = 0;
		pianoG.play();
	});
	$('#pAS').mousedown(function() {
		pianoAS.currentTime = 0;
		pianoAS.play();
	});
	$('#pBS').mousedown(function() {
		pianoBS.currentTime = 0;
		pianoBS.play();
	});
	$('#pCS').mousedown(function() {
		pianoCS.currentTime = 0;
		pianoCS.play();
	});
	$('#pDS').mousedown(function() {
		pianoDS.currentTime = 0;
		pianoDS.play();
	});
	$('#pFS').mousedown(function() {
		pianoFS.currentTime = 0;
		pianoFS.play();
	});
	$('#pGS').mousedown(function() {
		pianoGS.currentTime = 0;
		pianoGS.play();
	});

	// guitar audio
	var guitarA = document.getElementById('guitarA');
	var guitarB = document.getElementById('guitarB');
	var guitarC = document.getElementById('guitarC');
	var guitarD = document.getElementById('guitarD');
	var guitarE = document.getElementById('guitarE');
	var guitarF = document.getElementById('guitarF');
	var guitarG = document.getElementById('guitarG');
	var guitarCS = document.getElementById('guitarCSharp');
	var guitarDS = document.getElementById('guitarDSharp');
	var guitarFS = document.getElementById('guitarFSharp');
	var guitarGS = document.getElementById('guitarGSharp');

	// strumming the guitar keys
	$('#gC').mouseover(function() {
		guitarC.currentTime = 0;
		guitarC.play();
	});
	$('#gD').mouseover(function() {
		guitarD.currentTime = 0;
		guitarD.play();
	});
	$('#gE').mouseover(function() {
		guitarE.currentTime = 0;
		guitarE.play();
	});
	$('#gF').mouseover(function() {
		guitarF.currentTime = 0;
		guitarF.play();
	});
	$('#gG').mouseover(function() {
		guitarG.currentTime = 0;
		guitarG.play();
	});
	$('#gCS').mouseover(function() {
		guitarCS.currentTime = 0;
		guitarC.play();
	});
	$('#gDS').mouseover(function() {
		guitarDS.currentTime = 0;
		guitarDS.play();
	});
	$('#gFS').mouseover(function() {
		guitarFS.currentTime = 0;
		guitarFS.play();
	});
	$('#gGS').mouseover(function() {
		guitarGS.currentTime = 0;
		guitarGS.play();
	});

	// drum audio
	var cymbals = document.getElementById('cymbals');
	var bass = document.getElementById('bass');
	var snare1 = document.getElementById('snare1');
	var snare2 = document.getElementById('snare2');
	var snare3 = document.getElementById('snare3');
	var hitom = document.getElementById('hitom');
	var lotom = document.getElementById('lotom');

	// playing the drums
	document.onkeydown = function(event) {
		event.preventDefault();
		switch(event.keyCode) {
			case 80:
				// P
				cymbals.currentTime = 0;
				cymbals.play();
				break;
			case 81:
				// Q
				bass.currentTime = 0;
				bass.play();
				break;
			case 65:
				// A
				snare1.currentTime = 0;
				snare1.play();
				break;
			case 83:
				// S
				snare2.currentTime = 0;
				snare2.play();
				break;
			case 68: 
				// D
				snare3.currentTime = 0;
				snare3.play();
				break;
			case 76:
				// L
				hitom.currentTime = 0;
				hitom.play();
				break;
			case 75:
				// K
				lotom.currentTime = 0;
				lotom.play();
				break;

		}
	}

	$('.control').addClass('play');
	var custom = document.getElementById('customsong');
	function pulsing() {
		$('.beat').addClass('pulse');
		setTimeout(function() {
			$('.beat').removeClass('pulse');
		}, pulse-100);
	}
	$('.control').click(function() {
		var $this = $(this);
		bpm = 98;
		pulse = (60/bpm) *1000;
		if (custom.paused === false) {
			custom.pause();
			custom.currentTime = 0;
			$this.addClass('play');
			clearInterval(intervals);
		} else {
			custom.play();
			$this.removeClass('play');
			pulsing();
			intervals = setInterval(function() {pulsing()}, pulse);
		}
	});
});