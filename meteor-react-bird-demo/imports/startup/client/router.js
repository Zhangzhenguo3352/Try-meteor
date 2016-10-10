import React,{Component} from 'react'
import { Router, Route, IndexRoute,browserHistory } from 'react-router'

import Signup from '../../ui/SignUp.js'
import Login from '../../ui/LogIn.js'
import Home from '../../ui/Home.js'
import App from '../../ui/app.js'
import Chat from '../../ui/Chat.js'

import Account from '../../ui/Account.js'

export const renderRoutes = () => (
  	<Router history={browserHistory}> 
  		<Route path="/" component={App}>
  			<IndexRoute component={Home}/>
			<Route path="/signup" component={Signup} />
			<Route path="/login" component={Login} />
			<Route path="/account" component={Account}/>
			<Route path="/chat" component={Chat}/>
  		</Route>
	</Router>
);



