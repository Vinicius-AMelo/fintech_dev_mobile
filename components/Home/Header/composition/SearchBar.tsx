import Colors from '@/utils/Colors/colors';
import { Search } from 'lucide-react-native';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => (
    <View style={styles.search_container}>
        <Search color={Colors.white} />
        <TextInput placeholder="Buscar" placeholderTextColor={Colors.white} style={styles.input} />
    </View>
);

const styles = StyleSheet.create({
    input: {
        color: Colors.white,
        paddingHorizontal: 8,
    },
    search_container: {
        backgroundColor: Colors.lightBlue,
        borderRadius: 100,
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        width: '60%',
    },
});
export default SearchBar;
