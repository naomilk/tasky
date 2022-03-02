import React from "react";
import { ToDoItem } from "./ToDoItem";

export class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toDoItems: props.items }
    }

    render() {
        const items = this.state.toDoItems.map((item, index) => {
            <ToDoItem text={item.text} key={index} />
        })
        return (
            <div>
                { items }
            </div>
        )
    }
}
