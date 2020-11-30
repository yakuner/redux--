import React, { Component } from 'react'

export default class Search extends Component {
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Github用户搜索案例</h3>
				<div>
					<input type="text" placeholder="请输入用户名，随后搜索"/>&nbsp;<button>搜索</button>
				</div>
			</section>
		)
	}
}
