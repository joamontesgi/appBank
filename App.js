import { StyleSheet, Text, View, TextInput, Button, Image, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const mostrarMensaje = () => {
    Alert.alert('Este es un alert', 'Acá está el contenido');
  };
  return (
    <View style={styles.container}>
      <Text>Ingrese un texto aquí: </Text>
      <Text>{'\n'}</Text>
      <TextInput placeholder='Ingrese su nombre: ' style={styles.input} />
      <Text>{'\n'}</Text>
      <Button color="green" title="Haz click" onPress={mostrarMensaje} />
      <Text>{'\n'}</Text>
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={styles.imagen} />
      <WebView source={{ uri: 'https://unal.edu.co/' }} />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 5,
    textAlign: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
  },
});
