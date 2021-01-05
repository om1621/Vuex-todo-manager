<template>
    <div class="filter-todo">
        Filter Todo:
        <select @change="filterTodos(filteredValue)" v-model="filteredValue">
            <option v-for="value in filterValues" :value=value :key="value">{{value}}</option>
        </select>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'FilterTodos',
    data(){
        return{
            filterValues: [200, 100, 50, 20, 10, 5],
            filteredValue: 200
        }
    },
    methods: mapActions(['filterTodos'])
}
</script>

<style scoped>

select{
    margin-top: 1.5rem;
    padding: 6px;
    border: 1px solid #41b883;
}

</style>