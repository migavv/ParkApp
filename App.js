import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log("Todo copas");
 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ParkApp</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2D3E',
    
    
  },
  title:{
    marginTop:150,
    textAlign: 'center',
    color: '#fff',
    fontSize: 50,
    fontWeight: '200'
  }
});
