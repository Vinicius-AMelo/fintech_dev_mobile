import AuthAction from '@/components/AuthPage/AuthAction'
import AuthHeader from '@/components/AuthPage/AuthHeader'
import AuthInput from '@/components/AuthPage/AuthInput'
import { useAuth } from '@/services/AuthContext'
import { Colors } from '@/utils/Colors/colors'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'expo-router'
import { Mail } from 'lucide-react-native'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const RecoverPassword = () => {
	const { setEmail } = useAuth()
	const [emailInput, setEmailInput] = useState<string>('')
	const [error, setError] = useState<string>('')
	const router = useRouter()

	const handleSendOtp = async () => {
		try {
			const response = await axios.post('http://localhost:3000/api/users/send-otp', { email: emailInput })
			if (response.status === 200) {
				setEmail(emailInput)
				router.push('/login/OTPValidation')
			}
		} catch (e) {
			const axiosError = e as AxiosError
			setError(axiosError.response?.data.error || 'Failed to send OTP')
		}
	}

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.inputContainer}>
				<AuthHeader title="Forgot your Password?" subtitle="Enter your Email to reset Password" />
				{error ? <Text style={styles.errorText}>{error}</Text> : null}
				<AuthInput
					icon={<Mail size={24} color={Colors.primary[400]} />}
					placeholder="Email"
					value={emailInput}
					setValue={setEmailInput}
				/>

				<View style={styles.signInContainer}>
					<AuthAction text="Continue" handleLogin={handleSendOtp} />
					<View style={styles.signUpLabel}>
						<Text>Did not receive it?</Text>
						<Pressable onPress={handleSendOtp}>
							<Text style={styles.signUpLinkText}> Resend Link</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	errorText: {
		color: Colors.secondary.red[600],
		marginBottom: 8,
		textAlign: 'center',
	},
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
export default RecoverPassword
