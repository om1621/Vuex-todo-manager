<template>
    <div>
        <h3>Todos</h3>
        <div class="legends">
            <span>Double click to mark task completed</span>
            <span>
                <span class="completed"></span> Completed
            </span>
            <span>
                <span class="incomplete"></span> Incomplete
            </span>
        </div>
        <div  class="todos">
            <div @dblclick="updateTask(todo)" v-for="todo in allTodos" :key="todo.id"  class="todo" v-bind:class="{'is-complete':todo.completed}" >
                {{todo.title}}
                <i class="fas fa-trash-alt trash-icon" @click="deleteTodo(todo.id)" ></i>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'Todos',
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
        updateTask(todo){
            let newTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }

            // console.log(newTodo);

            this.updateTodo(newTodo);
        }
       
    },
    computed: mapGetters(['allTodos']),
    created(){
        this.fetchTodos();
    }
}
</script>

<style  scoped>

.todos{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

.todo{
    background: #41b883;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    position: relative;
}

.trash-icon{
    position: absolute;
    bottom: 12px;
    right: 12px;
    color: #fff;
}

.trash-icon:hover{
    color: red;
}

.legends{
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;
}

.completed{
    display: inline-block;
    height: 12px;
    width: 12px;
    background: rgb(61, 59, 88);
    border-radius: 3px;
}

.incomplete{
    display: inline-block;
    height: 12px;
    width: 12px;
    background: #41b883;
    border-radius: 3px;
}

.is-complete{
    color: #fff;
    background: rgb(61, 59, 88);
}

</style>