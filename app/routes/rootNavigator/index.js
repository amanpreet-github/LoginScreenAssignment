import { StackNavigator } from 'react-navigation';
import { Root } from "native-base";
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

// export default () =>
//   <Root>
//     <RootNavigator />
//   </Root>;
export default  RootNavigator;
