//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomTextInput from '../../components/ui/TextInput';
import {AppColors} from '../../theme/appColors';
import CustomButton from '../../components/ui/CustomButton';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

// create a component
const AddNote = ({route}) => {
  const {coordinate} = route?.params;
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(null);
  const navigation = useNavigation();
  const handleSaveNote = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      region: coordinate,
    };

    firestore()
      .collection('Notes')
      .add(form)
      .then(() => {
        // Alert.alert('Başarılı', 'Not Başarılı Bir Şekilde Eklendi');
        Alert.alert('Başarılı', 'Not Başarılı Bir Şekilde Silindi', [
          {
            text: 'Tamam',
            onPress: () => navigation.goBack(),
            style: 'cancel',
          },
        ]);
        console.log('Notes added!');
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
        loading={loading}
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
