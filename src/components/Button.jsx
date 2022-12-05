import { StyleSheet, Pressable, Text } from "react-native";


export default function Button(props) {
  const { onPress, title = 'Зарегистрироваться' } = props;
  return (<Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{ title }</Text>
    </Pressable>)
}

const styles = StyleSheet.create({
  button: {
    marginTop: 43,
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 50,
    width: 343,
    height: 50
  },
  text: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    textAlign: 'center',
  }
})