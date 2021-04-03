<template>
    <div class="home">
        <p>{{ message }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
    name: 'Home',
    components: {
    },
    props: {},
    setup(props, ctx) {
        const message = ref('Hello Home.vue')
        return {
            message,
        }
    },
})
</script>

<style lang="scss" scoped>
</style>
