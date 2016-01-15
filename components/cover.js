/////////////---------------------STYLES ---------------------------------------------

var homepageHeroModule = {
    'borderRight': 'none',
    'borderLeft': 'none',
    'position': 'relative'
}
var videoContainer = {
    'position': 'relative',
    'bottom': '0%',
    'left': '0%',
    'height': '100%',
    'width': '100%',
    'overflow': 'hidden',
    'background': 'transparent'
}
var filter = {
    'zIndex': '100',
    'position': 'absolute',
    'background': 'rgba(0, 0, 0, 0.4)',
    'width': '100%'
}
var fillWidth = {
    'width': '100%'
}
var logoStl = {
	'position': 'absolute',
	'bottom': '0',
	'right': '0'
}
var textStl = {
	'position': 'absolute',
	'top': '20',
	'left': '20',
	'fontSize': '100px',
	'fontWeight': 'bold',
	'color': 'yellow'
}
/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT-------------------------------------------

'use strict';

initVideo();

function initVideo(){
	var VideoCover = React.createClass({
			render: function() {
				return (
					<div id="videoBox" style={homepageHeroModule}>
					    <div id="videoContainer" style={videoContainer}>
					    	<div id="textForVideo" style={textStl}>Inspiration</div>
							<div style={logoStl}><img src="images/logo.png"></img></div>
					        <div id="videofilter" style={filter}></div>
					        <video id="videoElement" autoPlay loop style={fillWidth}>
					            <source src="video/video.mp4" type="video/mp4" />
					        </video>
					    </div>
					</div>
				)
			}
		});
	React.render(<VideoCover/>, document.getElementById('cover'))
}
	
/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------

$(document).ready(function() {
   	var i = 0;
	var sources = ['Inspiration', 'Thinking about', 'creating', 'Making real'];
	var text = document.getElementById("textForVideo");

	setInterval(function(){
		i = i + 1;
		if(i>=sources.length) i=0;
		text.innerHTML = sources[i]
	}, 14500);
});

/////////////-----------------------------------------------------------------------