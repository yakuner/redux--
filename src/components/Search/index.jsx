import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

	search = ()=>{
		const {keyWord} = this
		
		axios.get(`http://localhost:3000/search/users2?q=${keyWord.value}`).then(
			response => {
				console.log('成功了',response.data);
				this.props.saveUsers(response.data.items)
			},
			error => {console.log('失败了',error);}
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
