import { Text } from 'react-native-elements';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../assets/faq.json';

interface SettingsProps {
	navigation: any;
}

export default function FAQ({ navigation }: SettingsProps) {
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
					FAQ
				</Text>
				<View
					style={{
						width: 60,
					}}
				></View>
			</View>
			<ScrollView>
				{data.questions.map((faq) => (
					<FAQItem
						key={faq.id + 'FAQ'}
						question={faq.question}
						answer={faq.answer}
					/>
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

interface FAQItem {
	question: string;
	answer: string;
}

const FAQItem = ({ question, answer }: FAQItem) => {
	return (
		<View style={styles.container}>
			<Text style={styles.question}>{question}</Text>
			<Text style={styles.answer}>{answer}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f5f5f5',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'gray',
		padding: 16,
		marginBottom: 16,
	},
	question: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	answer: {
		fontSize: 16,
		lineHeight: 24,
	},
});
