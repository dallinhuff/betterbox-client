import { Text, View } from '../components/Themed';
import React from 'react';
import {
	Image,
	KeyboardAvoidingView,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropShadow from 'react-native-drop-shadow';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {};

export default function MakeReview({}: Props) {
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAwareScrollView>
				<View style={styles.header}>
					<Text
						style={{
							color: '#E7D7C1',
							fontSize: 30,
							fontWeight: 'bold',
						}}
					>
						{'BetterBox'}
					</Text>
				</View>

				<View style={styles.info}>
					<Image
						source={require('../assets/images/cars.jpg')}
						style={{ height: 100, width: 70, margin: 15 }}
					></Image>
					<Text style={{ color: '#707070', fontSize: 30 }}>{'Cars'}</Text>
				</View>

				<View style={styles.line} />

				<View style={styles.date}>
					<Text
						style={{
							color: '#707070',
							fontSize: 16,
							fontWeight: 'bold',
							padding: 12,
						}}
					>
						{'Date'}
					</Text>
					<Text style={{ color: '#707070', fontSize: 16, padding: 12 }}>
						{'Monday, April 17, 2023'}
					</Text>
				</View>

				<View style={styles.line} />

				<View style={styles.rating}>
					<Text
						style={{
							color: '#707070',
							fontSize: 16,
							fontWeight: 'bold',
							padding: 12,
						}}
					>
						{'Rate'}
					</Text>
					<View style={styles.stars}>
						<Image
							source={require('../assets/images/star.png')}
							style={styles.starSelected}
						/>
						<Image
							source={require('../assets/images/star.png')}
							style={styles.starSelected}
						/>
						<Image
							source={require('../assets/images/star.png')}
							style={styles.starSelected}
						/>
						<Image
							source={require('../assets/images/star.png')}
							style={styles.starSelected}
						/>
						<Image
							source={require('../assets/images/star.png')}
							style={styles.starSelected}
						/>
					</View>
				</View>

				<View style={styles.line} />

				<View style={styles.review}>
					<Text
						style={{
							color: '#707070',
							fontSize: 16,
							fontWeight: 'bold',
							padding: 12,
						}}
					>
						{'Review'}
					</Text>
					<TextInput
						style={styles.input}
						autoCorrect={true}
						placeholder="Add a review..."
						placeholderTextColor="#707070"
					/>
				</View>

				<View style={styles.line} />

				<View style={styles.buttons}>
					<Text
						style={{
							color: '#AEAEAE',
							fontSize: 16,
							fontWeight: 'bold',
							padding: 12,
						}}
					>
						{'CANCEL'}
					</Text>
					<Text
						style={{
							color: '#FF797F',
							fontSize: 22,
							fontWeight: 'bold',
							padding: 12,
						}}
					>
						{'SAVE'}
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		headerShown: false,
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fffcf2',
	},
	header: {
		headerShown: false,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor: '#fffcf2',
	},
	info: {
		flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fffcf2',
	},
	date: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#fffcf2',
	},
	rating: {
		flex: 2,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		backgroundColor: '#fffcf2',
	},
	stars: {
		flexDirection: 'row',
		backgroundColor: '#fffcf2',
		paddingLeft: 12,
		paddingBottom: 12,
	},
	starSelected: {
		width: 25,
		height: 25,
	},
	halfStar: {
		width: 8,
		height: 15,
		overflow: 'hidden',
	},
	starUnselected: {
		display: 'none',
	},
	review: {
		flex: 6,
		height: 210,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: '#fffcf2',
	},
	input: {
		height: 44,
		width: '100%',
		padding: 12,
		backgroundColor: '#fffcf2',
		color: '#707070',
		fontSize: 20,
	},
	buttons: {
		flex: 1.5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#fffcf2',
	},
	line: {
		alignSelf: 'stretch',
		borderBottomColor: '#E7D7C1',
		margin: 5,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});
