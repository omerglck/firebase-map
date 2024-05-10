//import liraries
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {AppColors} from '../../theme/appColors';
import {ArrowCircleRight2, Map} from 'iconsax-react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ADDNOTE} from '../../utils/routes';
import CustomMarker from '../../components/maps/customMarker';

// create a component
const SelectCoordinate = props => {
  const {navigation} = props;
  const [mapTypes, setMapTypes] = useState('standart');
  const [coordinate, setCordinate] = useState(null);
  const changeMapType = () => {
    if (mapTypes == 'standart') {
      setMapTypes('hybrid');
    } else {
      setMapTypes('standart');
    }
  };
  console.log(coordinate);
  const handleMarkerPress = e => {
    const {coordinate} = e?.nativeEvent;
    setCordinate(coordinate);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
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
          onPress={handleMarkerPress}
          region={{
            latitude: 41.023845,
            longitude: 29.1983273,
            latitudeDelta: 0.0922, // Küçük değerler daha fazla zoom yapar
            longitudeDelta: 0.0421, // Küçük değerler daha fazla zoom yapar
          }}>
          {coordinate && <Marker coordinate={coordinate} />}
        </MapView>
        <TouchableOpacity
          onPress={() =>
            !coordinate
              ? null
              : navigation.navigate(ADDNOTE, {coordinate: coordinate})
          }
          style={{
            width: 70,
            height: 70,
            position: 'absolute',
            bottom: 20,
            right: 15,
            zIndex: 100,
            backgroundColor: !coordinate ? AppColors.GRAY : AppColors.GREEN,
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
          <ArrowCircleRight2 size="35" color={AppColors.WHITE} />
        </TouchableOpacity>
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
export default SelectCoordinate;
