import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// In a real incubator setup, we'd use the shared UI but Expo needs specific setup for components
// for now we use native View/Text
export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Zen Mobile Incubator 🚀</Text>
            <Text style={styles.subtitle}>Startup Mode: ACTIVE</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});
