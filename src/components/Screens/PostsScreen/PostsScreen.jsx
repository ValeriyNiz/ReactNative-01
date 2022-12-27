import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const PostsScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('CreatePostsScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Публикации</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Login')}
        >
          <Image
            style={styles.logOutIcon}
            source={require('../../../Images/logOut.png')}
          ></Image>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.myInfo}>
          <Image
            style={styles.userFoto}
            source={require('../../../Images/userFoto.png')}
          ></Image>
          <Text>Natali Romanova {'\n'}email@example.com</Text>
        </View>
      </View>
      <View style={styles.bottomLine}></View>
      <View style={styles.bottomNav}>
        <Image
          style={styles.myPostsIcon}
          source={require('../../../Images/myPosts.png')}
        ></Image>
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPressHandler()}>
          <Image
            style={styles.addNewPostIcon}
            source={require('../../../Images/addNewPost.png')}
          ></Image>
        </TouchableOpacity>
        <Image
          style={styles.myProfileIcon}
          source={require('../../../Images/myProfile.png')}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logOutIcon: {
    width: 24,
    height: 24,
  },
  myPostsIcon: {
    width: 40,
    height: 40,
  },
  myProfileIcon: {
    width: 40,
    height: 40,
  },
  addNewPostIcon: {
    width: 70,
    height: 40,
    borderRadius: 16,
  },
  userFoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 10,
  },
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    height: '100%',
  },
  bottomNav: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  myInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    paddingLeft: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 44,
    marginBottom: 10,
    paddingRight: 15,
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginRight: 120,
    marginBottom: 20,
  },
  bottomLine: {
    borderBottomWidth: 1,
    marginTop: 525,
  },
});

export default PostsScreen;
