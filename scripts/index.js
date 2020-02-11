var animation = lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "data.json"
});

function start() {
	"use strict";
    animation.playSegments([0,18], true);
	document.getElementById("screen1").style.display = "inline";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen_start").style.display = "none";
}
document.querySelector('.start').addEventListener('click', start);

function goscreen2() {
	"use strict";
    animation.playSegments([60,102], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "inline";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen_start").style.display = "none";
//	about hide the btn after click> https://www.w3schools.com/jsref/prop_style_display.asp
}
document.querySelector('.goscreen2').addEventListener('click', goscreen2);

function goscreen3() {
	"use strict";
    animation.playSegments([132,174], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "inline";
	document.getElementById("screen_start").style.display = "none";

}
document.querySelector('.goscreen3').addEventListener('click', goscreen3);

function goscreen4() {
	"use strict";
    animation.playSegments([210,235], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen_start").style.display = "inline";

}
document.querySelector('.goscreen4').addEventListener('click', goscreen4);





