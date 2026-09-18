import("./issue.js").then(({getDatabase}) =>{
    getDatabase("databaseIssue");
    getDatabase("databaseApartament");
})