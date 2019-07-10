import ServiceDataSource from '../ServiceDataSource';
import FakeAuthenticationApiDataSource from './FakeAuthenticationApiDataSource';
import AuthenticationApiDataSource from './AuthenticationApiDataSource';

class AuthenticationService extends ServiceDataSource {
  constructor() {
    super(FakeAuthenticationApiDataSource, AuthenticationApiDataSource);
  }

  signIn(email, password) {
    return this.datasource().signIn(email, password);
  }

  signUp(username, email, password) {
    return this.datasource().signUp(username, email, password);
  }
}

export default AuthenticationService;
