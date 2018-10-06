var a=0;
function addRow(){
    var table= document.getElementById("dynamic-table");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
   
    cell1.innerHTML = "CELL  " + a;
    a=a+1
    cell2.innerHTML = "NEW  " +a;
    a=a+1;
}
