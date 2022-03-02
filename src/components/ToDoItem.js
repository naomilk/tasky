import React from "react";
import { InputField } from './InputField'
import './style/ToDoItem.css'

export class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            isTicked: false,
        }
        this.completeItem = this.completeItem.bind(this)
    }

    completeItem() {
        this.setState({ isTicked: ! this.state.isTicked })
    }

    render() {
        return (
            <div className="to-do-item">
                <input className="checkbox" type="checkbox" checked={this.state.isTicked} onClick={this.completeItem}/>
                <p>{ this.state.text }</p>
            </div>
        )
    }
}
