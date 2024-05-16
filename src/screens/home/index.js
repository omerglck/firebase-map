//import liraries
import React, {Component, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {AppColors} from '../../theme/appColors';
import {AddCircle, Map, NoteAdd, Notepad2} from 'iconsax-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlatActionButton from '../../components/ui/flatActionButton';
import {ADDNOTE, NOTELIST} from '../../utils/routes';
import {notes} from '../../utils/mockData';
import CustomMarker from '../../components/maps/customMarker';
import LoadingModal from '../../components/loading';

// create a component
const Home = props => {
  const {navigation} = props;
  const [mapTypes, setMapTypes] = useState('standart');
  const [notes, setNotes] = useState([]);
  const [visible, setVisible] = useState(false);
  const changeMapType = () => {
    if (mapTypes == 'standart') {
      setMapTypes('hybrid');
    } else {
      setMapTypes('standart');
    }
  };
  const getNotes = async () => {
    setVisible(true);
    firestore()
      .collection('Notes')
      .get()
      .then(querySnapshot => {
        const fetchedNotes = [];
        querySnapshot.forEach(documentSnapshot => {
          fetchedNotes.push(documentSnapshot.data());
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
  console.log('state içerisindeki notlar', notes);

  return (
    <SafeAreaView style={{flex: 1}}>
      <LoadingModal visible={visible} />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => changeMapType()}
          style={{
            width: 70,
            height: 70,
            position: 'absolute',
            top: 20,
            left: 15,
            zIndex: 100,
            backgroundColor:
              mapTypes == 'standart' ? AppColors.WHITE : AppColors.BLUE,
            borderRadius: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}>
          <Map
            size="35"
            color={mapTypes == 'standart' ? AppColors.BLACK : AppColors.WHITE}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(NOTELIST)}
          style={{
            width: 70,
            height: 70,
            position: 'absolute',
            top: 20,
            right: 15,
            zIndex: 100,
            backgroundColor: AppColors.WHITE,
            borderRadius: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}>
          <Notepad2 size="35" color={AppColors.BLACK} />
        </TouchableOpacity>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          mapType={mapTypes} // haritanın tipi
          initialRegion={{
            latitude: 41.0541648,
            longitude: 28.9764438,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={{
            latitude: 41.023845,
            longitude: 29.1983273,
            latitudeDelta: 0.0922, // Küçük değerler daha fazla zoom yapar
            longitudeDelta: 0.0421, // Küçük değerler daha fazla zoom yapar
          }}>
          {notes.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.region}
              title={marker.title}
              description={marker.description}>
              <CustomMarker />
            </Marker>
          ))}
        </MapView>

        <FlatActionButton {...props} />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

//make this component available to the app
export default Home;
