/* eslint-disable react-native/no-color-literals */
import AuthAction from '@/components/AuthPage/AuthAction'
import AuthHeader from '@/components/AuthPage/AuthHeader'
import { Colors } from '@/utils/Colors/colors'
import { useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type OTPType = {
	[key: string]: string
}

const resetPassword = () => {
	const [rememberMe, setRememberMe] = useState(false)
	const [otp, setOtp] = useState<OTPType>({ first: '', second: '', third: '', fourth: '' })

	const inputs = useRef<{ [key: string]: TextInput | null }>({})

	useEffect(() => {
		Object.keys(otp).forEach((key, index) => {
			if (otp[key].length === 1) {
				const nextKey = Object.keys(otp)[index + 1]
				if (nextKey && inputs.current[nextKey]) {
					inputs.current[nextKey]?.focus()
				}
			}
		})
	}, [otp])

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.inputContainer}>
				<AuthHeader title="Email verification" subtitle="Email Verification has been sent to your Email" />
				<View style={styles.otpContainer}>
					{Object.keys(otp).map((key: keyof OTPType, index) => (
						<TextInput
							ref={(input) => (inputs.current[key] = input)}
							key={index}
							value={otp[key]}
							onChangeText={(value) => setOtp({ ...otp, [key]: value })}
							style={styles.input}
							keyboardType="number-pad"
							placeholder={''}
							placeholderTextColor={Colors.text.placeholder}
						/>
					))}
				</View>
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
	input: {
		backgroundColor: '#dddeee',
		borderRadius: 12,
		flex: 1,
		fontSize: 32,
		fontWeight: 'bold',
		height: 40,
		textAlign: 'center',
	},
	inputContainer: {
		gap: 16,
	},
	otpContainer: {
		flexDirection: 'row',
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
