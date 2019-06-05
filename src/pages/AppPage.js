import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { BaseComponent } from "my-utils/core"
import { AppConfig } from "my-constants"
import { RenderRoutes } from 'my-routes';

class AppPage extends BaseComponent {
	testA = _ => {
		return false
	}

	render() {
		
		return (
			<Router>
				<RenderRoutes />
				<div className="App">
					<button type="button" onClick={this.testA}> Click </button>
					<header className="App-header">
						<h1>Hello World, {AppConfig.API_SERVER}</h1>
					</header>
				</div>
			</Router>
		);
	}
}
export default AppPage