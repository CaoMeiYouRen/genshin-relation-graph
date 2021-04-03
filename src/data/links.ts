/* eslint-disable max-lines */
import 全人物关系 from './全人物关系.json'
interface Link {
    /**
     * 关系from节点的id
     *
     */
    from: string
    /**
     * 关系to节点的id
     *
     */
    to: string
    /**
     * 关系
     *
     */
    text?: string
    /**
     * 节点样式class
     *
     */
    styleClass?: string
    /**
     * 线条粗细（像素）
     *
     */
    lineWidth?: number
    /**
     * 线条颜色
     *
     */
    lineColor?: string

    color?: string
    /**
     *线条样式（1:直线/2:样式2/3:样式3/4:折线/5:样式5/6:样式6）
    *
    */
    lineShape?: number
}

export const links: Link[] = [
    ...全人物关系,
].map((link) => ({
    lineWidth: 2,
    lineShape: 5,
    ...link,
}))
