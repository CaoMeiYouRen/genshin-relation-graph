export interface PeopleNode {
    /**
     * 姓名
     *
     */
    name: string
    /**
     * 背景颜色
     *
     */
    color?: string
    /**
     * 稀有度
     *
     */
    stars?: 4 | 5

    /**
     * 武器类型
     *
     */
    weaponType?: '单手剑' | '双手剑' | '长柄武器' | '法器' | '弓'

    /**
     *元素属性
     *
     */
    elementAttribute?: '风' | '岩' | '雷' | '草' | '水' | '火' | '冰' | '风、岩'

    /**
     *性别
     *
     */
    sex: '男' | '女' | '男/女'
    /**
     *国家
    *
    */
    country: '蒙德' | '璃月' | '稻妻' | '须弥' | '枫丹' | '纳塔' | '至冬' | '——'

}
export interface NodeType {
    id: string
    text: string
    color: string
    borderColor: string
    width: number
    height: number
    data: PeopleNode
}
export const nodes: PeopleNode[] = [
    {
        name: '法尔伽',
        // stars: 5,
        sex: '男',
        country: '蒙德',
    },
    {
        name: '白术',
        // stars: 5,
        elementAttribute: '草',
        sex: '男',
        country: '璃月',
    },
    {
        name: '云堇',
        sex: '女',
        country: '璃月',
    },
    {
        name: '申鹤',
        sex: '女',
        country: '璃月',
    },
    {
        name: '瑶瑶',
        elementAttribute: '草',
        sex: '女',
        country: '璃月',
    },
    {
        name: '荒泷一斗',
        stars: 5,
        weaponType: '双手剑',
        elementAttribute: '岩',
        sex: '男',
        country: '稻妻',
    },
    {
        name: '五郎',
        stars: 4,
        weaponType: '弓',
        elementAttribute: '岩',
        sex: '男',
        country: '稻妻',
    },
    // 以上人物还未正式实装，人物关系未知
    {
        name: '托马',
        stars: 4,
        weaponType: '长柄武器',
        elementAttribute: '火',
        sex: '男',
        country: '稻妻',
    },
    {
        name: '珊瑚宫心海',
        stars: 5,
        weaponType: '法器',
        elementAttribute: '水',
        sex: '女',
        country: '稻妻',
    },
    {
        name: '雷电将军(巴尔)',
        stars: 5,
        weaponType: '长柄武器',
        elementAttribute: '雷',
        sex: '女',
        country: '稻妻',
    },
    {
        name: '九条裟罗',
        stars: 4,
        weaponType: '弓',
        elementAttribute: '雷',
        sex: '女',
        country: '稻妻',
    },
    {
        name: '早柚',
        stars: 4,
        weaponType: '双手剑',
        elementAttribute: '风',
        sex: '女',
        country: '稻妻',
    },
    {
        name: '宵宫',
        stars: 5,
        weaponType: '弓',
        elementAttribute: '火',
        sex: '女',
        country: '稻妻',
    },
    {
        name: '神里绫华',
        stars: 5,
        weaponType: '单手剑',
        elementAttribute: '冰',
        sex: '女',
        country: '稻妻',
    },
    {
        name: '枫原万叶',
        stars: 5,
        weaponType: '单手剑',
        elementAttribute: '风',
        sex: '男',
        country: '稻妻',
    },
    {
        name: '优菈',
        stars: 5,
        weaponType: '双手剑',
        elementAttribute: '冰',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '烟绯',
        stars: 4,
        weaponType: '法器',
        elementAttribute: '火',
        sex: '女',
        country: '璃月',
    },
    {
        name: '罗莎莉亚',
        stars: 4,
        weaponType: '长柄武器',
        elementAttribute: '冰',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '胡桃',
        stars: 5,
        weaponType: '长柄武器',
        elementAttribute: '火',
        sex: '女',
        country: '璃月',
    },
    {
        name: '魈',
        stars: 5,
        weaponType: '长柄武器',
        elementAttribute: '风',
        sex: '男',
        country: '璃月',
    },
    {
        name: '甘雨',
        stars: 5,
        weaponType: '弓',
        elementAttribute: '冰',
        sex: '女',
        country: '璃月',
    },
    {
        name: '阿贝多',
        stars: 5,
        weaponType: '单手剑',
        elementAttribute: '岩',
        sex: '男',
        country: '蒙德',
    },
    {
        name: '辛焱',
        stars: 4,
        weaponType: '双手剑',
        elementAttribute: '火',
        sex: '女',
        country: '璃月',
    },
    {
        name: '钟离(摩拉克斯)',
        stars: 5,
        weaponType: '长柄武器',
        elementAttribute: '岩',
        sex: '男',
        country: '璃月',
    },
    {
        name: '迪奥娜',
        stars: 4,
        weaponType: '弓',
        elementAttribute: '冰',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '达达利亚',
        stars: 5,
        weaponType: '弓',
        elementAttribute: '水',
        sex: '男',
        country: '至冬',
    },
    {
        name: '可莉',
        stars: 5,
        weaponType: '法器',
        elementAttribute: '火',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '温迪(巴巴托斯)',
        stars: 5,
        weaponType: '弓',
        elementAttribute: '风',
        sex: '男',
        country: '蒙德',
    },
    {
        name: '莫娜',
        stars: 5,
        weaponType: '法器',
        elementAttribute: '水',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '琴',
        stars: 5,
        weaponType: '单手剑',
        elementAttribute: '风',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '雷泽',
        stars: 4,
        weaponType: '双手剑',
        elementAttribute: '雷',
        sex: '男',
        country: '蒙德',
    },
    {
        name: '诺艾尔',
        stars: 4,
        weaponType: '双手剑',
        elementAttribute: '岩',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '菲谢尔',
        stars: 4,
        weaponType: '弓',
        elementAttribute: '雷',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '芭芭拉',
        stars: 4,
        weaponType: '法器',
        elementAttribute: '水',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '砂糖',
        stars: 4,
        weaponType: '法器',
        elementAttribute: '风',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '班尼特',
        stars: 4,
        weaponType: '单手剑',
        elementAttribute: '火',
        sex: '男',
        country: '蒙德',
    },
    {
        name: '安柏',
        stars: 4,
        weaponType: '弓',
        elementAttribute: '火',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '凯亚',
        stars: 4,
        weaponType: '单手剑',
        elementAttribute: '冰',
        sex: '男',
        country: '蒙德',
    },
    {
        name: '丽莎',
        stars: 4,
        weaponType: '法器',
        elementAttribute: '雷',
        sex: '女',
        country: '蒙德',
    },
    {
        name: '刻晴',
        stars: 5,
        weaponType: '单手剑',
        elementAttribute: '雷',
        sex: '女',
        country: '璃月',
    },
    {
        name: '七七',
        stars: 5,
        weaponType: '单手剑',
        elementAttribute: '冰',
        sex: '女',
        country: '璃月',
    },
    {
        name: '香菱',
        stars: 4,
        weaponType: '长柄武器',
        elementAttribute: '火',
        sex: '女',
        country: '璃月',
    },
    {
        name: '重云',
        stars: 4,
        weaponType: '双手剑',
        elementAttribute: '冰',
        sex: '男',
        country: '璃月',
    },
    {
        name: '行秋',
        stars: 4,
        weaponType: '单手剑',
        elementAttribute: '水',
        sex: '男',
        country: '璃月',
    },
    {
        name: '北斗',
        stars: 4,
        weaponType: '双手剑',
        elementAttribute: '雷',
        sex: '女',
        country: '璃月',
    },
    {
        name: '凝光',
        stars: 4,
        weaponType: '法器',
        elementAttribute: '岩',
        sex: '女',
        country: '璃月',
    },
    {
        name: '旅行者',
        stars: 5,
        weaponType: '单手剑',
        elementAttribute: '风、岩',
        sex: '男/女',
        country: '——',
        color: '#fdb933',
    },
    {
        name: '迪卢克',
        stars: 5,
        weaponType: '双手剑',
        elementAttribute: '火',
        sex: '男',
        country: '蒙德',
    },
]
