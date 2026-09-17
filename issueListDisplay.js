function createNewCell(fatherElement,text) {
    let newCell = document.createElement("td");
    newCell.innerText = text;
    fatherElement.appendChild(newCell);
}
fetch('./databaseIssue.json').then((response) => response.json()).then((databaseIssue) => {
    let issueList = document.getElementById("issueList");
    console.log(databaseIssue);
    
    databaseIssue.forEach(issue => {
        let newRow = document.createElement("tr");
        let namesInJSON = ["id","idApartament","category","description","location","dateAdd","dateSolved","priority","status"]
        namesInJSON.forEach(namefromJSON => {
            createNewCell(newRow, issue[namefromJSON]);
        });
        issueList.appendChild(newRow);
    });
});