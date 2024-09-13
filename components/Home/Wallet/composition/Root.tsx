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
		gap: 8,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Root;
