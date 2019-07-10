import ApiDataSource from '../ApiDataSource';

export const UID_LOCALSTORAGE_KEY = 'uid';
export const REFRESH_TOKEN_LOCALSTORAGE_KEY = 'refresh_token';

class AuthenticationApiDataSource extends ApiDataSource {
  static signIn(email, password) {
    return new Promise((resolve, reject) => {

    });
  }

  static signUp(name, email, password) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}

export default AuthenticationApiDataSource;
