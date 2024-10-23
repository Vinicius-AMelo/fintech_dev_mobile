import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface IRootProps {
    children: ReactNode;
}

const Root = ({ children }: IRootProps) => <View style={styles.header_root}>{children}</View>;

const styles = StyleSheet.create({
    header_root: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
});

export default Root;
