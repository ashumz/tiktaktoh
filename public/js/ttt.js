function init() { 
  var X = "x", 
      O = "o",
      EMPTY="";

  var grid=[[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]];
  
  var table=document.createElement("table");
  
  
  for(var i=0; i < grid.length; i++) {
   
    var tr=document.createElement("tr");
    table.appendChild(tr) 

  
   for(var j=0; j < grid[i].length; j++) {
      
      var td=document.createElement("td");
      td.appendChild(document.createTextNode(grid[i][j]));
      tr.appendChild(td);

      td.addEventListener("click", function () { 
      }, false);
    }
  }

 
  var contentDiv = document.getElementById("content");
  contentDiv.appendChild(table);


}
