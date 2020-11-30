import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	state = {
		mouseIn:false //标识鼠标是否在当前todo项中
	}

	//勾选or取消勾选一个todo的回调
	handleCheck = (id)=>{
		return ({target})=>{
			//调用App传递过来的checkTodo
			this.props.checkTodo(id,target.checked)
		}
	}

	handleMouse = (mouseIn)=>{
		return ()=>{
			this.setState({mouseIn})
		}
	}

	render() {
		const {id,name,done} = this.props
		const {mouseIn} = this.state
		return (
			<li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{backgroundColor:mouseIn ? '#ddd' : 'white'}}>
				<label>
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/> <span>{name}</span>
				</label>
				<button className="btn btn-danger" style={{display:mouseIn ? 'block' :'none'}}>删除</button>
			</li>
		)
	}
}