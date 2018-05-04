import { StackNavigator } from 'react-navigation';
import Login from '@containers/Login';

const RootNavigator = StackNavigator(
	{
		Login: {
			screen: Login,
		},
	},
	{
		initialRouteName: 'Login',
	}
);

export default RootNavigator;
