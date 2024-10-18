import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function App() {
	const [logged, setLogged] = useState<boolean | null>(null);

	const checkToken = async () => {
		try {
			const token = await AsyncStorage.getItem("token");
			setLogged(!!token);
		} catch (error) {
			setLogged(false);
		}
	};

	useEffect(() => {
		checkToken();
	}, []);

	if (logged === null) {
		return (
			<View style={styles.splash}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<>{logged ? <Redirect href="/home" /> : <Redirect href="/login" />}</>
	);
}

const styles = StyleSheet.create({
	splash: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
});
