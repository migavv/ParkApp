import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Pressable,
TextInput, CheckBox,tintColors, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Formik } from 'formik';


export default funtion App(props) {
    
    console.log("Todo copas");
    const{ title='Ingresar', otitle= 'Registrarse'} = props;
    const [text, onChangeText] = React.useState("Ingresar Usuario");
    const [number, onChangeNumber] = React.useState("Ingresar contraseña");
    const [isSelected, setSelection] = useState(false);
     
    
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>ParkApp</Text>
        <Formik 
          
        >
        </Formik> 
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={onChangeText}
          />
        <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{ true: '#fff', false: '#fff' }}
        />
          <Text style={styles.label}>Acepto los terminos y condiciones</Text>
          
        <Pressable style={styles.ingresar}>
        <Text style={styles.text}>{title}</Text>
        </Pressable>
        <Pressable style={styles.registrarse}>
        <Text style={styles.text}>{otitle}</Text>
        </Pressable>
        <TouchableOpacity>
            <Text style={styles.forgot}>Olvidaste tu contraseña?</Text>
            
          </TouchableOpacity>
      </SafeAreaView>
         
       );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E2D3E',
      
      
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      marginTop: 70,
      color: '#fff',
      marginLeft:10,
      borderColor: '#fff'
    },
    checkbox: {
      alignSelf: "center",
      marginRight: 343,
      margin: 20,
      borderColor: '#fff',
      
     },
    label: {
      margin: 0,
      color: '#fff',
      marginTop: -46,
      marginLeft: 56
    },
    ingresar:{
      alignItems: 'center',     
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,      
      backgroundColor: '#55C610',
      top: 154,
      color:'#fff',
      marginLeft: 40,
      marginRight: 40
    
    },
    registrarse:{
      alignItems: 'center',     
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,      
      backgroundColor: '#55C610',
      top: 173,
      marginLeft: 40,
      marginRight: 40
    },
    forgot:{
      color:"white",
      fontSize:15,
      marginTop: 189,
      marginLeft: 120
    },
    input:{
      marginTop: 45,
      height: 40,
      margin: 1,
      borderWidth: 0.5,
      borderColor: '#55C610',
      padding: 10,
      color: '#fff',
      backgroundColor: '#1E2D3E',
      borderRadius:3,
      marginLeft: 20,
      marginRight: 20
      
    },
    title:{
      marginTop:151,
      textAlign: 'center',
      fontSize: 70,
      fontWeight: 'bold',
      color: '#fff',
    }
  }
  );
