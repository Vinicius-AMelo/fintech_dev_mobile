import { View, TextInput, StyleSheet, SafeAreaView } from "react-native";

import Header from "@/components/Home/Header";
import Wallet from "@/components/Home/Wallet";
import Colors from "@/utils/Colors/colors";

const Home = () => {
	return (
		<SafeAreaView>
			<View style={styles.header}>
				<Header.Root>
					<Header.Trophy />
					<Header.Search />
					<Header.Bell />
				</Header.Root>

				<Wallet.Root>
					<Wallet.Balance value={5000} />
				</Wallet.Root>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	header: {
		padding: 20,
		gap: 24,
		backgroundColor: Colors.primaryBlue,
	},
});

export default Home;
