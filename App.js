/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useRef} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {

  const inputRef = useRef();

  const editText = useCallback(() => {
    inputRef.current.setNativeProps({
      text: 'Edited Text',
    });
    inputRef.current.focus();
  }, [inputRef]);

  const updateText = useCallback(text => {
    console.log('updateText: ', text);
    inputRef.current.focus();
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={updateText}
          blurOnSubmit={false}
          autoFocus={false}
          showSoftInputOnFocus={true}
          maxLength={1}
        />
        <TextInput
          ref={inputRef}
          style={styles.input}
          blurOnSubmit={false}
          autoFocus={false}
          showSoftInputOnFocus={true}
          onFocus={f => console.log('onFocus')}
          onBlur={b => console.log('onBlur')}
        />
        <TouchableOpacity style={{margin: 10}} onPress={editText}>
          <Text style={{color: 'white'}}>Edit text Button</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'blue',
  },
});

export default App;
