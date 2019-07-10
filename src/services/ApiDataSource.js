import * as firebase from 'firebase';
import { BASE_URLS } from './CONSTANTS';

export const UID_ASYNCSTORAGE_KEY = '@uid_session';

const firebaseConfig = {
  apiKey: 'AIzaSyCZI1c-y3lW8WL_LTXfP5f5h31LXUc5XnA',
  authDomain: 'authtodoapp.firebaseapp.com',
  databaseURL: 'https://authtodoapp.firebaseio.com',
  projectId: 'authtodoapp',
  storageBucket: 'authtodoapp.appspot.com',
  messagingSenderId: '66408663074',
  appId: '1:66408663074:web:74413413e68bb344',
};

class ApiDataSource {
  constructor(apiEnviroment) {
    this.API_ENVIROMENT = apiEnviroment;

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  getBaseUrl() {
    const enviroments = {
      LOCAL: () => BASE_URLS.LOCAL,
      STAGE: () => BASE_URLS.STAGE,
      PROD: () => BASE_URLS.PROD,
    };

    return enviroments[this.API_ENVIROMENT]();
  }
}

export default ApiDataSource;
