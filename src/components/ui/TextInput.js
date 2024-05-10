//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {AppColors} from '../../theme/appColors';

// create a component
const CustomTextInput = ({value, placeHolder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 5, fontSize: 18, fontWeight: '500'}}>
        {placeHolder}
      </Text>
      <TextInput
        value={value}
        placeHolder={placeHolder}
        style={{
          width: '100%',
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          backgroundColor: '#d2d2d2',
          borderColor: AppColors.GRAY,
        }}
        onChangeText={onChangeText}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.WHITE,
    margin: 10,
  },
});

//make this component available to the app
export default CustomTextInput;
