<template>
    <div class="addTodo">
        <h3>Add Todo</h3>

        <div class="todo-form">
            <form @submit="formSubmit">
                <input type="text" v-model="title" placeholder="add todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'AddTodo',
    data(){
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addNewTodo']),
        formSubmit(e){
            e.preventDefault();
            this.addNewTodo(this.title);
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
}

input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}

input[type="submit"]{
    flex: 2;
    background: #41b883;
    border: 1px solid #41b883;
    color: #fff;
    cursor: pointer;

}
</style>