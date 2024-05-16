//import liraries
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {AppColors} from '../../theme/appColors';
import NoteCard from '../../components/notes/noteCard';
import FlatActionButton from '../../components/ui/flatActionButton';
import {notes} from '../../utils/mockData';
import LoadingModal from '../../components/loading';

// create a component
const NoteList = props => {
  const [notes, setNotes] = useState([]);
  const [visible, setVisible] = useState(false);

  const getNotes = async () => {
    setVisible(true);
    firestore()
      .collection('Notes')
      .get()
      .then(querySnapshot => {
        const fetchedNotes = [];
        querySnapshot.forEach(documentSnapshot => {
          fetchedNotes.push({
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            id: documentSnapshot.id,
            region: documentSnapshot.data().region,
          });
        });
        setNotes(fetchedNotes);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setVisible(false);
      });
  };
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoadingModal visible={visible} />

      <View style={styles.container}>
        {visible ? (
          <ActivityIndicator size={'large'} color={AppColors.BLUE} />
        ) : (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={visible} onRefresh={getNotes} />
            }
            data={notes}
            renderItem={({item}) => <NoteCard item={item} />}
            keyExtractor={(item, index) => index}
          />
        )}
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
