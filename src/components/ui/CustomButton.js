//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/appColors';

// create a component
const CustomButton = props => {
  const {title, disabled} = props; // isimler aynı olunca ... nokta ile hepsini verebiliriz
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        {backgroundColor: disabled ? AppColors.GRAY : AppColors.GREEN},
      ]}>
      <Text
        style={{
          color: AppColors.WHITE,
          fontSize: 20,
          textAlign: 'center',
          fontWeight: '500',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.BLUE,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
});

//make this component available to the app
export default CustomButton;
