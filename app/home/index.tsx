import Header from '@/components/HomePage/Header'
import Wallet from '@/components/HomePage/Wallet'
import { Colors } from '@/utils/Colors/colors'
import { ShoppingCart } from 'lucide-react-native'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const transactions = [
	{ id: '1', description: 'Grocery Shopping', amount: -50, date: '2024-11-25', sender: 'John Doe' },
	{ id: '2', description: 'Salary', amount: 5000, date: '2024-11-24', sender: 'Company XYZ' },
	{ id: '3', description: 'Electricity Bill', amount: -100, date: '2024-11-23', sender: 'Utility Company' },
	// Adicione mais transações conforme necessário
]

const Home = () => (
	<SafeAreaView style={styles.container}>
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

		<View style={styles.transactionsContainer}>
			<Text style={styles.transactionsTitle}>Recent Transactions</Text>
			<FlatList
				data={transactions}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View style={styles.transactionItem}>
						<View style={styles.transactionIcon}>
							<ShoppingCart size={24} color={item.amount < 0 ? Colors.secondary.red[600] : Colors.secondary.blue[600]} />
						</View>
						<View style={styles.transactionDetails}>
							<Text style={styles.transactionDescription}>{item.description}</Text>
							<Text style={styles.transactionSender}>{item.sender}</Text>
						</View>
						<View style={styles.transactionAmountDate}>
							<Text
								style={[
									styles.transactionAmount,
									{ color: item.amount < 0 ? Colors.secondary.red[600] : Colors.secondary.green[600] },
								]}>
								{item.amount < 0 ? '-' : '+'}${Math.abs(item.amount)}
							</Text>
							<Text style={styles.transactionDate}>{item.date}</Text>
						</View>
					</View>
				)}
			/>
		</View>
	</SafeAreaView>
)

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.white[50],
		flex: 1,
	},
	header: {
		backgroundColor: Colors.primary[400],
		gap: 24,
		padding: 20,
		paddingBottom: 0,
	},
	transactionAmount: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	transactionAmountDate: {
		alignItems: 'flex-end',
	},
	transactionDate: {
		color: Colors.text.secondary,
		fontSize: 14,
	},
	transactionDescription: {
		color: Colors.text.primary,
		fontSize: 16,
	},
	transactionDetails: {
		flex: 1,
	},
	transactionIcon: {
		marginRight: 10,
	},
	transactionItem: {
		alignItems: 'center',
		backgroundColor: Colors.primary[50],
		borderRadius: 8,
		flexDirection: 'row',
		marginBottom: 10,
		padding: 15,
	},
	transactionSender: {
		color: Colors.text.secondary,
		fontSize: 14,
	},
	transactionsContainer: {
		backgroundColor: Colors.white[50],
		marginTop: 50,
		padding: 20,
	},
	transactionsTitle: {
		color: Colors.text.primary,
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},
})

export default Home
