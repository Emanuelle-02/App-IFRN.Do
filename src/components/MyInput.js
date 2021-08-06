import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export function MyInput({placeholder, onPress, onChangeText}){ 
    
    return(
            <View style={styles.viewInput}>
                <TextInput
                    placeholderTextColor="#b2b2b2"
                    style={styles.input}  placeholder={placeholder} onChangeText={onChangeText} />
                <TouchableOpacity style={styles.button} onPress={onPress} >
                    <AntDesign name="right" size={20} color="gray"/>
                </TouchableOpacity>
            </View>
    )
}


const styles = StyleSheet.create({

    viewInput:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 8,
        borderColor:'#FFFFFF',
        borderWidth: 1,
        marginTop: -50,
    },

    input: {
        height: '100%',
        width: '100%',
        backgroundColor: '#FFFFFF',
        paddingLeft: 15,
        fontSize: 18,     
    },

    button: {
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderLeftWidth:1,
    }
});