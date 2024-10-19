import { Colors } from '@/utils/Colors/colors'
import { headings } from '@/utils/Text/texts'
import { Link } from 'expo-router'
import { Lock, Mail } from 'lucide-react-native'
import { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const signIn = () => {
	const [rememberMe, setRememberMe] = useState(false)

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.imageContainer}>
				<Image source={require('../../assets/images/logo-small.png')} style={styles.logoSmall} />
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
				<View style={styles.inputOptions}>
					<View style={styles.checkboxContainer}>
						<View style={styles.checkbox}></View>
						<Text>Remember me</Text>
					</View>
					<Link style={styles.link} href={'/home'}>
						<Text>Forgot Password?</Text>
					</Link>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	checkbox: {
		borderColor: Colors.secondary.gray[600],
		borderRadius: 4,
		borderWidth: 1,
		height: 18,
		width: 18,
	},
	checkboxContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 6,
	},
	headerContainer: {
		marginBottom: 24,
	},
	imageContainer: {
		alignItems: 'center',
		marginBottom: 32,
	},
	input: {},
	inputBox: {
		alignItems: 'center',
		borderColor: Colors.secondary.gray[300],
		borderRadius: 14,
		borderWidth: 1,
		flexDirection: 'row',
		gap: 6,
		marginBottom: 16,
		padding: 12,
	},
	inputContainer: {
		gap: 16,
	},
	inputOptions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	link: {
		color: Colors.secondary.blue[600],
	},
	logoSmall: {
		height: 114,
		width: 114,
	},
	screenContainer: {
		padding: 24,
	},
	subtitle: {
		...headings.p,
		color: Colors.secondary.gray[700],
		textAlign: 'center',
	},
	title: {
		...headings.h3,
		textAlign: 'center',
	},
})
export default signIn
