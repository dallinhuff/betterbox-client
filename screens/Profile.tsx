import { StyleSheet, Pressable, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useState } from "react";
import { loadPartialConfigAsync } from '@babel/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileHeader from './ProfileHeader';
import Story from './Story';
import Followers from './Followers';
import Following from './Following';
import React from 'react';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  
};

// const Tab = createMaterialTopTabNavigator();

export default function Profile({}: Props) {
	const [showStats, setShowStats] = useState(false);
	const show = () => {
		if (showStats) {
			setShowStats(false);
		} else {
		setShowStats(true); }
	}


	return (
		<View style={styles.container}>
			{/* <ProfileHeader name='Test' handle='@test1'></ProfileHeader> */}
			{/* <View style={styles.tabs}>
				<Tab.Navigator>
					<Tab.Screen name="Story" component={Story} />
					<Tab.Screen name="Followers" component={Followers} />
					<Tab.Screen name="Following" component={Following} />
				</Tab.Navigator>
			</View> */}
			
			<Pressable style={{alignSelf: 'flex-end', marginRight: 20, flexDirection: 'row', backgroundColor: '#fffcf2'}} onPress={() =>show()}>
				{!showStats && 
				<Text>View Stats</Text> }
				{showStats && 
				<Text>Hide Stats</Text> }
				<Image style={styles.downArrow}
				source={require("../assets/images/down-arrow.png")}/>
			</Pressable>
			{showStats && 
			<View style={styles.stats}> 
				<View style={styles.line}/> 
				<View style={styles.stat}>
					<Text style={styles.title}>Films</Text>
					<Text style={styles.number}>12</Text>
				</View>
				<View style={styles.line}/>
				<View style={styles.stat}>
					<Text style={styles.title}>Reviews</Text>
					<Text style={styles.number}>46</Text>
				</View>
				<View style={styles.line}/>
				<View style={styles.stat}>
					<Text style={styles.title}>Likes</Text>
					<Text style={styles.number}>389</Text>
				</View> 
			</View>
}

		</View>
	);
}

const styles = StyleSheet.create({
	
	container: {
		headerShown: false,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fffcf2',
	},

	tabs: {
		flex: 1,
		flexDirection: 'row',
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
	downArrow: {
		width: 15,
		height: 15,
		resizeMode: 'contain',
		marginLeft: 4,
	},
	line: {
		alignSelf: 'stretch',
		borderBottomColor: '#E7D7C1',
		margin: 20,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	stats: {
		alignSelf: 'stretch',
		backgroundColor: '#fffcf2',
		marginBottom: -100,
	},
	stat: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'stretch',
		backgroundColor: '#fffcf2',
		marginLeft: 40,
		marginRight: 40,
		marginTop: -5,
		marginBottom: -5,
	},
	title: {
		fontSize: 18,
	},
	number: {
		textAlign: 'right',
		fontSize: 18,
	}
});