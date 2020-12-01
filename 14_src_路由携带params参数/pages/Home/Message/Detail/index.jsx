import React, { Component } from 'react'

const mockData = [
	{id:'001',content:'你好，尚硅谷'},
	{id:'002',content:'你好，我未来的女朋友'},
	{id:'003',content:'你好，我未来的男朋友'},
]
export default class Detail extends Component {
	render() {

		//获取传递过来的params参数
		const {id,title} = this.props.match.params

		const result = mockData.find( detailObj =>detailObj.id === id)

		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{result.content}</li>
			</ul>
		)
	}
}
