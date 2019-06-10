import React from 'react';

import { BaseComponent } from "my-utils/core"
import { MainLayout, AuthenticationLayout } from './layouts'

const RenderComponent = () => {
	const jwt_token = localStorage.getItem('jwt-token');
	let component = null;

	if (!jwt_token) {
		component = ( <AuthenticationLayout /> );
	} else {
		component = ( <MainLayout /> );
	}

	return component;
}

class AppPage extends BaseComponent {
	render() {
		return (
			<RenderComponent />
		);
	}
}

export default AppPage;