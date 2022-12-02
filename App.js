import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>

      <Text>
        <h1>
          Enter Your Text
        </h1>
      </Text>
      <TextInput
        placeholder="Type here to convert uppercase!"
        style={styles.textInput}
        // placeholder="Text to uppercase"

        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text >
        <h1>
          Uppercase Text
        </h1>
        {text.toUpperCase()}
      </Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: "gray",
    // backgroundColor: "blue",
    width: "50vw",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 40,
    multiline: true,
    maxLength: 50,
    keyboardType: "numeric"
  },

});
