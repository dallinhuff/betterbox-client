import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import {
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {};

export default function Notifications({}: Props) {
	const [text1, setText1] = useState('Following');
	const [text2, setText2] = useState('Follow');

	const onPressHandler1 = (event) => {
		if (text1 == 'Follow') {
			setText1('Following');
		} else {
			setText1('Follow');
		}
	};

	const button1Style = function (state) {
		if (state == 'Follow') {
			return {
				flex: 1,
				backgroundColor: '#FF797F',
				borderRadius: 5,
				borderStyle: 'solid',
				height: 30,
				width: 50,
				marginRight: 12,
				justifyContent: 'center',
				alignItems: 'center',
			};
		} else {
			return {
				flex: 1,
				backgroundColor: '#fffcf2',
				borderRadius: 5,
				borderStyle: 'solid',
				borderColor: '#707070',
				borderWidth: 1,
				height: 30,
				width: 50,
				marginRight: 12,
				justifyContent: 'center',
				alignItems: 'center',
			};
		}
	};

	const button1Text = function (state) {
		if (state == 'Follow') {
			return {
				color: '#fffcf2',
				fontSize: 16,
			};
		} else {
			return {
				color: '#707070',
				fontSize: 16,
			};
		}
	};

	const onPressHandler2 = (event) => {
		if (text2 == 'Follow') {
			setText2('Following');
		} else {
			setText2('Follow');
		}
	};

	const button2Style = function (state) {
		if (state == 'Follow') {
			return {
				flex: 1,
				backgroundColor: '#FF797F',
				borderRadius: 5,
				borderStyle: 'solid',
				height: 30,
				width: 50,
				marginRight: 12,
				justifyContent: 'center',
				alignItems: 'center',
			};
		} else {
			return {
				flex: 1,
				backgroundColor: '#fffcf2',
				borderRadius: 5,
				borderStyle: 'solid',
				borderColor: '#707070',
				borderWidth: 1,
				height: 30,
				width: 50,
				marginRight: 12,
				justifyContent: 'center',
				alignItems: 'center',
			};
		}
	};

	const button2Text = function (state) {
		if (state == 'Follow') {
			return {
				color: '#fffcf2',
				fontSize: 16,
			};
		} else {
			return {
				color: '#707070',
				fontSize: 16,
			};
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
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

				<Text
					style={{
						color: '#707070',
						fontSize: 16,
						fontWeight: 'bold',
						padding: 12,
					}}
				>
					{'This Week'}
				</Text>

				<View style={styles.notification}>
					<Image
						source={require('../assets/images/guido.png')}
						style={{ flex: 1, maxHeight: 50, maxWidth: 50, margin: 5 }}
					></Image>
					<View style={styles.description}>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
								fontWeight: 'bold',
							}}
						>
							{'DHuff'}
						</Text>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
							}}
						>
							{'started following you.'}
						</Text>
						<Text
							style={{
								color: '#b3b3b3',
								fontSize: 16,
							}}
						>
							{'3d'}
						</Text>
					</View>
					<Pressable style={button1Style(text1)} onPress={onPressHandler1}>
						<Text style={button1Text(text1)}>{text1}</Text>
					</Pressable>
				</View>
				<View style={styles.line} />

				<Text
					style={{
						color: '#707070',
						fontSize: 16,
						fontWeight: 'bold',
						padding: 12,
					}}
				>
					{'This Month'}
				</Text>

				<View style={styles.notification}>
					<Image
						source={require('../assets/images/luigi.png')}
						style={{ flex: 1, maxHeight: 50, maxWidth: 50, margin: 5 }}
					></Image>
					<View style={styles.description}>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
								fontWeight: 'bold',
							}}
						>
							{'CHammond'}
						</Text>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
							}}
						>
							{'started following you.'}
						</Text>
						<Text
							style={{
								color: '#b3b3b3',
								fontSize: 16,
							}}
						>
							{'2w'}
						</Text>
					</View>
					<Pressable style={button2Style(text2)} onPress={onPressHandler2}>
						<Text style={button2Text(text2)}>{text2}</Text>
					</Pressable>
				</View>
				<View style={styles.line} />

				<View style={styles.notification}>
					<Image
						source={require('../assets/images/guido.png')}
						style={{ flex: 1, maxHeight: 50, maxWidth: 50, margin: 5 }}
					></Image>
					<View style={styles.description}>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
								fontWeight: 'bold',
							}}
						>
							{'DHuff and 13 others'}
						</Text>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
							}}
						>
							{'liked your review for Cars.'}
						</Text>
						<Text
							style={{
								color: '#b3b3b3',
								fontSize: 16,
							}}
						>
							{'2w'}
						</Text>
					</View>
					<Image
						source={require('../assets/images/cars.jpg')}
						style={{ flex: 1, maxHeight: 50, maxWidth: 50, margin: 5 }}
					></Image>
				</View>
				<View style={styles.line} />

				<View style={styles.notification}>
					<Image
						source={require('../assets/images/sally.png')}
						style={{ flex: 1, maxHeight: 50, maxWidth: 50, margin: 5 }}
					></Image>
					<View style={styles.description}>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
								fontWeight: 'bold',
							}}
						>
							{'KGammon and 23 others'}
						</Text>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
							}}
						>
							{'liked your review for Cars 2.'}
						</Text>
						<Text
							style={{
								color: '#b3b3b3',
								fontSize: 16,
							}}
						>
							{'3w'}
						</Text>
					</View>
					<Image
						source={require('../assets/images/cars2.png')}
						style={{ flex: 1, maxHeight: 50, maxWidth: 50, margin: 5 }}
					></Image>
				</View>
				<View style={styles.line} />

				<View style={styles.notification}>
					<Image
						source={require('../assets/images/luigi.png')}
						style={{ flex: 1, maxHeight: 50, maxWidth: 50, margin: 5 }}
					></Image>
					<View style={styles.description}>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
								fontWeight: 'bold',
							}}
						>
							{'CHammond'}
						</Text>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
							}}
						>
							{'mentioned you in a comment:'}
						</Text>
						<Text
							style={{
								color: '#707070',
								fontSize: 16,
							}}
						>
							{
								'	This is literally the best movie I have ever seen and it is all thanks to @AMcKamey. Thank you for the recommendation!!'
							}
						</Text>
						<Text
							style={{
								color: '#b3b3b3',
								fontSize: 16,
							}}
						>
							{'3w'}
						</Text>
					</View>
				</View>
				<View style={styles.line} />
			</ScrollView>
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
	notification: {
		flexDirection: 'row',
		backgroundColor: '#fffcf2',
		alignItems: 'center',
	},
	description: {
		flex: 2,
		backgroundColor: '#fffcf2',
		paddingLeft: 12,
	},
	line: {
		alignSelf: 'stretch',
		borderBottomColor: '#E7D7C1',
		margin: 5,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});
