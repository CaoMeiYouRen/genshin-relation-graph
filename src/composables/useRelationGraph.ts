import RelationGraph from 'relation-graph'
import { ref, onMounted } from '@vue/composition-api'
import data from '@/data/genshin'
export function useRelationGraph() {
    const relationGraph = ref<RelationGraph>()
    const options = {
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        // defaultJunctionPoint: 'border',
    }

    onMounted(() => {
        relationGraph.value?.setJsonData(data, (seeksRGGraph) => {
        })
    })

    return {
        relationGraph,
        options,
    }
}