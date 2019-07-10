import { BUILD_TYPES, API_ENVIROMENTS } from './CONSTANTS';

const { MOCK, API } = BUILD_TYPES;
class ServiceDataSource {
  constructor(mockDatasource, apiDataSource) {
    this.BUILD_TYPE = BUILD_TYPES.API;
    this.mockDatasource = mockDatasource;
    this.apiDataSource = apiDataSource;
  }

  datasource() {
    switch (this.BUILD_TYPE) {
      case MOCK:
        return new this.mockDatasource();
      case API:
        return new this.apiDataSource(API_ENVIROMENTS.PROD);
      default:
        return new this.apiDataSource(API_ENVIROMENTS.PROD);
    }
  }
}

export default ServiceDataSource;

