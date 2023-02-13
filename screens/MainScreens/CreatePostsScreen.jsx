import { useState } from 'react';
import MapView from 'react-native-maps';
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const CreatePostsScreen = ({ navigation }) => {
  const [snap, setSnap] = useState(null);
  const [foto, setFoto] = useState(null);

  const takeFoto = async () => {
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    console.log(cameraStatus);
    const foto = await snap.takePictureAsync();
    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    const location = await Location.getCurrentPositionAsync({});

    console.log('location', location);
    setFoto(foto.uri);
    console.log('foto', foto);
  };

  const sendFoto = () => {
    navigation.navigate('DefaultScreen', { foto });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Posts')}
        >
          <Image
            style={styles.arrowBack}
            source={require('../../components/Images/arrowLeft.png')}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Создать публикацию</Text>
      </View>
      <View style={styles.heroContainer}>
        <View style={styles.cameraCont}>
          <Camera style={styles.camera} ref={setSnap}>
            {foto && (
              <View style={styles.takeFotoCont}>
                <Image
                  source={{ uri: foto }}
                  style={{ height: 160, width: 200 }}
                />
              </View>
            )}
            <TouchableOpacity
              style={styles.snapCont}
              activeOpacity={0.6}
              onPress={takeFoto}
            >
              <Text style={styles.snap}>SNAP</Text>
            </TouchableOpacity>
          </Camera>
        </View>
        <Text style={styles.loadFotoText}>Загрузите фото</Text>
        <View style={styles.contInputs}>
          <TextInput
            style={styles.nameFotoInput}
            placeholder={'Название'}
          ></TextInput>
        </View>
        <View style={styles.contLocationInput}>
          <View style={styles.locationIcon}>
            <Image
              source={require('../../components/Images/locationIcon.png')}
            ></Image>
          </View>
          <View style={styles.locationInput}>
            <TextInput placeholder={'Местность'}></TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={sendFoto}
            activeOpacity={0.6}
            style={styles.publishBtn}
          >
            <Text style={styles.textPublishBtn}>Опубликовать</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 44,
    marginBottom: 10,
    paddingLeft: 15,
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginLeft: 90,
    marginBottom: 20,
  },
  arrowBack: {
    width: 24,
    height: 24,
  },
  heroContainer: {
    paddingHorizontal: 15,
  },
  cameraCont: {
    justifyContent: 'center',
    height: '50%',
  },
  camera: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
  },
  snap: {
    color: '#fff',
  },
  snapCont: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff0000',
    borderRadius: 10,
    width: 50,
    marginBottom: 15,
  },
  takeFotoCont: {
    position: 'absolute',
    top: 30,
    left: 10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingBottom: 10,
  },
  loadFotoText: {
    marginTop: 8,
  },
  nameFotoInput: {
    height: 50,
    marginTop: 32,
    borderBottomWidth: 1,
  },
  contLocationInput: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  locationInput: {
    minHeight: 50,
    marginTop: 15,
  },
  locationIcon: {
    width: 24,
    height: 24,
  },
  publishBtn: {
    marginTop: 63,
    marginBottom: 16,
    paddingVertical: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 50,
    width: '100%',
    height: 50,
  },
  textPublishBtn: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    textAlign: 'center',
  },
});

export default CreatePostsScreen;
