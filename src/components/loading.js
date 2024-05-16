//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, ActivityIndicator} from 'react-native';
import {AppColors} from '../theme/appColors';

// create a component
const LoadingModal = ({visible}) => {
  return (
    <Modal visible={visible} transparent animationType="none">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            backgroundColor: AppColors.WHITE,
            borderRadius: 5,
            padding: 15,
          }}>
          <ActivityIndicator size={'large'} color={AppColors.GRAY} />
          <Text>Yükleniyor</Text>
        </View>
      </View>
    </Modal>
  );
};

//make this component available to the app
export default LoadingModal;
