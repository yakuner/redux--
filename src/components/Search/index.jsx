import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

	search = ()=>{
		const {keyWord} = this
		//请求之前要：将isLoading变为true，将isFirst变为false
		this.props.updateAppState({isLoading:true,isFirst:false})
		axios.get(`http://localhost:3000/search/users?q=${keyWord.value}`).then(
			response => {
				console.log('成功了',response.data);
				//请求成功了要：存储用户信息，将isLoading变为false
				this.props.updateAppState({isLoading:false,users:response.data.items})
			},
			error => {
				console.log('失败了',error);
				//请求成功了要：存储错误信息，将isLoading变为false
				this.props.updateAppState({isLoading:false,errorMsg:error.message})
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Github用户搜索案例</h3>
				<div>
					<input ref={c => this.keyWord = c} type="text" placeholder="请输入用户名，随后搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
