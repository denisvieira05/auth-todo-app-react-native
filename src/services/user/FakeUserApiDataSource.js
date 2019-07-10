import ApiDataSource from '../ApiDataSource';

export const UID_LOCALSTORAGE_KEY = 'uid';
export const REFRESH_TOKEN_LOCALSTORAGE_KEY = 'refresh_token';

class UserApiDataSource extends ApiDataSource {
  static getUser(userId) {
    return new Promise((resolve, reject) => {

    });
  }
}

export default UserApiDataSource;
