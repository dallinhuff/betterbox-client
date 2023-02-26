import { StyleSheet, Pressable, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useState } from "react";
import { loadPartialConfigAsync } from '@babel/core';

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

const Card = () => {
	let content

	if (cardTitle == "story") {
		content = <Story></Story>
	} else if (cardTitle == "followers") {
		content = <Followers></Followers>
	} else {
		content = <Following></Following>
	}

	return content
}

let cardTitle = "story";

export default function Home({}: Props) {

	return (
		<View style={styles.container}>
			<ProfileHeader name='Test' handle='@test1'></ProfileHeader>
			<Card></Card>
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

});