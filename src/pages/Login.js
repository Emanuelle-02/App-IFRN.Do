import React, { useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import api from '../services/api';
import {Input} from '../components/Input';

export function Login({navigation}) {
  const[matricula, setMatricula] = useState('');
  const[password, setPassword] = useState('');
  
  async function handleLogin(){
    var params = new URLSearchParams();
    params.append('username', matricula);
    params.append('password', password);
    
    try{
      const response = await api.post('autenticacao/token/', params);
      const {token} = response.data;
      console.log(token)
      const responseUser = await api.get('minhas-informacoes/meus-dados/', {
        headers: {
          'authorization': 'jwt ' + token,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        } 
      });
       console.log(responseUser.data);
    }catch(error){
      Alert.alert("Erro na autentificação. Matrícula ou senha incorreta");
    }
  }

    return (
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor="#2e8b57"/>
          <View>
            <Image source={require('../img/logo.png')} style={styles.logo}/>
            <Text style={styles.title}>IFRN.DO</Text>
          <View style={styles.form}>
            <Input  label='Matrícula' onChangeText={text => setMatricula(text)}/>
            <Input  label='Senha' password={true} onChangeText={text => setPassword(text)}/>
            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('home')}>
              <Text style={styles.textButton}>To.Do</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#2e8b57',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
  },

  logo:{
    alignSelf: 'center',
    
  }, 
  
  title:{
    paddingTop:35,
    paddingBottom: 35,
    fontSize:35, 
    fontWeight: 'bold',
    color:'#FFFFFF',
    textAlign: 'center',
    
  }, 
  
  form:{
    height:275,
    justifyContent:'space-evenly',
    alignItems:'center',
    position: 'relative',
  }, 
  
  button:{
    backgroundColor:'#666666',
    height:60,
    width:300, 
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 15
  }, 

  textButton:{
    color:'#FFFFFF', 
    fontSize:25
  }
});
