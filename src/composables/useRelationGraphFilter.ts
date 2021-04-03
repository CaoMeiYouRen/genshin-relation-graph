import RelationGraph from 'relation-graph'
import { ref, onMounted, watch, Ref } from '@vue/composition-api'

export function useRelationGraphFilter(relationGraph: Ref<any>, countrys: Ref<string[]>, sexes: Ref<string[]>) {

    watch([countrys, sexes], ([newCountrys, newSexes]) => {
        const dom = relationGraph.value
        if (!dom) {
            return
        }
        const allNodes: any[] = dom.getNodes()
        const allLines: any[] = dom.getLines()
        allNodes.forEach((node) => {
            if (node.data.country === '——') {
                return
            }
            const isHide = !newCountrys.includes(node.data.country) || !newSexes.includes(node.data.sex)
            node.opacity = isHide ? 0 : 1
            // node.isHide = isHide
        })
        allLines.forEach((line) => {
            line.relations.forEach((link) => {
                if (link.data.from.country === '——') { // 解决旅行者BUG
                    const isHide =
                        !newCountrys.includes(link.data.to.country) ||
                        !newSexes.includes(link.data.to.sex)
                    link.isHide = isHide
                    return
                }
                const isHide =
                    !newCountrys.includes(link.data.from.country) ||
                    !newSexes.includes(link.data.from.sex) ||
                    !newCountrys.includes(link.data.to.country) ||
                    !newSexes.includes(link.data.to.sex)

                link.isHide = isHide
            })
        })
    })

    return {}
}