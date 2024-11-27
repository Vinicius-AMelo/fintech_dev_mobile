import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { AuthProvider } from '../services/AuthContext'

const queryClient = new QueryClient()

export default function RootLayout() {
	const router = useRouter()

	useEffect(() => {
		router.push('/login')
	}, [])

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
