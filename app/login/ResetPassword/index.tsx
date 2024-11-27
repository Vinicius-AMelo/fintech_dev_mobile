import AuthAction from '@/components/AuthPage/AuthAction'
import AuthHeader from '@/components/AuthPage/AuthHeader'
import AuthInput from '@/components/AuthPage/AuthInput'
import { useAuth } from '@/services/AuthContext'
import api from '@/utils/api/api'
import { Colors } from '@/utils/Colors/colors'
import { AxiosError } from 'axios'
import { useRouter } from 'expo-router'
import { Lock } from 'lucide-react-native'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ResetPassword = () => {
	const { email } = useAuth()
	const router = useRouter()
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [error, setError] = useState<string>('')

	const handleResetPassword = async () => {
		if (password !== confirmPassword) {
			setError('Passwords do not match')
			return
		}
		if (!password || !confirmPassword) {
			setError('Please fill in all fields')
			return
		}

		try {
			const response = await api.put('/api/users/password', {
				email,
				newPassword: password,
			})
			if (response.status === 200) {
				router.push('/login/SignIn')
			}
		} catch (e) {
			const axiosError = e as AxiosError
			setError(axiosError.response?.data.error || 'Failed to reset password')
		}
	}

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.inputContainer}>
				<AuthHeader title="Reset your Password?" subtitle="Reset your password and confirm now" />
				{error ? <Text style={styles.errorText}>{error}</Text> : null}
				<AuthInput
					icon={<Lock size={24} color={Colors.primary[400]} />}
					placeholder="Password"
					password
					value={password}
					setValue={setPassword}
				/>
				<AuthInput
					icon={<Lock size={24} color={Colors.primary[400]} />}
					placeholder="Confirm Password"
					password
					value={confirmPassword}
					setValue={setConfirmPassword}
				/>

				<View style={styles.signInContainer}>
					<AuthAction text="Reset Password" handleLogin={handleResetPassword} />
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
})
export default ResetPassword
