import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/Dashboard';
import ProjectPage from './components/Projects';

class App extends React.Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<React.Fragment>
						<Switch>
							<Route path='/' exact component={HomePage} />
							<Route path='/about' component={ProjectPage} />
						</Switch>
					</React.Fragment>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
