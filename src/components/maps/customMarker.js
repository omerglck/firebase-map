//import liraries
import {Location} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/appColors';

// create a component
const CustomMarker = () => {
  return (
    <View style={styles.container}>
      <Location size="50" color={AppColors.RED} variant="Bold" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default CustomMarker;
