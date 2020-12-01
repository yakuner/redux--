import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

	state = {
		users:[], //用户信息
		isLoading:false, //标识是否处于加载中
		isFirst:true, //标识是否初次展示
		errorMsg:'' //错误信息
	}

	componentDidMount(){
		//订阅消息
		this.token = PubSub.subscribe('update_list_state',(msg,stateObj)=>{
			this.setState(stateObj)
		})
	}

	componentWillUnmount(){
		//取消订阅
		PubSub.unsubscribe(this.token)
	}

	render() {
		const {users,isLoading,isFirst,errorMsg} = this.state
		return (
			<div className="row">
				{
					isFirst ? <h1>欢迎使用</h1> : 
					isLoading ? <h1>Loading......</h1> :
					errorMsg ? <h1>{errorMsg}</h1> :
					users.map((userObj,index)=>{
						return (
							<div className="card" key={index}>
								<a href={userObj.html_url} rel="noreferrer" target="_blank">
									<img src={userObj.avatar_url} alt="pic" style={{width:'100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
