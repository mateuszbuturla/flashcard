import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import config from './config';

import './reset.css';
import './mixins.sass';

import Home from './view/Home/Home';
import LoginRegister from './view/LoginRegister/LoginRegister';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route path="/register" component={props => <LoginRegister {...props} form='register' config={config} />} exact />
						<Route path="/login" component={props => <LoginRegister {...props} form='login' config={config} />} exact />
						<Route path="/" component={Home} exact />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
