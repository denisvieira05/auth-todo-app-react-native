import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { mainLogo } from '../assets/Images';
import Colors from '../assets/Colors';

const styles = {
  headerRight: {
    marginRight: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
};

const MainTopBar = ({ navigation }) => {
  return {
    title: 'Auth TODO App',
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.headerRight}
      >
        <Text style={{ color: Colors.white }}>SAIR</Text>
      </TouchableOpacity>
    ),
    headerLeft: (
      <Image
        style={styles.image}
        source={mainLogo}
      />
    ),
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      marginRight: 56,
      color: Colors.white,
    },
    headerStyle: {
      backgroundColor: Colors.main_blue,
    },
  };
};

export default MainTopBar;
