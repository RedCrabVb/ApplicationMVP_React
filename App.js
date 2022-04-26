import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './src/Navbar'
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title='hello, todo app'></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  text: {

  }
});
