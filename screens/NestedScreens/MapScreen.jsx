import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mapTitle}>MapScreen</Text>
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
  mapTitle: {
    marginTop: 20,
  },
});

export default MapScreen;
