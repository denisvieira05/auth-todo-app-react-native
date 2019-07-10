import React from 'react';
import { connect } from 'react-redux';
import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from '../modules/home-screen/HomeScreen';
import LoginScreen from '../modules/login-screen/LoginScreen';
import SplashScreen from '../modules/splash-screen/SplashScreen';
import MainTopBar from '../components/MainTopBar';

const routes = {
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: () => null,
    },
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => null,
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: MainTopBar,
  },
};

const MainStackNavigator = createStackNavigator(routes);

const AppNavigatorContainer = createAppContainer(MainStackNavigator);

const mapStateToProps = state => ({
  navigationState: state.generalStackNavigator,
});

export default connect(mapStateToProps)(AppNavigatorContainer);