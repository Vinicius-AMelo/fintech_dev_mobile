import Balance from './composition/Balance';
import Root from './composition/Root';
import WalletActions from './composition/WalletActions';

const Wallet = {
    Root: Root,
    Balance: Balance,
    WalletActions: WalletActions,
};

export default Wallet;
