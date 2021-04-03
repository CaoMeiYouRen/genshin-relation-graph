import RelationGraph from 'relation-graph'
import { ref, onMounted, onUpdated } from '@vue/composition-api'
import data from '@/data/genshin'
export function useRelationGraph() {
    const relationGraph = ref<RelationGraph>()
    const options = {
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        defaultJunctionPoint: 'border',
        layouts: [
            {
                label: '自动布局',
                layoutName: 'force',
            },
        ],
    }

    onMounted(() => {
        relationGraph.value?.setJsonData(data)
    })

    onUpdated(() => {
        relationGraph.value?.refresh()
    })
    return {
        relationGraph,
        options,
    }
}
