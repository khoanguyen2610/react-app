import DashboardPage from 'my-pages/DashboardPage';
import LoginPage from 'my-pages/auth/LoginPage';
import RoutesService from './RoutesService'

const Routes = [
	{
		path: "/",
		exact: true,
		component: DashboardPage,
	},
	// authentication
	{
		path: RoutesService.getPath('ADMIN', 'AUTH_LOGIN'),
		exact: true,
		component: LoginPage,
	},
	{
		path: RoutesService.getPath('ADMIN', 'DASHBOARD'),
		exact: true,
		component: DashboardPage,
	},
	{
		path: '*',
		exact: true,
		component: DashboardPage,
	},
];

export default Routes;