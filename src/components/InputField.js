import React from "react";
import './style/InputField.css';
import { ToDoMenu } from './ToDoList';

export class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { addItem: props.onItemAdded }
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateInputValue(e) {
        const input = document.getElementById('user-input')
        this.state.addItem({ text: input.value })
    }

    render() {
        return (
            <div className="text-box">
                <label>
                    <input id="user-input" type="text" placeholder="Take the dog for a walk..." />
                </label>
                <button onClick = { this.updateInputValue }>Add to list</button>
            </div>
        )
    }
}
