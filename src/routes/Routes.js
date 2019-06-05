import DashboardPage from 'my-pages/DashboardPage';
import RoutesService from './RoutesService'

const Routes = [
	{
		path: "/",
		exact: true,
		component: DashboardPage,
	},
	{
		path: RoutesService.getPath('ADMIN', 'DASHBOARD'),
		exact: true,
		component: DashboardPage,
	},

];

export default Routes;