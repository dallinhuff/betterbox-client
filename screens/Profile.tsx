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

const Tab = createMaterialTopTabNavigator();

export default function Home({}: Props) {

	return (
		<View style={styles.container}>
			<ProfileHeader name='Test' handle='@test1'></ProfileHeader>
			<View style={styles.tabs}>
				<Tab.Navigator>
					<Tab.Screen name="Story" component={Story} />
					<Tab.Screen name="Followers" component={Followers} />
					<Tab.Screen name="Following" component={Following} />
				</Tab.Navigator>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	
	container: {
		headerShown: false,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
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

});