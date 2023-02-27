import Home from './screens/Home'
import Register from './screens/Register'
import Login from './screens/Login'
import EmailRegister from './screens/EmailRegister';
import EmailLogin from './screens/EmailLogin';
import { NavigationContainer } from "@react-navigation/native";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
//   Register: undefined,
  Profile: { name: string }; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();



export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();
	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
					<Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
					<Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
					<Stack.Screen name="EmailRegister" component={EmailRegister} options={{headerShown: false}}/>
					<Stack.Screen name="EmailLogin" component={EmailLogin} options={{headerShown: false}}/>
				</Stack.Navigator>
			</NavigationContainer>
			
		);
	}
}
