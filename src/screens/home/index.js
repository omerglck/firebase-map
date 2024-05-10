//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {AppColors} from '../../theme/appColors';
import {AddCircle, NoteAdd, Notepad2} from 'iconsax-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlatActionButton from '../../components/ui/flatActionButton';
import {ADDNOTE, NOTELIST} from '../../utils/routes';
import {notes} from '../../utils/mockData';

// create a component
const Home = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
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
              description={marker.description}
            />
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
