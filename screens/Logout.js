import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import firebase from 'firebase';




export default class Logout extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text> LOG OUT</Text>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});