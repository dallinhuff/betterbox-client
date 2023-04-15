import { dotenv } from 'react-native-dotenv';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Feed from './screens/Feed';
import PostView from './screens/PostView';
import MovieView from './screens/MovieView';
import MakeReview from './screens/MakeReview';
import Search from './screens/Search';
import Notifications from './screens/Notifications';
import EmailRegister from './screens/EmailRegister';
import EmailLogin from './screens/EmailLogin';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootSiblingParent } from 'react-native-root-siblings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './constants/Colors';

export type RootStackParamList = {
	Home: undefined; // undefined because you aren't passing any params to the home screen
	//   Register: undefined,
	MainPages: { authToken: string };
	FeedPages: undefined;
	Login: undefined;
	Profile: { name: string };
	Register: undefined;
	EmailRegister: undefined;
	EmailLogin: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function FeedPages({ route }: any) {
	return (
		<Stack.Navigator initialRouteName="Feed">
			<Stack.Screen
				name="Feed"
				component={Feed}
				options={{
					headerShown: false,
				}}
				//initialParams={{ authToken: route.params.authToken }}
			/>
			<Stack.Screen
				name="PostView"
				component={PostView}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="MovieView"
				component={MovieView}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="MakeReview"
				component={MakeReview}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
function ProfilePages({ route }: any) {
	return (
		<Stack.Navigator initialRouteName="Profile">
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					headerShown: false,
				}}
				//initialParams={{ authToken: route.params.authToken }}
			/>
			<Stack.Screen
				name="PostView"
				component={PostView}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="MovieView"
				component={MovieView}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

function SearchPages({ route }: any) {
	return (
		<Stack.Navigator initialRouteName="Search">
			<Stack.Screen
				name="Search"
				component={Search}
				options={{
					headerShown: false,
				}}
				//initialParams={{ authToken: route.params.authToken }}
			/>
			<Stack.Screen
				name="MovieView"
				component={MovieView}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

function MainPages({ route }: any) {
	return (
		<Tab.Navigator
			initialRouteName="ProfilePages"
			screenOptions={{
				// tabBarActiveTintColor: navStyles.primaryColor.color,
				// tabBarInactiveTintColor: navStyles.secondaryColor.color,
				// tabBarStyle: navStyles.primaryBG,
				headerShown: false,
			}}
		>
			<Tab.Screen
				name="FeedPages"
				component={FeedPages}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="home"
							color={color}
							size={26}
						/>
					),
					tabBarShowLabel: false,
				}}
				//initialParams={{ authToken: route.params.authToken }}
			/>
			<Tab.Screen
				name="SearchPages"
				component={SearchPages}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="magnify"
							color={color}
							size={26}
						/>
					),
					tabBarShowLabel: false,
				}}
			/>
			<Tab.Screen
				name="MakeReview"
				component={MakeReview}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="plus-box"
							color={Colors.action}
							size={26}
						/>
					),
					tabBarShowLabel: false,
				}}
			/>
			<Tab.Screen
				name="ProfilePages"
				component={ProfilePages}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="account"
							color={color}
							size={26}
						/>
					),
					tabBarShowLabel: false,
				}}
				//initialParams={{ authToken: route.params.authToken }}
			/>
			<Tab.Screen
				name="Notifications"
				component={Notifications}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="bell"
							color={color}
							size={26}
						/>
					),
					tabBarShowLabel: false,
				}}
			/>
		</Tab.Navigator>
	);
}

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();
	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<RootSiblingParent>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="Home">
						<Stack.Screen
							name="Home"
							component={Home}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Register"
							component={Register}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Login"
							component={Login}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="EmailRegister"
							component={EmailRegister}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="EmailLogin"
							component={EmailLogin}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="MainPages"
							component={MainPages}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</RootSiblingParent>
		);
	}
}
