import AuthAction from '@/components/AuthPage/AuthAction'
import AuthHeader from '@/components/AuthPage/AuthHeader'
import AuthInput from '@/components/AuthPage/AuthInput'
import { Colors } from '@/utils/Colors/colors'
import { Mail } from 'lucide-react-native'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const recoverPassword = () => {
	const [rememberMe, setRememberMe] = useState(false)

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.inputContainer}>
				<AuthHeader title="Forgot your Password?" subtitle="Enter your Email to reset Password" />
				<AuthInput icon={<Mail size={24} color={Colors.primary[400]} />} placeholder="Email" />

				<View style={styles.signInContainer}>
					<AuthAction text="Continue" path={'/login/OTPValidation'} />
					<View style={styles.signUpLabel}>
						<Text>Did not receive it?</Text>
						<Pressable onPress={() => console.log('x')}>
							<Text style={styles.signUpLinkText}> Resend Link</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		gap: 16,
	},
	screenContainer: {
		padding: 24,
	},
	signInContainer: {},
	signUpLabel: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	signUpLinkText: {
		color: Colors.secondary.blue[600],
	},
})
export default recoverPassword
