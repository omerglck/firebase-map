//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustomTextInput from '../../components/ui/TextInput';
import CustomButton from '../../components/ui/CustomButton';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {NOTELIST} from '../../utils/routes';

// create a component
const EditNote = ({route}) => {
  const {item} = route?.params;
  const [title, setTitle] = useState(item?.title);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(item?.description);
  const navigation = useNavigation();

  const handleUpdate = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      region: item?.region,
    };
    console.log(form);
    firestore()
      .collection('Notes')
      .doc(item?.id)
      .update(form)
      .then(() => {
        // Alert.alert('Başarılı', 'Not Başarılı Bir Şekilde Eklendi');
        Alert.alert('Başarılı', 'Not Başarılı Bir Şekilde Güncellendi', [
          {
            text: 'Tamam',
            onPress: () => navigation.navigate(NOTELIST),
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
        title={'Güncelle'}
        onPress={handleUpdate}
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
export default EditNote;
