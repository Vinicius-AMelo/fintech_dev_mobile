import { TextInput, View, StyleSheet } from "react-native";
import Colors from "@/utils/Colors/colors";
import { GlassesIcon, Search } from "lucide-react-native";

const SearchBar = () => {
	return (
		<View style={styles.search_container}>
			<Search color={Colors.white} />
			<TextInput
				placeholder="Buscar"
				placeholderTextColor={Colors.white}
				style={styles.input}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	search_container: {
		flexDirection: "row",
		gap: 8,
		borderRadius: 100,
		width: "60%",
		paddingHorizontal: 8,
		paddingVertical: 4,
		backgroundColor: Colors.lightBlue,
	},
	input: {
		paddingHorizontal: 8,
		color: Colors.white,
	},
});
export default SearchBar;
