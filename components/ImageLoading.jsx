import React from 'react';
import {
  Linking,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageLoading({ setState }) {
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('', 'Разрешение на показ медиатеки было отклонено', [
        { text: 'App info', onPress: () => Linking.openSettings() },
        { text: 'Ok' },
      ]);
      return;
    }
  };

  const pickImage = async () => {
    await requestPermissions();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setState(prevState => ({ ...prevState, photo: result.assets[0].uri }));
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={styles.uploadPhoto}>
      <Text style={styles.uploadPhotoText}>Загрузить фото</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  uploadPhoto: {
    marginTop: 8,
    marginBottom: 33,
  },
  uploadPhotoText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
});
