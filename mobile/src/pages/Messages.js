import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image,FlatList, Text,View } from 'react-native';

function Messages(){
  list ={
    data:[
      {
        _id: 1,
        thumbnail_url: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/09/formacao_a-biblia-e-a-primavera-1.jpg',
        title: 'A unidade linguística primitiva',
        text: '1. E era toda a terra de uma mesma lingua e de uma mesma fala.'
      },
      {
        _id: 2,
        thumbnail_url: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/09/formacao_a-biblia-e-a-primavera-1.jpg',
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?'
      },
      {
        _id: 3,
        thumbnail_url: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/09/formacao_a-biblia-e-a-primavera-1.jpg',
        title: 'A unidade linguística primitiva',
        text: '1. E era toda a terra de uma mesma lingua e de uma mesma fala.'
      },
      {
        _id: 4,
        thumbnail_url: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/09/formacao_a-biblia-e-a-primavera-1.jpg',
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?'
      },
      {
        _id: 5,
        thumbnail_url: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/09/formacao_a-biblia-e-a-primavera-1.jpg',
        title: 'A unidade linguística primitiva',
        text: '1. E era toda a terra de uma mesma lingua e de uma mesma fala.'
      },
      {
        _id: 6,
        thumbnail_url: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2013/09/formacao_a-biblia-e-a-primavera-1.jpg',
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?'
      }
    ]
  };
  return (
    <SafeAreaView style={styles.container}>
        
      <FlatList
          style={styles.list}
          data={list.data}
          keyExtractor={item => (item._id).toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
              <View style={styles.listItem}>
                  <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.text}</Text>
              </View>
          )}
        />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      marginTop: 30,
      flex: 1
  },

  title: {
    width: 250,
    textAlign: 'center',
    fontSize: 15,
    color: '#444',
    fontWeight: 'bold'
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: '#444',
  },

  list: {
      
      paddingEnd: 20,
  },

  listItem: {
    alignItems: 'center',
      margin: 20,
      height: 170,
      width: 180
  },

  thumbnail: {
      width: 200,
      height: 120,
      resizeMode: 'cover',
      borderRadius: 2,
  },
});


export default Messages;