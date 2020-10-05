import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/Dashboard';
import ProjectPage from './components/Projects';
import Menu from './components/Menu';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<HashRouter baseName='/'>
					<React.Fragment>
						<Menu />
						<div className='app-wrapper'>
							<div className='app-wrapper2'>
								<Switch>
									<Route
										path='/'
										exact
										component={HomePage}
									/>
									<Route
										path='/projects'
										component={ProjectPage}
									/>
								</Switch>
							</div>
						</div>
					</React.Fragment>
				</HashRouter>
			</div>
		);
	}
}

export default App;
