import { StyleSheet, Pressable, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};


export default function Home({navigation}: Props) {

	const login = () => {
		// navigation.navigate("TabOneScreen")
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.film}
				source={require("../assets/images/film-icon.png")}></Image>
			<Text style={{ fontSize: "24",marginBottom: 10, color: '#707070', marginTop: -300,}}>Welcome to</Text>
			<Text style={{ fontSize: "48",marginBottom: 10, color: '#707070'}}>BETTERBOX</Text>
			<Text style={{ fontSize: "16",marginBottom: 10, color: '#707070'}}>The social movie rating app.</Text>
			<Pressable style={styles.getStarted} onPress={() => login()}>
				<Text style={{ fontSize: "24",marginBottom: 10, marginTop: 5, color: '#fffcf2'}}>Get Started</Text>
			</Pressable>
			<Pressable>
				<Text style={{ fontSize: "11", marginTop: 10, color: "#707070", textDecorationLine: 'underline', marginBottom: 100,}}>I ALREADY HAVE AN ACCOUNT</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		headerShown: false,
		flex: 1,
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
		marginTop: 200,
	},
	film: {
		flex: 1,
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: -200,
	}
});