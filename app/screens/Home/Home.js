import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Paragraph} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

import {FB_JOKES_DOC_REF} from '../../utils/FIREBASE_CONSTANTS';

const HomeScreen = () => {
  useEffect(() => {
    // On load, fetch data and suscribe to updates
    const unsuscribe = firestore()
      .doc(FB_JOKES_DOC_REF)
      .onSnapshot(querySnapshot => {
        console.log(querySnapshot.data());
      });

    // Stop listening updates whenever the component unmounts
    return () => unsuscribe();
  }, []);

  return (
    <SafeAreaView>
      <Paragraph>Hello World!</Paragraph>
    </SafeAreaView>
  );
};

export default HomeScreen;
