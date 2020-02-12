import React from 'react';
import { View, StyleSheet, SafeAreaView ,Text,FlatList,ScrollView,TouchableOpacity,Image } from 'react-native';

import next from '../../assets/next.png';

function Books({ navigation }){
  list ={
    data:[
      {
        _id: 1,
        name:'Eclesiastes'
      },
      {
        _id: 2,
        name:'Isaías'
      },
      {
        _id: 3,
        name:'Jeremias'
      },
    ]
  };
  async function handleSelectChapters() {

    navigation.navigate('Chapters');
  }
  return (  
    <SafeAreaView>
      <View style={styles.container}>
          <ScrollView>
            <FlatList
              style={styles.list}
              data={list.data}
              keyExtractor={item => (item._id).toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={handleSelectChapters} style={styles.item}>
                    <View style={styles.txts}>
                      <Text style={styles.title}>{item.name}</Text>
                      <Image source={ next } style={styles.next }/>
                    </View>
                  </TouchableOpacity>
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
  item: {
    backgroundColor: "#ebebeb",
    margin: 4,
    padding: 20,
  },
  container: {
    margin: 30,
  },
  title: {
    width: 100,
    textAlign: 'left',
    fontSize: 15,
    color: '#444',
    fontWeight: 'bold',
    flex: 2
  },
  txts:{
    flexDirection: 'row',
    paddingLeft:25
  },
  next: {
    alignItems: 'flex-end'
  },
});
export default Books;