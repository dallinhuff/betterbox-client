import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import DropShadow from 'react-native-drop-shadow';
import {
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TextInput,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Search({ route, navigation }: any) {
	const [searchInput, setSearchInput] = useState('');
	const [showTrending, setShowTrending] = useState(true);
	const fakeData = [
		{
			key: 1,
			image: require('../assets/images/cars.jpg'),
			id: 1,
		},
		{
			key: 2,
			image: require('../assets/images/cars.jpg'),
			id: 1,
		},
		{
			key: 3,
			image: require('../assets/images/cars.jpg'),
			id: 1,
		},
		{
			key: 4,
			image: require('../assets/images/cars.jpg'),
			id: 1,
		},
		{
			key: 5,
			image: require('../assets/images/cars.jpg'),
			id: 1,
		},
		{
			key: 6,
			image: require('../assets/images/cars.jpg'),
			id: 1,
		},
		{
			key: 7,
			image: require('../assets/images/cars.jpg'),
			id: 1,
		},
		{
			key: 8,
			image: require('../assets/images/cars.jpg'),
			id: 1,
		},
		{
			key: 9,
			image: require('../assets/images/cars.jpg'),
			id: 1,
		},
	];
	const [searchResults, setSearchResults] = useState(fakeData);

	const search = () => {
		setShowTrending(false);
		// TODO: Do something with searchInput and populate searchResults
	};

	const toMovie = (postId: number) => {
		navigation.navigate('MovieView', {
			//authToken: authToken,
			id: postId,
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView style={styles.scroller}>
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
				<DropShadow style={styles.shadowProp}>
					<View
						style={{
							flexDirection: 'row',
							marginLeft: 20,
							marginRight: 20,
							marginTop: 10,
							borderRadius: 5,
						}}
					>
						<MaterialCommunityIcons
							name={'magnify'}
							size={32}
							color={'#C9C9C9'}
							style={{ marginTop: 10, marginLeft: 5 }}
						/>
						<TextInput
							style={styles.input}
							onChangeText={(value) => {
								setSearchInput(value);
								search();
							}}
							autoCorrect={true}
							value={searchInput}
							placeholder="Find films, reviews, or people ..."
							placeholderTextColor="#707070"
						/>
					</View>
				</DropShadow>
				{showTrending && (
					<Text
						style={{
							color: '#e7d7c1',
							fontSize: 20,
							margin: 10,
							marginBottom: 0,
						}}
					>
						Trending Films
					</Text>
				)}
				<View style={styles.line} />
				<View style={styles.searchResults}>
					{searchResults.map((d) => (
						<Pressable
							onPress={() => toMovie(d.id)}
							key={d.key}
							style={{ backgroundColor: '#fffcf2', margin: 5 }}
						>
							<Image
								source={d.image}
								style={{ height: 130, width: 90 }}
							/>
						</Pressable>
					))}
				</View>
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
	scroller: {
		headerShown: false,
		backgroundColor: '#fffcf2',
	},
	shadowProp: {
		shadowOffset: { width: 0, height: 3 },
		shadowColor: '#171717',
		shadowOpacity: 0.4,
		shadowRadius: 2,
	},
	input: {
		height: 44,
		margin: 5,
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		borderColor: '#fff',
		backgroundColor: '#fff',
		fontSize: 20,
	},
	searchResults: {
		flexDirection: 'row',
		flex: 3,
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		backgroundColor: '#fffcf2',
	},
	line: {
		alignSelf: 'stretch',
		borderBottomColor: '#E7D7C1',
		margin: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});
