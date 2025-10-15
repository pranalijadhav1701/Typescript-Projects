// Enum for different actions
export var TodoAction;
(function (TodoAction) {
    TodoAction["ADD"] = "add";
    TodoAction["REMOVE"] = "remove";
    TodoAction["LIST"] = "list";
    TodoAction["TOGGLE"] = "toggle";
    TodoAction["CLEAR"] = "clear";
    TodoAction["HELP"] = "help";
    TodoAction["EXIT"] = "exit";
})(TodoAction || (TodoAction = {}));
// Enum for todo status
export var TodoStatus;
(function (TodoStatus) {
    TodoStatus["PENDING"] = "pending";
    TodoStatus["COMPLETED"] = "completed";
})(TodoStatus || (TodoStatus = {}));
