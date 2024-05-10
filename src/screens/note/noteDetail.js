//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const NoteDetail = ({route}) => {
  const {item} = route?.params;
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default NoteDetail;
