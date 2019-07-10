import React, { PureComponent } from 'react'
import { View, Text, ActivityIndicator, Alert } from "react-native";
import Colors from '../../../assets/Colors'
import { connect } from 'react-redux';
import { FormSubmitType } from '../LoginEnums';
import SelectAccessForm from './SelectAccessForm'
import AccountSignInForm from './AccountSignInForm'
import AccountSignUpForm from './AccountSignUpForm'
import * as LoginActions from '../LoginActions'
import { withNavigation } from 'react-navigation';

class MainLoginForm extends PureComponent {

  state = {};

  static getDerivedStateFromProps(newProps, state) { 
    if (newProps.currentUserSession != null) {
      this._onSubmitWithSuccess()
    }
    return null;
  }
 
  onSubmitFacebookSignIn() {
    Alert.alert(" go to FACEBOOK");
  }

  _onSubmitWithSuccess() {
    this.props.navigation.replace("HomeScreen");
  }

  _onSubmitSignInForm(credentials) {
    this.props.signIn(credentials);
  }

  _onSubmitSignUpForm(newUserCredentials) {
    this.props.signUp(newUserCredentials);
  }
  renderCorrectFormBySubmitType(submitType) {
    const { onChangeSubmitType } = this.props;
    switch (submitType) {
      case FormSubmitType.SELECTION:
        this.props.cleanErrorAndLoading()
        return <SelectAccessForm onPressAccessMethod={onChangeSubmitType} />;
      case FormSubmitType.SIGNIN:
        return (
          <AccountSignInForm
            onPressSubmitAccountSignInForm={credentials =>
              this._onSubmitSignInForm(credentials)
            }
            onPressForgotPassword={() =>
              onChangeSubmitType(FormSubmitType.REMEMBER_PASSWORD)
            }
          />
        );
      case FormSubmitType.SIGNUP:
        return (
          <AccountSignUpForm
            onPressSubmitAccountSignUpForm={newUserCredentials =>
              this._onSubmitSignUpForm(newUserCredentials)
            }
          />
        );
      case FormSubmitType.FACEBOOK:
        this.onSubmitFacebookSignIn();
        return <SelectAccessForm onPressAccessMethod={onChangeSubmitType} />;
      default:
        break;
    }
  }

  render() {
    const { submitType, apiRequestError, isLoading } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {this.renderCorrectFormBySubmitType(submitType)}
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.main_blue} />
        ) : null}
        {apiRequestError && (
          <View
            style={{
              backgroundColor: Colors.light_red,
              paddingBottom: 5,
              paddingTop: 5,
              paddingStart: 10,
              paddingEnd: 10,
            }}
          >
            <Text style={{ color: Colors.white, alignSelf: "center", textAlign: 'center' }}>
              {apiRequestError}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  apiRequestError: state.login.apiRequestError,
  isLoading: state.login.isLoading,
  currentUserSession: state.login.currentUserSession
});

const mapDispatchToProps = {
  signIn: LoginActions.signIn,
  signUp: LoginActions.signUp,
  cleanErrorAndLoading: LoginActions.cleanErrorAndLoading
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(
  MainLoginForm
));