import { StyleSheet, Pressable, Image, SafeAreaView } from 'react-native';

import { Text, View } from '../components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import DropShadow from 'react-native-drop-shadow';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Home'
>;

type Props = {
	navigation: ProfileScreenNavigationProp;
};

export default function Home({ navigation }: Props) {
	const register = () => {
		navigation.navigate('Register');
	};

	const login = () => {
		navigation.navigate('Login');
	};

	const test = () => {
		navigation.navigate('MainPages', { authToken: '' });
	};

	return (
		<SafeAreaView style={styles.container}>
			<Image
				style={styles.film}
				source={require('../assets/images/film-icon.png')}
			></Image>
			<View style={styles.titles}>
				<Text
					style={{
						fontSize: '24',
						marginBottom: 10,
						color: '#707070',
					}}
				>
					Welcome to
				</Text>
				<Text style={{ fontSize: '48', marginBottom: 10, color: '#707070' }}>
					BETTERBOX
				</Text>
				<Text style={{ fontSize: '16', marginBottom: 10, color: '#707070' }}>
					The social movie rating app.
				</Text>
			</View>
			<DropShadow style={styles.shadowProp}>
				<Pressable style={styles.getStarted} onPress={() => login()}>
					<Text
						style={{
							fontSize: '24',
							marginBottom: 10,
							marginTop: 5,
							color: '#fffcf2',
						}}
					>
						Sign In
					</Text>
				</Pressable>
			</DropShadow>

			{/**
			 * Needed to get to profile page for now. Delete if you need to.
			 */}
			{/*<Pressable onPress={() => test()}>
				<Text
					style={{
						fontSize: '24',
						marginBottom: 5,
						marginTop: 5,
						color: '#707070',
					}}
				>
					Test
				</Text>
			</Pressable>*/}

			{/* <Pressable onPress={() => login()}>
				<Text
					style={{
						fontSize: '11',
						marginTop: 10,
						color: '#707070',
						textDecorationLine: 'underline',
						marginBottom: 100,
					}}
				>
					I ALREADY HAVE AN ACCOUNT
				</Text>
			</Pressable> */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	shadowProp: {
		shadowOffset: { width: 0, height: 3 },
		shadowColor: '#171717',
		shadowOpacity: 0.4,
		shadowRadius: 2,
		flex: 2,
	},
	container: {
		headerShown: false,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fffcf2',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	getStarted: {
		backgroundColor: '#ff797f',
		width: 250,
		alignItems: 'center',
		padding: 10,
		borderRadius: 30,
	},
	film: {
		flex: 1,
		width: 100,
		height: 80,
		resizeMode: 'contain',
		paddingBottom: 50,
	},
	titles: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#fffcf2',
	},
});
