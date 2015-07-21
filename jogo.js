var blocks =  [];
var num;
var img = [];
var deck = [2,9,10,11,12,17,17,19,19,20,
			20,33,33,33,34,34,34,34,36,36,
			36,36,37,37,37,38,38,38,39,39,
			39,40,40,40,41,41,41,43,43,43];//40 cartas inclui repetida
canvas=document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown",pointerpos,false);
load();

function pointerpos(event){
		var x = event.x;
		var y = event.y;
		var canvas = document.getElementById("canvas");
		x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
		detectarea(x,y,BLOCK_WIDTH,BLOCK_HEIGHT);
	}
function detectarea(x,y,width,height){
//detecta area do mouse sobre a imagem 

for( i in blocks){
			if (
			x > blocks[i].x && x < (blocks[i].x + blocks[i].width)
			&&
			y > blocks[i].y && y < (blocks[i].y + blocks[i].height)
			)
			{
			colision=true;
				console.info(blocks[i].id);
				//select = blocks[i].id;
				
			}
			colision=false;
		}
		
}
function load(){
	for (var i =0;i<16;i++){
		img[i] ="deck01/"+i+".jpeg";//guarda os nomes das imagem das cartas no array
 	}
	tile = new Image();
	tile.src= img[3];//acessa o nome da imagem da terceira array para url 
	tile.onload = function(){
	ctx.drawImage(tile ,50,50);
	}

}
function shuffle(array){
var currentIndex=array.length, temporaryValue, randomIndex ;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	 
	}

	return array;

}

