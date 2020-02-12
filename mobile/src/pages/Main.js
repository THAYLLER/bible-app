import React from 'react';
import { View,KeyboardAvoidingView, Text,Image,StyleSheet,TouchableOpacity } from 'react-native';

import biblia from '../../assets/cultures.png';
import calendario from '../../assets/calendar.png';
import menssagens from '../../assets/comment.png';
import glossario from '../../assets/search.png';

function Main({ navigation }){

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        
         <View style={styles.form}>
            <TouchableOpacity  style={styles.itens} onPress={() => {
              navigation.navigate('Bible');
            }}>
                <Image  source={biblia} style={styles.image}/>
                <Text style={styles.textBiblia,styles.texts}>Bíblia</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.itens} onPress={() => {
              navigation.navigate('Devotional');
            }}>
                <Image  source={calendario} style={styles.image}/>
                <Text style={styles.textPalavra,styles.texts}>Devocional</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.itens} onPress={() => {
              navigation.navigate('Messages');
            }}>
                <Image  source={menssagens} style={styles.image}/>
                <Text style={styles.textPalavra,styles.texts}>Menssagens</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            
            <TouchableOpacity  style={styles.itens} onPress={() => {
              navigation.navigate('Glossary');
            }}>
                <Image  source={glossario} style={styles.image}/>
                <Text style={styles.textPalavra,styles.texts}>Glossário</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({

  container: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'absolute',
    width: '100%',
    height: '100%', 
  },
  form: {
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 25
  },
  itens: {
      
      width:90,
      height: 90,
      borderRadius: 2,
      marginBottom:10,
      margin:15
  },
  
  image: {

      width:90,
      height: 90,
  },
  texts: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    color: '#1E90FF',
  },
  
});

export default Main;