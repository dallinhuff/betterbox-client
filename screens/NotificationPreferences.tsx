import { Text } from 'react-native-elements';
import { SafeAreaView, View, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

interface SettingsProps {
	navigation: any;
}

export default function NotificationPreferences({ navigation }: SettingsProps) {
	const goBack = () => {
		navigation.goBack();
	};

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
					Notifications
				</Text>
				<View
					style={{
						width: 60,
					}}
				></View>
			</View>
			<Notifications />
		</SafeAreaView>
	);
}

function Notifications() {
	const bubbleProps = [
		{
			icon: 'address-card',
			text: 'Mentions',
			example: "CHammond mentioned you on KGammon's post",
		},
		{
			icon: 'comment',
			text: 'Comments',
			example: 'DHuff commented on your post',
		},
		{
			icon: 'users',
			text: 'Friend Request',
			example: 'AMcKamey sent you a friend request',
		},
	];

	return (
		<View>
			<Text
				style={{
					padding: 4,
					fontSize: 20,
					fontWeight: '600',
				}}
			>
				Notifications
			</Text>
			{bubbleProps.map((bubbleProp) => (
				<SettingsBubble
					key={bubbleProp.text}
					icon={bubbleProp.icon}
					text={bubbleProp.text}
					example={bubbleProp.example}
				></SettingsBubble>
			))}
		</View>
	);
}

interface BubbleProps {
	icon: string;
	text: string;
	example: string;
}

function SettingsBubble({ icon, text, example }: BubbleProps) {
	const [value, setValue] = useState(true);
	const fontSize = 20;
	return (
		<>
			<View
				style={{
					padding: 15,
					borderRadius: 8,
					backgroundColor: 'lightgray',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<Icon style={{ fontSize }} name={icon}></Icon>
					<Text style={{ fontSize, marginLeft: 6 }}>{text}</Text>
				</View>
				<Switch
					trackColor={{ false: '#767577', true: 'green' }}
					thumbColor={'white'}
					ios_backgroundColor="#3e3e3e"
					onValueChange={() => setValue(!value)}
					value={value}
				/>
			</View>
			<Text
				style={{
					padding: 4,
				}}
			>
				{example}
			</Text>
		</>
	);
}
