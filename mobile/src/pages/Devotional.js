import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView ,Text,Image,FlatList } from 'react-native';

import imgCalendarDay from '../../assets/calendar-day.png';


function Devotional(){

  list ={
    data:[
      {
        _id: 1,
        title: 'A unidade linguística primitiva',
        text: '1. E era toda a terra de uma mesma lingua e de uma mesma fala.',
        day: '02'
      },
      {
        _id: 2,
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?',
        day: '03'
      },
      {
        _id: 3,
        title: 'A unidade linguística primitiva',
        text: '1. E era toda a terra de uma mesma lingua e de uma mesma fala.',
        day: '04'
      },
      {
        _id: 4,
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?',
        day: '05'
      },
      {
        _id: 5,
        title: 'A unidade linguística primitiva',
        text: '1. E era toda a terra de uma mesma lingua e de uma mesma fala.',
        day: '06'
      },
      {
        _id: 6,
        title: 'Em Adão e Eva, somos todos os irmãos',
        text: '10. Não temos nós todos um mesmo pai? Não nos criout um mesmo deus?',
        day: '07'
      }
    ]
  };
  
  return (
  <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={list.data}
          keyExtractor={item => (item._id).toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <>
                <View style={styles.imageContainer}>
                  
                </View>
                <View style={styles.item}>
                  <Image source={ imgCalendarDay } style={styles.image }/>
                  <Text style={styles.day }>{item.day}</Text>
                  <View style={styles.txts}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.txt}>{item.text}</Text>
                    </View>
                </View>
              </>
            );
          }}
        />
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  day:{
    position: 'absolute',
    left:37,
    top: 38,
    fontWeight: 'bold',
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
  image: {
    flex:1,
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
})
export default Devotional;