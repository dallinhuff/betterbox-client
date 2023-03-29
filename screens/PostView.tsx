import { Text, View } from '../components/Themed';
import React, { useState } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	Pressable,
	ScrollView,
	Image,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function PostView({ route, navigation }: any) {
	const authToken = route.params.authToken;
	const [liked, setLiked] = useState(false);
	// TODO: Figure out if the person liked the post and the num likes. Increase like number if they like it.
	const [numLikes, setNumLikes] = useState(14506);
	const review = {
		key: 1,
		image: 'image',
		title: 'Cars',
		rating: 10,
		reviewDate: '3/3/23',
		movieDate: '2006',
		review: 'Guido doing the tire switch is a goated scene. Still a classic',
		username: '@pedro',
	};
	const fakeComments = [
		{
			key: 1,
			comment:
				'Guido doing the tire switch is a goated scene. Still a classic',
			date: '3/3/23',
			id: 1,
		},
		{
			key: 2,
			comment:
				'Guido doing the tire switch is a goated scene. Still a classic',
			date: '3/3/23',
			id: 2,
		},
		{
			key: 3,
			comment:
				'Guido doing the tire switch is a goated scene. Still a classic',
			date: '3/3/23',
			id: 3,
		},
		{
			key: 4,
			comment:
				'Guido doing the tire switch is a goated scene. Still a classic',
			date: '3/3/23',
			id: 4,
		},
		{
			key: 5,
			comment:
				'Guido doing the tire switch is a goated scene. Still a classic',
			date: '3/3/23',
			id: 5,
		},
	];
	const [comments, setComments] = useState(fakeComments);

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
				<View key={review.key} style={styles.review}>
					<View style={styles.profile}>
						<Image
							source={require('../assets/images/default_profile.jpeg')}
							style={{ width: 30, height: 30 }}
						/>
						<Text
							style={{
								marginLeft: 10,
								marginTop: 5,
								color: '#c9c9c9',
							}}
						>
							{review.username}
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginBottom: 20,
							backgroundColor: '#fffcf2',
							justifyContent: 'space-between',
						}}
					>
						<View
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
								{review.title}
							</Text>
							<Text style={{ color: '#c9c9c9', marginBottom: 5 }}>
								{review.movieDate}
							</Text>
							<View style={styles.stars}>
								<Image
									source={require('../assets/images/star.png')}
									style={
										review.rating >= 2
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<Image
									source={require('../assets/images/star.png')}
									style={
										review.rating >= 4
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<Image
									source={require('../assets/images/star.png')}
									style={
										review.rating >= 6
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<Image
									source={require('../assets/images/star.png')}
									style={
										review.rating >= 8
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<Image
									source={require('../assets/images/star.png')}
									style={
										review.rating >= 10
											? styles.starSelected
											: styles.starUnselected
									}
								/>
								<View
									style={
										review.rating == 1 ||
										review.rating == 3 ||
										review.rating == 5 ||
										review.rating == 7 ||
										review.rating == 9
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
							<Text
								style={{
									color: '#c9c9c9',
									marginTop: 15,
									width: 300,
								}}
							>
								Watched {review.reviewDate}
							</Text>
						</View>
						<Image
							source={require('../assets/images/cars.jpg')}
							style={{ marginRight: 30, width: 70, height: 100 }}
						/>
					</View>
					<Text
						style={{
							flex: 1,
							color: '#707070',
							fontSize: 15,
							marginBottom: 20,
						}}
					>
						{review.review}
					</Text>

					<View
						style={{
							flexDirection: 'row',
							paddingLeft: 20,
							backgroundColor: '#fffcf2',
						}}
					>
						<Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
							<MaterialCommunityIcons
								name={liked ? 'heart' : 'heart-outline'}
								size={32}
								color={liked ? '#FF797F' : '#C9C9C9'}
							/>
						</Pressable>
						<Text
							style={{
								color: '#c9c9c9',
								paddingTop: 5,
								paddingLeft: 10,
							}}
						>
							{numLikes} likes
						</Text>
					</View>
					<View style={{ backgroundColor: '#fffcf2', marginTop: 30 }}>
						<Text
							style={{
								fontWeight: 'bold',
								color: '#707070',
								fontSize: 16,
								marginBottom: 5,
							}}
						>
							Comments
						</Text>
						<View style={styles.line} />
						{comments.map((d) => (
							<View key={d.id} style={{ backgroundColor: '#fffcf2' }}>
								<View style={styles.comment}>
									<Image
										source={require('../assets/images/default_profile.jpeg')}
										style={{ width: 30, height: 30 }}
									/>
									<Text
										style={{
											marginLeft: 15,
											marginRight: 15,
											color: '#707070',
										}}
									>
										{d.comment}
									</Text>
									<Text style={{ color: '#c9c9c9' }}>
										{d.date}
									</Text>
								</View>
								<View style={styles.line} />
							</View>
						))}
					</View>
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
		// height: '85%',
	},
	header1: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: '#fffcf2',
		justifyContent: 'space-between',
		paddingBottom: 30,
	},
	review: {
		maxWidth: '100%',
		backgroundColor: '#fffcf2',
		marginLeft: 40,
		marginRight: 40,
		marginTop: 20,
	},
	comment: {
		backgroundColor: '#fffcf2',
		flexDirection: 'row',
		width: '85%',
		marginBottom: 20,
	},
	profile: {
		flexDirection: 'row',
		backgroundColor: '#fffcf2',
		marginBottom: 20,
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
