import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";

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
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return (
		<>{logged ? <Redirect href="/home" /> : <Redirect href="/login" />}</>
	);
}
