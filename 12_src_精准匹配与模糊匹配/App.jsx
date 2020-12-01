import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，我们使用a标签进行页面的跳转 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a> */}

							{/* React中，使用Link进行路径的切换 */}
							<NavLink activeClassName="demo" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="demo" className="list-group-item" to="/home/a/b/c/d/">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
							{/* 注册路由 */}
							<Switch>
								<Route path="/about" exact={true} component={About}/>
								<Route path="/home/a/b/" exact={true} component={Home}/>
							</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
