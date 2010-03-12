function init() { 
  var X = "x", 
      O = "o",
      EMPTY="&nbsp;";

  var grid=[[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]];
  
  var table=document.createElement("table");
  
  
  for(var i=0; i < grid.length; i++) {
   
    var tr=document.createElement("tr");
    table.appendChild(tr) 

  
    for(var j=0; j < grid[i].length; j++) {
      
      var td=document.createElement("td");
      td.appendChild(document.createTextNode(grid[i][j])
    }
   
 //console.log(html.join(""));
  var contentDiv = document.getElementById("content");
  contentDiv.innerHTML = html.join("");

