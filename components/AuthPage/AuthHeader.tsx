import { Colors } from '@/utils/Colors/colors'
import { headings } from '@/utils/Text/texts'
import { Image, StyleSheet, Text, View } from 'react-native'

interface AuthHeaderProps {
	title: string
	subtitle: string
}

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => (
	<View style={styles.inputBox}>
		<View style={styles.imageContainer}>
			<Image source={require('../../assets/images/logo-small.png')} style={styles.logoSmall} />
		</View>
		<View style={styles.headerContainer}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subtitle}>{subtitle}</Text>
		</View>
	</View>
)

const styles = StyleSheet.create({
	headerContainer: {
		marginBottom: 24,
	},
	imageContainer: {
		alignItems: 'center',
		marginBottom: 32,
	},
	inputBox: {},
	logoSmall: {
		height: 114,
		width: 114,
	},
	subtitle: {
		...headings.p,
		color: Colors.secondary.gray[700],
		textAlign: 'center',
	},
	title: {
		...headings.h3,
		textAlign: 'center',
	},
})

export default AuthHeader
