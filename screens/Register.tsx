import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RootStackParamList } from '../App';
import { Text, View } from '../components/Themed';
import { StyleSheet, Pressable, Image } from 'react-native';
import DropShadow from 'react-native-drop-shadow';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Home'
>;

type Props = {
	navigation: ProfileScreenNavigationProp;
};
export default function Register({ navigation }: Props) {
	const login = () => {
		navigation.navigate('Login');
	};

	return (
		<KeyboardAwareScrollView style={styles.fullContainer}>
			<Pressable onPress={() => navigation.navigate('Home')}>
				<Image
					style={styles.backButton}
					source={require('../assets/images/back.png')}
				></Image>
			</Pressable>
			<View style={styles.container}>
				<Image
					style={styles.film}
					source={require('../assets/images/film-icon.png')}
				></Image>
				<View style={{ backgroundColor: '#fffcf2', marginBottom: 200 }}>
					{/* <Pressable style={styles.button}>
                        <Text style={{color: '#fffcf2'}}>Sign in with apple</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={{color: '#fffcf2'}}>Sign in with google</Text>
                    </Pressable> */}
					<DropShadow style={styles.shadowProp}>
						<Pressable
							style={styles.button}
							onPress={() => navigation.navigate('EmailRegister')}
						>
							<Text style={styles.signUp}>Sign up with email</Text>
						</Pressable>
					</DropShadow>
				</View>
				<Pressable onPress={() => login()}>
					<Text
						style={{
							fontSize: 16,
							marginTop: 10,
							color: '#707070',
							textDecorationLine: 'underline',
							marginBottom: 100,
						}}
					>
						I ALREADY HAVE AN ACCOUNT
					</Text>
				</Pressable>
			</View>
		</KeyboardAwareScrollView>
	);
}

const styles = StyleSheet.create({
	shadowProp: {
		shadowOffset: { width: 0, height: 3 },
		shadowColor: '#171717',
		shadowOpacity: 0.4,
		shadowRadius: 2,
	},
	fullContainer: {
		backgroundColor: '#fffcf2',
	},
	container: {
		// headerShown: false,
		flex: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fffcf2',
	},
	button: {
		backgroundColor: '#fff',
		width: 300,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		borderRadius: 30,
		shadowColor: '#000',
		elevation: 20,
	},
	signUp: {
		color: '#ff797f',
		fontSize: 20,
	},
	film: {
		flex: 1,
		width: 100,
		height: 80,
		paddingBottom: 150,
		resizeMode: 'contain',
	},
	backButton: {
		// alignItems: "left",
		marginTop: 50,
		marginLeft: 40,
		width: 40,
		height: 40,
	},
});
