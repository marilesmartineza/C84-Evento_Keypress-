canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");// Crea una referencia para el elemento canvas

img_width = 300;
img_height = 100;

borrar_width = 300;
borrar_height = 100;

var img_image;
var borrar_image;

img_x = 100;
img_y = 100;

borrar_x = 100;
borrar_y = 100;

function add() {
	img_imgTag = new Image(); //define una variable para una imagen nueva
	img_imgTag.onload = uploadimg; // establece una función para cargar la variable
	img_imgTag.src = img_image;   // carga la imagen
}
function add_2(){
	borrar_imgTag = new Image(); //define una variable para una imagen nueva
	borrar_imgTag.onload = uploadborrar; // establece una función para cargar la variable
	borrar_imgTag.src = borrar_image;   // carga la imagen
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
function uploadborrar() {

	ctx.drawImage(borrar_imgTag, borrar_x, borrar_y, borrar_width, borrar_height);
}

//Escribe el código para obtener el evento key-pressed
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//Escribe el código para verificar el tipo de tecla que se presionó
		{
			borrar();
			aplhabetkey();
			document.getElementById("d1").innerHTML="Presionaste una letra del alfabeto";
			console.log("alphabet key");
			
		}
	    else {
			borrar();
			otherkey();
			document.getElementById("d1").innerHTML="Presionaste un simbolo u otra tecla";
	}
	if(keyPressed >=48 && keyPressed<=57)
	{
		borrar();
		numberkey();
		document.getElementById("d1").innerHTML="Presionaste un número";
		console.log("number key");
		
	}
	if(keyPressed >=37 && keyPressed<=40)
	{
		borrar();
		arrowkey();
		document.getElementById("d1").innerHTML="Presionaste una flecha";
		console.log("arrow key");

	}
	if((keyPressed==17)||(keyPressed==18)||(keyPressed==27))
	{
		borrar();
		specialkey();
		document.getElementById("d1").innerHTML="Presionaste una tecla especial";
		console.log("special key");

	}
}

function aplhabetkey()
{
	//Sube la imagen con el mensaje. 
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
function borrar()
{ 
	borrar_image="Blanco.png";
	add_2();
}
