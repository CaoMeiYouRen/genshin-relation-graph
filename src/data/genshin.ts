import { nodes } from './nodes'
import { links } from './links'

const colorMap = new Map([
    ['火', '#aa2116'],
    ['水', '#145b7d'],
    ['风', '#84bf96'],
    ['雷', '#6950a1'],
    ['冰', '#7bbfea'],
    ['岩', '#6c4c49'],
    ['草', '#1d953f'],
])

const lineColorMap = new Map([
    ['旅行者', '#fdb933'],
])

const data = {
    rootId: '旅行者',
    nodes: nodes.map((node) => ({
        id: node.name,
        text: node.name,
        color: node.color || colorMap.get(node.elementAttribute || '') || '#000',
        borderColor: 'rgba(0,0,0,0)',
        width: (node.stars || 4) * 10,
        height: (node.stars || 4) * 10,
        data: node,
    })),
    links: links.map((link) => {
        const node = nodes.find((e) => e.name === link.from)
        let color: string | undefined
        color = lineColorMap.get(node?.name || '') // 先根据名字获取专属颜色
        if (!color) { // 如果没有则取属性颜色
            const elementAttribute = node?.elementAttribute || ''
            // delete link.text
            color = colorMap.get(elementAttribute || '')
        }
        return {
            color,
            lineWidth: 3,
            lineShape: 4,
            styleClass: 'line-class',
            ...link,
            data: {
                from: node,
                to: nodes.find((e) => e.name === link.to),
                text: link.data,
                relationship: link.text,
            },
        }
    }),
}

export default data
