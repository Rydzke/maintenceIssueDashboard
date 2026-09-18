import("./issue.js").then(({getDatabase, addCellsToTable, addNewElementToDatabaseIssue}) =>{
    getDatabase("databaseIssue");
    getDatabase("databaseApartament");
    addCellsToTable("issueList","databaseIssue")
    document.getElementById("addIssue").addEventListener("submit",()=>{
        addNewElementToDatabaseIssue("addIssue")
    })
})