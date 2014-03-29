var elements = new Array(); //Array of all DOM elements that can be physics-ed
var bodies = new Array(); //Array for all physical bodies on the web page
var world; //Box2D world

init();

function init()
{
	console.log('init');
	document.addEventListener('mousedown', mouseClicked, false);
}

//Gets all DOM elements that will be operated on by the physics
function getPhysicalDOMElements()
{
	var tags = ['div'];
	for (var i = 0; i < tags.length; i++)
	{
		var elementsOfTag = document.getElementsByTagName(tags[i]);
		for (var j = 0; j < elementsOfTag.length; j++)
			elements.push(elementsOfTag[j]);
	}

	console.log(elements);
}

//Create box2D physical bodies from the DOM elements
function createBodiesFromElements()
{
	for (var i = 0; i < elements.length; i++)
	{

	}
}

function mouseClicked()
{
	//Make explosion at mouse location
	console.log('mouse clicked!');
}
