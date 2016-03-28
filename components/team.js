/////////////---------------------STYLES ---------------------------------------------

var teamMainBox = {
	'height': '100%',
	'width': '100%',
	'position': 'absolute',
	'top': '0px',
	'left': '0px',
	'overflowX': 'hidden'
}	
var teamItemBox = {
	'position': 'relative',
	'height': '45%',
	'textTransform': 'uppercase',
	'backgroundColor': 'rgba(60, 60, 60, 0.3)',
  	'fontWeight': 'bolder',
  	'cursor': 'pointer',
  	'opacity': '1',
  	'margin': '2%',
  	'display': 'inline-block',
  	'float': 'left',
	'transition': 'all 0.2s ease-in-out',
	'overflow': 'hidden'
}
var teamPhoto = {
	'height': '100%',
	'transition': 'all 0.2s ease-in-out 0.1s'
}
var memberInfo = {
	'backgroundColor': 'rgba(255, 243, 18, 0.8)',
	'position': 'absolute',
	'height': '100%',
	'width': '100%',
	'top': '-100%',
	'transition': 'all 0.2s ease-in-out 0.1s'
}
var teamName = {
	'fontFamily': "'Work Sans', sans-serif",
	'fontSize': '20px'
}
var teamOcup = {
	'fontFamily': "'Work Sans', sans-serif",
	'fontSize': '16px',
	'color': 'yellow',
	'textAlign': 'right'
}

/////////////-------------------------------------------------------------------------
/////////////---------------------COMPONENT ------------------------------------------

'use strict';

document.body.style.zoom="75%"

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

var teamMembers = [
			{'name': 'Carlos Muñoz','ocup':'Chief innovation officer', 'desc': 'Guerrero de la creatividad al servicio de la tecnología. Persigue problemas y oportunidades. "Imaginar, crear y aprender" como lema vital.', 'photo':'Munoz'},
			{'name': 'Enrique Otero','ocup':'Research lab lead', 'desc': 'Tecnólogo interesado por la ciencia de datos. O científico de datos interesado por la tecnología', 'photo':'Otero'},
			{'name': 'Nieves Ábalos','ocup':'Design lab lead', 'desc': '<3 diseñar productos, investigar y aterrizar las ideas en conceptos que den valor a las personas. Pregúntale de lo último en tecnología, de NLP, y del “Do It Yourself” más analógico.', 'photo':'Abalos'},
			{'name': 'Ira Manzano','ocup':'Research analyst', 'desc': 'Identificando necesidades. Interesada en aportar el mayor valor a las personas. Investigando para la definición de nuevos modelos de negocio viables y escalables.', 'photo':'Manzano'},
			{'name': 'Paula Cordero','ocup':'Labs coordinator', 'desc': 'En búsqueda activa de formas diferentes para crear y aportar valor. Apasionada del diseño, la naturaleza y los libros en papel.', 'photo':'Cordero'},
			{'name': 'Marian Moldovan','ocup':'Future maker', 'desc': 'Agente del caos. Hacker de IoT y apasionado por la Computación Ubicua.', 'photo':'Claudiu'},
			{'name': 'Sergio Santamaria','ocup':'Visual maker', 'desc': 'Visualizador y desarrollador agreste que busca lo que no se haya hecho antes y que a un gráfico le sobren las palabras, no necesariamente por ese orden.', 'photo':'Santamaria'},
			{'name': 'Jesús Martín','ocup':'UX researcher', 'desc': 'Interesado en las personas y en como se enfrentan a todo tipo de interfaz y obsesionado con hacer toda interacción más fácil.', 'photo':'Martin'},
			{'name': 'Carlos González','ocup':'Researcher', 'desc': 'Interesado en la ciencia de datos, el desarrollo software y la domótica. En aprendizaje constante para mejorar día a día. Adicto a los libros y a conocer mundo.', 'photo':'Gonzalez'}
]
init();

function init(data){
	console.log(data);
	var Team = React.createClass({
			getInitialState: function(){
				return {
					data: teamMembers
				}
			},
			componentWillMount: function () {
			},
			handleMouseOver: function(lol) {
			},
			handleMouseOut: function(lol) {
			},
			handleMouseOverArrow: function(lol) {
			},
			handleMouseOutArrow: function(lol) {
			},
		    handleRemove: function(i) {
		    },
			render: function() {
				var members = this.state.data.map(function(item, i){
					var photoURL = 'images/photos/'+item.photo+'.png'
					return (
						<div key={item.name} style={teamItemBox} onMouseOver = {this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
							<div style={memberInfo}></div>
							<img style={teamPhoto} src={photoURL}/>
							<div style={teamName}>{item.name}</div>
							<div style={teamOcup}>{item.ocup}</div>
						</div>
					)
				}.bind(this));
				return (
						<div id="team" style={teamMainBox}>
							{members}			
						</div>
				)
			}
		});
	React.render(<Team elements="9"/>, document.getElementById('equipo'))
}
	
/////////////------------------------------------------------------------------------
/////////////---------------------FUNCTIONS------------------------------------------


/////////////-----------------------------------------------------------------------