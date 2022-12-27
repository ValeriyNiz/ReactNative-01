import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

const CreatePostsScreen = ({navigation}) => {

const onPressHandler = () => {
      navigation.navigate('Posts')
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPressHandler()}>
          <Image style={styles.arrowBack} source={require('../../../Images/arrowLeft.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Создать публикацию</Text>
      </View>
      <View style={styles.heroContainer}>
        <View style={styles.fotoArea}>
            <Image style={styles.addFotoIcon} source={require('../../../Images/addFoto.png')}></Image>
        </View>
        <Text style={styles.loadFotoText}>Загрузите фото</Text>
        <View style={styles.contInputs}>
          <TextInput
            style={styles.nameFotoInput}
            placeholder={'Название'}>
          </TextInput>
        </View>
        <View style={styles.contLocationInput}>
          <View style={styles.locationIcon}>
            <Image  source={require('../../../Images/locationIcon.png')}>
            </Image>
          </View>
          <View style={styles.locationInput}>
            <TextInput
            placeholder={'Местность'}>
            </TextInput>
          </View>

        </View>
        <View></View>
        <View></View>
      </View>
    </View>

  )
}

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
    borderBottomWidth: 1
  },
  headerTitle: {
    marginLeft: 90,
    marginBottom: 20
  },
  arrowBack: {
    width: 24,
    height: 24,
  },
  heroContainer: {
    paddingHorizontal: 15
  },
  fotoArea: {
    justifyContent: 'center',
    minHeight: 240,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  addFotoIcon: {
    width: 60,
    height: 60,
    alignSelf: 'center'
  },
  loadFotoText: {
    marginTop: 8
  },
  nameFotoInput: {
    height: 50,
    marginTop: 32,
    borderBottomWidth: 1
  },
  contLocationInput: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  locationInput: {
    minHeight: 50,
    marginTop: 15,
  },
  locationIcon: {
    width: 24,
    height: 24,
  },

})

export default CreatePostsScreen;