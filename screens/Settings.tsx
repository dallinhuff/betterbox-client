import { Text } from 'react-native-elements';
import { SafeAreaView, View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SettingsProps {
	navigation: any;
}

export default function Settings({ navigation }: SettingsProps) {
	const goBack = () => {
		navigation.goBack();
	};

	const goToNotifications = () => {
		navigation.navigate('NotificationPreferences', {});
	};

	const goToFAQ = () => {
		navigation.navigate('FAQ', {});
	};

	const goToPrivacyPolicy = () => {
		navigation.navigate('PrivacyPolicy', {});
	};

	const goToLogin = () => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Home' }],
		});
	};

	const fontSize = 25;

	return (
		<SafeAreaView
			style={{
				marginHorizontal: 10,
			}}
		>
			{/* Header */}
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<Icon
					name="chevron-left"
					style={{
						fontSize: 20,
						padding: 20,
					}}
					onPress={goBack}
				></Icon>
				<Text
					style={{
						textAlign: 'center',
						fontSize: 20,
						flexGrow: true,
					}}
				>
					Settings
				</Text>
				<View
					style={{
						width: 60,
					}}
				></View>
			</View>
			<View>
				<TouchableHighlight
					style={styles.container}
					onPress={goToNotifications}
					underlayColor="lightgray"
				>
					<Text style={{ fontSize }}>Notifications</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.container}
					onPress={goToFAQ}
					underlayColor="lightgray"
				>
					<Text style={{ fontSize }}>FAQ</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.container}
					onPress={goToPrivacyPolicy}
					underlayColor="lightgray"
				>
					<Text style={{ fontSize }}>Privacy Policy</Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={styles.container}
					onPress={goToLogin}
					underlayColor="lightgray"
				>
					<Text style={{ fontSize }}>Log Out</Text>
				</TouchableHighlight>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});
