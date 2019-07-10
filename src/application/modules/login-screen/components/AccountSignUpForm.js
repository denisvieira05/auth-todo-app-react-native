import React, { PureComponent } from 'react';
import {
  TextInput,
  ScrollView,
} from 'react-native';
import Button from '../../../components/Button';
import Colors from '../../../assets/Colors';

class AccountSignUpForm extends PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
  }

  onPressSignUp = () => {
    const { onPressSubmitAccountSignUpForm } = this.props;
    onPressSubmitAccountSignUpForm(this.state);
  }

  updateNameField = (newName) => {
    this.setState({ name: newName });
  }

  updateEmailField = (newEmail) => {
    this.setState({ email: newEmail });
  }


  updatePasswordField = (newPassword) => {
    this.setState({ password: newPassword });
  }

  render() {
    const {
      name,
      email,
      password,
    } = this.state;

    return (
      <ScrollView
        style={styles.mainContainer}
      >
        <TextInput
          style={{ color: Colors.main_blue, marginBottom: 15 }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={this.updateNameField}
          placeholder="Nome"
          placeholderTextColor={Colors.main_blue}
          underlineColorAndroid={Colors.main_blue}
          value={name}
        />

        <TextInput
          style={{ color: Colors.main_blue, marginBottom: 15 }}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={this.updateEmailField}
          placeholder="Email"
          placeholderTextColor={Colors.main_blue}
          underlineColorAndroid={Colors.main_blue}
          value={email}
        />

        <TextInput
          style={{ color: Colors.main_blue, marginBottom: 20 }}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.updatePasswordField}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor={Colors.main_blue}
          underlineColorAndroid={Colors.main_blue}
          value={password}
        />

        <Button
          onPress={this.onPressSignUp}
          text="Cadastrar"
          textColor={Colors.main_blue}
          style={{ marginBottom: 40}}
        />

      </ScrollView>
    );
  }
}

const styles = {
  mainContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    paddingRight: 60,
    paddingLeft: 60,
  },
};


export default AccountSignUpForm;
