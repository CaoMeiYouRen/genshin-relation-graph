import RelationGraph from 'relation-graph'
import { ref, onMounted } from '@vue/composition-api'
import data from '@/data/genshin'
import { NodeType, PeopleNode } from '@/data/nodes'
export function useRelationGraph() {
    const relationGraph = ref<RelationGraph>()
    const options = {
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        defaultJunctionPoint: 'border',
        layouts: [
            {
                layoutLabel: '自动布局',
                layoutName: 'force',
            },
        ],
    }

    const currentNode = ref<PeopleNode>({} as PeopleNode)
    const currentRelations = ref<{
        relationship: string
        text: string
        to: PeopleNode
        from: PeopleNode
    }[]>([])

    const handleNodeClick = (node: NodeType, event: Event) => {
        currentNode.value = node.data
    }

    const handleLineClick = (line: any, event: Event) => {
        // currentLink.value = line.relations[0].data
        currentRelations.value = line.relations.map((e) => e.data)
    }

    onMounted(() => {
        relationGraph.value?.setJsonData(data)
    })

    // onUpdated(() => {
    //     // relationGraph.value?.refresh()
    // })
    return {
        relationGraph,
        options,
        handleNodeClick,
        handleLineClick,
        currentNode,
        currentRelations,
    }
}
