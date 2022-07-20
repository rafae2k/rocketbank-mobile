import { StyleSheet, View } from 'react-native'
import Input from '../Input'

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <Input label="Email" icon="user" placeholder="Patodasilva@gmail.com" />
      <Input label="Password" icon="lock" placeholder="password" password />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32
  }
})
