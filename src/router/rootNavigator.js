// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {ADDNOTE, EDITNOTE, HOME, NOTEDETAIL, NOTELIST} from '../utils/routes';
import NoteList from '../screens/note/noteList';
import AddNote from '../screens/note/addNote';
import EditNote from '../screens/note/editNote';
import NoteDetail from '../screens/note/noteDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
      }}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={NOTELIST} component={NoteList} />
      <Stack.Screen name={ADDNOTE} component={AddNote} />
      <Stack.Screen name={EDITNOTE} component={EditNote} />
      <Stack.Screen name={NOTEDETAIL} component={NoteDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
