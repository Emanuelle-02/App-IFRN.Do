import React, { useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Alert, Keyboard} from 'react-native';
import {MyInput} from '../components/MyInput';
import {Tasks} from '../components/Tasks';
import {AsyncStorage} from 'react-native';


export function Home(){
    
    const keyAsyncStorage = "@toDo:tasks";

    const [user,setUser] = useState('');
    const [tasks,setTasks] = useState([]);

    async function handleSaveTasks() {
        const data ={
            id: String (new Date().getTime()),
            task: user
        }

        const vetData = [...tasks, data ]; 

        try{
             await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( vetData ) );
        }catch(error){
            Alert.alert("Erro. Não foi possível salvar a tarefa");
        } 
        
        Keyboard.dismiss();
        setUser("");
        loadData();
    }

    async function handleDeleteTask( id ) {
        const newData = tasks.filter( item => item.id != id );
        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( newData ));
        setTasks(newData);
        
    }

    async function loadData(){
        try{
            const retorno = await AsyncStorage.getItem(  keyAsyncStorage  );   
            const teste = JSON.parse( retorno );
            console.log( teste );
            setTasks( teste || [] );
        }catch(error){
            Alert.alert("Erro na leitura dos dados");
        }
        
    }

    useEffect( ()=>{
        loadData();   
         
    } , []);

    return(
        
        <View style={styles.container}>
            <View style={ styles.head}>
                <Text style={styles.tituloHead}>
                    IFRN.DO
                    <Text style={styles.count}>                          Você tem <Text style={styles.bold}>{tasks.length} tarefas</Text>
                    </Text>
                </Text>
            </View>
            
            <View style={styles.containerDeDados}>
                <MyInput placeholder="Adicione uma tarefa" value={user} onChangeText={setUser} onPress={handleSaveTasks} />      
            </View>
                <FlatList  data={tasks}  
                    keyExtractor={item => item.id} 
                    renderItem={ ({item}) =>  (
                        <Tasks tarefa={ item.task } deletar = {() => handleDeleteTask(item.id) }/>
                    ) }
                /> 
            </View>     
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#EBEBEB',
    
    },
    
    head:{
        flexDirection: 'column',
        marginTop: -50,
        height: 180,
        width: '100%',
        alignItems: 'flex-start',
        paddingLeft: 15,
        justifyContent: 'center',
        backgroundColor: '#2e8b57',
    
    },

    tituloHead:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    count: {
        color: 'white',
        fontSize: 16,
    },

    bold: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    containerDeDados:{
        alignItems: 'center',
        justifyContent: 'center',
        width: "75%",
        marginTop: 25,
        
    },

    listagem:{
        width: "90%",
    },
});