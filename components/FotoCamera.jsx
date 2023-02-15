import React, { useState, useRef } from 'react';
import { Camera, CameraType } from 'expo-camera';
import * as Sharing from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import {
  View,
  Linking,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  Platform,
} from 'react-native';

import { useDimensions } from '../hooks/Dimensions';

export default function FotoCamera({ setState, setIsCamera }) {
  const cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState(null);
  const { dimensions } = useDimensions();
  const { height, width } = dimensions;

  const screenRatio = height / width;

  async function prepareRatio() {
    if (Platform.OS === 'android') {
      const ratios = await cameraRef.current.getSupportedRatiosAsync();
      let minDistance;

      for (const ratio of ratios) {
        const parts = ratio.split(':');
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);

        const distance = screenRatio - realRatio;

        if (!minDistance || (distance >= 0 && distance < minDistance)) {
          minDistance = ratio;
        }
      }

      setRatio(minDistance);
      setIsRatioSet(true);
    }
  }

  async function setCameraReady() {
    if (!isRatioSet) {
      await prepareRatio();
    }
  }

  async function takePhoto() {
    const photo = await cameraRef.current.takePictureAsync();
    setPhoto(photo.uri);
  }

  function noPhoto() {
    setPhoto(undefined);
    setIsCamera(false);
  }

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  if (photo) {
    function otherPhoto() {
      setPhoto(undefined);
    }

    function sharePhoto() {
      setState(prevState => ({
        ...prevState,
        photo: photo,
      }));
      setIsCamera(false);
      Sharing.shareAsync(photo).then(() => {
        setPhoto(undefined);
      });
    }

    function selectPhoto() {
      setState(prevState => ({
        ...prevState,
        photo: photo,
      }));
      setIsCamera(false);
      setPhoto(undefined);
    }

    async function savePhoto() {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('', 'Разрешение на показ медиатеки было отклонено', [
          {
            text: 'App info',
            onPress: () => Linking.openSettings(),
          },
          {
            text: 'Ok',
          },
        ]);
        return;
      }

      setState(prevState => ({
        ...prevState,
        photo: photo,
      }));
      MediaLibrary.saveToLibraryAsync(photo).then(() => {
        setIsCamera(false);
        setPhoto(undefined);
      });
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            width: width,
            height: (width / 9) * 16,
          }}
        >
          <Image
            style={styles.preview}
            source={{
              uri: photo,
            }}
          />
        </View>
        <View style={styles.previewIcons}>
          <TouchableOpacity onPress={noPhoto} style={styles.previewIcon}>
            <MaterialIcons name="no-photography" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={otherPhoto} style={styles.previewIcon}>
            <MaterialIcons name="flip-camera-ios" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={selectPhoto}
            style={{
              ...styles.previewIcon,
              height: 60,
              width: 60,
            }}
          >
            <MaterialIcons name="save-alt" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={sharePhoto} style={styles.previewIcon}>
            <MaterialIcons name="share" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={savePhoto} style={styles.previewIcon}>
            <MaterialIcons name="save" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        width={width}
        height={(width / 9) * 16}
        type={type}
        onCameraReady={setCameraReady}
        style={styles.camera}
        ref={cameraRef}
      >
        <TouchableOpacity
          onPress={noPhoto}
          style={{
            ...styles.noPhoto,
            left: 25,
          }}
        >
          <MaterialIcons name="no-photography" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.circleIcon}>
          <FontAwesome name="circle" size={35} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleCameraType}
          style={{
            ...styles.noPhoto,
            right: 25,
          }}
        >
          <MaterialIcons name="flip-camera-android" size={20} color="white" />
        </TouchableOpacity>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  noPhoto: {
    position: 'absolute',
    bottom: 25,
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  circleIcon: {
    height: 60,
    width: 60,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  preview: { flex: 1 },
  previewIcons: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: 88,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  previewIcon: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
});
