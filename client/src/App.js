import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import config from './config';

import './reset.sass';
import './mixins.sass';
import './style.sass';

import Home from './view/Home/Home';
import LoginRegister from './view/LoginRegister/LoginRegister';
import Dashboard from './view/Dashboard/Dashboard';
import NoMatch from './view/NoMatch/NoMatch';

class App extends React.Component {

	state = {
		user: undefined
	}

	componentDidMount() {
		this.getUser();
	}

	getUser() {
		const cookies = new Cookies();
		if (cookies.get('user'))
			this.setState({ user: cookies.get('user') })
		else
			this.setState({ user: undefined })
	}

	render() {
		const { user } = this.state;
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route path="/dashboard" component={props => {
							if (user === undefined)
								return (<Redirect to='/login' />)
							else
								return (<Dashboard {...props} config={config} user={user} getUser={this.getUser.bind(this)} />)
						}} />
						<Route path="/register" component={props => <LoginRegister {...props} form='register' config={config} user={user} />} exact />
						<Route path="/login" component={props => <LoginRegister {...props} form='login' config={config} user={user} getUser={this.getUser.bind(this)} />} exact />
						<Route path="/" component={props => {
							if (user === undefined)
								return (<Home {...props} user={user} />)
							else
								return (<Redirect to='/dashboard' />)
						}} exact />
						<Route component={NoMatch} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
