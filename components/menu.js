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
	'transition': 'all 0.2s ease-in-out'
}
var submenu = {
	'height': '80px',
	'width': '60%',
	'position': 'absolute',
	'top': '0px',
	'left': '-60%',
	'backgroundColor': 'rgba(90, 90, 90, 1)',
	'borderRadius': '0px 0px 3px 3px',
	'overflow': 'hidden',
	'paddingLeft': '100px',
	'transition': 'all 0.5s ease-in-out 0.1s'
}
var submenuActive = {
	'height': '80px',
	'width': '100%'
}
var submenubutton = {
	'height': '80px',
	'color': 'yellow',
	'float': 'left',
  	'padding': '0px 20px',
	'textTransform': 'uppercase',
  	'fontWeight': 'bolder',
  	'fontSize': '45px',
  	'lineHeight': '77px',
  	'textAlign': 'center',
  	'cursor': 'pointer',
	'transition': 'all 0.2s ease-in-out'
}

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var menuElementsList = [
			{'main': 'main','sub':['components','features','some','thing']},
			{'main': 'notices','sub':['local','national','international']},
			{'main': 'weather','sub':['national','global','max','min']},
			{'main': 'about','sub':['me','enterprise','corp.','place']},
			{'main': 'contact','sub':['mail','suscribe','newsletter','phone']}
]

var curretSubMenuList = menuElementsList[0].sub;

init();

function init(data){
	var SubMenuItem = React.createClass({
			getInitialState: function(){
				return {
					data: menuElementsList
				}
			},
			handleMouseOver: function(lol) {
			   lol.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
			},
			handleMouseOut: function(lol) {
			   lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0)'
			},
			render: function(){
				return(
					<div id="submenu2" style={submenubutton} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} >{this.props.data}</div>
				)	
			}
	})
	var SubMenuList = React.createClass({
			render: function(){
				console.log(this.props.data)
				return(
					<div id="submenu" style={submenu}>
						<div style={submenuActive}>
							{ this.props.data.map(function(element,i){return (<SubMenuItem data={element}></SubMenuItem>)}) }
						</div>
					</div>
				)
			}
	})
	var Menu = React.createClass({
			getInitialState: function(){
				return {
					data: menuElementsList
				}
			},
			componentWillMount: function () {
			   
			},
			handleMouseOver: function(lol) {
			   if(lol.target.attributes['data-actived'].value == 'false') lol.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
			},
			handleMouseOut: function(lol) {
			   if(lol.target.attributes['data-actived'].value == 'false') lol.target.style.backgroundColor = 'rgba(0, 0, 0, 0)'
			},
		    handleRemove: function(i) {
		    },
		    menuTransform: function(i,lol) {
		    	var topValue = ['0px', '-75px', '-135px', '-190px', '-245px']
		    	var activeStatus = lol.target.attributes['data-actived'].value;	
			    var menuChildLength = lol.target.parentNode.children.length;

		    	if(activeStatus == 'false') {
		    		$('#submenu').css('left','230px')
		    		lol.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'
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
		    		$('#submenu').css('left','-60%')
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
		    	var propertiesList = [{'fontSize': '80px', 'padding': '17px 20px'}, {'fontSize': '56px'},{'fontSize': '45px'},{'fontSize': '51px'},{'fontSize': '22px', 'padding': '0px 20px'}]
				var indents = this.state.data.map(function(item, i){
					return (
						<div onClick={this.menuTransform.bind(this,i)} style={$.extend({}, menuItemBox, propertiesList[i] )} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-actived='false'>{item.main}</div>
					)
				}.bind(this));
				return (
					<div>
						<SubMenuList data={curretSubMenuList}></SubMenuList>
						<div id="menu" style={menuMainBox}>
							<div id="itemGroupBox" style={itemGroupBox}>
								{indents}
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