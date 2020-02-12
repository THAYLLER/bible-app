import React from 'react';
import { View, StyleSheet,Image, SafeAreaView ,Text,FlatList,TouchableOpacity,ScrollView } from 'react-native';

import next from '../../assets/next.png';
import preview from '../../assets/preview.png';

function Bible({ navigation }){

  list ={
    data:[
      {
        _id: 1,
        chapter:4,
        verse:1,
        text: 'QUANDO Mardoqueu soube tudo quanto havia sido feito, Mardoqueu rasgou as suas vestes, e vestiu-se de saco e de cinza, e saiu pelo meio da cidade, e clamou com grande e amargo clamor;'
      },
      {
        _id: 2,
        chapter:4,
        verse:2,
        text: 'E chegou até diante da porta do rei, porque ninguém vestido de saco podia entrar pelas portas do rei.'
      },
      {
        _id: 3,
        chapter:4,
        verse:3,
        text: 'E chegou até diante da porta do rei, porque ninguém vestido de saco podia entrar pelas portas do rei.'
      },
      {
        _id: 4,
        chapter:4,
        verse:4,
        text: 'E chegou até diante da porta do rei, porque ninguém vestido de saco podia entrar pelas portas do rei.'
      },
      {
        _id: 5,
        chapter:4,
        verse:5,
        text: 'E chegou até diante da porta do rei, porque ninguém vestido de saco podia entrar pelas portas do rei.'
      },
      {
        _id: 6,
        chapter:4,
        verse:6,
        text: 'E chegou até diante da porta do rei, porque ninguém vestido de saco podia entrar pelas portas do rei.'
      },
      {
        _id: 7,
        chapter:4,
        verse:7,
        text: 'E em todas as províncias aonde a palavra do rei e a sua lei chegava, havia entre os judeus grande luto, com jejum, e choro, e lamentação; e muitos estavam deitados em saco e em cinza.'
      },
      {
        _id: 8,
        chapter:4,
        verse:8,
        text: 'Então vieram as servas de Ester, e os seus camareiros, e fizeram-na saber, do que a rainha muito se doeu; e mandou roupas para vestir a Mardoqueu, e tirar-lhe o pano de saco; porém ele não as aceitou.'
      },
      {
        _id: 9,
        chapter:4,
        verse:9,
        text: 'Então Ester chamou a Hatá (um dos camareiros do rei, que este tinha posto para servi-la), e deu-lhe ordem para ir a Mardoqueu, para saber que era aquilo, e porquê.'
      }
    ]
  };
  async function handleSelectBook() {

    navigation.navigate('Books');
  }
  return (
    <>
      <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.button} onPress={handleSelectBook}>
              <Text style={styles.buttonBook}>Livro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonChapter}>Chapters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonVerse}>Verse</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView>
          <View style={styles.container}>
            <ScrollView
              vertical
            >
              <FlatList
                data={list.data}
                keyExtractor={item => (item._id).toString()}
                showsVerticalScrollIndicator={false}
                vertical
                renderItem={({ item }) => {
                  return (
                    <>
                      <View style={styles.containerBible}>
                          <Text style={styles.verse}>{item.verse}</Text>
                          <Text style={styles.text}>{item.text}</Text>
                      </View>
                    </>
                  );
                }}
              />
            </ScrollView>
            <TouchableOpacity style={styles.next}>
              <Image source={ next } style={styles.imageNext }/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.preview}>
              <Image source={ preview } style={styles.imagePreview }/>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  next:{
    position: 'absolute',
    left:260,
    top: 390,
    height: 50,
    width:50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  preview:{
    position: 'absolute',
    left:10,
    top: 400,
    height: 50,
    width:50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  imageNext:{},
  imagePreview:{},
  verse:{
    fontWeight: 'bold',
    fontSize: 16,
    width:15
  },
  text: {
    flex:1,
    fontSize: 14,
    marginBottom:10
  },
  container: {
    margin: 20,
    width:320,
    height:450
  },
  containerBible:{
    flexDirection:'row',
  },
  containerButtons:{
    flexDirection:'row',
    width:350
  },
  button: {
    flex:3,
    height: 60,
    width:100,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft:15,
    marginTop:10,
    elevation:3,
  },

  buttonBook: {
      fontWeight: 'bold',
      fontSize: 16,
      elevation:3,
  },
  buttonChapter: {
    fontWeight: 'bold',
    fontSize: 16,
    elevation:3,
  },
  buttonVerse: {
    fontWeight: 'bold',
    fontSize: 16,
    elevation:3,
  }
});
export default Bible;