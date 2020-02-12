import React from 'react';
import { View, StyleSheet,Text,TouchableOpacity,Picker } from 'react-native';


function Chapters(){
  return (  
    <View style={styles.container}>
        <Picker style={styles.list}>
          <Picker.Item label="Capítulo 1" value="1" />
          <Picker.Item label="Capítulo 2" value="2" />
        </Picker>
        <TouchableOpacity  style={styles.button}>
            <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
    </View>
          
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    marginTop: 150,
  },
  list:{
    backgroundColor: '#e3e3e3'
  },
  button: {
    marginTop: 80,
    height: 42,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
},

buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
}
});
export default Chapters;