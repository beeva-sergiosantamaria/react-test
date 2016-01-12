/////////////---------------------STYLES ---------------------------------------------

var menuMainBox = {
	'height': '300px',
	'width': '300px',
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'backgroundColor': 'rgba(90, 90, 90, 1)',
	'borderRadius': '0px 0px 300px 0px',
	'overflow': 'hidden',
	'transition': 'all 0.5s ease-in-out'
}
var itemGroupBox = {
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'transition': 'all 0.5s ease-in-out'
}
var menuItemBox = {
	'width': '120%',
	'height': '45px',
	'color': 'yellow',
	'textTransform': 'uppercase',
  	'fontWeight': 'bolder',
  	'padding': '6px 20px',
  	'cursor': 'pointer',
  	'lineHeight': '40px',
  	'opacity': '1',
	'transition': 'all 0.5s ease-in-out'
}
var submenu = {
	'height': '80px',
	'width': '70%',
	'position': 'absolute',
	'top': '0px',
	'left': '-70%',
	'backgroundColor': 'rgba(90, 90, 90, 1)',
	'borderRadius': '0px 0px 3px 3px',
	'overflow': 'hidden',
	'paddingLeft': '100px',
	'transition': 'all 0.5s ease-in-out'
}
var submenuActive = {
	'height': '80px',
	'width': '100%'
}
var submenubutton = {
	'height': '80px',
	'width': '15%',
	'color': 'yellow',
	'float': 'left',
	'textTransform': 'uppercase',
  	'fontWeight': 'bolder',
  	'fontSize': '45px',
  	'lineHeight': '77px',
  	'textAlign': 'center',
  	'cursor': 'pointer',
	'transition': 'all 0.5s ease-in-out'
}

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

init();

function init(data){
	var Menu = React.createClass({
			getInitialState: function(){
				return {
				}
			},
			componentWillMount: function () {
			   
			},
			handleMouseOver: function(lol) {
			   lol.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
			},
			handleMouseOut: function(lol) {
			   lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0)'
			},
		    handleRemove: function(i) {
		    },
		    menuTransform: function(i,lol) {
		    	console.log(lol.target.parentNode.children.length)
		    	var topValue = ['0px', '-75px', '-135px', '-190px', '-245px']
		    	var activeStatus = lol.target.attributes['data-actived'].value;	
			    var menuChildLength = lol.target.parentNode.children.length

		    	if(activeStatus == 'false') {
		    		$('#submenu').css('left','230px')
		    		lol.target.parentNode.style.top = topValue[i]
		    		lol.target.parentNode.parentNode.style.height = '80px'
		    		lol.target.style.height = '90px'
		    		lol.target.attributes['data-actived'].value = 'true'
			    	for(var a = 0; a < menuChildLength; a++){
			    		if(lol.target.parentNode.children[a].attributes['data-actived'].value == 'false')  lol.target.parentNode.children[a].style.opacity = '0'
			    		else lol.target.parentNode.children[a].style.opacity = '1'
			    	}
		    	}
		    	else{
		    		$('#submenu').css('left','-70%')
		    		lol.target.style.height = '45px'
		    		lol.target.parentNode.style.top = '0px'
		    		lol.target.parentNode.parentNode.style.height = '300px'
		    		lol.target.attributes['data-actived'].value = 'false'
		    		for(var a = 0; a < menuChildLength; a++){
			    		lol.target.parentNode.children[a].style.opacity = '1'
			    	}
		    	}
		    },
			render: function() {
				return (
					<div>
						<div id="submenu" style={submenu}>
							<div style={submenuActive}>
								<div style={submenubutton} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >menu1</div>
								<div style={submenubutton} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >menu2</div>
								<div style={submenubutton} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >menu3</div>
								<div style={submenubutton} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >menu4</div>
								<div style={submenubutton} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >menu5</div>
							</div>
						</div>
						<div id="menu" style={menuMainBox}>
							<div id="itemGroupBox" style={itemGroupBox}>
								<div onClick={this.menuTransform.bind(this,0)} style={$.extend({}, menuItemBox, {'fontSize': '80px', 'padding': '17px 20px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>main</div>
								<div onClick={this.menuTransform.bind(this,1)} style={$.extend({}, menuItemBox, {'fontSize': '56px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>notices</div>
								<div onClick={this.menuTransform.bind(this,2)} style={$.extend({}, menuItemBox, {'fontSize': '45px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>weather</div>
								<div onClick={this.menuTransform.bind(this,3)} style={$.extend({}, menuItemBox, {'fontSize': '51px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>about</div>
								<div onClick={this.menuTransform.bind(this,4)} style={$.extend({}, menuItemBox, {'fontSize': '22px', 'padding': '0px 20px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>contact</div>
							</div>					
						</div>
					</div>
				)
			}
		});
	React.render(<Menu elements="5"/>, document.getElementById('menu'))
}
	
/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------


/////////////-----------------------------------------------------------------------