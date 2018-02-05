window.onload = function() {
 var pos = 0;
 var box = document.getElementById('box');
 var t = setInterval(move, 20);

 function move(){
	 if(pos > 150) {
		 clearInterval(t);
	 }
	 else if(pos == 150) {
		 pos = 1;
		 box.style.left = pos + 'px';
	 }
	 else {
	     pos += 1;
		 box.style.left = pos + 'px';
	 }
 }
};
/*css
    #container {
	width:200px;
	height:200px;
	position:relative;
	}
	#box {
	width:50px;
	height:50px;
	position:absolute;
    }
 html
    <body>
	
	   <div id="container"> 
	      <div id="box"> </div>
	   </div>
	   
	</body>
 */
	
	
	
	
	
	
	
	
	
	
	
	
	