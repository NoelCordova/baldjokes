import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Paragraph, Button} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

import {FB_JOKES_DOC_REF} from '../../utils/FIREBASE_CONSTANTS';

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [numberOfJokes, setNumberOfJokes] = useState(0);

  useEffect(() => {
    // On load, fetch data and suscribe to updates
    const unsuscribe = firestore()
      .doc(FB_JOKES_DOC_REF)
      .onSnapshot(querySnapshot => {
        const fbNumberOfJokes = querySnapshot.data().numberOfJokes;
        setNumberOfJokes(fbNumberOfJokes);

        if (loading) {
          setLoading(false);
        }
      });

    // Stop listening updates whenever the component unmounts
    return () => unsuscribe();
  }, [loading]);

  const newJoke = async () => {
    await firestore()
      .doc(FB_JOKES_DOC_REF)
      .update({numberOfJokes: numberOfJokes + 1});
  };

  return (
    <SafeAreaView>
      <Paragraph>Number of jokes! : {numberOfJokes}</Paragraph>
      <Button onPress={newJoke}>Nuevo Joke</Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
