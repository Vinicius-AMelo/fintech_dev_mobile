import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "@/utils/Colors/colors";
import { maskCurrency } from "@/utils/Masks/masks";
import { Wallet, WalletMinimal } from "lucide-react-native";

interface IBalanceProps {
	value: number;
}

const Balance = ({ value }: IBalanceProps) => {
	return (
		<View style={styles.balance_container}>
			<Text style={styles.balance_value}>{maskCurrency(value)}</Text>
			<Text style={styles.balance_description}>Saldo disponível</Text>
			<TouchableOpacity style={styles.add_money_button}>
				<WalletMinimal width={20} color={Colors.white} />
				<Text style={styles.add_money_text}>Adicionar</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	balance_container: {
		gap: 8,
		alignItems: "center",
	},
	balance_value: {
		fontSize: 48,
		lineHeight: 48,
		fontWeight: "bold",
		color: Colors.white,
	},
	balance_description: {
		fontSize: 20,
		color: Colors.lightGray,
		marginBottom: 8,
	},
	add_money_button: {
		flexDirection: "row",
		backgroundColor: "transparent",
		borderColor: Colors.white,
		borderWidth: 1,
		borderRadius: 100,
		padding: 8,
		alignItems: "center",
		gap: 8,
	},
	add_money_text: {
		color: Colors.white,
	},
});

export default Balance;
