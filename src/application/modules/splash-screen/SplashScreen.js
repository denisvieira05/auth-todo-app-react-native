import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../assets/Colors';
import { mainLogo } from '../../assets/Images';
import * as SplashScreenActions from './SplashScreenActions';

class SplashScreen extends PureComponent {
  state = {};

  static getDerivedStateFromProps(newProps) {
    const { userIsLogged } = newProps;
    setTimeout(() => {
      if (userIsLogged) {
        newProps.navigation.replace('HomeScreen');
      } else {
        newProps.navigation.replace('LoginScreen');
      }
    }, 3000);

    return null;
  }

  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={mainLogo} style={styles.image} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userIsLogged: state.splashScreen.userIsLogged,
});

const mapDispatchToProps = {
  getCurrentUser: SplashScreenActions.getCurrentUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.main_blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
};
