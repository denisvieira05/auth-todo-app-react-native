import ServiceDataSource from '../ServiceDataSource';
import FakeUserApiDataSource from './FakeUserApiDataSource';
import UserApiDataSource from './UserApiDataSource';

class UserService extends ServiceDataSource {
  constructor() {
    super(FakeUserApiDataSource, UserApiDataSource);
  }

  getUser(uid) {
    return this.datasource().getUser(uid);
  }
}

export default UserService;
