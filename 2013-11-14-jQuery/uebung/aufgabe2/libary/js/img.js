// JavaScript Document

function init(){
	/*document.getElementById("bild1").onmouseover = function(){
		document.getElementById("bild1").width *= 1.2;
		document.getElementById("bild1").height *= 1.2;
	}
	
	document.getElementById("bild1").onmouseout = function(){
		document.getElementById("bild1").width /= 1.2;
		document.getElementById("bild1").height /= 1.2;
	}
	
	document.getElementById("bild2").onmouseover = function(){
		document.getElementById("bild2").width *= 1.2;
		document.getElementById("bild2").height *= 1.2;
	}
	
	document.getElementById("bild2").onmouseout = function(){
		document.getElementById("bild2").width /= 1.4;
		document.getElementById("bild2").height /= 1.4;
	}*/
	
	function gross(e){
		document.getElementById(e).width = 800;
		document.getElementById(e).heigth = 600;
	}
	
	function klein(e){
		document.getElementById(e).width = 276;
		document.getElementById(e).heigth = 207;
	}
}

window.onload = init;