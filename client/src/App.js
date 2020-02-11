import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import config from './config';

import './reset.css';
import './mixins.sass';

import Home from './view/Home/Home';
import LoginRegister from './view/LoginRegister/LoginRegister';
import Dashboard from './view/Dashboard/Dashboard';

class App extends React.Component {

	state = {
		user: undefined
	}

	componentDidMount() {
		this.getUser();
	}

	getUser() {
		const cookies = new Cookies();
		this.setState({ user: cookies.get('user') })
	}

	render() {
		const { user } = this.state;
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route path="/dashboard" component={props => <Dashboard {...props} config={config} user={user} />} />
						<Route path="/register" component={props => <LoginRegister {...props} form='register' config={config} user={user} />} exact />
						<Route path="/login" component={props => <LoginRegister {...props} form='login' config={config} user={user} />} exact />
						<Route path="/" component={props => {
							if (user === undefined)
								return (<Home {...props} user={user} />)
							else
								return (<Redirect to='/dashboard' />)
						}} exact />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
