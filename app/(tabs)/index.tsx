import { Text, StyleSheet, View, TextInput } from 'react-native';
import LojaItem from '@/components/LojaItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { db, addDoc, collection, app, getFirestore } from '../services/FirebaseConfig';
import { useState } from 'react';

export default function HomeScreen() {
  const[title, setTitle] = useState('')
  const addItem = async() => {
    try {
      const docRef = await addDoc(collection(db, "produtos"), {
        title: title,
        isChecked: false
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Produto Cadastrado!")
      setTitle('')
    } catch (e) {
      console.error("Error adding document: ", e);
    }    
  }
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.heading}>Lista de Produtos</Text> 
        <Text style = {styles.numItem}>3</Text>
        <MaterialIcons name="delete" size={24} color="black" />
      </View>
      <LojaItem />
      <LojaItem />
      <LojaItem />
      <TextInput 
        style = {styles.input}
        placeholder='Digite o nome do produto'
        value={title}
        onChangeText={(value)=>setTitle(value)}
        onSubmitEditing={addItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    backgroundColor: 'red',
    flexDirection: 'row',
    width: "90%",
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  heading: {
    flex: 1,
    fontSize: 20
  },
  numItem: {
    fontSize: 20,
    marginRight: 20
  },
  input: {
    backgroundColor: 'lightgrey',
    padding: 10,
    width: "90%",
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 'auto', 
    marginBottom: 10

  }
});
