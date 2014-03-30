var elements = new Array(); //Array of all DOM elements that can be physics-ed
var bodies = new Array(); //Array for all physical bodies on the web page
var world; //Box2D world
var worldAABB;

init();

function init()
{
	console.log('init');
	document.addEventListener('mousedown', mouseClicked, false);

	//Create world
	worldAABB = new b2AABB();
	worldAABB.minVertex.Set(0, 0);
	worldAABB.maxVertex.Set(window.innerWidth+200, window.innerHeight+200);
	world = new b2World(worldAABB, new b2Vec2(0, -10), true);

	//Create test object
	var circleSd = new b2CircleDef();
	circleSd.density = 1.0;
	circleSd.radius = 20;
	circleSd.restitution = 1.0;
	circleSd.friction = 0;
	var circleBd = new b2BodyDef();
	circleBd.AddShape(circleSd);
	circleBd.position.Set(0,0);
	var circleBody = world.CreateBody(circleBd);
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
