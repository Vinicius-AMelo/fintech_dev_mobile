import { Colors } from '@/utils/Colors/colors'
import { maskCurrency } from '@/utils/Masks/masks'
import { WalletMinimal } from 'lucide-react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface IBalanceProps {
	value: number
}

const Balance = ({ value }: IBalanceProps) => (
	<View style={styles.balance_container}>
		<Text style={styles.balance_value}>{maskCurrency(value)}</Text>
		<Text style={styles.balance_description}>Saldo disponível</Text>
		<TouchableOpacity style={styles.add_money_button}>
			<WalletMinimal width={20} color={Colors.white[50]} />
			<Text style={styles.add_money_text}>Adicionar saldo</Text>
		</TouchableOpacity>
	</View>
)

const styles = StyleSheet.create({
	add_money_button: {
		alignItems: 'center',
		backgroundColor: Colors.transparent,
		borderColor: Colors.white[50],
		borderRadius: 100,
		borderWidth: 1,
		flexDirection: 'row',
		gap: 8,
		padding: 8,
	},
	add_money_text: {
		color: Colors.white[50],
	},
	balance_container: {
		alignItems: 'center',
		gap: 8,
	},
	balance_description: {
		color: Colors.secondary.gray[400],
		fontSize: 20,
		marginBottom: 8,
	},
	balance_value: {
		color: Colors.white[50],
		fontSize: 48,
		fontWeight: 'bold',
		lineHeight: 48,
	},
})

export default Balance
