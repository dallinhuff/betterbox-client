import { Text, Card, ListItem } from 'react-native-elements';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SettingsProps {
	navigation: any;
}

export default function FAQ({ navigation }: SettingsProps) {
	const goBack = () => {
		navigation.goBack();
	};

	const sections = [
		{
			title: 'Information Collection and Use',
			content:
				'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:\n - Email address \n - First name and last name \n - Cookies and Usage Data \n\n' +
				'We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data").\n\n' +
				"This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.\n\n" +
				'When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers, and other diagnostic data.',
		},
		{
			title: 'Cookies',
			content:
				'Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used, such as beacons, tags, and scripts, to collect and track information and to improve and analyze our Service.\n\n' +
				'You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.',
		},
		{
			title: 'Use of Data',
			content:
				'Betterbox uses the collected data for various purposes:' +
				'- To provide and maintain the Service\n' +
				'- To notify you about changes to our Service\n' +
				'- To allow you to participate in interactive features of our Service when you choose to do so\n' +
				'- To provide customer care and support\n' +
				'- To provide analysis or valuable information so that we can improve the Service\n' +
				'- To monitor the usage of the Service\n' +
				'- To detect, prevent, and address technical issues\n',
		},
		{
			title: 'Security of Data',
			content:
				'The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.',
		},
		{
			title: 'Links to Other Sites',
			content:
				"Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.\n\n" +
				'We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',
		},
		{
			title: 'Changes to this Privacy Policy',
			content:
				'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.\n\n' +
				'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
		},
	];

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
					Privacy Policy
				</Text>
				<View
					style={{
						width: 60,
					}}
				></View>
			</View>
			<ScrollView>
				<Card>
					<Card.Title>Privacy Policy</Card.Title>
					<Card.Divider />
					{sections.map((section, index) => (
						<ListItem key={index}>
							<ListItem.Content>
								<ListItem.Title>{section.title}</ListItem.Title>
								<ListItem.Subtitle>
									{section.content}
								</ListItem.Subtitle>
							</ListItem.Content>
						</ListItem>
					))}
				</Card>
			</ScrollView>
		</SafeAreaView>
	);
}
