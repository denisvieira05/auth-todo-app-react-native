import React, { PureComponent } from 'react';
import {
  Text, TouchableOpacity, View, CheckBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../assets/Colors';

class TodoListItem extends PureComponent {
  render() {
    const { 
      itemId,
      isChecked,
      itemName,
      onConclude
    } = this.props;
    return (
      <View>
        <View style={styles.mainContainer}>
          <View style={styles.checkboxContainer}>
            <CheckBox checkedIcon="dot-circle-o" uncheckedIcon="circle-o" />
          </View>
          <Text style={styles.itemTextStyle}>{itemName}</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.editIconContainer}>
              <Icon name="edit" size={20} color={Colors.main_blue} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="remove" size={20} color={Colors.main_blue} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomLine} />
      </View>
    );
  }
}

const styles = {
  checkboxContainer: {
    flex: 1,
  },
  mainContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editIconContainer: {
    marginEnd: 20,
  },
  itemTextStyle: {
    flex: 3,
    color: Colors.main_blue,
    textDecorationLine: 'line-through',
  },
  bottomLine: {
    backgroundColor: Colors.light_grey,
    height: 1,
  },
  iconsContainer: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export default TodoListItem;
