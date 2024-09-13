import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="login" />
			<Stack.Screen name="home" />
		</Stack>
	);
}
