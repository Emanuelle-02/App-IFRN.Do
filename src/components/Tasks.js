import React, {useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/EvilIcons'

export function Tasks (props){
    const [agree, setAgree] = useState(false);
    return(
        <View style={styles.container}>
            <View style = {styles.container}>
            <CheckBox boxType="square" value={agree} onChange={() => setAgree(!agree)}/>
                <Text style={styles.fonteContato}>{props.tarefa}</Text>
                <View style={styles.separador}></View>  
            <TouchableOpacity onPress={props.deletar}>
                <Icon name= "trash" size={30} color = "black" />           
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        width: '100%',
        height: 50,
        backgroundColor:'#EBEBEB',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        paddingRight: 5,
        paddingLeft: 5,
    },

    fonteContato:{
        fontSize: 18,
    }

})