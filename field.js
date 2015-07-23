  //var global para funcionar o evento de mouse
var blocks = [];
var game = {};
var card = [16]; 
var select ; 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;
var BLOCK_HEIGHT = 100;
var BLOCK_WIDTH = 71;
var colision;
	
	(function(root){
		
	   var id = 0;
		
		var imagesPlayer = [
		   'deck01/2.jpeg','deck01/9.jpeg','deck01/10.jpeg','deck01/11.jpeg','deck01/12.jpeg','deck01/17.jpeg','deck01/19.jpeg',
		];//7cartas 
			
			var imagesRobot = [
		   'deck01/2.jpeg','deck01/9.jpeg','deck01/10.jpeg','deck01/11.jpeg','deck01/12.jpeg','deck01/17.jpeg','deck01/19.jpeg',
		];    
		
		//var imagesSlot = [28];
		/**
		* PRELOAD
		*/
		function preload(){
			carddraw();	
			summon();
			createGrid();   
			
		};
		
		
		/**
		* INICIA GAME
		*/
		game.create = function(){
			preload();
		};
		
		function carddraw(){
		for (var i = 0;i<7 ;i++){//7 o numero de img de cards 
		card[i]=i;
		}
		shuffle(card); 
		console.log(card);
		}
		/**
		* CRIA GRID
		*/
		function createGrid(){
			var cont=6;
			var promises = [];
			
			for(var i = 0; i<5; i++){ // ROws
				
				for(var j = 0; j<6; j++){ // COls
					(function(j2, i2){                    
					   if(i2 == 0) { // player
						var img_src = imagesPlayer[card[j2]];//o numero da carta 
								
						}
						
						else if(i2 == 5) { // Robot
							var img_src = imagesRobot[j2];
						}    
					   
						
						
						var x = BLOCK_WIDTH*j2;
						var y = BLOCK_HEIGHT*i2;
						
						if(img_src){
							var img = new Image();
							img.src = img_src;  
							img.onload = function(){
								ctx.drawImage(img, x, y);                         
							}
						}
						
						ctx.rect(x, y, BLOCK_WIDTH, BLOCK_HEIGHT);
						ctx.stroke();
						blocks.push({
							ctx : ctx,
							id:id,
							x : x,
							y : y,
							height : BLOCK_HEIGHT,
							width : BLOCK_WIDTH,
						});
				  
						id++;
					})(j, i);    //entendi aqui passa parametro para j2 i2
					
				}
				
			}
			
		}
		
		
		root.game = game;
		
	  
	})(window);

game.create(); //main game
canvas.addEventListener("mousedown",pointerpos,false);


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

function shuffle(array){//embaralha os numeros ou arrays
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
function summon(){

 
 
 
 
 
 mana();





}
function mana(){








}