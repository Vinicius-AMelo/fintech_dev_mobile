import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { AuthProvider } from '../services/AuthContext'

const queryClient = new QueryClient()

export default function RootLayout() {
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<Stack
					screenOptions={{
						headerShown: false,
					}}></Stack>
			</QueryClientProvider>
		</AuthProvider>
	)
}
