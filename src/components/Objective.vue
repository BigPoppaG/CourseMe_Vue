<template>
    <div class="test">
        <h1>{{ name }}</h1>
        <hr>
        <button @click= 'test'>Test</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                name: 'Obective'
            }
        },
        methods: {
            test() {
                console.log = 'test'
                this.name = 'test'
            }
        }

    }
</script>

<style scoped>

</style>