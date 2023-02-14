import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import { authSignOutUser } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const ProfileScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log('posts', posts);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Профиль</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => authSignOutUser(dispatch)}
        >
          <Image
            style={styles.logOutIcon}
            source={require('../../components/Images/logOut.png')}
          ></Image>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.postsCont}>
          <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.postsFoto}>
                <Image
                  source={{ uri: item.foto }}
                  style={{ width: '100%', height: 200 }}
                />
              </View>
            )}
          />
        </View>
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
  postsCont: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postsFoto: {
    marginBottom: 10,
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

export default ProfileScreen;
