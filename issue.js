// import database if don't exist to localstorage or if somone want force refresh
export function getDatabase(databaseName, force) {
    if (!(localStorage.getItem(databaseName)) || force) {
        fetch(`./${databaseName}.json`).then((response) => response.json()).then((database) => {
            localStorage.setItem(databaseName,JSON.stringify(database));
        });
    }
}
export function addCellsToTable(tableId, databaseName) {
    function createNewCell(fatherElement,text) {
        let newCell = document.createElement("td");
        newCell.innerText = text;
        fatherElement.appendChild(newCell);
    }
    let database = JSON.parse(localStorage.getItem(databaseName));
    let table = document.getElementById(tableId);
    database.forEach(databaseElement => {
        let newRow = document.createElement("tr");
        let keysInJSON = Object.keys(databaseElement)
        console.log(databaseElement);
        keysInJSON.forEach(namefromJSON => {
            createNewCell(newRow, databaseElement[namefromJSON]);
        });
        table.appendChild(newRow);
    });
}