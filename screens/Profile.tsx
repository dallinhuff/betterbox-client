import {
	StyleSheet,
	Pressable,
	Image,
	ScrollView,
	SafeAreaView,
} from 'react-native';

import { Text, View } from '../components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NetworkCommunicator } from '../network/NetworkCommunicator';
import getOwnProfile = NetworkCommunicator.getOwnProfile;

type ProfileScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Home'
>;

// type Props = {
//   authToken: route.params.authToken;
// };

// const Tab = createMaterialTopTabNavigator();

export default function Profile({ route, navigation }: any) {
	const authToken = route.params.authToken;
	const fakeData = [
		{
			key: 1,
			image: 'image',
			title: 'Cars',
			rating: 10,
			date: '3/3/23',
			review: 'Guido doing the tire switch is a goated scene. Still a classic blah blah blah blah',
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
	const [showStats, setShowStats] = useState(false);
	const [films, setFilms] = useState(12);
	const [numReviews, setNumReviews] = useState(46);
	const [likes, setLikes] = useState(389);
	const [recentReviews, setRecentReviews] = useState(fakeData);
	const [username, setUsername] = useState('user');
	const [name, setName] = useState('name');
	const [email, setEmail] = useState('user@domain.com');
	const [avatarUrl, setAvatarUrl] = useState('http://dummyurl.org');

	useEffect(() => {
		getOwnProfile(authToken)
			.then((r) => {
				setUsername(r.data.username);
				setName(r.data.name);
				setEmail(r.data.email);
				setAvatarUrl(r.data.avatar);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	const show = () => {
		if (showStats) {
			setShowStats(false);
		} else {
			setShowStats(true);
		}
	};

	const toPost = (postId: number) => {
		navigation.navigate('PostView', {
			authToken: authToken,
			id: postId,
		});
	};

	const toMovie = (postId: number) => {
		navigation.navigate('MovieView', {
			authToken: authToken,
			id: postId,
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={styles.header}>
					<Icon name="gear" style={styles.gear} />
					<Icon name="share" style={styles.share} />

					<View style={styles.label}>
						<Text
							style={{
								color: '#E7D7C1',
								fontSize: 30,
								fontWeight: 'bold',
							}}
						>
							{'BetterBox'}
						</Text>
						<Image
							style={styles.picture}
							source={require('../assets/images/default_profile.jpeg')}
						/>
						<Text
							style={{
								color: '#707070',
								fontSize: 20,
								fontWeight: 'light',
							}}
						>
							@{username}
						</Text>
						<View style={styles.infoContainer}>
							<View style={styles.info}>
								<Text
									style={{
										color: '#707070',
										fontSize: 16,
										fontWeight: 'bold',
									}}
								>
									{'Reviews'}
								</Text>
								<Text
									style={{
										color: '#707070',
										fontSize: 16,
										fontWeight: 'normal',
									}}
								>
									{numReviews}
								</Text>
							</View>
							<View style={styles.info}>
								<Text
									style={{
										color: '#707070',
										fontSize: 16,
										fontWeight: 'bold',
									}}
								>
									{'Followers'}
								</Text>
								<Text
									style={{
										color: '#707070',
										fontSize: 16,
										fontWeight: 'normal',
									}}
								>
									{'257'}
								</Text>
							</View>
							<View style={styles.info}>
								<Text
									style={{
										color: '#707070',
										fontSize: 16,
										fontWeight: 'bold',
									}}
								>
									{'Following'}
								</Text>
								<Text
									style={{
										color: '#707070',
										fontSize: 16,
										fontWeight: 'normal',
									}}
								>
									{'233'}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<ScrollView style={styles.scroller}>
					<Pressable
						style={{
							alignSelf: 'flex-end',
							marginRight: 20,
							flexDirection: 'row',
							backgroundColor: '#fffcf2',
						}}
						onPress={() => show()}
					>
						{!showStats && (
							<Text style={{ marginBottom: 20 }}>View Stats</Text>
						)}
						{showStats && <Text>Hide Stats</Text>}
						<Image
							style={styles.downArrow}
							source={require('../assets/images/down-arrow.png')}
						/>
					</Pressable>
					{showStats && (
						<View style={styles.stats}>
							<View style={styles.line} />
							<View style={styles.stat}>
								<Text style={styles.title}>Films</Text>
								<Text style={styles.number}>{films}</Text>
							</View>
							<View style={styles.line} />
							<View style={styles.stat}>
								<Text style={styles.title}>Reviews</Text>
								<Text style={styles.number}>{numReviews}</Text>
							</View>
							<View style={styles.line} />
							<View style={styles.stat}>
								<Text style={styles.title}>Likes</Text>
								<Text style={styles.number}>{likes}</Text>
							</View>
						</View>
					)}
					<Text
						style={{
							alignSelf: 'flex-start',
							fontSize: 16,
							marginLeft: 20,
							color: '#707070',
							fontWeight: 'bold',
							marginBottom: 20,
							marginTop: 20,
						}}
					>
						Recent Reviews
					</Text>

					{recentReviews.map((d) => (
						<View key={d.key} style={styles.review}>
							<Pressable onPress={() => toMovie(d.id)}>
								<Image
									source={require('../assets/images/cars.jpg')}
									style={{
										marginRight: 10,
										height: 100,
										width: 70,
										marginBottom: 20,
									}}
								/>
							</Pressable>
							<Pressable
								onPress={() => toMovie(d.id)}
								style={{
									width: 85,
									backgroundColor: '#fffcf2',
									marginBottom: 30,
								}}
							>
								<Text
									style={{ fontWeight: 'bold', color: '#707070' }}
								>
									{d.title}
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
								<Text style={{ color: '#707070' }}>{d.date}</Text>
							</Pressable>
							<Pressable onPress={() => toPost(d.id)}>
								<Text
									style={{
										flex: 1,
										color: '#707070',
										width: '45%',
									}}
								>
									{d.review}
								</Text>
							</Pressable>
						</View>
					))}
				</ScrollView>
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
	gear: {
		position: 'absolute',
		left: 0,
		top: 0,
		flex: 1,
		fontSize: 30,
		padding: 20,
		color: '#707070',
		zIndex: 1,
	},
	share: {
		position: 'absolute',
		right: 0,
		top: 0,
		flex: 1,
		fontSize: 30,
		padding: 20,
		color: '#707070',
		zIndex: 1,
	},
	label: {
		flex: 4,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#fffcf2',
		marginTop: 20,
	},
	picture: {
		flex: 3,
		width: 80,
		height: 80,
		margin: 20,
		resizeMode: 'contain',
	},
	infoContainer: {
		flex: 4,
		flexDirection: 'row',
		backgroundColor: '#fffcf2',
		marginTop: 15,
	},
	info: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		backgroundColor: '#fffcf2',
		margin: 10,
	},

	scroller: {
		headerShown: false,
		flex: 1,
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
		fontSize: '24',
		marginBottom: 5,
		color: '#fffcf2',
	},
	review: {
		flexDirection: 'row',
		maxWidth: '100%',
		backgroundColor: '#fffcf2',
		marginLeft: 20,
		marginRight: 20,
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
		marginBottom: 100,
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
	},
});
