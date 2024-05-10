//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/appColors';
import NoteCard from '../../components/notes/noteCard';
import FlatActionButton from '../../components/ui/flatActionButton';
import {notes} from '../../utils/mockData';

// create a component
const NoteList = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={notes}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id}
        />
        <FlatActionButton {...props} />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
});

//make this component available to the app
export default NoteList;
