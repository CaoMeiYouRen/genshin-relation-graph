import { nodes } from './nodes'
import { links } from './links'

links.sort((a, b) => {
    return a.from.localeCompare(b.from)
})

nodes.sort((a, b) => {
    return a.country.localeCompare(b.country)
})

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
    nodes: nodes.map((node) => {
        return {
            id: node.name,
            text: node.name,
            color: node.color || colorMap.get(node.elementAttribute || '') || '#000',
            borderColor: 'rgba(0,0,0,0)',
            width: (node.stars || 4) * 15,
            height: (node.stars || 4) * 15,
            data: node,
        }
    }),
    links: links.map((link) => {
        const elementAttribute = nodes.find((e) => e.name === link.from)?.elementAttribute || ''
        // delete link.text
        return {
            color: colorMap.get(elementAttribute || ''),
            ...link,
        }
    }),
}

export default data