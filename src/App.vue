<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    name: 'App',
    props: {},
    setup() {
        return {
        }
    },
})
</script>

<style lang="scss" scoped>
</style>
