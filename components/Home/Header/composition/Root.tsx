import { View, StyleSheet } from "react-native";
import { ReactNode } from "react";

interface IRootProps {
	children: ReactNode;
}

const Root = ({ children }: IRootProps) => {
	return <View style={styles.header_root}>{children}</View>;
};

const styles = StyleSheet.create({
	header_root: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16,
	},
});

export default Root;
