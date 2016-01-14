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
							<div style={logoStl}><img src="images/logo.png"></img></div>
					        <div id="videofilter" style={filter}></div>
					        <video id="videoElement" autoPlay loop style={fillWidth}>
					            <source src="video/cross.mp4" type="video/mp4" />
					        </video>
					    </div>
					</div>
				)
			}
		});
	React.render(<VideoCover/>, document.getElementById('video'))
}
	
/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------

$(document).ready(function() {
   	var i = 0;
	var sources = ['Under.mp4', 'Ideas.mp4', 'push.mp4', 'cross.mp4'];
	var vid = document.getElementById("videoElement");

	setInterval(function(){
		if(i>=sources.length) i=0;
		console.log($('#videoElement').bind('ended'))
		$('#videoElement')[0].src = 'video/'+sources[i++ % sources.length];
		$('#videoElement').load();
	}, 12000);
});

/*$(document).ready(function() {
    //place code inside jQuery ready event handler 
    //to ensure videoElement is available
    var i = 0;
    var sources = ['1.mp4', '2.mp4'];
    $('#videoElement').bind('ended', function() {
        //'this' is the DOM video element
        this.src = sources[i++ % sources.length];
        this.load();
        this.play();
    });
});*/

/////////////-----------------------------------------------------------------------