<template>
    <ul>
        <li v-for="item in items" :class="{ done: item.isDone }">
            {{ item.text }} <input type="checkbox" v-model="item.isDone" />
        </li>
    </ul>
</template>

<script> 
    export default {
        data() {
            return {
                items: []
            }
        },
        async created() {
            try {
                let response = await this.$http.get("/api/todo");
                this.items = response.data;
            }
            catch (err) {
                alert("Error! " + err);
            }
        }
    }

</script>

<style scoped>
    .done {
        text-decoration: line-through;
    }
</style>