import { StyleSheet, Pressable, Image, FlatList } from 'react-native';

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
  
};

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Following',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Following',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Following',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ab',
		title: 'Fourth Following',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f36',
		title: 'Fifth Following',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d27',
		title: 'Sixth Following',
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ac',
		title: 'Seventh Following',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f37',
		title: 'Eighth Following',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d28',
		title: 'Ninth Following',
	},
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => {
	return <View style={styles.item}>
	  <Text style={styles.title}>{title}</Text>
	</View>
};


export default function Home({}: Props) {

	return (
		<FlatList style={styles.container}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      	/>
	);
}

const styles = StyleSheet.create({
	
	container: {
		headerShown: false,
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fffcf2',
	},
	item: {
		flex: 1,
		backgroundColor: '#f9c2ff',
		padding: 20,
		paddingRight: 150,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});