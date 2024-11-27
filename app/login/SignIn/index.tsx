/* eslint-disable react-native/no-unused-styles */
import AuthAction from '@/components/AuthPage/AuthAction'
import AuthHeader from '@/components/AuthPage/AuthHeader'
import AuthInput from '@/components/AuthPage/AuthInput'
import api from '@/utils/api/api'
import { Colors } from '@/utils/Colors/colors'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Link, useRouter } from 'expo-router'
import { Lock, Mail } from 'lucide-react-native'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const signIn = () => {
	const router = useRouter()

	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [error, setError] = useState<string>('')

	const fetchUser = async () => {
		try {
			const response = await api.post('/api/login', {
				email: username,
				password,
			})
			return response.status
		} catch (e) {
			const axiosError = e as AxiosError
			return axiosError.response?.status
		}
	}

	const { data: status, refetch: refetchUser } = useQuery({ queryKey: ['user'], queryFn: fetchUser, enabled: false })

	const handleLogin = () => {
		if (!username || !password) {
			setError('Please fill in all fields')
			return
		}
		refetchUser()
		if (status === 200) {
			router.push('/home')
		} else {
			setError('Invalid email or password')
		}
	}

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.inputContainer}>
				<AuthHeader title="Welcome to FundFlex" subtitle="Enter your Email & Password to Sign in" />
				{error ? <Text style={styles.errorText}>{error}</Text> : null}
				<AuthInput
					icon={<Mail size={24} color={Colors.primary[400]} />}
					value={username}
					setValue={setUsername}
					placeholder="Email"
				/>
				<AuthInput
					icon={<Lock size={24} color={Colors.primary[400]} />}
					password
					setValue={setPassword}
					placeholder="Password"
					value={password}
				/>

				<View style={styles.inputOptions}>
					<View style={styles.checkboxContainer}>
						<View style={styles.checkbox}></View>
						<Text>Remember me</Text>
					</View>
					<Link style={styles.link} href={'/login/RecoverPassword'}>
						<Text>Forgot Password?</Text>
					</Link>
				</View>

				<View style={styles.signInContainer}>
					<AuthAction text="Sign in" handleLogin={handleLogin} />
					<Text style={styles.signUpLabel}>
						Don&apos;t Have an Account?
						<Link href={'/login/SignUp'}>
							<Text style={styles.signUpLinkText}> Sign Up</Text>
						</Link>
					</Text>
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
		height: 16,
		width: 16,
	},
	checkboxContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		gap: 6,
	},
	errorText: {
		color: Colors.secondary.red[600],
		marginBottom: 8,
		textAlign: 'center',
	},
	inputContainer: {
		gap: 16,
	},
	inputOptions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 72,
	},
	link: {
		color: Colors.secondary.blue[600],
	},
	screenContainer: {
		padding: 24,
	},
	signInContainer: {},
	signUpLabel: {
		textAlign: 'center',
	},
	signUpLinkText: {
		color: Colors.secondary.blue[600],
	},
})
export default signIn
