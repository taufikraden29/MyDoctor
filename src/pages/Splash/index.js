import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';

export default function Splash() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.judul}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#112340',
    marginTop: 20,
  },
});
