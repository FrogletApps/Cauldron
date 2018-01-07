// Find the right method, call on correct element
function launchIntoFullscreen(element) {
	if(element.requestFullscreen) {
		element.requestFullscreen();
	} else if(element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if(element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if(element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}

// Launch fullscreen for browsers that support it!
launchIntoFullscreen(document.documentElement); // the whole page

function yellow(){
	document.getElementById('body').style.background = 'yellow';
	setTimeout(orange, 5000);
}
function orange(){
	document.getElementById('body').style.background = 'orange';
	setTimeout(green, 5000);
}
function green(){
	document.getElementById('body').style.background = 'green';
	setTimeout(yellow, 5000);
}