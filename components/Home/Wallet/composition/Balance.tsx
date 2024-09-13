import Colors from "@/utils/Colors/colors";
import { maskCurrency } from "@/utils/Masks/masks";
import { Text, View, StyleSheet } from "react-native";

interface IBalanceProps {
	value: number;
}

const Balance = ({ value }: IBalanceProps) => {
	const zeta = 0;
	return (
		<View style={styles.balance_container}>
			<Text style={styles.balance_value}>{maskCurrency(value)}</Text>
			<Text style={styles.balance_description}>Saldo disponível</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	balance_container: {
		gap: 0,
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
	},
});

export default Balance;
