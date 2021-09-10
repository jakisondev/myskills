import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Keyboard,
  FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    if(newSkill.trim() === '') return;

    setMySkills(oldState => [ ...oldState, newSkill]);
    setNewSkill('');

    Keyboard.dismiss();
  }

  function handleRemoveSkill(skill) {
    setMySkills(oldState => mySkills.filter(item => item !== skill));
    setNewSkill(skill);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Jakison</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        value={newSkill}
      />

     <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <SkillCard 
            skill={item} 
            onPress={() => handleRemoveSkill(item)}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: Platform.OS === 'ios' ? 70 : 30,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  buttonSkill:{
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
