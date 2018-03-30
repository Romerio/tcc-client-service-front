import React, { Component } from "react";

import PageHeader from '../template/pageHeader'
import TodoFrom from './todoForm'
import TodoList from './todoList'

class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoFrom />
                <TodoList />
            </div>
        )
    }
}

export default Todo