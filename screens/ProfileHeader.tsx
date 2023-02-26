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

let cardTitle;

const selectTab = (tabName) => {
	cardTitle = tabName
};

export default function Header({name, handle}: Props) {

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					style={styles.picture}
					source={require('../assets/images/film-icon.png')}></Image>
				<View style={styles.label}>
					<Text style={styles.text}>{name}</Text>
					<Text style={styles.text}>{handle}</Text>
				</View>
				<Icon name='gear' style={styles.icon}></Icon>
			</View>
			<View style={styles.tabs}>
				<Pressable style={styles.tab} onPress={() => selectTab("story")}>
                    <Text style={styles.text}>Story</Text>
                </Pressable>
				<Pressable style={styles.tab} onPress={() => selectTab("followers")}>
                    <Text style={styles.text}>Followers</Text>
                </Pressable>
				<Pressable style={styles.tab} onPress={() => selectTab("following")}>
                    <Text style={styles.text}>Following</Text>
                </Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	
	container: {
		headerShown: false,
		flexDirection: 'column',
		alignItems: 'flex-start',
		backgroundColor: '#ff797f',
	},
	header: {
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
	tabs: {
		flex: 1,
		flexDirection: 'row',
		maxHeight: 60,
		backgroundColor: '#fffcf2',
	},
	tab: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ff797f',
		paddingTop: 15,
		borderLeftWidth: 0.5,
		borderLeftColor: '#000000',
		borderRightWidth: 0.5,
		borderRightColor: '#000000',
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