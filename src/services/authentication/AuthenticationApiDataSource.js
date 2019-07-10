import * as firebase from 'firebase';
import ApiDataSource, { USER_SESSION_ASYNCSTORAGE_KEY } from '../ApiDataSource';

class AuthenticationApiDataSource extends ApiDataSource {
  static signIn(email, password) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((snapshot) => {
          const { refreshToken, uid } = snapshot.user;

          resolve({ refreshToken, uid });
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  }

  signUp(name, email, password) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((snapshot) => {
          const { refreshToken, uid } = snapshot.user;
          const user = firebase.auth().currentUser;

          this.saveNewUserData(uid, name, email, 'image_url');

          resolve(snapshot.user);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  }

  static saveNewUserData(userId, name, email, profileImageUrl) {
    firebase
      .database()
      .ref(`users/${userId}`)
      .set({
        username: name,
        email,
        profile_picture: profileImageUrl,
        toDoList: [
          {
            id: 321432423,
            title: 'ToDo Example',
            isChecked: false,
          },
        ],
      });
  }
}

export default AuthenticationApiDataSource;

