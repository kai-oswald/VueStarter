<template>
    <div id="app">
        <div class="pa-2">
            <h2>Component</h2>
         <todos></todos>
        </div>
        <div class="pa-2">
            <h2>Route links</h2>
            <input v-model="name" />
            <router-link :to="'/' + name">Say hello</router-link>
        </div>
        <div class="pa-2">
            <h2>Router View</h2>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Todos from "./todos";

    export default {
        components: {
            "todos": Todos
        },
        data() {
            return {
                name: null
            }
        }
    }
</script>
