import axios from "axios";

const state = {
    todos: [
    ]
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({commit}){
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
       
        commit('setTodos', res.data);
    },

    async addNewTodo({commit}, title){
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});

        commit('addTodo', res.data);
    },

    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    },

    async filterTodos({commit}, value){
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${value}`);
        commit('setTodos', res.data);
    },
    async updateTodo({commit}, updatedTodo){
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
        commit('updTodo', res.data);
    }
};

const mutations = {
    setTodos: (state, data) => (state.todos = data),
    addTodo: (state, todo) => (state.todos.unshift(todo)),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => (todo.id != id))),
    updTodo: (state, updatedTodo) => {
        let index = state.todos.findIndex((todo) => (todo.id === updatedTodo.id));

        if(index != -1){
            state.todos.splice(index, 1, updatedTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}