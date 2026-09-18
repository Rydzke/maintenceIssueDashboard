export function getIssueAndApartament() {   
    if (!(localStorage.getItem("databaseIssue"))){
        fetch('./databaseIssue.json').then((response) => response.json()).then((databaseIssue) => {
            localStorage.setItem("databaseIssue",JSON.stringify(databaseIssue));
        });
    }
}
export function dipslayIssue() {
    function createNewCell(fatherElement,text) {
        let newCell = document.createElement("td");
        newCell.innerText = text;
        fatherElement.appendChild(newCell);
    }
    
    let issueList = document.getElementById("issueList");
    databaseIssue.forEach(issue => {
        let newRow = document.createElement("tr");
        let namesInJSON = ["id","idApartament","category","description","location","dateAdd","dateSolved","priority","status"]
        namesInJSON.forEach(namefromJSON => {
            createNewCell(newRow, issue[namefromJSON]);
        });
        issueList.appendChild(newRow);
    });
}