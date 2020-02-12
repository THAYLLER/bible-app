 import React, { useState,useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,SafeAreaView,FlatList,ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

import api from '../services/api';

function Glossary(){
  const [glossary, setGlossary] = useState([]);
  
  useEffect(() => {
    const response = axios.get('http://10.0.0.2:8000/api/glossaries');
      setGlossary(response);
      console.log(response);
  },[]);
  
  list ={
    data:[
      {
        _id: 1,
        title: 'A unidade linguística primitiva',
        text: '1. E era toda a terra de uma mesma lingua e de uma mesma fala.'
      },
      {
        _id: 2,
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?'
      },
      {
        _id: 3,
        title: 'A unidade linguística primitiva',
        text: '1. E era toda a terra de uma mesma lingua e de uma mesma fala.'
      },
      {
        _id: 4,
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?'
      },
      {
        _id: 5,
        title: 'A unidade linguística primitiva',
        text: '1. E era toda a terra de uma mesma lingua e de uma mesma fala.'
      },
      {
        _id: 6,
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?'
      },
      {
        _id: 7,
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?'
      },
      {
        _id: 8,
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?'
      }
    ]
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
          <View style={styles.searchForm}>
              <TextInput 
                  style={styles.searchInput}
                  placeholder="Buscar..."
                  placeholderTextColor="#999"
                  autoCapitalize="words"
                  autoCorrect={false}
              />

              <TouchableOpacity  style={styles.loadButton}>
                <MaterialIcons name={'search'} size={20} color="#FFF"/>
              </TouchableOpacity>
          </View>
          <ScrollView>
            <FlatList
              style={styles.list}
              data={list.data}
              keyExtractor={item => (item._id).toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View style={styles.item}>
                    <View style={styles.txts}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.txt}>{item.text}</Text>
                      </View>
                  </View>
                );
              }}
            />
           </ScrollView>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  list:{
    flex: 1, 
    height:450
  },
  searchForm: {
    flexDirection:'row',
    paddingBottom:30
  },
  searchInput:{
    flex:1,
    height:50,
    backgroundColor:'#fff',
    color: '#333',
    borderRadius:25,
    paddingHorizontal:20,
    fontSize:16,
    elevation: 3,
  },
  loadButton: {
    width:50,
    height:50,
    backgroundColor:'#2678d8',
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:15,
    elevation:3,
  },
  item: {
    backgroundColor: "#ebebeb",
    margin: 4,
    flexDirection: 'row',
    margin: 4,
    padding: 20,
  },
  container: {
    marginTop: 30,
  },
  title: {
    width: 250,
    textAlign: 'left',
    fontSize: 15,
    color: '#444',
    fontWeight: 'bold'
  },
  txts:{
    flex: 5,
    paddingLeft:25
  },
  txt: {
    alignItems: 'flex-start',
    textAlign: 'left',
    fontSize: 10,
    color: '#444',
  },
});
export default Glossary;