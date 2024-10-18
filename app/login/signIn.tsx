import { Colors } from '@/utils/Colors/colors'
import { headings } from '@/utils/Text/texts'
import { Lock, Mail } from 'lucide-react-native'
import { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const signIn = () => {
	const [rememberMe, setRememberMe] = useState(false)

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.imageContainer}>
				<Image source={require('../../assets/images/logo-small.png')} style={{ width: 114, height: 114 }} />
			</View>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Welcome to FundFlex</Text>
				<Text style={styles.subtitle}>Enter your Email & Password to Sign in</Text>
			</View>
			<View style={styles.inputContainer}>
				<View style={styles.inputBox}>
					<Mail size={24} color={Colors.primary[400]} />
					<TextInput
						style={styles.input}
						placeholder="Email"
						placeholderTextColor={Colors.text.placeholder}
					/>
				</View>
				<View style={styles.inputBox}>
					<Lock size={24} color={Colors.primary[400]} />
					<TextInput
						style={styles.input}
						placeholder="Password"
						placeholderTextColor={Colors.text.placeholder}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screenContainer: {
		padding: 24,
	},
	imageContainer: {
		alignItems: 'center',
		marginBottom: 32,
	},
	headerContainer: {
		marginBottom: 24,
	},
	inputBox: {
		flexDirection: 'row',
		gap: 6,
		alignItems: 'center',
		borderColor: Colors.secondary.gray[300],
		borderWidth: 1,
		borderRadius: 14,
		padding: 12,
	},
	input: {},
	inputContainer: {
		gap: 18,
	},
	title: {
		...headings.h3,
		textAlign: 'center',
	},
	subtitle: {
		...headings.p,
		textAlign: 'center',
		color: Colors.secondary.gray[700],
	},
})
export default signIn
