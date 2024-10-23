import AuthAction from '@/components/AuthPage/AuthAction'
import AuthHeader from '@/components/AuthPage/AuthHeader'
import AuthInput from '@/components/AuthPage/AuthInput'
import { Colors } from '@/utils/Colors/colors'
import { Lock } from 'lucide-react-native'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const resetPassword = () => {
	const [rememberMe, setRememberMe] = useState(false)

	return (
		<SafeAreaView style={styles.screenContainer}>
			<View style={styles.inputContainer}>
				<AuthHeader title="Reset your Password?" subtitle="Reset your password and confirm now" />
				<AuthInput icon={<Lock size={24} color={Colors.primary[400]} />} placeholder="Password" password />
				<AuthInput icon={<Lock size={24} color={Colors.primary[400]} />} placeholder="Confirm Password" password />

				<View style={styles.signInContainer}>
					<AuthAction text="Reset Password" path={'/login/SignIn'} />
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
})
export default resetPassword
