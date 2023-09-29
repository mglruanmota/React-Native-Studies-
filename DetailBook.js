import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailBook() {
  return (
    <View style={styles.container}>
      <Text>Tela de detalhes de livros</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
