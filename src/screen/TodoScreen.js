import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {AddTodo} from '../component/Addtodo'
import {Todo} from '../component/Todo'
import React, {useState} from "react";
import {Container} from "../component/Container";

export const TodoScreen = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
        console.log(title + " addTodo")
        setTodos(prev => [
            ...prev, {
                id: Date.now().toString(),
                title: title
            }]
        )
    }

    return (
        <Container>
            <AddTodo onSubmit={addTodo}/>
            <ScrollView>
                {todos.map(todo => <Todo todo={todo}></Todo>)}
            </ScrollView>
        </Container>
    );
}

const styles = StyleSheet.create({});
