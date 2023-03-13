import { StyleSheet, Pressable, Image, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useState } from "react";
import React from 'react';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  
};

// const Tab = createMaterialTopTabNavigator();

export default function Profile({}: Props) {
	const recentReviews1 = [{"key": 1, "image": "image", "title": "Cars", "rating": 10, "date": "3/3/23", "review": "Guido doing the tire switch is a goated scene. Still a classic"}, 
							{"key": 2, "image": "image", "title": "Cars", "rating": 10, "date": "3/3/23", "review": "Guido doing the tire switch is a goated scene. Still a classic"},
							{"key": 3, "image": "image", "title": "Cars", "rating": 10, "date": "3/3/23", "review": "Guido doing the tire switch is a goated scene. Still a classic"},
							{"key": 4, "image": "image", "title": "Cars", "rating": 10, "date": "3/3/23", "review": "Guido doing the tire switch is a goated scene. Still a classic"}, 
							{"key": 5, "image": "image", "title": "Cars", "rating": 10, "date": "3/3/23", "review": "Guido doing the tire switch is a goated scene. Still a classic"},
							{"key": 6, "image": "image", "title": "Cars", "rating": 10, "date": "3/3/23", "review": "Guido doing the tire switch is a goated scene. Still a classic"},
							{"key": 7, "image": "image", "title": "Cars", "rating": 10, "date": "3/3/23", "review": "Guido doing the tire switch is a goated scene. Still a classic"}, 
							{"key": 8, "image": "image", "title": "Cars", "rating": 10, "date": "3/3/23", "review": "Guido doing the tire switch is a goated scene. Still a classic"},
							{"key": 9, "image": "image", "title": "Cars", "rating": 10, "date": "3/3/23", "review": "Guido doing the tire switch is a goated scene. Still a classic"}]
	const [showStats, setShowStats] = useState(false);
	const [films, setFilms] = useState(12);
	const [reviews, setReviews] = useState(46);
	const [likes, setLikes] = useState(389);
	const [recentReviews, setRecentReviews] = useState(recentReviews1);


	const show = () => {
		if (showStats) {
			setShowStats(false);
		} else {
		setShowStats(true); }
	}


	return (
		<ScrollView style={styles.container}>
				{/* <ProfileHeader name='Test' handle='@test1'></ProfileHeader> */}
			{/* <View style={styles.tabs}>
				<Tab.Navigator>
					<Tab.Screen name="Story" component={Story} />
					<Tab.Screen name="Followers" component={Followers} />
					<Tab.Screen name="Following" component={Following} />
				</Tab.Navigator>
			</View> */}
			<Text style={{alignSelf:'flex-start', fontSize: 16, marginLeft: 20, color: '#707070', fontWeight: 'medium', marginBottom: 20}}>Recent Reviews</Text>
			
			{recentReviews.map(d => ( 
				<View key={d.key} style={styles.review}>
					<Image source={require("../assets/images/favicon.png")} style={{marginRight: 10,}}/>
					<View style={{width: 85, backgroundColor: '#fffcf2', marginBottom: 30,}}>
						<Text style={{ fontWeight: 'bold', color: '#707070'}}>{d.title}</Text>
						<View style={styles.stars}>
							<Image source={require("../assets/images/star.png")} style={d.rating >= 2 ? styles.starSelected : styles.starUnselected} />
							<Image source={require("../assets/images/star.png")} style={d.rating >= 4 ? styles.starSelected : styles.starUnselected} />
							<Image source={require("../assets/images/star.png")} style={d.rating >= 6 ? styles.starSelected : styles.starUnselected} />
							<Image source={require("../assets/images/star.png")} style={d.rating >= 8 ? styles.starSelected : styles.starUnselected} />
							<Image source={require("../assets/images/star.png")} style={d.rating >= 10 ? styles.starSelected : styles.starUnselected} />
							<View style={d.rating == 1 || d.rating == 3 || d.rating == 5 || d.rating == 7 || d.rating == 9 ? styles.halfStar : styles.starUnselected}>
								<Image source={require("../assets/images/star.png")}  style={styles.starSelected}/>
							</View>

						</View>
						<Text style={{ color: '#707070'}}>{d.date}</Text>
					</View>
					<Text style={{flex: 1, color: '#707070'}}>{d.review}</Text>
					
				</View>
			))} 
			
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
					<Text style={styles.number}>{films}</Text>
				</View>
				<View style={styles.line}/>
				<View style={styles.stat}>
					<Text style={styles.title}>Reviews</Text>
					<Text style={styles.number}>{reviews}</Text>
				</View>
				<View style={styles.line}/>
				<View style={styles.stat}>
					<Text style={styles.title}>Likes</Text>
					<Text style={styles.number}>{likes}</Text>
				</View> 
			</View>
}
		</ScrollView>

	);
}

const styles = StyleSheet.create({
	
	container: {
		headerShown: false,
		flex: 1,
		// flexDirection: 'column',
		// alignItems: 'center',
		// justifyContent: 'center',
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