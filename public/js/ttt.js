var X = "x", 
		O = "o",
		EMPTY="",
		currentMark;

var grid;

function init() {
	currentMark = X;
	grid=[[EMPTY, EMPTY, EMPTY],
				[EMPTY, EMPTY, EMPTY],
				[EMPTY, EMPTY, EMPTY]];

  var contentDiv = document.getElementById("content");
 	contentDiv.innerHTML="";
	
	var table=document.createElement("table");
  
  
  for(var i=0; i < grid.length; i++) {
   
    var tr=document.createElement("tr");
    table.appendChild(tr) 

  
 		for(var j=0; j < grid[i].length; j++) {
      
      var td=document.createElement("td");
      td.id = "cell-" + i + "-" + j; 
      td.appendChild(document.createTextNode(grid[i][j]));
      tr.appendChild(td);
      td.addEventListener("click", gameMove, false);
    }
  }



  contentDiv.appendChild(table);


}

 function gameMove () { 
        var parts=this.id.split(/-/), 
            i=parseInt(parts[1],10),	
	          j=parseInt(parts[2],10);

//console.log(this.id, parts, i, j)
        
	  	  if (grid[i][j]!=EMPTY)
            return;     

	//populating grid
        grid[i][j] = currentMark;

        this.appendChild(document.createTextNode(currentMark));
				if (currentMark==X) {
          currentMark=O;
        } else {
					currentMark=X;       
        }
        checkWin();
				noWinner();

      /* result = (condition ? consequent : alternative)
       currentMark= (currentMark==X ? O : X) */

}

function checkWin () {
	
	if (grid[0][0] == grid [0][1] && grid[0][1] == grid[0][2] && grid[0][0] !=EMPTY){
			winner(grid [0][1]); 
	}

	if (grid[1][0] == grid [1][1] && grid[1][1] == grid[1][2] && grid[1][0] !=EMPTY){
			winner(grid [1][1]); 
 	}

	if (grid[2][0] == grid [2][1] && grid[2][1] == grid[2][2] && grid[2][0] !=EMPTY){
			winner(grid [2][1]); 
 	}

	if (grid[0][0] == grid [1][0] && grid[1][0] == grid[2][0] && grid[0][0] !=EMPTY){
			winner(grid [0][0]); 
	}
	if (grid[0][1] == grid [1][1] && grid[1][1] == grid[2][1] && grid[0][1] !=EMPTY){
			winner(grid [0][1]); 
	}
	if (grid[0][2] == grid [1][2] && grid[1][2] == grid[2][2] && grid[0][2] !=EMPTY){
			winner(grid [0][2]); 
	}
	if (grid[0][0] == grid [1][1] && grid[1][1] == grid[2][2] && grid[2][2] !=EMPTY){
			winner(grid [2][2]); 
	}

	if (grid[0][2] == grid [1][1] && grid[1][1] == grid[2][0] && grid[2][0] !=EMPTY){
			winner(grid [2][0]); 
	}
}

function winner (whoWon) {
	alert(whoWon + " won!"); 
	resetBoard();
}

//cat's game-- checkWin() conditions not met after 9 clicks(if gameMove().call.9times)
function noWinner () { 
	for(var i=0; i < grid.length; i++){
		for	(var j=0; j < grid[i].length; j++){ 
			if (grid[i][j]==EMPTY){
				return;
			}	
		}
	}	
	alert("Strange game. The only move to win is not to play.")
	resetBoard();
}		
 

function resetBoard () {
	init();
}
	
