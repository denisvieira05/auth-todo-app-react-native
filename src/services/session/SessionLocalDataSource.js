import * as firebase from 'firebase';
import AsyncStorage from '@react-native-community/async-storage';
import ApiDataSource, {
  USER_SESSION_ASYNCSTORAGE_KEY,
  UID_ASYNCSTORAGE_KEY
} from '../ApiDataSource';

class SessionLocalDataSource extends ApiDataSource {
  getCurrentUserIdSession() {
    return new Promise(async (resolve, reject) => {
      const user = await AsyncStorage.getItem(UID_ASYNCSTORAGE_KEY);
      resolve(user);
    });
  }

  saveCurrentUserIdSession(user) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(UID_ASYNCSTORAGE_KEY, user.uid);
      resolve();
    });
  }

  cleanCurrentUserIdSession() {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(UID_ASYNCSTORAGE_KEY);
      resolve();
    });
  }
}

export default SessionLocalDataSource;
