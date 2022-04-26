import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/Addtodo'
import {Todo} from './src/Todo'
import React, {useState} from "react";

export default function App() {
  const [todos, setTodos] = useState([])

  const  addTodo = (title) => {
    console.log(title + " addTodo")
    setTodos(prev => [
          ...prev, {
          id: Date.now().toString(),
          title: title
        }]
    )
  }

  return (
    <View>
      <Navbar title='hello, todo app'></Navbar>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <View>
          {todos.map(todo => <Todo todo={todo}></Todo>)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
