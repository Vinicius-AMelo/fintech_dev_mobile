import { Colors } from '@/utils/Colors/colors'
import { EyeOff } from 'lucide-react-native'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

interface AuthInputProps {
	placeholder: string
	icon: ReactNode
	password?: boolean
	value: string
	setValue: Dispatch<SetStateAction<string>>
}

const AuthInput = ({ placeholder, icon, password, value, setValue }: AuthInputProps) => (
	<View style={styles.inputBox}>
		{icon}
		<TextInput
			value={value}
			onChangeText={setValue}
			style={styles.input}
			placeholder={placeholder}
			placeholderTextColor={Colors.text.placeholder}
		/>
		{password ? <EyeOff color={Colors.primary[400]} style={{ marginLeft: 'auto' }} /> : null}
	</View>
)

const styles = StyleSheet.create({
	input: {
		width: '100%',
	},
	inputBox: {
		alignItems: 'center',
		borderColor: Colors.secondary.gray[300],
		borderRadius: 12,
		borderWidth: 1,
		flexDirection: 'row',
		gap: 6,
		marginBottom: 16,
		padding: 12,
	},
})

export default AuthInput
