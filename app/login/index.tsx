import Colors from '@/utils/Colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onSubmit = async () => {
        if (username == 'admin' && password == 'admin') {
            try {
                await AsyncStorage.setItem('token', '1234');
                router.push('/home');
                // await AsyncStorage.removeItem('token');
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <SafeAreaView style={styles.loginScreen}>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Colors.buttons.lightBlue,
        borderRadius: 100,
        display: 'flex',
        height: 52,
        justifyContent: 'center',
        textAlign: 'center',
        width: '50%',
    },
    buttonText: {
        color: Colors.white,
        fontWeight: '500',
    },
    input: {
        borderRadius: 100,
        borderWidth: 1,
        fontSize: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        textAlign: 'left',
        width: '100%',
    },
    loginContainer: {
        alignItems: 'center',
        backgroundColor: Colors.bg.lightGray,
        gap: 8,
        padding: 8,
        width: '80%',
    },
    loginScreen: {
        alignItems: 'center',
        backgroundColor: Colors.bg.lightGray,
        flex: 1,
        justifyContent: 'center',
        padding: 8,
    },
});

export default Login;
