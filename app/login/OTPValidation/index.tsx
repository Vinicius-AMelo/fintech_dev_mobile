import AuthAction from '@/components/AuthPage/AuthAction'
import AuthHeader from '@/components/AuthPage/AuthHeader'
import { Colors } from '@/utils/Colors/colors'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const resetPassword = () => {
	const [rememberMe, setRememberMe] = useState(false)

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.inputContainer}>
				<AuthHeader title="Email verification" subtitle="Email Verification has been sent to your Email" />

				<View style={styles.signInContainer}>
					<AuthAction text="Confirm OTP" path={'/login/ResetPassword'} />
				</View>
				<View style={styles.resendLabel}>
					<Text>Did not receive it?</Text>
					<Pressable onPress={() => console.log('y')}>
						<Text style={styles.resendLinkText}> Resend Code</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		gap: 16,
	},
	resendLabel: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	resendLinkText: {
		color: Colors.secondary.blue[600],
	},
	screenContainer: {
		padding: 24,
	},
	signInContainer: {},
})
export default resetPassword
