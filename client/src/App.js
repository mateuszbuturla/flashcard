import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import config from './config';

import './reset.css';
import './mixins.sass';

import Home from './view/Home/Home';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
