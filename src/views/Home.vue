<template>
    <div class="home">
        <div style="height:calc(100vh - 50px);">
            <RelationGraph ref="relationGraph" :options="options" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { useRelationGraph } from '@/composables/useRelationGraph'
export default defineComponent({
    name: 'Home',
    setup(props, ctx) {
        return {
            ...useRelationGraph(),
        }
    },
})
</script>

<style lang="scss" scoped>
</style>
