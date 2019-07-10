import React, { PureComponent } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/Colors';
import { mainLogo } from '../../assets/Images';
import { FormSubmitType } from './LoginEnums';
import MainLoginForm from './components/MainLoginForm';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentSubmitType: FormSubmitType.SELECTION,
    };
  }

  goToAccessSelection = () => {
    this.updateSubmitType(FormSubmitType.SELECTION);
  }

  updateSubmitType = (newSubmitType) => {
    this.setState({ currentSubmitType: newSubmitType });
  }

  showBackIcon(currentSubmitType) {
    return currentSubmitType !== FormSubmitType.SELECTION && (
      <TouchableOpacity onPress={this.goToAccessSelection}>
        <Ionicons name="md-arrow-back" size={30} color={Colors.white} />
      </TouchableOpacity>
    );
  }

  render() {
    const { currentSubmitType } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: Colors.main_blue }}>
          <View
            style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}
          >
            {this.showBackIcon(currentSubmitType)}
          </View>

          <Image
            style={styles.mainLogo}
            source={mainLogo}
          />
        </View>

        <MainLoginForm
          submitType={currentSubmitType}
          onChangeSubmitType={this.updateSubmitType}
          onFormSuccess={() => this.goToHome()}
        />
      </View>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

const styles = {
  mainLogo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
