import * as firebase from 'firebase';
import ApiDataSource from '../ApiDataSource';

class UserApiDataSource extends ApiDataSource {
  getUser() {
    return new Promise((resolve, reject) => {
      firebase.database().ref(`users/${this.USER_ID}`).once('value')
        .then((snapshot) => {
          const user = snapshot.val();
          resolve(user);
        });
    });
  }
}

export default UserApiDataSource;

