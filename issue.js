function createNewCell(fatherElement,text) {
    let newCell = document.createElement("td");
    newCell.innerText = text;
    fatherElement.appendChild(newCell);
}
// import database if don't exist to localstorage or if somone want force refresh
export function getDatabase(databaseName, force) {
    if (!(localStorage.getItem(databaseName)) || force) {
        fetch(`./${databaseName}.json`).then((response) => response.json()).then((database) => {
            localStorage.setItem(databaseName,JSON.stringify(database));
        });
    }
}
export function addCellsToTable(tableId, databaseName) {
    let database = JSON.parse(localStorage.getItem(databaseName));
    let table = document.getElementById(tableId);
    database.forEach(databaseElement => {
        let newRow = document.createElement("tr");
        let databaseKeys = Object.keys(databaseElement)
        console.log(databaseElement);
        databaseKeys.forEach(namefromJSON => {
            createNewCell(newRow, databaseElement[namefromJSON]);
        });
        table.appendChild(newRow);
    });
}
// names from form must be exact like in database
export function addNewElementToDatabaseIssue(formId,tableId) {
    let form = document.getElementById(formId);
    let database = JSON.parse(localStorage.getItem("databaseIssue"));
    let newIssue = new Object;
    newIssue.id = database.length+1;
    newIssue.idApartament = form.idApartament.value;
    newIssue.category = form.category.value;
    newIssue.description = form.description.value;
    newIssue.dateAdd = new Date;
    newIssue.dateAdd = `${newIssue.dateAdd.getDay()}-${newIssue.dateAdd.getMonth()}-${newIssue.dateAdd.getFullYear()}`
    newIssue.dateSolved = "";
    newIssue.priority = form.priority.value;
    newIssue.status = form.status.value;
    database.push(newIssue)
    localStorage.setItem("databaseIssue",JSON.stringify(database));
}