import Colors from '@/utils/Colors/colors';
import { CircleDollarSign, Landmark } from 'lucide-react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IWalletActionProps {}

const WalletActions = () => (
    <View style={styles.wallet_actions_container}>
        <View style={styles.send_money_button_content}>
            <TouchableOpacity>
                <CircleDollarSign size={40} color={Colors.buttons.purple} />
            </TouchableOpacity>
            <Text>Enviar</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.send_money_button_content}>
            <TouchableOpacity>
                <CircleDollarSign size={40} color={Colors.buttons.yellow} />
            </TouchableOpacity>
            <Text>Receber</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.send_money_button_content}>
            <TouchableOpacity>
                <Landmark size={40} color={Colors.buttons.yellow} />
            </TouchableOpacity>
            <Text>Banco</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    send_money_button_content: {
        alignItems: 'center',
        gap: 8,
        justifyContent: 'center',
    },
    separator: {
        backgroundColor: Colors.lightGray,
        height: '50%',

        width: 1,
    },
    wallet_actions_container: {
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: 16,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 16,
        position: 'relative',
        top: 50,
        width: '100%',
    },
});

export default WalletActions;
