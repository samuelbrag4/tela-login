import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/view-photorealistic-delicious-watermelon-fruit.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Crie sua conta no mundo das melancias</Text>
        <StatusBar style="auto" />

        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1waRCIyuI7ICKHqvOnZIZTBeZyg8vWvQK1A&s' }} style={{ width: 64, height: 64, margin: 10, borderRadius: 50 }} /> {/* Imagem da web */}

        <TextInput 
        style={styles.input}
        placeholder='Digite seu nome'
        placeholderTextColor='999' 
        />

        <TextInput 
        style={styles.input}
        placeholder='Digite sua senha'
        placeholderTextColor='999' 
        secureTextEntry={true}
        />  
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});