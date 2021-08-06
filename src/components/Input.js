import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
export function Input(props){ 
    return(
        <View style={styles.containerInput}>
            <TextInput style={styles.input} placeholder={props.label} secureTextEntry={props.password} onChangeText={props.onChangeText}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput:{
        height: 60,
        width: 300,
        borderRadius: 15,
        flexDirection:'row',
        backgroundColor: '#FFFFFF',
        position: 'relative',
    },
    
    input:{
        flex:1,
        color: '#B2B2B2',
        fontSize: 18,
        paddingLeft: 15,
        height:'100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
    }
  });