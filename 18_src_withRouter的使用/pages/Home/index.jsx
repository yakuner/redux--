import React, { Component } from 'react'
import Message from './Message'
import News from './News'
import {Route,Switch,NavLink} from 'react-router-dom'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h3>我是Home组件的内容</h3>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<NavLink className="list-group-item" activeClassName="demo" to="/home/news">News</NavLink>
						</li>
						<li>
							<NavLink className="list-group-item" activeClassName="demo" to="/home/message">Message</NavLink>
						</li>
					</ul>
					<div>
						{/* 注册路由 */}
						<Switch>
							<Route path="/home/news" component={News}/>
							<Route path="/home/message" component={Message}/>
						</Switch>
					</div>
				</div>
			</div>
			
		)
	}
}
