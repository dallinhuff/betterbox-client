import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	Pressable,
	ScrollView,
	Image,
} from 'react-native';

export default function Feed({ route, navigation }: any) {
	//const authToken = route.params.authToken;
	const fakeData = [
		{
			key: 1,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic',
			id: 1,
		},
		{
			key: 2,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic',
			id: 1,
		},
		{
			key: 3,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic',
			id: 1,
		},
		{
			key: 4,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic',
			id: 1,
		},
		{
			key: 5,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic',
			id: 1,
		},
		{
			key: 6,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic',
			id: 1,
		},
		{
			key: 7,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic',
			id: 1,
		},
		{
			key: 8,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic',
			id: 1,
		},
		{
			key: 9,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic',
			id: 1,
		},
	];
	const [feed, setFeed] = useState(fakeData);
	const [popular, setPopular] = useState(false);
	const toPost = (postId: number) => {
		navigation.navigate('PostView', {
			//authToken: authToken,
			id: postId,
		});
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
					<View style={styles.header1}>
						<Pressable onPress={() => setPopular(false)}>
							<Text
								style={[
									{
										textDecorationLine: popular
											? 'none'
											: 'underline',
									},
									styles.myFeed,
								]}
							>
								My Feed
							</Text>
						</Pressable>
						<Pressable onPress={() => setPopular(true)}>
							<Text
								style={[
									{
										textDecorationLine: popular
											? 'underline'
											: 'none',
									},
									styles.myFeed,
								]}
							>
								Popular
							</Text>
						</Pressable>
					</View>
				</View>
				{feed.map((d) => (
					<View key={d.key} style={styles.review}>
						<Pressable
							onPress={() => toMovie(d.id)}
							style={{
								width: 85,
								backgroundColor: '#fffcf2',
								marginBottom: 15,
							}}
						>
							<Text
								style={{
									fontWeight: 'bold',
									color: '#707070',
									fontSize: 16,
									marginBottom: 5,
								}}
							>
								{d.title}
							</Text>
							<Text style={{ color: '#707070', marginBottom: 5 }}>
								{d.date}
							</Text>
							<View style={styles.stars}>
								<Image
									source={require('../assets/images/star.png')}
									style={
										d.rating >= 2
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<Image
									source={require('../assets/images/star.png')}
									style={
										d.rating >= 4
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<Image
									source={require('../assets/images/star.png')}
									style={
										d.rating >= 6
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<Image
									source={require('../assets/images/star.png')}
									style={
										d.rating >= 8
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<Image
									source={require('../assets/images/star.png')}
									style={
										d.rating >= 10
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<View
									style={
										d.rating == 1 ||
										d.rating == 3 ||
										d.rating == 5 ||
										d.rating == 7 ||
										d.rating == 9
											? styles.halfStar
											: styles.starUnselected
									}
								>
									<Image
										source={require('../assets/images/star.png')}
										style={styles.starSelected}
									/>
								</View>
							</View>
						</Pressable>
						<View
							style={{
								flexDirection: 'row',
								marginBottom: 20,
								backgroundColor: '#fffcf2',
							}}
						>
							<Pressable onPress={() => toMovie(d.id)}>
								<Image
									source={require('../assets/images/cars.jpg')}
									style={{
										marginRight: 30,
										width: 60,
										height: 90,
									}}
								/>
							</Pressable>
							<Pressable onPress={() => toPost(d.id)}>
								<Text
									style={{
										flex: 1,
										color: '#707070',
										fontSize: 15,
										width: 300,
									}}
								>
									{d.review}
								</Text>
							</Pressable>
						</View>
						<View style={styles.line} />
					</View>
				))}
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
		// height: '70%',
	},
	header1: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: '#fffcf2',
		justifyContent: 'space-between',
		paddingBottom: 30,
	},
	myFeed: {
		fontSize: 18,
		color: '#707070',
		fontWeight: '500',
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 10,
	},
	review: {
		maxWidth: '100%',
		backgroundColor: '#fffcf2',
		marginLeft: 40,
		marginRight: 40,
	},
	stars: {
		flexDirection: 'row',
		backgroundColor: '#fffcf2',
	},
	starSelected: {
		width: 15,
		height: 15,
	},
	halfStar: {
		width: 8,
		height: 15,
		overflow: 'hidden',
	},
	starUnselected: {
		display: 'none',
	},
	line: {
		alignSelf: 'stretch',
		borderBottomColor: '#E7D7C1',
		marginTop: 10,
		marginBottom: 20,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});
