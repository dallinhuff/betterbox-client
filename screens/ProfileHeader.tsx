import { StyleSheet, Pressable, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from '../components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useState } from "react";
import { loadPartialConfigAsync } from '@babel/core';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
	name: string
	handle: string
};

export default function Header({name, handle}: Props) {

	return (
		<View style={styles.container}>
			<Image
				style={styles.picture}
				source={require('../assets/images/film-icon.png')}></Image>
			<View style={styles.label}>
				<Text style={styles.text}>{name}</Text>
				<Text style={styles.text}>{handle}</Text>
			</View>
			<Icon name='gear' style={styles.icon}></Icon>
		</View>
	);
}

const styles = StyleSheet.create({
	
	container: {
		headerShown: false,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		backgroundColor: '#ff797f',
		maxHeight: 115,
		borderBottomWidth: 1,
		borderBottomColor: '#000000',
	},
	picture: {
		flex: 3,
		width: 80,
		height: 80,
		marginTop: 20,
		resizeMode: 'contain',
	},
	label: {
		flex: 4,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		backgroundColor: '#ff797f',
		marginTop: 20,
	},
	text: {
		flex: 1,
		fontSize: "24",
		marginBottom: 5,
		color: '#fffcf2',
	},
	icon: {
		flex: 1,
		fontSize: "30",
		paddingTop: 20,
		color: '#fffcf2',
	},
});