import Home from './screens/Home'
import Register from './screens/Register'
import Login from './screens/Login'
import Profile from './screens/Profile'
import Story from './screens/Story'
import Followers from './screens/Followers'
import Following from './screens/Following'
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
					<Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
					<Stack.Screen name="Story" component={Story} options={{headerShown: false}}/>
					<Stack.Screen name="Followers" component={Followers} options={{headerShown: false}}/>
					<Stack.Screen name="Following" component={Following} options={{headerShown: false}}/>
					{/* <Stack.Screen name="Tab One" component={TabOneScreen} /> */}
					{/* <Stack.Screen
						name="Profile"
						component={Profile}
						initialParams={{ userId: user.id }}
					/>
					<Stack.Screen name="Feed" component={Feed} /> */}
				</Stack.Navigator>
			</NavigationContainer>
			
		);
	}
}
