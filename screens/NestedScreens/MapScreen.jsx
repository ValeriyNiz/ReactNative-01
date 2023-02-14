import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapScreen({ route }) {
  console.log('route', route);
  const { name, latitude, longitude } = route.params.location;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.6,
          longitudeDelta: 0.6,
        }}
      >
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title={name}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  map: {
    flex: 1,
  },
});
