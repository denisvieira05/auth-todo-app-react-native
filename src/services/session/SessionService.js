import ServiceDataSource from '../ServiceDataSource';
import SessionLocalDataSource from './SessionLocalDataSource';

class SessionService extends ServiceDataSource {
  constructor() {
    super(null, SessionLocalDataSource);
  }

  getCurrentUserIdSession() {
    return this.datasource().getCurrentUserIdSession();
  }

  saveCurrentUserIdSession(user) {
    return this.datasource().saveCurrentUserIdSession(user);
  }

  cleanCurrentUserIdSession() {
    return this.datasource().cleanCurrentUserIdSession();
  }
}

export default SessionService;
