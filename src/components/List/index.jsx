import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
	render() {
		const {todos,checkTodo} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map((todoObj)=>{
						return <Item key={todoObj.id} {...todoObj} checkTodo={checkTodo}/>
					})
				}
			</ul>
		)
	}
}
