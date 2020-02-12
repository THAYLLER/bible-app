import React, { useEffect } from 'react';
import { View, StyleSheet, Text,Image,FlatList } from 'react-native';

import imgCalendarDay from '../../assets/calendar-day.png';

export default function DevotionalList({ list }) {
  console.log(list)
  return (
    <>
      <View style={styles.container, styles.imageContainer}>
        <Image source={ imgCalendarDay }/>
      </View>
      <View style={styles.container, styles.textContainer}>
      <FlatList
          data={list}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.title}>A unidade linguística primitiva</Text>
                <Text style={styles.txt}>1. E era toda a terra de uma mesma lingua e de uma mesma fala.</Text>
              </View>
            );
          }}
        />
        
      </View>
    </>
  );
} 
const styles = StyleSheet.create({

  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  imageContainer: {

    flex: 1
  },
  textContainer: {
    position: 'absolute',
    left:57,
    flex: 2,
    
  },
  container: {
    marginTop: 30,
  },
  title: {
    textAlign: 'left',
    fontSize: 15,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15,
    fontWeight: 'bold'
  },
  txt: {
    
    textAlign: 'left',
    fontSize: 12,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
})