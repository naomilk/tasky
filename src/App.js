import React from "react";
import './App.css';
import { InputField } from "./components/InputField"
import { ToDoList } from "./components/ToDoList"

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: []}
    this.handleItemAdded = this.handleItemAdded.bind(this);
  }

  handleItemAdded(item) {
    this.setState({ items: [...this.state.items, item]}, () => {
      console.log(this.state.items)
    });
  }

  render() {
    return (
      <div id="root">
        <h1>What would you like to achieve today?</h1>
        <div className="add-new-task">
          <InputField onItemAdded={this.handleItemAdded }/>
        </div>
        <ToDoList items={this.state.items}/>
      </div>
    )
  }
}
