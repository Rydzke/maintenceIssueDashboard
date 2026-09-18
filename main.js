import("./issue.js").then(({getDatabase, addCellsToTable}) =>{
    getDatabase("databaseIssue");
    getDatabase("databaseApartament");
    addCellsToTable("issueList","databaseIssue")
})