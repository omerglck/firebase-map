//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from '../../components/ui/TextInput';
import {AppColors} from '../../theme/appColors';
import CustomButton from '../../components/ui/CustomButton';

// create a component
const AddNote = ({route}) => {
  const {coordinate} = route?.params;
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const handleSaveNote = () => {
    const form = {
      title: title,
      description: description,
      region: coordinate,
    };
  };
  return (
    <View style={styles.container}>
      <CustomTextInput
        placeHolder={'Başlık'}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <CustomTextInput
        placeHolder={'Açıklama'}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <CustomButton
        disabled={!title || !description}
        title={'Kaydet'}
        onPress={handleSaveNote}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default AddNote;
