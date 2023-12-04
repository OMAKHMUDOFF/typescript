"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var logView = function (userID, userTitle, todoStatus) {
    console.log("\n  User ID = ".concat(userID, " \n  User Title = ").concat(userTitle, " \n  Todo Status = ").concat(todoStatus, " \n"));
};
axios_1.default.get("https://jsonplaceholder.typicode.com/todos/1").then(function (res) {
    var user = res.data;
    var userID = user.id;
    var userTitle = user.title;
    var todoStatus = user.completed;
    logView(userID, userTitle, todoStatus);
});
