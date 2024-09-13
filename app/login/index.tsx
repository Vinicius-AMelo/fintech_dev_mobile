import { useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	TextInput,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
} from "react-native";

const Login = () => {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const onSubmit = async () => {
		if (username == "admin" && password == "admin") {
			try {
				await AsyncStorage.setItem("token", "1234");
				router.push("/home");
				await AsyncStorage.removeItem("token");
			} catch (error) {
				console.log(error);
			}
		}

		return;
	};

	return (
		<View style={styles.loginContainer}>
			<TextInput
				style={styles.input}
				placeholder="Usuário"
				placeholderTextColor="#000"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				placeholder="Senha"
				placeholderTextColor="#000"
				value={password}
				onChangeText={setPassword}
			/>

			<TouchableOpacity style={styles.button} onPress={onSubmit}>
				<Text style={styles.buttonText}>Entrar</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	loginContainer: {
		flex: 1,
		gap: 8,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#ecf0f1",
		padding: 8,
		width: "80%",
	},
	input: {
		borderWidth: 1,
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 100,
		width: "100%",
		textAlign: "left",
	},
	button: {
		display: "flex",
		backgroundColor: "#16abff",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
		height: 52,
		width: "50%",
		textAlign: "center",
	},
	buttonText: {
		color: "#ffffff",
		fontWeight: "500",
	},
});

export default Login;
