export interface Todo {
    id: number;
    task: string;
    done: boolean;
    createdAt: Date;
}
export declare enum TodoAction {
    ADD = "add",
    REMOVE = "remove",
    LIST = "list",
    TOGGLE = "toggle",
    CLEAR = "clear",
    HELP = "help",
    EXIT = "exit"
}
export declare enum TodoStatus {
    PENDING = "pending",
    COMPLETED = "completed"
}
//# sourceMappingURL=types.d.ts.map