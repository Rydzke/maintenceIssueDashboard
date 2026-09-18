// import database if don't exist to localstorage or if somone want force refresh
export function getDatabase(databaseName, force) {
    if (!(localStorage.getItem(databaseName)) || force) {
        fetch(`./${databaseName}.json`).then((response) => response.json()).then((database) => {
            localStorage.setItem(databaseName,JSON.stringify(database));
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