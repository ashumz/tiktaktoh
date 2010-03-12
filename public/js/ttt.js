function init() { 
  var X = "x", 
      O = "o",
      EMPTY="",
      currentMark=X;

  var grid=[[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]];
  
  var table=document.createElement("table");
  
  
  for(var i=0; i < grid.length; i++) {
   
    var tr=document.createElement("tr");
    table.appendChild(tr) 

  
   for(var j=0; j < grid[i].length; j++) {
      
      var td=document.createElement("td");
      td.id = "cell-" + i + "-" + j; 
      td.appendChild(document.createTextNode(grid[i][j]));
      tr.appendChild(td);

      td.addEventListener("click", function () { 
        var parts=this.id.split(/-/), 
            i=parseInt(parts[1],10),	
	    j=parseInt(parts[2],10);

//console.log(this.id, parts, i, j)
        
	if (grid[i][j]!=EMPTY)
            return;     

	//populating grid
        grid[i][j]=currentMark;

        this.appendChild(document.createTextNode(currentMark));
        if (currentMark==X) {
          currentMark=O;
        } else if (currentMark=O) {
          currentMark=X;       
        }
       
        

      /* result = (condition ? consequent : alternative)
       currentMark= (currentMark==X ? O : X) */

      }, false);
    }
  }

 
  var contentDiv = document.getElementById("content");
  contentDiv.appendChild(table);


}


