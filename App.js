import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Image source={require('./assets/icon.png')} style={{ width: 305, height: 159, margin: 10 }} /> {/* Imagem local */}
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ width: 64, height: 64, margin: 10 }} /> {/* Imagem da web */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
