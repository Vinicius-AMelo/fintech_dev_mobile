/* eslint-disable react-native/no-unused-styles */
import AuthAction from '@/components/AuthPage/AuthAction'
import AuthHeader from '@/components/AuthPage/AuthHeader'
import AuthInput from '@/components/AuthPage/AuthInput'
import api from '@/utils/api/api'
import { Colors } from '@/utils/Colors/colors'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Link, useRouter } from 'expo-router'
import { Lock, Mail, Phone, User } from 'lucide-react-native'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const signUp = () => {
	const router = useRouter()

	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [error, setError] = useState<string>('')

	const fetchUser = async () => {
		try {
			const response = await api.post('http://localhost:3000/api/users', {
				email: username,
				password,
				name,
				phone,
			})
			return response.status
		} catch (e) {
			const axiosError = e as AxiosError
			return axiosError.response?.status
		}
	}

	const { data: status, refetch: refetchUser } = useQuery({ queryKey: ['user'], queryFn: fetchUser, enabled: false })

	const handleSignUp = () => {
		if (password !== confirmPassword) {
			setError('Passwords do not match')
			return
		}
		if (!username || !password || !name) {
			setError('Please fill in all fields')
			return
		}
		refetchUser()
		if (status === 201) {
			router.push('/login/SignIn')
		} else {
			setError('Failed to sign up. Please try again.')
		}
	}

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.inputContainer}>
				<AuthHeader title="Welcome to FundFlex" subtitle="Enter your Email, Name & Password to Sign Up" />
				{error ? <Text style={styles.errorText}>{error}</Text> : null}
				<AuthInput
					icon={<Mail size={24} color={Colors.primary[400]} />}
					value={username}
					setValue={setUsername}
					placeholder="Email"
				/>
				<AuthInput icon={<User size={24} color={Colors.primary[400]} />} value={name} setValue={setName} placeholder="Name" />
				<AuthInput
					icon={<Lock size={24} color={Colors.primary[400]} />}
					password
					setValue={setPassword}
					placeholder="Password"
					value={password}
				/>
				<AuthInput
					icon={<Lock size={24} color={Colors.primary[400]} />}
					password
					setValue={setConfirmPassword}
					placeholder="Confirm password"
					value={confirmPassword}
				/>
				<AuthInput
					icon={<Phone size={24} color={Colors.primary[400]} />}
					setValue={setPhone}
					placeholder="Confirm password"
					value={phone}
				/>

				<View style={styles.inputOptions}>
					{/* <View style={styles.checkboxContainer}>
						<View style={styles.checkbox}></View>
						<Text>Remember me</Text>
					</View>
					<Link style={styles.link} href={'/login/RecoverPassword'}>
						<Text>Forgot Password?</Text>
					</Link> */}
				</View>

				<View style={styles.signInContainer}>
					<AuthAction text="Sign Up" handleLogin={handleSignUp} />
					<Text style={styles.signUpLabel}>
						Already Have an Account?
						<Link href={'/login/SignIn'}>
							<Text style={styles.signUpLinkText}> Sign In</Text>
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
export default signUp
