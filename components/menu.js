/////////////---------------------STYLES ---------------------------------------------

var menuMainBox = {
	'height': '300px',
	'width': '300px',
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'backgroundColor': 'rgba(0, 0, 0, 0.52)',
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
  	'lineHeight': '40px'
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
		    	var topValue = ['0px', '-70px', '-130px', '-180px', '-240px']
		    	var activeStatus = lol.target.attributes['data-actived'].value;
		    	if(activeStatus == 'false') {
		    		lol.target.parentNode.style.top = topValue[i]
		    		lol.target.parentNode.parentNode.style.height = '80px'
		    		lol.target.attributes['data-actived'].value = 'true'
		    	}
		    	else{
		    		lol.target.parentNode.style.top = '0px'
		    		lol.target.parentNode.parentNode.style.height = '300px'
		    		lol.target.attributes['data-actived'].value = 'false'
		    	}
		    },
			render: function() {
				return (
					<div id="menu" style={menuMainBox}>
						<div id="itemGroupBox" style={itemGroupBox}>
							<div onClick={this.menuTransform.bind(this,0)} style={$.extend({}, menuItemBox, {'fontSize': '80px', 'padding': '17px 20px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>main</div>
							<div onClick={this.menuTransform.bind(this,1)} style={$.extend({}, menuItemBox, {'fontSize': '56px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>notices</div>
							<div onClick={this.menuTransform.bind(this,2)} style={$.extend({}, menuItemBox, {'fontSize': '45px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>weather</div>
							<div onClick={this.menuTransform.bind(this,3)} style={$.extend({}, menuItemBox, {'fontSize': '51px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>about</div>
							<div onClick={this.menuTransform.bind(this,4)} style={$.extend({}, menuItemBox, {'fontSize': '22px', 'padding': '0px 20px' } )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>contact</div>
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