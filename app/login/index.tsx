import { Colors } from '@/utils/Colors/colors'
import { headings, importFonts } from '@/utils/Text/texts'
import { useRouter } from 'expo-router'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Login = () => {
	const _fontsLoaded = importFonts()
	const router = useRouter()

	return (
		<SafeAreaView style={styles.loginScreen}>
			<View style={styles.imageContainer}>
				<Image style={styles.splash} source={require('../../assets/images/icon.png')} />
			</View>
			<View style={styles.content}>
				<Text style={styles.title}>Manage & Track Your Money in One App</Text>
				<Text style={styles.subtitle}>
					Take control of your financial future with our all-in-one finance management app. Designed to simplify and
					streamline your money matters
				</Text>
				<View style={styles.buttonsContainer}>
					<TouchableOpacity onPress={() => router.replace('/login/SignIn')} style={[styles.button, styles.whiteButton]}>
						<Text style={[styles.buttonText, styles.whiteButtonText]}>Sign in</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Sign up</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.secondary.blue[600],
		borderColor: Colors.secondary.blue[600],
		borderRadius: 12,
		borderWidth: 1,
		flexGrow: 1,
	},
	buttonText: {
		...headings.big,
		color: Colors.white[50],
		paddingVertical: 16,
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		gap: 6,
	},
	content: {
		paddingHorizontal: 24,
	},
	imageContainer: {
		marginBottom: 52,
	},
	loginScreen: {},
	splash: {
		width: '100%',
	},
	subtitle: {
		...headings.small,
		marginBottom: 52,
		textAlign: 'center',
	},
	title: {
		...headings.h2,
		fontFamily: 'SF-Bold',
		marginBottom: 12,
		textAlign: 'center',
	},
	whiteButton: {
		backgroundColor: Colors.white[50],
		borderColor: Colors.secondary.gray[400],
	},
	whiteButtonText: {
		color: Colors.text.primary,
	},
})

export default Login
