import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {

	//初始化状态
	state = {
		todos:[
			{id:'001',name:"吃饭",done:false},
			{id:'002',name:"睡觉",done:true},
			{id:'003',name:"打程老师",done:true},
			{id:'004',name:"学习",done:true},
		]
	}

	//状态在哪里，操作状态的方法就在哪里
	addTodo = (todoObj)=>{
		//获取原来的todos
		const {todos} = this.state
		//更新状态
		this.setState({todos:[todoObj,...todos]})

		//不推荐下面的写法，因为如下写法通过非setState形式修改了state中的值
		//因而如下写法，在某些情况下状态不更新
		/* let {todos} = this.state
		todos.unshift(todoObj)
		this.setState({todos}) */
	}

	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos={this.state.todos}/>
					<Footer/>
				</div>
			</div>
		)
	}
}
