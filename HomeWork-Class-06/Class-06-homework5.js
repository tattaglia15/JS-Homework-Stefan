function createTable() {
    rowNum = prompt("Enter Number of Rows");
    colNum = prompt("Enter Number of Colums");
    for(let r=0; r < parseInt(rowNum,10); r++) {
    let x = document.getElementById("myTable").insertRow(r);
    for(let c = 0; c < parseInt(colNum,10); c++) {
        let y = x.insertCell(c);
         y.innerHTML =`Row ${r} Column ${c}` 
        }
    }
}