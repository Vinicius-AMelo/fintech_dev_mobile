import { Colors } from '@/utils/Colors/colors'
import { Href, useRouter } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface AuthHeaderProps {
	text: string
	path?: Href<string | object>
	replace?: boolean
	handleLogin?: () => void
}

const AuthAction = ({ text, path, replace, handleLogin }: AuthHeaderProps) => {
	const router = useRouter()
	return (
		<TouchableOpacity
			style={styles.mainButton}
			onPress={() => (handleLogin ? handleLogin() : replace ? router.replace(path!) : router.push(path!))}>
			<Text style={styles.mainButtonText}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	mainButton: {
		backgroundColor: Colors.secondary.blue[600],
		borderRadius: 12,
		marginBottom: 16,
	},
	mainButtonText: {
		color: Colors.white[50],
		paddingVertical: 16,
		textAlign: 'center',
	},
})

export default AuthAction
