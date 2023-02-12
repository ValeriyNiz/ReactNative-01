import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.commentsTitle}>CommentsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  commentsTitle: {
    marginTop: 20,
  },
});

export default CommentsScreen;
