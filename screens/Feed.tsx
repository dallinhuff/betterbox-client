import { Text, View } from '../components/Themed';
import React from 'react';

export default function Feed({ route, navigation }: any) {
	const authToken = route.params.authToken;

	return (
		<View>
			<Text>Feed</Text>
		</View>
	);
}
