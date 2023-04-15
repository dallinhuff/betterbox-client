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
import { NetworkCommunicator } from '../network/NetworkCommunicator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	'Home'
>;

// type Props = {
//   authToken: route.params.authToken;
// };

// const Tab = createMaterialTopTabNavigator();

export default function Profile({ route, navigation }: any) {
	//const authToken = route.params.authToken;

	const [showStats, setShowStats] = useState(false);
	const [films, setFilms] = useState(12);
	const [numReviews, setNumReviews] = useState(46);
	const [likes, setLikes] = useState(389);
	const [username, setUsername] = useState('user');
	const [name, setName] = useState('name');
	const [email, setEmail] = useState('user@domain.com');
	const [avatarUrl, setAvatarUrl] = useState('http://dummyurl.org');

	const toReview = (postId: number) => {
		navigation.navigate('MakeReview', {
			//authToken: authToken,
			//id: postId,
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require('../assets/images/cars-banner.png')}
				style={styles.banner}
			></Image>
			<View style={styles.body}>
				<View style={styles.movie_info}>
					<View style={styles.info}>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 18,
								color: '#707070',
							}}
						>
							TITLE
						</Text>
						<Text
							style={{
								fontWeight: '300',
								color: '#c9c9c9',
								paddingTop: 12,
							}}
						>
							YEAR
						</Text>
						<Text style={{ color: '#c9c9c9', paddingTop: 12 }}>
							Directed by DIRECTOR
						</Text>
						<Text style={{ color: '#c9c9c9', paddingTop: 12 }}>
							NUMBER mins
						</Text>
					</View>
					<View style={styles.rating}>
						<View style={styles.stars}>
							<Image
								source={require('../assets/images/star.png')}
								style={styles.starSelected}
							/>
							<Image
								source={require('../assets/images/star.png')}
								style={styles.starSelected}
							/>
							<Image
								source={require('../assets/images/star.png')}
								style={styles.starSelected}
							/>
							<Image
								source={require('../assets/images/star.png')}
								style={styles.starSelected}
							/>
							<Image
								source={require('../assets/images/star.png')}
								style={styles.starSelected}
							/>
							<View style={styles.starUnselected}>
								<Image
									source={require('../assets/images/star.png')}
									style={styles.starSelected}
								/>
							</View>
						</View>
						<Text style={{ color: '#c9c9c9', paddingTop: 10 }}>
							Avg Rating
						</Text>
					</View>
				</View>
				<View style={styles.description}>
					<Text style={{ color: '#707070', paddingTop: 10 }}>
						After a humbling tie in the final race of the prestigious
						2006 Piston Cup racing competition, the brash, self-centered
						rookie sensation, Lightning McQueen, is desperate to win the
						crucial tiebreaker race held at the Los Angeles International
						Speedway. However, instead...
					</Text>
				</View>
				<View style={styles.buttons}>
					<Pressable style={styles.leave} onPress={() => toReview()}>
						<FontAwesome
							name="plus"
							color={'#fff'}
							size={26}
							style={styles.icon}
						/>
						<Text style={{ paddingHorizontal: 6 }}>Leave a Review</Text>
					</Pressable>
					<View style={styles.read}>
						<FontAwesome
							name="eye"
							color={'#fff'}
							size={26}
							style={styles.icon}
						/>
						<Text style={{ paddingHorizontal: 6 }}>Read Reviews</Text>
					</View>
				</View>
			</View>
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
	banner: {
		flex: 1,
		backgroundColor: '#000000',
		width: 'auto',
		height: 'auto',
	},
	body: {
		flex: 3,
		flexDirection: 'column',
		backgroundColor: '#fffcf2',
		padding: 30,
	},
	movie_info: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#fffcf2',
	},
	info: {
		flex: 3,
		flexDirection: 'column',
		backgroundColor: '#fffcf2',
	},
	rating: {
		flex: 2,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fffcf2',
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
	description: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fffcf2',
	},
	buttons: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#fffcf2',
	},
	icon: {
		padding: 8,
	},
	leave: {
		flex: 1,
		backgroundColor: Colors.action,
		maxWidth: 112,
		maxHeight: 70,
		borderRadius: 5,
	},
	read: {
		flex: 1,
		backgroundColor: '#c9c9c9',
		maxWidth: 112,
		maxHeight: 70,
		borderRadius: 5,
	},
});
