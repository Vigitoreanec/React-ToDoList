'use strict';
import { Component } from "react";
import Header from './Header/Header';
import AddToDo from "./AddTODO/AddToDo";




class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 1, value: 'Fist ToDo', checked: false },
                { id: 2, value: 'Second ToDo', checked: false },
                { id: 3, value: 'Thred ToDo', checked: true }
            ],
            value: ''
        };


    }
    // chengeToDo = (elem) => {
    //     return { elem, checked: !elem.checked }
    // }

    chengeToDo = (id) => {
        let newToDo = this.state.tasks.filter(item => {
            if (item.id == id) {
                item.checked = !item.checked
            }
            return item
        })
        this.setState(newToDo);
    }

    deleteToDo = (id) => {
        const newToDo = this.state.tasks.filter(item => item.id != id);
        this.setState({ tasks: newToDo });
    };

    addToDO = (text) => {
        return { id: Math.random(), value: text, checked: false }
    };


    render() {
        const { tasks, newTask } = this.state;

        return <div>

            <input type="Text"
                placeholder="Введите задачу"
                value={this.state.value}
                onChange={(event) => this.setState({ value: event.target.value })}
            >
            </input>
            <button onClick={() => this.setState(prev => (
                {
                    tasks: [...prev.tasks, this.addToDO(prev.value)],
                    value: ''
                }
            ))}
            >Добавить</button>
            {/* {this.state.value} */}
            <ol>

                {
                    tasks.map(item => (
                        <li key={item.id}>
                            <label >
                                <input type="checkbox"
                                    checked={item.checked} onChange={() =>
                                        //this.setState(
                                        // prev => {
                                        //     const index = prev.tasks.findIndex(el => item.id == el.id);
                                        //     return {tasks: prev.tasks.with(index, chengeToDo(prev.tasks[index])) }
                                        // }
                                        //)}
                                        this.chengeToDo(item.id)}
                                />
                                <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}
                                    onChange={(event) => this.setState({ value: event.target.value })} >
                                    {item.value}
                                </span>
                            </label>
                            <button onClick={() => this.deleteToDo(item.id)}>X</button>
                        </li>
                    ))
                }
            </ol>
        </div>

    }

}


export default function TODO() { // app
    return <div class="container">

        <h1>ToDo List</h1>

        <Header />
        <ToDoList />
    </div>
}