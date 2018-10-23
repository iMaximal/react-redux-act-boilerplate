import { createReducer } from 'redux-act';

import {
    addTodo,
    deleteTodo,
    editTodo,
    completeTodo,
    completeAll,
    clearCompleted,
} from '../actions/todos.actions.js';

export const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
];

const reducer = createReducer({}, initialState);

reducer.on(addTodo, (state, text) => [
    {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: text
    },
    ...state
]);

reducer.on(deleteTodo, (state, id) => state.filter(todo =>
    todo.id !== id
));


reducer.on(editTodo, (state, {id, text}) => state.map(todo =>
    todo.id === id ?
        Object.assign({}, todo, {text}) :
        todo
));

reducer.on(completeTodo, (state, id) => state.map(todo =>
    todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo
));

reducer.on(completeAll, (state) => {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
    }));
});

reducer.on(clearCompleted, (state) => state.filter(todo => todo.completed === false));

export default reducer;
