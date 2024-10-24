import { SafeAreaView, StyleSheet, View } from 'react-native'

import Header from '@/components/HomePage/Header'
import Wallet from '@/components/HomePage/Wallet'
import { Colors } from '@/utils/Colors/colors'

const Home = () => (
	<SafeAreaView>
		<View style={styles.header}>
			<Header.Root>
				<Header.Trophy />
				<Header.Search />
				<Header.Bell />
			</Header.Root>

			<Wallet.Root>
				<Wallet.Balance value={5000} />
				<Wallet.WalletActions />
			</Wallet.Root>
		</View>
	</SafeAreaView>
)

const styles = StyleSheet.create({
	header: {
		backgroundColor: Colors.primary[400],
		gap: 24,
		padding: 20,
		paddingBottom: 0,
	},
})

export default Home
