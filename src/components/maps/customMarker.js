//import liraries
import {Location} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const CustomMarker = () => {
  return (
    <View style={styles.container}>
      <Location size="100" color="#37d67a" variant="Bold" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default CustomMarker;
