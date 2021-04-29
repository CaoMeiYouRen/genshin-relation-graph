import{r as t,c as a,o,w as e,d as r,n as m}from"./index.32c30bb8.js";import"./vendor.cdb6b7c7.js";function n(o){const e=t(o);return{isCheckAll:a((()=>e.value.length===o.length)),rawItems:o,checkItems:e,handleCheckItem:t=>{e.value=t},handleCheckAll:()=>{e.value=o}}}const d=[{name:"胡桃",stars:5,weaponType:"长柄武器",elementAttribute:"火",sex:"女",country:"璃月"},{name:"魈",stars:5,weaponType:"长柄武器",elementAttribute:"风",sex:"男",country:"璃月"},{name:"甘雨",stars:5,weaponType:"弓",elementAttribute:"冰",sex:"女",country:"璃月"},{name:"阿贝多",stars:5,weaponType:"单手剑",elementAttribute:"岩",sex:"男",country:"蒙德"},{name:"辛焱",stars:4,weaponType:"双手剑",elementAttribute:"火",sex:"女",country:"璃月"},{name:"钟离(摩拉克斯)",stars:5,weaponType:"长柄武器",elementAttribute:"岩",sex:"男",country:"璃月"},{name:"迪奥娜",stars:4,weaponType:"弓",elementAttribute:"冰",sex:"女",country:"蒙德"},{name:"达达利亚",stars:5,weaponType:"弓",elementAttribute:"水",sex:"男",country:"至冬"},{name:"可莉",stars:5,weaponType:"法器",elementAttribute:"火",sex:"女",country:"蒙德"},{name:"温迪(巴巴托斯)",stars:5,weaponType:"弓",elementAttribute:"风",sex:"男",country:"蒙德"},{name:"莫娜",stars:5,weaponType:"法器",elementAttribute:"水",sex:"女",country:"蒙德"},{name:"琴",stars:5,weaponType:"单手剑",elementAttribute:"风",sex:"女",country:"蒙德"},{name:"雷泽",stars:4,weaponType:"双手剑",elementAttribute:"雷",sex:"男",country:"蒙德"},{name:"诺艾尔",stars:4,weaponType:"双手剑",elementAttribute:"岩",sex:"女",country:"蒙德"},{name:"菲谢尔",stars:4,weaponType:"弓",elementAttribute:"雷",sex:"女",country:"蒙德"},{name:"芭芭拉",stars:4,weaponType:"法器",elementAttribute:"水",sex:"女",country:"蒙德"},{name:"砂糖",stars:4,weaponType:"法器",elementAttribute:"风",sex:"女",country:"蒙德"},{name:"班尼特",stars:4,weaponType:"单手剑",elementAttribute:"火",sex:"男",country:"蒙德"},{name:"安柏",stars:4,weaponType:"弓",elementAttribute:"火",sex:"女",country:"蒙德"},{name:"凯亚",stars:4,weaponType:"单手剑",elementAttribute:"冰",sex:"男",country:"蒙德"},{name:"丽莎",stars:4,weaponType:"法器",elementAttribute:"雷",sex:"女",country:"蒙德"},{name:"刻晴",stars:5,weaponType:"单手剑",elementAttribute:"雷",sex:"女",country:"璃月"},{name:"七七",stars:5,weaponType:"单手剑",elementAttribute:"冰",sex:"女",country:"璃月"},{name:"香菱",stars:4,weaponType:"长柄武器",elementAttribute:"火",sex:"女",country:"璃月"},{name:"重云",stars:4,weaponType:"双手剑",elementAttribute:"冰",sex:"男",country:"璃月"},{name:"行秋",stars:4,weaponType:"单手剑",elementAttribute:"水",sex:"男",country:"璃月"},{name:"北斗",stars:4,weaponType:"双手剑",elementAttribute:"雷",sex:"女",country:"璃月"},{name:"凝光",stars:4,weaponType:"法器",elementAttribute:"岩",sex:"女",country:"璃月"},{name:"旅行者",stars:5,weaponType:"单手剑",elementAttribute:"风、岩",sex:"男/女",country:"——",color:"#fdb933"},{name:"迪卢克",stars:5,weaponType:"双手剑",elementAttribute:"火",sex:"男",country:"蒙德"},{name:"罗莎莉亚",stars:4,weaponType:"长柄武器",elementAttribute:"冰",sex:"女",country:"蒙德"},{name:"法尔伽",sex:"男",country:"蒙德"},{name:"白术",elementAttribute:"草",sex:"男",country:"璃月"},{name:"云堇",sex:"女",country:"璃月"},{name:"瑶瑶",elementAttribute:"草",sex:"女",country:"璃月"},{name:"优菈",stars:5,weaponType:"双手剑",elementAttribute:"冰",sex:"女",country:"蒙德"},{name:"烟绯",stars:4,weaponType:"法器",elementAttribute:"火",sex:"女",country:"璃月"}],f=new Map([["火","#aa2116"],["水","#145b7d"],["风","#84bf96"],["雷","#6950a1"],["冰","#7bbfea"],["岩","#6c4c49"],["草","#1d953f"]]),l=new Map([["旅行者","#fdb933"]]),s={rootId:"旅行者",nodes:d.map((t=>({id:t.name,text:t.name,color:t.color||f.get(t.elementAttribute||"")||"#000",borderColor:"rgba(0,0,0,0)",width:15*(t.stars||4),height:15*(t.stars||4),data:t}))),links:[{from:"旅行者",to:"温迪(巴巴托斯)",data:"旅行者：我们救回特瓦林之后，在回蒙德的路上…旅行者：第一次见到了「尘世七执政」的面目呢。原来是这样的神…派蒙：嗯？我们认识温迪，不是已经很久了吗？旅行者：我是指…他作为风神巴巴托斯的那一面。旅行者：在吟游诗人的躯壳之下，藏着真实的神灵。旅行者：「被自由之神命令的自由，还能称之为自由吗？」旅行者：他问特瓦林的这个问题，我也还在思考答案…"},{from:"旅行者",to:"钟离(摩拉克斯)",data:"旅行者：没想到，岩神居然与冰神签订了「契约」。旅行者：契约的内容，究竟回事什么呢…派蒙：派蒙觉得，不管是谁，要和「冰之女皇」做交易，都很不安全！旅行者：确实是这样…旅行者：但既然摩拉克斯是所有神灵里，最理解「契约」本质的那一位…旅行者：他应该不会没有考虑过这件事。派蒙：嗯，摩拉克斯本人好像很有自信，叫它「终结一切契约的契约」…旅行者：我们最终会见证真相…和结局的。"},{from:"旅行者",to:"班尼特",data:"旅行者：我听说，艾伯特先生作为芭芭拉粉丝团的团长…旅行者：经常故意弄出些磕磕碰碰的伤，就为了去教堂见芭芭拉一面。派蒙：我觉得西风骑士团需要重点关注这种家伙。旅行者：可是一个月下来，艾伯特发现…跟芭芭拉见面的次数，被班尼特远远超越了。旅行者：毕竟在受伤方面，班尼特有天然的优势…派蒙：这是什么「给芭芭拉小姐添麻烦」的比赛吗！"},{from:"旅行者",to:"芭芭拉",data:"派蒙：芭芭拉很受大家欢迎呢。旅行者：毕竟是蒙德的大众偶像嘛。派蒙：说起来我一直没太懂…「偶像」是什么呀？旅行者：是一种职业，只需要负责可爱，就可以受大家喜欢，赚好多摩拉呢。派蒙：和吉祥物差不多嘛。旅行者：呃，也可以这么说吧…"},{from:"旅行者",to:"丽莎",data:"旅行者：丽莎和安柏的关系，有点像姐妹。派蒙：为什么？旅行者：安柏经常帮丽莎跑腿。姐姐为了偷懒，要求妹妹帮忙跑腿，是很常见的事…旅行者：不过我和哥哥因为同年，所以就只能猜拳决定了。派蒙：呜哇，这么说来，那你就是我的妹妹了！旅行者：为什么？派蒙：我会「飞」啊，实际上「跑腿」的只有你一个人哦！旅行者：啊？"},{from:"旅行者",to:"安柏",data:"旅行者：丽莎和安柏的关系，有点像姐妹。派蒙：为什么？旅行者：安柏经常帮丽莎跑腿。姐姐为了偷懒，要求妹妹帮忙跑腿，是很常见的事…旅行者：不过我和哥哥因为同年，所以就只能猜拳决定了。派蒙：呜哇，这么说来，那你就是我的妹妹了！旅行者：为什么？派蒙：我会「飞」啊，实际上「跑腿」的只有你一个人哦！旅行者：啊？"},{from:"旅行者",to:"凯亚",data:"旅行者：派蒙，你见过凯亚眼罩下面的样子吗？派蒙：没见过呢。旅行者：这么说来，凯亚似乎一年四季都不会摘下眼罩…派蒙：哼哼，机智的派蒙已经猜到为什么了！旅行者：嗯？派蒙：肯定是要隐藏什么大秘密！旅行者：大秘密？派蒙：你看，凯亚外出的工作比较多。派蒙：所以凯亚眼罩下的皮肤，肯定比周围的白一大圈。旅行者：那如果摘下眼罩…派蒙：肯定会被大家笑话的吧！然后被取奇怪的绰号！派蒙：比如说——「花脸猫」！旅行者：唔，他还没摘下眼罩，就已经被取了奇怪的绰号呢…"},{from:"旅行者",to:"迪卢克",data:"派蒙：奇怪…旅行者：怎么了？派蒙：为什么迪卢克和凯亚明明是很相似的两个人，关系却不太好呢？旅行者：他们哪里相似了？派蒙：凯亚像是那种……会光明正大地耍阴招的人。派蒙：迪卢克像是那种……在暗地里做光明正大的事的人。派蒙：是不是很相似？旅行者：我还是不知道相似在哪里。"},{from:"旅行者",to:"琴",data:"派蒙：我发现，在蒙德努力工作不一定会有回报呢。旅行者：为什么这么说？派蒙：你看西风骑士的霍夫曼先生，每天尽职尽责…派蒙：可那位总是很轻松悠闲的凯亚先生，却是他的上司。旅行者：嗯…可是最辛苦的琴，当上了代理团长呀？派蒙：那、那论地位来讲的话…派蒙：最懒散的温迪，还是整个蒙德城的神明呢！"},{from:"旅行者",to:"雷泽",data:"派蒙：旅行者，你知道毛笔吗？旅行者：用动物的毛做成的笔，可以拿来写字？派蒙：嗯，答对了！据说好的毛笔能在璃月商人那边卖出高价呢！旅行者：所以派蒙也想做毛笔？派蒙：嗯！但是野外的狼都太凶了，所以我们去薅雷泽的毛做毛笔吧！派蒙：雷泽毛茸茸的，肯定能做出上好的狼毫笔！然后我们就能大赚一笔！旅行者：这样做出来的笔肯定带电，没办法用吧。旅行者：而且雷泽不是狼，狼毫笔也不是狼毛做的…派蒙：欸——那为什么要叫做狼毫笔！旅行者：你看果酒湖里不也没有果酒吗。派蒙：喔——很有道理呢！"},{from:"旅行者",to:"可莉",data:"派蒙：可莉也是个很有意思的孩子呢。派蒙：骑士团的大家都很喜欢她，说是团宠也不为过吧。旅行者：派蒙和可莉…究竟哪一边比较强昵？旅行者：啊，对了，派蒙不是吉祥物，派蒙是…派蒙：哼，看到你张嘴就知道你准备说什么。这个笑话说太多次就不好笑了。"},{from:"旅行者",to:"诺艾尔",data:"派蒙：分享生活小智慧时间到！旅行者：生活小智慧？派蒙：在蒙德，如果有东西怎么修都修不好，或者怎么洗都洗不干净…派蒙：遇到这种事，自己又处理不了的话，就可以对着天空大喊一声：派蒙：「诺——艾——尔——！」派蒙：所有的烦心事，就都会被马上解决啦。旅行者：这就是蒙德人的生活小智慧吗？太棒了，学到许多…"},{from:"旅行者",to:"菲谢尔",data:"派蒙：菲谢尔给人的感觉很不一样呢。旅行者：比如说？派蒙：比如说，和一只会说话的乌鸦一起行动。旅行者：唔，那我和派蒙一起旅行，也差不多吧。旅行者：不过，奥兹还能当菲谢尔的翻译。但派蒙的话…嗯…派蒙：什么？！我可比乌鸦厉害多了！旅行者：比如说？派蒙：唔…嗯…呃…比如说我不用翅膀也能飞！"},{from:"旅行者",to:"北斗",data:"派蒙：要怎么样才能成为北斗大姐头那种，又有号召力，又帅气的人物呢！旅行者：要有足够的见识…派蒙：陪你旅行到现在，派蒙已经见过很多东西了！旅行者：要经历挫折和苦难…派蒙：派蒙差点在水里咕嘟咕嘟咕嘟下去了…旅行者：要始终怀有鼓舞他人的气概…派蒙：嗯！派蒙一直支持着你哦。旅行者：看待问题要成熟…派蒙：喂！你就是想说派蒙我没可能了是吧？"},{from:"旅行者",to:"凝光",data:"派蒙：要么样才能成为凝光大人那种，很有钱又很有钱的人物呢！旅行者：凝光给你的印象就只剩下钱了吗…派蒙：还有大大的「群玉阁」！不过那也是用摩拉堆出来的吧。旅行者：那么，要有精明的头脑…派蒙：派蒙擅长给人取绰号！旅行者：要熟悉市场运作的规则…派蒙：一份渔人吐司卖1025摩拉，下雨天也不会打折。旅行者：要有高人一等的办事手腕…派蒙：…怎样才能跟一个有钱人成为朋友呢？旅行者：这就已经放弃了吗？！"},{from:"旅行者",to:"七七",data:"派蒙：七七…会不会需要吸血呢？旅行者：那不是僵尸，是吸血鬼吧。派蒙：那她的胳膊会不会突然掉下来？旅行者：那不是僵尸，是丧尸吧。派蒙：真不愧是旅行者，见识非常广呢！派蒙：这样说来，僵尸会做什么特别的事呢？旅行者：体操？派蒙：你说得很有道理！所以会做体操就是僵尸！"},{from:"胡桃",to:"钟离(摩拉克斯)",text:"同事",data:"钟离长得那么年轻，性格倒像是个老古董，什么都懂，却什么都不关心。该不会...算了，随他去吧"},{from:"胡桃",to:"七七",data:"看到七七了吗？快告诉我它在哪儿，我要把它藏起来"},{from:"胡桃",to:"白术",data:"白术 哼 麻烦的家伙"},{from:"胡桃",to:"凝光",data:"天权凝光，富甲一方，明眸善睐，桃羞杏让，目达耳通，百了千当"},{from:"胡桃",to:"北斗",data:"北斗姐，可是璃月名人，他不认识我。没关系，我认识他就行。嗯真想和他交个朋友啊"},{from:"胡桃",to:"行秋",data:"听说行秋少爷在写书。话本还是怪谈呢，好想把平日遇见的杂事说给他听，写成书一定很好看吧"},{from:"胡桃",to:"重云",text:"朋友",data:"纯阳正气 阴阳合一 啧啧 没想到世上真有这种体质的人"},{from:"胡桃",to:"魈",data:"仙家的事我怎么知道？哎呀呀天机不可泄露，你就别问我了"},{from:"胡桃",to:"刻晴",data:"玉衡刻晴啊 是个很难打交道的人呢 嘿嘿 瞧那一本正经的样子 真想逗逗她 哎哟 她不会用剑敲我头吧 不会的吧"},{from:"胡桃",to:"香菱",text:"朋友",data:"香菱可好玩啦，一碰就跳，特别容易被唬住。做我们这一行最喜欢这种人喽。不过也得注意分寸，毕竟锅巴会替香菱出头"},{from:"魈",to:"钟离(摩拉克斯)",text:"下属",data:"嗯…打听一下。请问钟离大人平日里都在…呃，遛鸟？赏花？品鉴古玩？…钟离大人做这些，是有什么深意…"},{from:"魈",to:"北斗",data:"北斗吗？我与她没有什么交情。不过，冥海巨兽却有其事。能够将「海山」击败，作为人类，她的实力值得肯定。"},{from:"魈",to:"白术",data:"你想…托付白术研制缓解我痛苦的药物？呵…你的好意我心领了。凡人的药物，对仙人是无法起效的。"},{from:"魈",to:"胡桃",data:"胡桃？那孩子，活泼到令人头痛。所幸她还算风趣，不必担心会成长为无趣的人类。"},{from:"魈",to:"温迪(巴巴托斯)",data:"温迪…？原来如此，名字叫做温迪啊。他演奏的曲调…不，没什么。"},{from:"魈",to:"甘雨",data:"甘雨即非仙兽，又非凡人，游走于仙人两界，靠着职责支撑自我，困惑是免不了的。...你说，我？呵，要让只懂杀戮与生存之道的夜叉，去开导瑞兽？天方夜谭。"},{from:"甘雨",to:"钟离(摩拉克斯)",text:"下属",data:"我对帝君有着绝对的信任。当年，正是有帝君率领，我们才能击退魔物、降伏海兽，保住了这一方平安。帝君守护众人的身姿，千年以来的情谊，我不会忘记。"},{from:"甘雨",to:"凝光",text:"秘书",data:"历任「天权」都会对璃月的古老律法进行释义和补充。在这之中，当代「天权」凝光的处理效率是无人能及的。只不过，她那追求效率和效益的作风常常遭人指摘。挑刺，总是比包容简单得多吧。"},{from:"甘雨",to:"刻晴",text:"秘书",data:"我无法认同她对帝君的态度。但是…但是…「甘雨，这才是璃月现今需要的人。」帝君反而这样说。我还是太愚钝了，要理解帝君话语中的意思，还得更努力地接触更多事务才行吧。"},{from:"甘雨",to:"行秋",data:"飞云商会那位青衣少年，并不像他的父亲和兄长那般操心织物的经营。是因为对他来说，有更重要的事情值得去做吧。当然…这也只是我的猜测…"},{from:"甘雨",to:"香菱",data:"香菱很有名！但…我不太敢去「万民堂」那一带…不敢就是…不敢啦。好，好吧，也不是秘密。那边的饭菜香味飘得满街都是。一旦被勾住了，点上了菜，就算是素菜也…很难控制住食欲吧。这样的话，这样的话…"},{from:"甘雨",to:"北斗",data:"近来，玉京台之上对南十字船队的怨言不断。可是在我看来，北斗船长对璃月所做的贡献，远非沉溺于伪造流言之徒所能想象…啊，抱歉，失言了…"},{from:"甘雨",to:"瑶瑶",data:"瑶瑶啊…我是受总务司那边的熟人托付在城内好生照顾她，别让她再往船上跑…你问我总务司的业务范围？唔…不，不知道呢。"},{from:"甘雨",to:"魈",data:"他一直与人间保持距离，应该说是性格使然吧…我能够理解他，但是我无法「接近」他。毕竟…与他履行同一份「契约」的同伴，都已经不在了啊…"},{from:"阿贝多",to:"砂糖",text:"老师",data:"砂糖吗？我大概能理解她一心专攻「生物炼金」的理由…不管怎样，看到她的研究越来越顺利，我也为她感到高兴。"},{from:"阿贝多",to:"丽莎",data:"丽莎吗？和她讨论总会得到很有价值的观点。如此有才华却满足于图书管理员一职，想必背后藏着于那才华等重的因缘吧。"},{from:"阿贝多",to:"可莉",text:"哥哥",data:"我的确把可莉当作亲妹妹一样看，所以每次当这位妹妹惹出麻烦的时候，我都只能安慰自己，至少她现在的破坏力，还不及艾莉女士的零头。"},{from:"阿贝多",to:"琴",text:"同事",data:"琴吗？她是一位正直的代理团长，甚至可以说比那位团长大人更为可靠。可能大家心里都在期待着她成为正式团长的那一天吧。"},{from:"阿贝多",to:"行秋",text:"合作者",data:"行秋吗？他写的小说挺有趣的。稻妻那边的「八重堂」一直在旁敲侧击希望让我和别的作者合作，说这样版税收入也会更好。哼，我缺这点钱吗？"},{from:"阿贝多",to:"芭芭拉",data:"芭芭拉吗？她是一位认真的牧师，说来以前碰巧有机会给她画过速写…你问画哪儿去了？嗯…我拒绝了艾伯特的开价，直接把画送给了代理团长。人际交往…真是耗费精力啊。"},{from:"辛焱",to:"香菱",data:"我经常去「万民堂」吃夜宵，香菱如果手头不忙，还经常跟我聊天，一直聊到很晚很晚。啊？你问我都点的啥？嗯…其实是香菱做啥我吃啥，哈哈。每次都不一样，味道也千变万化，她可以说是料理界的「摇滚明星」了！"},{from:"辛焱",to:"钟离(摩拉克斯)",data:"以前没什么人听我的摇滚，有一天他突然来邀请我，说可以去他那里试试，合适的话可以去当驻唱歌手，我心里激动啊，终于有人理解我的音乐了！就直接答应了下来。结果去了场地才知道，他居然是那个「往生堂」的客卿…这明显不合适啊，真是个怪人。"},{from:"辛焱",to:"凝光",data:"你知道千岩军？他们以前总是妨碍我，说什么这里也不准搭舞台，那里也不准，麻烦死了。咳咳，不过在我找总务司申诉之后，听说那个「天权星」专门修订了璃月的什么…呃…反正是某个规则，划定了演出专属场地，还要申请什么许可。哎…其实还是很麻烦，不过，好歹不用像之前一样，被赶得到处乱跑了嘛。"},{from:"辛焱",to:"白术",data:"白术先生开的药方保养嗓子效果一流，为了答谢他，我在他面前来了一段即兴摇滚，结果…他养的那条蛇就晕了过去。从那以后，那条蛇看到我就一个劲儿地往白术先生的衣领里面钻，哈哈哈。我从那以后才知道，蛇原来对震动很敏感。"},{from:"辛焱",to:"北斗",data:"她啊，说话直爽，气量也大，聊起来特别投缘。「死兆星」号乘风破浪的故事，实在是太帅了，给了我很多摇滚的灵感。嘿嘿，我还专门写了一首歌给他们。现在，只要我唱第一句，好多船员都能跟我唱下去，都快变成船歌啦。"},{from:"辛焱",to:"重云",data:"他超有意思！看上去文静内向，但有一次演出，他好像是被朋友叫过来，要跟我说什么话。舞台上声音太大，我还没听清呢，他已经一个箭步跳上台来和我一起唱了，还唱得特别摇滚。这就叫「人不可貌相」吧。"},{from:"辛焱",to:"胡桃",data:"她明明是往生堂的堂主，却每天一副开开心心的样子，完全不知道在想什么。街上碰上的话，还会大大方方地和我打招呼，说什么「喜欢玩火的人，是生意兴隆的保障呢。」…呃，有、有点诡异。"},{from:"辛焱",to:"云堇",data:"告诉你个小秘密，别到处乱讲哦。那个人可喜欢摇滚了，不管多忙，一周都来听我三场，只多不少。按理说，「和裕茶馆」的戏班头牌，该喜欢什么琴棋书画，花鸟虫鱼才对吧？肯定是平时被憋坏了，哈哈哈。"},{from:"钟离(摩拉克斯)",to:"魈",text:"上司",data:"你说，归离原的少年仙人…啊…时至今日，他仍然在履行他的职责…哦，这幅「连理镇心散」，请替我带给他。对了，可千万不能让小派蒙偷吃了去，这里的药力…绝非常人所能承受。"},{from:"钟离(摩拉克斯)",to:"温迪(巴巴托斯)",data:"嘶...好浓的酒气。那个诗人刚刚来过吧，那个和风雅二字搭不上关系的酒鬼诗人！你这里…唔，被他诱骗着灌了酒，话也说不清了么…你等一下，我去沏一壶「醒神茶」，只需三个时辰便好。你等一下…"},{from:"钟离(摩拉克斯)",to:"凝光",data:"即便每日经手的事务千条万缕，她仍不失进取之心，实属难得。让我想起，彼时的她赤着脚从瑶光滩走到南码头，一路叫卖货品的样子。时间对于常人来说，真是残酷…"},{from:"钟离(摩拉克斯)",to:"胡桃",text:"往生堂客卿",data:"当代堂主？嗯...那孩子我应付不来。"},{from:"钟离(摩拉克斯)",to:"达达利亚",data:"那位来自至冬的武人，还没离开璃月吗？没关系，要是他找你麻烦，你可以唤我去应付他。"},{from:"钟离(摩拉克斯)",to:"甘雨",data:"璃月这个国度的繁荣，靠的绝不仅是「岩王帝君」的神谕，而是无数相应「契约」的岩神子民。在这之中，甘雨已是就职时间最长的一位了。关于她的往事···我怕她怪罪，让她自己和你说吧。"},{from:"钟离(摩拉克斯)",to:"刻晴",data:"她是当代七星中最「不敬神」的，但我还挺欣赏这样的人。「觉得自己是正确的，就大声地说出来、坚决的去行动」——就是因为璃月有这样的人，我才考虑退休一事。"},{from:"迪奥娜",to:"迪卢克",text:"讨厌",data:"那个…迪卢克，是我最讨厌的人！没有迪卢克就不会有蒙德酒业，没有蒙德酒业爸爸就不会喝酒，爸爸不喝酒就…就会陪我了，哼。"},{from:"迪奥娜",to:"凯亚",text:"讨厌",data:"为什么连我的「护卫队长」也是个令人讨厌的酒鬼啦！就是那个，说起话来总是笑盈盈的家伙！喝起酒来一杯接一杯的，没完没了。呼！"},{from:"迪奥娜",to:"温迪(巴巴托斯)",text:"不喜欢",data:"温迪？不太熟的样子。但说到吟游诗人，就是那伙会给酒鬼们唱歌助兴的人吧。那就不喜欢！不喜欢不喜欢。"},{from:"迪奥娜",to:"芭芭拉",data:"芭芭拉小姐的粉丝们，都是大哥哥大姐姐…好羡慕，为什么我的粉丝都是一群大叔呢。呜…可恶，哼，不想了。"},{from:"迪奥娜",to:"琴",data:"琴啊，骑士团的代理团长，嗯…难得一个不喝酒的成熟大人…但总感觉认真过了头，骑士团的大家对我有些过度保护了吧？"},{from:"迪奥娜",to:"阿贝多",data:"首席炼金术士大人？唔…我这种一直调出好酒的体质，他会知道破解的方法么？"},{from:"迪奥娜",to:"丽莎",data:"丽莎姐姐，很和善对吧，很温柔对吧？但是，这样的姐姐也经常喝酒！呜呜呜…这是为什么啦…蒙德城已经没救了吧"},{from:"迪奥娜",to:"香菱",data:"我向香菱讨过一份「口感搭配特别糟糕的食物组合」；据说是她亲自实践下来的，绝对难吃什么的…没用，完全没用。「续杯」两个字已经听到猫耳朵都生茧了！呜…"},{from:"迪奥娜",to:"可莉",text:"玩伴",data:"可莉每次来找我玩的时候，我都只好把，她带去离酒馆远一点的地方。酒和炸弹…实在是太危险了！就算我想摧毁蒙德酒业，也得用堂堂正正的方式。"},{from:"达达利亚",to:"钟离(摩拉克斯)",data:"那家伙城府很深，不知真正的实力又如何呢…哼，真令人期待。"},{from:"达达利亚",to:"法尔伽",data:"法尔伽吗？哼，光是想到，有朝一日能和西风骑士团的顶点，传说中的「北风骑士」交手，就兴奋得颤抖。活在这个世界上，真是美妙。"},{from:"可莉",to:"雷泽",data:"我们是朋友！雷泽努力对抗危机、保护可莉的样子，让人安心。唔…虽然基本上都是我把危机带到他身边的..."},{from:"可莉",to:"凯亚",data:"凯亚哥哥是好人！《骑团生存守则》就是凯亚哥哥帮可莉写的。可莉闯祸的时候，他也经常帮忙遮掩呢。"},{from:"可莉",to:"安柏",data:"安柏姐姐是好人！兔兔伯爵摸起来也是毛茸茸的，而且还会爆炸，太棒了！"},{from:"可莉",to:"琴",data:"琴团长是好人！虽然…有点可怕..."},{from:"可莉",to:"迪卢克",data:"奇怪的大人，一直都是不太开心的样子。唔…为什么不喜欢笑呢？"},{from:"可莉",to:"丽莎",data:"丽莎阿…丽莎姐姐是好人！每次可莉靠近她的工坊，她就会给可莉好吃的茶点…欸？说起来我想进她的工坊，好像一开始是想做新的炸药来着…？"},{from:"可莉",to:"班尼特",data:"班尼特哥哥是好人！和他一起冒险，可莉总能有更多收获！…虽然班尼特哥哥自己总是什么宝物都找不到，嗯…这是为什么呢？"},{from:"可莉",to:"迪奥娜",text:"玩伴",data:"迪奥娜姐姐是好人！「靠一己之力摧毁蒙德酒业」的想法好有趣，可莉也要用炸弹来帮忙！——呃，虽然不太懂什么叫做「蒙德酒业」，是怪物吗？"},{from:"可莉",to:"阿贝多",text:"妹妹",data:"阿贝多哥哥跟可莉有个秘密的约定！要是可莉看到工坊门前挂着「实验进行中」的牌子，就要晚点再去找他。阿贝多哥哥不工作的时候，会很耐心地陪着可莉，所以可莉也会很耐心地等着的！"},{from:"可莉",to:"莫娜",data:"莫娜姐姐是好人！她每次找阿贝多哥哥和可莉玩的时候，都会说好多听不明白但是很有趣的东西！可莉喜欢她来玩！"},{from:"可莉",to:"砂糖",data:"砂糖姐姐是好人！她问我，想不想要一个会跑会跳的蹦蹦！嘿嘿嘿，当然想要了，我还想要好几百个，让蒙德的街道上，台阶上，广场上，全是蹦蹦！"},{from:"温迪(巴巴托斯)",to:"琴",data:"骑士团代理团长大人…你觉得她是个怎样的人？嘿嘿，跟我想得一样。认真，勇敢，也不乏温柔。和我一个朋友有点像呢…"},{from:"温迪(巴巴托斯)",to:"迪卢克",data:"去跟迪卢克老爷处好关系吧？你想，他家可是有好~多~珍藏的酒啊！嘿嘿嘿，嘿嘿嘿嘿…咦，无论如何不准喝酒么？那…就去闻一闻吧，闻一闻！只是闻的话，你也可以喔。"},{from:"温迪(巴巴托斯)",to:"芭芭拉",data:"唱歌很好听的牧师女孩儿，你认识么、你认识么？..唔，偶像？…啊，握手会？…嗯，专场live？…这样啊，音乐还真是深奥呐。"},{from:"温迪(巴巴托斯)",to:"雷泽",data:"那个奔狼领的白发少年，哦哦，是吗，是被狼养大的啊..怪不得呢，他身上的气息，令人怀念..."},{from:"温迪(巴巴托斯)",to:"莫娜",data:"啊，那位占星术士吗？这么说吧，占卜和我的诗歌一样，都是让人穷到酒钱都凑不齐的没用技术呢！欸？你说占星至少是一项文化传统，所以不是没用的？呜，真失礼啊，那诗歌也一样有用啊"},{from:"温迪(巴巴托斯)",to:"迪奥娜",data:"远近闻名的猫尾酒馆特调酒。可是…呜，会，打，打喷嚏。要不，你帮我讨一杯酒来吧。我肯定会好好感激你的，一言为定。"},{from:"温迪(巴巴托斯)",to:"阿贝多",data:"黑土与白垩、宇宙与地层，无垢之土创生原初之人…特征实在太明显了，难以忽视呀。这么危险的古老技术，万一在城里失控——嗨，算了，就让蒙德人自己解决蒙德的问题吧。"},{from:"温迪(巴巴托斯)",to:"钟离(摩拉克斯)",data:"你见过那位老爷子了？他近来还好吗？欸，变成名叫「钟离」的普通人了？对他那个死脑筋而言，这应该是不小的改变啊。啊，陪我去见见他吧，带上这瓶埋在风起地的陈年好酒当作慰问品。啊对了，他现在还强不强，实力还剩几成啊？我这样过去，应该不会被打飞吧？"},{from:"莫娜",to:"琴",data:"那位西风骑士团代理团长？她的「命之座」是「幼狮座」，象征着力量，还有过早担负的责任。「雄狮」早早离群，但她会继续成长，直到能完全继承狮群的荣耀。"},{from:"莫娜",to:"阿贝多",data:"阿贝多？啊...我真羡慕他，只用专注于研究就好，不用管其他的杂事，真是美好的生活啊。如果那个老太婆脑筋正常一点，我应该也过着这种生活吧…"},{from:"莫娜",to:"可莉",data:"你是说，艾莉丝的女儿啊。她住在西风骑士团，还有阿贝多照顾…怎么说呢，哎…她的「命之座]不愧是象征着幸运的「四叶草」啊，真羡慕…啊不过，要是我也有这么好的运气，首先就不会遇见那个老太婆了。"},{from:"莫娜",to:"迪卢克",data:"迪卢克·莱艮芬德。「夜枭」是他的「命之座」，象征着黑夜中的警觉，和孤独的守望。在他所认可的白昼来临之前，他都将孤独前行。等等，「夜枭」象不象征财富来着？"},{from:"莫娜",to:"凯亚",data:"凯亚·亚尔伯里奇吗？他的「孔雀羽座」象征着高贵，但同时也象征着「华丽的掩饰」。他以为已经和过去一刀两断。但到了命中注定的那天，他依然必须做出自己的选择。"},{from:"莫娜",to:"丽莎",data:"她的「命之座」以「沙漏」为名，象征着知识、时间与等价交换。一粒沙子落下，时间…或者说生命，就消逝一刹。如果想要止住沙粒奔流，只能平放沙漏，让它永不流动。嗨…简单来说，就是变着法偷懒啦。"},{from:"莫娜",to:"温迪(巴巴托斯)",data:"温迪？那个成天无所事事的吟游诗人？咦，他有什么有趣的吗？我占卜看看…咦，水占盘怎么…什么也看不清，怎，怎么起风了，眼睛都睁不开了！我的帽子！衣服，衣服要被吹跑了！停下来！我不干了！我不干了！"},{from:"琴",to:"芭芭拉",text:"姐姐",data:"芭芭拉非常努力，只不过有时过于勉强自己…嗯？问我为什么了解得这么清楚？因为西风教会也归属骑士团管辖。"},{from:"琴",to:"丽莎",data:"丽莎，有她在的话，我会安心很多。"},{from:"琴",to:"安柏",data:"安柏这段时间确实有所成长。希望有朝一日，她的事迹也会被吟游诗人传颂。"},{from:"琴",to:"凯亚",text:"同事",data:"是吗…凯亚也向你提出建言了啊。他是一名优秀的西风骑士，这点毋庸置疑。"},{from:"琴",to:"可莉",text:"监护人",data:"虽说玩乐是孩子的天性，但可莉中意的玩具却都是些危险品。让人难以放心。"},{from:"琴",to:"阿贝多",data:"「天オ」这种名词，或许正是为了阿贝多这样的人准备的吧。"},{from:"琴",to:"法尔伽",data:"法尔伽大团长，他是西风骑士团的当代传奇。等到他凯旋归来的那一天，就请你亲自和他交谈吧。相信你也能从中受益。"},{from:"琴",to:"诺艾尔",data:"诺艾尔，嗯…那个努力想要成为西风骑士的少女。她的内心仍有软弱之处，现在这个阶段，也许还不适合让她接触外界的凶险。"},{from:"琴",to:"罗莎莉亚",data:"罗莎莉亚修女总是把「麻烦」挂在嘴边，实际却十分称职。上次我和她说「如果觉得麻烦也可以找我帮忙」，她却回答这样更麻烦」。嗯…我果然还有很多欠缺啊。"},{from:"琴",to:"迪卢克",data:"迪卢克前辈对骑士团的指摘事出有因，即使心中愧疚也无法改变既定的结果…我只想通过我的努力，让他对骑士团有所改观…嗯，这是我的责任。"},{from:"琴",to:"砂糖",data:"作为炼金术士，砂糖也算天赋异禀。况且她的身边还有阿贝多指点，未来应该不用担心，只是…不，没什么，沉浸在自己的世界里，也不算坏事吧。"},{from:"雷泽",to:"丽莎",data:"师父的雷，天空会变黑。很可怕，很强。"},{from:"雷泽",to:"芭芭拉",data:"芭芭拉，亮晶晶的女孩子。很善良。"},{from:"雷泽",to:"迪卢克",data:"迪卢克，红红的、黑黑的。又冷又热。"},{from:"雷泽",to:"温迪(巴巴托斯)",data:"诗歌一晤，不明白。虽然不明白，「卢皮卡」喜欢。"},{from:"雷泽",to:"班尼特",data:"班尼特，话很多，和他一起，吃不饱。"},{from:"雷泽",to:"可莉",data:"可莉，朋友!朋友，但是，头疼。"},{from:"雷泽",to:"法尔伽",data:"法尔伽？不认识"},{from:"诺艾尔",to:"安柏",data:"她是我非常尊敬的前辈，实力很强不说，对人也很亲切。她还教我怎么做「兔兔伯爵」，你看，我会把它当成护身符带在身边，做得不错吧？"},{from:"诺艾尔",to:"可莉",data:"我一直很想知道，她还这么小，是怎么正式成为骑士的。有一次向她请教经验，她还没听完我的话，就拉着我去骑士团外面玩炸弹…我以为这是什么修行，结果最后我和她都被琴团长关了禁闭…"},{from:"诺艾尔",to:"琴",data:"琴团长一直都是我的榜样，我的实力和认真程度完全比不上她。她对别人就像对自己一样严格，所以如果有一天我能得到她的认可，那也是对我一直以来努力的最大肯定了。在那之前，我都是不会松懈的！"},{from:"诺艾尔",to:"法尔伽",data:"本来我想跟着他的队伍一起去冒险，履行女仆的责任，但大团长说，我留在蒙德他才不会有后顾之忧…大团长这么器重我，我特别开心！虽然后来我知道大团长不只对我一个人说了这句话，不过…器重就是器重嘛。"},{from:"诺艾尔",to:"凯亚",data:"他很神秘，来如影，去如风，每天都有很重要的任务要去处理。他还经常会给我安排一些小任务，就好像我已经是他的小队成员了一样…只是跑腿？不不不，虽然确实是跑腿，可是我很珍惜的！"},{from:"诺艾尔",to:"班尼特",data:"他不止一次来邀请我，说什么比起骑士团，还是冒险家协会更适合我…虽然我是会像一个普通的冒险家一样，帮他照顾他的老爹们，但…骑士团对我来说有特别的意义，而且我也不想认输…嗯，果然还是没法答应。"},{from:"诺艾尔",to:"菲谢尔",data:"以前我打扫图书馆的时候，记得有本书叫《菲谢尔皇女夜谭》，我还以为只是幻想小说…但没想到，里面的主人公居然真的存在！能有一本自己的传记，她一定很厉害吧。"},{from:"诺艾尔",to:"芭芭拉",data:"我们经常在一起喝茶，有时候她会轻轻哼出很好听的调子，告诉我灵感来了。虽然我对音乐给不出什么实用的建议…但能跟芭芭拉享受这样的时光，我真的非常高兴！"},{from:"菲谢尔",to:"班尼特",data:"菲谢尔:那位厄运的少年吗…错不了的，我这只「断罪之眼」见证过，他那被世界唾弃的悲哀——\n奥兹:那个倒霉蛋，置之不理可不行。"},{from:"菲谢尔",to:"丽莎",data:"菲谢尔:那司书的魔女，坐拥着宇宙知识的宝库…如果能赢取她的信任，或许就能获得伟大智慧…\n奥兹:她说「图书馆的规矩就是有借有还，再借不难」。"},{from:"菲谢尔",to:"凯亚",data:"菲谢尔:无法看透的真实，无法断明的因果，虚实交织的狂言…那个人，或许也与我一样，背负了「魔眼」的命运…\n奥兹:也可能暗地里是个海盗…？"},{from:"菲谢尔",to:"莫娜",data:"菲谢尔:啊啊，那位「伟大的占星术士莫娜」…哼，此人曾经妄图窥探本皇女的命运，结果却浑身颤抖呢。\n奥兹:当时占星术士似乎在努力憋笑，非常不容易。"},{from:"菲谢尔",to:"罗莎莉亚",data:"菲谢尔:她吗？似乎是虔信风神的忠实修女呢。\n奥兹:「虔信」？「忠实」？\n\n菲谢尔:没错。有天晚上看到过，她对什么人说「以风神巴托巴斯的名义，去死吧」这样的话，想必是在领祷吧"},{from:"芭芭拉",to:"琴",text:"妹妹",data:"代理团长大人…骑士团的领袖，大家都很喜欢她哦。欸？问我吗？我…我当然也非常尊敬她！"},{from:"芭芭拉",to:"丽莎",data:"我一直承蒙丽莎姐姐照顾呢。要是她也成为偶像的话，我绝对会全力应援，喊到嗓子哑掉…啊，这样会吓到别人的吧…"},{from:"芭芭拉",to:"安柏",data:"以前就经常看到安柏风风火火地往城外跑，侦察骑士还真是辛苦呀。"},{from:"芭芭拉",to:"迪卢克",data:"迪卢克老爷吗？上次在「天使的馈赠」演出，他一直皱着眉头…是不是我唱的歌他不喜欢呢？"},{from:"芭芭拉",to:"温迪(巴巴托斯)",data:"温迪的声音很好听！不过，他唱的歌跟我擅长的风格差异很大。我试着偷偷学过…那旋律还真是复杂呀。"},{from:"芭芭拉",to:"班尼特",data:"班尼特经常带着一身伤痕来教堂…他却一直毫不在意、大大咧咧地笑着。唔…还是应该更爱惜自己才好啊。"},{from:"芭芭拉",to:"法尔伽",data:"父亲跟着法尔伽大团长一起出远门了，也不知道路途中会不会遇到什么…啊，没关系，大团长可是「北风骑士」，一定没问题的！我…也会为他们折祷的。"},{from:"芭芭拉",to:"罗莎莉亚",data:"罗莎莉亚修女虽然难以接近，也从不参加折祷，但我觉得…唔，她一定是相信着风神的！不过，不过我并没有勇气和她交流就是了…"},{from:"芭芭拉",to:"诺艾尔",data:"诺艾尔实在是太可爱了！人又温柔，还很有耐心，跟她在一起的时候，完全不会有什么压力…哦，对了，她做的茶点也很特别。又香，又甜，而且很健康，嘿嘿。"},{from:"砂糖",to:"诺艾尔",data:"她…经常会主动帮我的忙，但有时候太热情了，反而…有点让我苦恼。有一次，她看到我实验室门前堆了三箱器材，就很麻利的帮我搬了进来，但其实…那些都是我刚刚搬出去的。"},{from:"砂糖",to:"可莉",data:"她已经被琴团长关过好多次禁闭了，但只要被放出来，不久就又会闯祸，唉，不知道有没有真的反省过。啊…我答应她，要帮她做一个会蹦会跳，又很安全的蹦蹦，只不过现在，设计上还有不少问题…"},{from:"砂糖",to:"琴",data:"我有点不敢和琴团长说话，因为她太严肃了…我知道她是个很好的人，但，但知道归知道，害怕…还是会害怕。我一般都不会去打搅她，实在有不得不找她的事，我…我也会拜托阿贝多先生。"},{from:"砂糖",to:"丽莎",data:"我觉得她，好像懂的特别多。她明明没有看过我的研究，但有好几次，都给了我最关键的建议。她到底是怎么知道的呢？是…观察？还是推理呢？"},{from:"砂糖",to:"凯亚",data:"唔…我知道他喜欢开玩笑，也没有存心捉弄我的意思。可是我实在是…分不清他哪句话是真话，哪句话又是玩笑，所以最后要不然就变得很尴尬，要不然，就是我出洋相…"},{from:"砂糖",to:"阿贝多",text:"助手",data:"当他的助手，每天都能学到很多。重点不是知识，而是「天才」的思考方法，无论是多么复杂的问题，他总能抽丝剥茧，再一一解决。在我看来，那就是艺术…"},{from:"砂糖",to:"安柏",data:"我很好奇，为什么她的做的布偶，名字叫「兔兔伯爵」呢？和兔子没什么关系吧。唔…你说，头上的发带，很想兔耳朵？有道理，但其实这是刻板印象，也有很多兔子耳朵是垂下来的。"},{from:"砂糖",to:"菲谢尔",data:"你是说《菲谢尔皇女夜谭》？我知道，作者创造出的世界很有意思，要是能亲眼去看一看就好了…欸？你在说那个「菲谢尔」啊？她啊…嗯，她…应该是没办法带我去的。"},{from:"班尼特",to:"芭芭拉",data:"她很擅长唱歌跳舞！我冒险不顺的时候就会去看她的演出，跟着观众一起喊喊口号加加油，心情就变好了，真的很神奇！这就是她为什么这么受欢迎的原因吧…啊，我这个当团长的，要是也这么受欢迎就好了。"},{from:"班尼特",to:"可莉",data:"那个孩子啊...很可爱，但我必须和她保持距离，只要我陪她玩，她的那些炸弹就会突然爆炸…我倒霉一点无所谓，但要是炸伤了可莉就麻烦了，估计整个骑士团都会跟我没完吧。"},{from:"班尼特",to:"菲谢尔",data:"她是异世界来的[断罪皇女」，可厉害了！我不止一次和她说想要去她的家乡冒险，但每次说到这里她就吞吞吐吐的…嗯，一定是担心我的安危吧，看来她的家乡真的是很凶险的地方。"},{from:"班尼特",to:"琴",data:"我本来想向琴团长要一些对蒙德的冒险家协会的支援，但其实我不太知道要怎么和她说…冒险家协会没有骑士团那么多规矩，我和老爹们成天也嘻嘻哈哈的但用这种态度和琴团长说话，肯定不行吧…我是不是要学一下骑士团敬礼的方式？"},{from:"班尼特",to:"法尔伽",data:"他是我非常崇拜的人，名副其实的大团长！能领导整个西风骑士团，那该有多厉害啊。不过后来我想了想，冒险团规模太大好像也不行，团里太忙了的话，老爹们就没人照顾了。哈哈，还是现在好啊。"},{from:"班尼特",to:"雷泽",data:"你说奔狼领的那个小哥哥啊，他虽然看上去凶巴巴的，也不愿意说话…但是是个有趣的人哦他和我都特别喜欢吃肉我给他做肉吃，他教我狼怎么说话，哈哈，你下次要不要一起来？"},{from:"班尼特",to:"安柏",data:"哦哦，想起来了，那个女孩子，总横冲直撞的.她和我一样，经常去野外冒险！只不过…只要路边架着锅，就总会飘来浓浓的黑烟，还有什么东西烧糊了的味道…唔，难道她的运气也很差?"},{from:"班尼特",to:"诺艾尔",data:"你说她啊，其实我注意她很久了。她很有天分，又特别努力，但在骑士团只能当女仆，一直没成为正式的骑士，你不觉得太可惜了吗?唉，要是她肯来冒险家协会，估计早就是个了不起的冒险家了。"},{from:"安柏",to:"琴",data:"大团长出征之后，大大小小的事务都压在了琴的身上。如果我也能多帮到她一点就好了…"},{from:"安柏",to:"丽莎",data:"等你有空，我们一起去找丽莎吧！她上次和我讲了一个龙脊雪山宝藏的故事，只讲到一半。唔，我还想知道后续！"},{from:"安柏",to:"凯亚",data:"…有种不安的感觉！刚才是凯亚陪着你吧？他没给你添麻烦吧？"},{from:"安柏",to:"班尼特",data:"嗯？班尼特…好像在哪里听过…哦！你说的是冒险家协会那个热血的男孩子啊！嗯，我有时会在秘境附近见到他，好像对寻宝很有热情呢。"},{from:"安柏",to:"可莉",data:"可莉呀，偶尔会有点调皮，但骑士团的大家都很喜欢她！唔…为了不让她又被琴抓去关禁闭，还是看紧她一点吧。"},{from:"安柏",to:"阿贝多",data:"阿贝多，大多数时候都呆在自己的工坊里，捣鼓一些很厉害的东西。但是，见到他的时候，会有种猜不透他在想些什么的感觉。嗯，猜不透呢…"},{from:"安柏",to:"诺艾尔",data:"你问诺艾尔吗？她的韧性可是很强的。作为前辈，你也要多照顾她一点哦。"},{from:"凯亚",to:"琴",data:"哦？代理团长大人，你可要多多支持她。"},{from:"凯亚",to:"丽莎",data:"千万记得要准时还书哦？上次因为这事儿惹她生了气，直到现在，我左手的尺骨还是麻麻的…"},{from:"凯亚",to:"安柏",data:"侦察骑士是个机灵又正义的好骑士，可千万别在她面前做坏事哦？"},{from:"凯亚",to:"迪卢克",text:"义弟",data:"迪卢克？小时候挺可爱的，可如今却活在自己的世界里…总之是个无趣的家伙。"},{from:"凯亚",to:"可莉",data:"可莉...看来还是没有掌握躲避代理团长检查的技巧啊，明明我已经点拨过她…哈哈，我说着玩玩的，你可别去揭发我哦。"},{from:"凯亚",to:"阿贝多",data:"阿贝多啊，沉稳优雅的小帅哥，而且才华横溢，是很讨人喜欢的类型。怎么，你也心动了？"},{from:"凯亚",to:"迪奥娜",data:"你也尝过了迪奥娜调的酒？还没到喝酒的年纪呐。哎呀，可惜，真是可惜，这种快乐无法跟你共享。只能期待你早点长大咯。"},{from:"凯亚",to:"法尔伽",data:"说来可惜，现在的西风骑士团，本没人继承大团长的行事作风。唉…我个人倒还挺欣赏那种的。"},{from:"凯亚",to:"菲谢尔",data:"什么？你说菲谢尔遮起一只眼睛的神秘样子，的确很符合「断罪皇女」的形象？哈哈哈…按照这个规律，我至少也得是个末代皇族后裔，对吧。"},{from:"凯亚",to:"诺艾尔",data:"我受代理团长大人所托，暗中照顾这位后辈。不过她很懂事，不需要我操太多心，真是令我欣慰。"},{from:"凯亚",to:"罗莎莉亚",data:"罗莎莉亚修女的秘密吗？这个不能说。不过我对她印象还不错，比某人好多了。她能够诚实地面对自己。烂事就是烂事，提不起干劲就是提不起干劲。"},{from:"凯亚",to:"砂糖",data:"别看砂糖文静又内向，据说，她在实验室里，收藏了很多特别的东西哦，很刺激，又很…露骨的那种。嗯？你问我？…我像是会偷看女孩子房间的人吗？"},{from:"丽莎",to:"琴",data:"琴是个称职的好团长。看到她认真工作的样子，就连我也忍不住想要多帮她一把。"},{from:"丽莎",to:"安柏",data:"小安柏刚进骑士团的样子我还记得呢，一转眼都那么能干了。啊，再过几年，又会变成什么样呢？"},{from:"丽莎",to:"芭芭拉",data:"芭芭拉的歌，你听过么？哼哼，听说她的旋律里有种治愈的魔力在流动喔。和我的魔药相比，不知道哪边更合你的胃口呢？"},{from:"丽莎",to:"迪卢克",data:"哦，想听迪卢克的故事？哈哈，那我知道一个更好的聊天对象。"},{from:"丽莎",to:"雷泽",data:"小狼狼，来来，过来这边。今天就临时来一场实战练习吧，对手我已经给你找好了的。欸？怎么跑了，真是的…."},{from:"丽莎",to:"可莉",data:"上次小可莉想借用我的工坊做实验，被我拒绝了，她可是生了我一天的气呢。嗯？你问第二天？第二天，她当然又高高兴兴地出门去玩了。"},{from:"丽莎",to:"莫娜",data:"莫娜？似乎是一位很优秀的魔导师小姐呢。但我并不是她们「魔女会」的成员哦，古树考案，组织茶会，一听就是麻烦的事情吧。"},{from:"丽莎",to:"阿贝多",data:"姐姐我觉得，阿贝多是很优秀的炼金术士。跟他只需要用三言两语，就能得到不错的结论。而且脸也长得好看。和小可爱你很像喔，嗯。"},{from:"丽莎",to:"菲谢尔",data:"菲谢尔…哦，那个总是来图书馆借幻想小说的女孩子。每次还书都会提前三天对书籍也十分爱护，是个好孩子呢。"},{from:"丽莎",to:"诺艾尔",data:"拜托诺艾尔清扫书架的时候，总感觉这孩子，越是疲惫就越开心，嗯…到底是怎么回事呢？"},{from:"丽莎",to:"砂糖",data:"没事就不要去打扰小砂糖哦，会吓到她的。呵呵，她擅长和各种各样的生物打交道，却唯独，不怎么善于和人类相处呢。"},{from:"刻晴",to:"钟离(摩拉克斯)",data:"那位「往生堂」的先生，确实博学多才，令人敬佩，但他的思维方式，终究还是太像帝君的那一套了…如果他更有主见的话，将他招揽到我的身边做事，一定会大有帮助。"},{from:"刻晴",to:"北斗",data:"这位船长总是漠视规则，性格令人头疼可她的「南十字」船队，对璃月港来说又是必不可少的。如何平衡规则和利益也是一门艺术。哎呀，只不过那位负责律法的「天权」，可有的忙了。"},{from:"刻晴",to:"凝光",text:"同事",data:"我和她虽然是同事，但性子真的合不来在她的眼里，璃月港不过是她的生意场，只要是能赚钱的事，她什么都做。这岂不是太没原则了？唔…还是说，这就是她的原则？"},{from:"刻晴",to:"辛焱",data:"其实我也对她的「摇滚」很感兴趣。从传统文化的视角看，确实有点喧闹，但我不在乎。好听就是好听，好听的东西就应该发扬光大。"},{from:"刻晴",to:"白术",data:"白术先生的医术备受居民的信赖，如果有什么疑难杂症，去找他肯定不会有错。你说…那些奇怪的传闻？我只知道有一件事是真的，他开的药，确实特别苦，不止是小孩子觉得…给我都留下了很深刻的印象。"},{from:"刻晴",to:"香菱",data:"「万民堂」的这位年轻掌勺，我知道她很有才华，但发挥还是太不稳定了。以前本来想找她定制几桌宴席的，可是尝过她蜥蜴还有史莱姆的试菜之后…我就打消了这个念头。"},{from:"刻晴",to:"行秋",data:"我听说过他的故事，明明出身名门望族却不爱家族事业，喜欢去外面行侠仗义。我很欣赏他，毕竟，把家里的条条框框丢到一边，执意去做心中认为正确的事，这种魄力，可不是谁都有的。"},{from:"刻晴",to:"魈",data:"传闻中的少年仙人，现如今在这人治之世，也应该放下身上的重担了吧。人类已经不需要这样的守护了，就算遇上什么棘手的难题，我们也有自行解决的能力。"},{from:"刻晴",to:"甘雨",data:"我也不知道帝君当年做了什么，才会让甘雨对他这么忠心耿耿。不过，没主见也有没主见的好处——至少，就算是心中颇有微词，她也会按我说的去做，很有职业素养。"},{from:"刻晴",to:"云堇",data:"路过和裕茶馆的时候，如果发现被围得水泄不通，那一定就是云董正在台上唱戏。许多商人都觉得，只是为了云堇，就值得把整个茶馆都买下来。"},{from:"刻晴",to:"温迪(巴巴托斯)",data:"帝君离去之后，我一直都在思考，璃月港的未来该怎么走。除了参考帝君以前的行动，我还去研究了其他神明的治世手段。可是，邻国蒙德就让我很是困惑…像风之神这种做法，真的能让蒙德长久吗？"},{from:"七七",to:"白术",data:"我记不起来白先生的脸了，但是也没什么关系…"},{from:"七七",to:"胡桃",text:"讨厌",data:"高温、假笑和死亡…讨厌。"},{from:"七七",to:"魈",data:"唔，听起来像老古董…"},{from:"七七",to:"辛焱",data:"是谁？"},{from:"七七",to:"瑶瑶",data:"可爱…像小团雀。"},{from:"香菱",to:"白术",data:"嗯？我闻到了雾虚花的香气！是白先生，白先生来帮你看病了吗？你是哪里不舒服，头晕还是胃疼？还是嗓子痒？还是没力气？哦…没生病。那还好。不然白先生会给你超——苦的药哦，"},{from:"香菱",to:"凝光",data:"哦！刚才那个，是「天权」大人啊…嗯你凑过来点。再，再过来点。我跟你说哦，她可是一个特别厉害的人，港内的事情她什么都知道。所以，你也要小心一点，不要被她盯上了…"},{from:"香菱",to:"胡桃",text:"朋友",data:"唔，你是不是也被胡桃欺负过？她老是趁我不注意躲到我后面，这样突然拍我的后背，得逞了还嘿嘿地笑，哼。但我大人大量，看在她每次都会给我带酿梅花做线花糕的份上，才没跟她斤斤计较。"},{from:"香菱",to:"迪奥娜",data:"清泉镇的迪奥娜！啊啊，听说她能调出持别好喝的酒，我专门拜访过她！想着如果能把调酒的秘方借鉴到料理上，说不定也能做出美味。但是，她给我的秘方，比如啤酒里泡蜥蜴尾巴，蒲公英酒里放小块熏鱼…做出来都不是很好吃。呜，果然还是要靠自己吗？"},{from:"香菱",to:"北斗",data:"北斗姐姐人特别好！跟着她出去航海的话，每次都能捕获到好多新鲜的食材！章鱼脚拿来煲汤最好，海天青就要用辣椒好好炝一炝。不光北斗姐姐，「南十字」的船员们都很喜欢我做的菜呢。"},{from:"香菱",to:"钟离(摩拉克斯)",data:"我遇到过不少挑剔的食客，但像钟离先生那种嘴巴上讲究，还能一针见血的，真的就只有他一个！那天我给他上的第一道菜是「椒盐豆腐」，他只尝了一口，就问我用的是什么盐，然后又说什么不妨试试孤云阁浅海处提炼的海盐吧，它的层次感能够为豆腐赋予更多鲜味」。我试过之后味道真的大有不同。你说，他是不是好厉害！"},{from:"香菱",to:"重云",data:"重云啊，他总是跟着行秋一起来「万民堂」吃饭…呃，或者应该说，是被行秋拖来的？但是重云不吃热食。每次热菜上桌，行秋就会客客气气地说一声「失敬」，然后动起筷子逐一评点起每道菜的美味之处，他那夸得呀，我都想冲过去尝一口！你是没见到重云那种眼神，哈哈哈。还挺有趣的呢，他俩。"},{from:"香菱",to:"甘雨",data:"甘雨？嗯　啊啊有印象有印象，是那位只吃素食的客人吧！她来「万民堂」的次数不算多，每次都是一个人躲在小角落里不吭声地吃着饭。我嘛，看她孤孤单单有些可怜，就总帮她多召两大勺菜，没想到，她每次都能全部吃完！真是不可貌相。"},{from:"香菱",to:"瑶瑶",text:"师姐",data:"嘿嘿，她啊，是我引以为豪的小师妹喔不过呀，她很久没来「万民堂」玩儿了。是大师父放心不下吧　哼，明明生的云来大章鱼那么好吃，瑶瑶上次不光不让我吃，还叫上大师父一起训斥我，呜…有时候真不知道，到底谁才是师姐了"},{from:"香菱",to:"辛焱",data:"辛焱经常来「万民堂」吃夜宵喔！像行秋、重云他们不敢试吃的新品，辛焱就会毫不犹豫地下筷…而且有八成以上的概率喜欢！哎，真是很不错的人呐。"},{from:"重云",to:"钟离(摩拉克斯)",data:"「往生堂」的钟离先生啊，隐约觉得是个厉害角色，凡夫恶党杀人，我们方士除妖，他居然能葬仙人。"},{from:"重云",to:"行秋",text:"朋友",data:"我虽然敬佩行秋的武艺和侠心。但是我一定要事先提醒你，他坏心思也不少。如果真的发生了什么事情，记得回来和我结成受害者同盟啊。"},{from:"重云",to:"魈",data:"降魔大圣和我们方士一派，一暗一明，共守璃月，历史已久，我非常尊敬魈上仙。但是，那位大人居然说…居然说什么驱邪方士量小力微不值一提，我，我绝对不能苟同！"},{from:"重云",to:"胡桃",data:"「往生堂」的手段还是信得过的。但是那副「不用你们方士操心」的嘻嘻笑脸却看着让人火大…呼，冷静冷静。"},{from:"重云",to:"七七",data:"看起来是个僵尸小姑娘，但作为方士我能察觉到…她可不一般。嗯…名字也不见宝诰之中，究竟是哪尊呢…"},{from:"重云",to:"辛焱",data:"我会尽可能避开辛焱演出的区域。那般热闹的气氛，即使无意融入，也难免受其影响…我是说，会让人不自在。"},{from:"重云",to:"香菱",data:"香菱做菜的手艺有口皆碑，但是她那些辛辣烫口的菜品我是绝对不会碰的…没有，没有什么…你看，史莱姆滑蘑菇？这能吃吗？"},{from:"行秋",to:"北斗",data:"北斗阁下是我非常尊重的人。不过希望她不要喊我「小子」，也不要一见面就揉我头发。"},{from:"行秋",to:"凝光",data:"「天权」大人是我不得不尊重的人。不然会给家父以及家兄添麻烦。嗯？对她本人，我想想。嗯…还是算了，不说别人坏话了。"},{from:"行秋",to:"重云",text:"朋友",data:"唉，重云着家伙，虽然也知道我的底细，但真要和他搭档去完成任务还得审慎。他现在还是执着「武」技。却不理解「侠」心得境界，需要多练练。尤其…是吃辣的方面，哈哈。"},{from:"行秋",to:"云堇",data:"云堇啊，她只要喝到满意的饮品，就会有动力去创作新戏。我呢，就一直在床底下囤着一小罐茶叶，就是为了等哪天她兴致索然的时候给她送去。这样我就有听不完的义侠传奇了！"},{from:"行秋",to:"胡桃",data:"那个小姑娘，正是「往生堂」的当代堂主。嗯？问我怎么看待她的为人？…行事作风嘛，坊间传闻是做不了数的。真想了解一个人，还得看她正在想要的是什么。"},{from:"行秋",to:"七七",data:"总感觉七七的身上藏着谜团。但只要白术先生在场，就跟她说不上几句话。除非，我们能找个白术先生外出看诊的机会，专门…"},{from:"行秋",to:"香菱",data:"见到香菱的时候，你可得多观察下她的表情。尤其是刚刚添置完食材回来的香菱，笑得越开心，就越危险。要是被她缠上，逼你试吃新品…这种情况，我一般会靠重云来处理。"},{from:"行秋",to:"辛焱",data:"辛焱到底是在哪里演出的？从吃虎岩到玉京台…唉，能够安静看书的时日是多么宝贵啊。"},{from:"行秋",to:"钟离(摩拉克斯)",data:"我看见过家父和家兄接待过这位先生，就从他们的行礼时候的恭敬态度来看…对方应该是很有地位的人物吧。我还听说他是给仙人办丧事的人感觉很有底蕴要不要一起去挖掘他身上的秘密呢？"},{from:"行秋",to:"阿贝多",text:"合作者",data:"下一卷、下下卷、下下下卷的重要场景，我都已经想好要配怎样的插画了！啊，必须赶快把灵感记下来，修书一封，寄给白垩老师…"},{from:"北斗",to:"凝光",data:"凝光啊，从「璃月七星」的角度上来说已经做得很好了吧。只是，我要负责的对象从来就是我的船和兄弟们，不是什么「璃月七星」啊。"},{from:"北斗",to:"香菱",data:"香菱的一手好菜，可是我们一众人在远航时的念想。没力气的时候，要是想想干煸绝云椒椒那满嘴留香的滋味，都能精神几分。"},{from:"北斗",to:"钟离(摩拉克斯)",data:"你说「往生堂」的那位先生吗？兄弟们有时会聊起他的传言，听上去是个很有意思的人啊。嗯，有机会去结交一下吧。"},{from:"北斗",to:"魈",data:"有一年海灯节前夕，船队在归航时遭遇了风暴，紧赶慢赶才在入夜时分回到了璃月港。那时候，海灯早就散了。我却在孤云阁的方向，看到了空中悬着一个少年模样的仙人。想必就如传闻一样，在人们看不见的地方，也有人在守护这个璃月港吧。"},{from:"凝光",to:"北斗",data:"那位…船长。明明也受到不少人推崇，，却总是带头漠视规则。她缴纳的罚金，都够买一艘崭新的远洋船了吧。"},{from:"凝光",to:"钟离(摩拉克斯)",data:"钟离.「往生堂」口中的这位先生，精通许多旁人不知的事物。但在掌握他的弱点之前，再优秀的棋子，也还不能为我所用:"},{from:"凝光",to:"行秋",data:"飞云商会的二公子，那种性格的人看不惯我，是很自然的，而我也不会去为难他。「道不同不相为谋」，说的就是这个道理。"},{from:"凝光",to:"香菱",data:"「万民堂」的小丫头…总是把对我的猜疑写在脸上。呵，要是让她知道了，这些年来我对「万民堂」的资助…她会露出怎样的表情来呢？"},{from:"凝光",to:"甘雨",data:"即使是甘雨，也不可过度依赖。璃月俗语说「百密终有一疏」。重要事情当前，只有自己亲手处理，亲眼查证，才可放行。"},{from:"凝光",to:"瑶瑶",data:"是在谈论甘雨正帮忙照看着的小姑娘么。呵，不用紧张，此事我并无声张的打算，就当那个船长，总能做一两件聪明事吧。对了，这瑶瑶;近来光顾着吃海产了你得想办法劝劝甘雨，叫她为瑶瑶多补充些瓜果蔬菜才对。"},{from:"凝光",to:"刻晴",text:"同事",data:"[玉衡星」她最近的变化可真不小。璃月究竟更需要曾经的她，还是更需要现在的她呢？可能要多花一些时间，才能判断吧。"},{from:"凝光",to:"琴",data:"蒙德城的代理团长，想必是一位严谨而又细腻的女性吧。且不说她恰如其分的用词，连每张信纸的边缘都折叠得一丝不苟。越是这些容易被人忽视的细节，越能透过它窥见一个人真正的品质。"},{from:"迪卢克",to:"凯亚",text:"义兄",data:"凯亚吗…那个男人说的话，只能信一半"},{from:"迪卢克",to:"丽莎",data:"丽莎，能成为骑士团内最值得仰赖的人之一。如果她愿意的话"},{from:"迪卢克",to:"琴",data:"无意义的琐事，是琴最大的敌人。"},{from:"迪卢克",to:"莫娜",data:"蒙德的土地浸润着风神的恩泽，就不需要赞助占星术士来预测收成了吧。"},{from:"迪卢克",to:"迪奥娜",data:"迪奥娜对我的态度很是生硬，我也一直没找到合适的机会交流。如果是涉及到家族恩怨的话…嗯？不是？只是单纯地讨厌酒？没想到在这蒙德，也会有讨厌酒的酒保啊。"},{from:"迪卢克",to:"法尔伽",data:"大团长法尔伽，我能理解他的立场，却无法认同他的做派。呵…是我多言了。我早已不是西风骑士，忘了我说的话吧"},{from:"罗莎莉亚",to:"迪卢克",data:""},{from:"罗莎莉亚",to:"凯亚",data:""},{from:"罗莎莉亚",to:"温迪",data:""},{from:"罗莎莉亚",to:"芭芭拉",data:""},{from:"罗莎莉亚",to:"琴",data:""},{from:"罗莎莉亚",to:"阿贝多",data:""},{from:"罗莎莉亚",to:"丽莎",data:""},{from:"罗莎莉亚",to:"可莉",data:""},{from:"罗莎莉亚",to:"法尔伽",data:""},{from:"烟绯",to:"七七",data:"听说那个采药姑娘给自己编写了一整套行为准则。瞧她身材娇小，办事却有条有理，实乃成大事之风范。后生可畏，后生可畏呀。就连我也要说一声佩服。"},{from:"烟绯",to:"甘雨",data:"甘雨前辈温柔又贴心，可惜是个大忙人，大好的时光除了午睡，都在案卷堆里埋头苦干。我虽然也有工作时间，但也是快快乐乐的。我选择的工作，那可比她轻松多了。"},{from:"烟绯",to:"行秋",data:"飞云商会是我的老主顾了。他家行事一向慎重周全，与我的商谈通常由大当家亲自出面。不过，上一次却碰巧见到了他家小少爷行秋。这位少爷年纪轻轻，没想到居然跟得上我思考的速度。伶牙俐齿还分寸得当，嗯，真不简单。"},{from:"烟绯",to:"胡桃",data:"常听人说「往生堂」堂主行事奇特，怕是沾了丧葬业的怪毛病。这算什么话？「往生堂」从事的可是正经行业，是构成商业的基本单位。而且工作就是工作，岂有高低贵贱，吉凶险恶之分？不过，那位堂主倒是没怎么来光顾过我的生意，唔…"},{from:"烟绯",to:"钟离",data:"钟离先生学识渊博，堪称行走的书库。你知道吗？我一眼就看出他深藏不露。这样的人大多不怕麻烦，就算遇上什么事也不会请我帮忙，依我看，他绝不是潜在客户。可不知为何，他身上总有些不可思议的熟悉感，我说不上来。问过老爹，他也支支吾吾说什么他也不明白，真是奇怪…总感觉，老爹有什么事不想告诉我。哼，没关系，大不了我自己找机会弄明白…"},{from:"烟绯",to:"凝光",data:"你知道「天权星」凝光小姐吧？她主管律法，也经常修正法典，每次增补删改的内容都多得要命。就在上次，全新的法典里又增加了三条律法，修改了一百二十一条律法注释，还新附了一堆典型判例，这次我又不知道要背到什么时候了…哼，不过她终归是商界出身，论律法，我可不会输给她，等我背完了这些，我一定要更加「努力」地工作…"},{from:"烟绯",to:"刻晴",data:"好在「玉衡星」不涉足专业律法领域。否则，依刻晴小姐的态度和效率，我怕是要失去不少工作。哦…不，好像也不至于。毕竟刻晴小姐为人刚正，容易得罪人，由我来当助手辅佐的话…哦不不，也不对，为什么我堂堂律法专家要当人助手？有事的话，应该是她来找我咨询才对。"},{from:"烟绯",to:"优菈",data:"优菈曾经救过我一次，我们也从此有了书信往来。她牢记骑士团的各项条文，却从不墨守成规。还总能找到巧妙的逻辑，灵活处理问题。大概因为我也是这样的人，所以和她相处会特别轻松吧。不过，她那种洒脱劲，我可就学不会啦。毕竟，我和她的职业可是完全不同呢。"}].map((t=>{const a=d.find((a=>a.name===t.from));let o;if(o=l.get((null==a?void 0:a.name)||""),!o){const t=(null==a?void 0:a.elementAttribute)||"";o=f.get(t||"")}return{color:o,lineWidth:3,lineShape:5,styleClass:"line-class",...t,data:{from:a,to:d.find((a=>a.name===t.to)),text:t.data,relationship:t.text}}}))};function c(t,a,o){return e([a,o],(([a,o])=>{const e=t.value;if(!e)return;const r=e.getNodes(),m=e.getLines();r.forEach((t=>{if("——"===t.data.country)return;const e=!a.includes(t.data.country)||!o.includes(t.data.sex);t.opacity=e?0:1})),m.forEach((t=>{t.relations.forEach((t=>{if("——"===t.data.from.country){const e=!a.includes(t.data.to.country)||!o.includes(t.data.to.sex);return void(t.isHide=e)}const e=!(a.includes(t.data.from.country)&&o.includes(t.data.from.sex)&&a.includes(t.data.to.country)&&o.includes(t.data.to.sex));t.isHide=e}))}))})),{}}const u=["蒙德","璃月","稻妻","须弥","枫丹","纳塔","至冬"],i=["男","女"];var p=r({name:"Home",setup(){const{relationGraph:a,options:e,handleNodeClick:r,handleLineClick:m,currentNode:d,currentRelations:f}=function(){const a=t(),e=t({}),r=t([]);return o((()=>{var t;null==(t=a.value)||t.setJsonData(s)})),{relationGraph:a,options:{allowSwitchLineShape:!0,allowSwitchJunctionPoint:!0,defaultJunctionPoint:"border",layouts:[{label:"自动布局",layoutName:"force"}]},handleNodeClick:(t,a)=>{e.value=t.data},handleLineClick:(t,a)=>{r.value=t.relations.map((t=>t.data))},currentNode:e,currentRelations:r}}(),{checkItems:l,handleCheckItem:p}=n(u),{checkItems:x,handleCheckItem:y}=n(i);return{relationGraph:a,options:e,handleNodeClick:r,handleLineClick:m,currentNode:d,currentRelations:f,...c(a,l,x),checkCountrys:l,handleCheckCountry:p,countrys:u,checkSexes:x,handleCheckSex:y,sexes:i}}});const x={};var y=m(p,(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("el-container",[o("el-header",[o("div",[o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:12}},[o("el-form",{attrs:{"label-width":"80px"}},[o("el-form-item",{attrs:{label:"所属国家"}},[o("el-checkbox-group",{on:{change:t.handleCheckCountry},model:{value:t.checkCountrys,callback:function(a){t.checkCountrys=a},expression:"checkCountrys"}},t._l(t.countrys,(function(a){return o("el-checkbox",{key:a,attrs:{label:a}},[t._v("\n                                    "+t._s(a)+"\n                                ")])})),1)],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-form",{attrs:{"label-width":"80px"}},[o("el-form-item",{attrs:{label:"性别"}},[o("el-checkbox-group",{on:{change:t.handleCheckSex},model:{value:t.checkSexes,callback:function(a){t.checkSexes=a},expression:"checkSexes"}},t._l(t.sexes,(function(a){return o("el-checkbox",{key:a,attrs:{label:a}},[t._v("\n                                    "+t._s(a)+"\n                                ")])})),1)],1)],1)],1)],1)],1)]),t._v(" "),o("el-container",[o("el-aside",{attrs:{width:"20%"}},[o("h3",[t._v("人物信息")]),t._v(" "),o("el-form",{attrs:{"label-width":"80px"}},[o("el-form-item",{attrs:{label:"姓名"}},[o("el-input",{attrs:{readonly:""},model:{value:t.currentNode.name,callback:function(a){t.$set(t.currentNode,"name",a)},expression:"currentNode.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"稀有度"}},[o("el-input",{attrs:{readonly:""},model:{value:t.currentNode.stars,callback:function(a){t.$set(t.currentNode,"stars",a)},expression:"currentNode.stars"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"武器类型"}},[o("el-input",{attrs:{readonly:""},model:{value:t.currentNode.weaponType,callback:function(a){t.$set(t.currentNode,"weaponType",a)},expression:"currentNode.weaponType"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"元素属性"}},[o("el-input",{attrs:{readonly:""},model:{value:t.currentNode.elementAttribute,callback:function(a){t.$set(t.currentNode,"elementAttribute",a)},expression:"currentNode.elementAttribute"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"性别"}},[o("el-input",{attrs:{readonly:""},model:{value:t.currentNode.sex,callback:function(a){t.$set(t.currentNode,"sex",a)},expression:"currentNode.sex"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"国家"}},[o("el-input",{attrs:{readonly:""},model:{value:t.currentNode.country,callback:function(a){t.$set(t.currentNode,"country",a)},expression:"currentNode.country"}})],1)],1),t._v(" "),o("h3",[t._v("关系信息")]),t._v(" "),t.currentRelations.length?t._l(t.currentRelations,(function(a){return o("div",{key:a.text},[o("el-form",{attrs:{"label-width":"80px"}},[o("el-form-item",{attrs:{label:"来自"}},[o("el-input",{attrs:{readonly:""},model:{value:a.from.name,callback:function(o){t.$set(a.from,"name",o)},expression:"item.from.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"对方"}},[o("el-input",{attrs:{readonly:""},model:{value:a.to.name,callback:function(o){t.$set(a.to,"name",o)},expression:"item.to.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"关系"}},[o("el-input",{attrs:{readonly:""},model:{value:a.relationship,callback:function(o){t.$set(a,"relationship",o)},expression:"item.relationship"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"关系语音"}},[o("el-input",{attrs:{type:"textarea",autosize:"",readonly:""},model:{value:a.text,callback:function(o){t.$set(a,"text",o)},expression:"item.text"}})],1)],1)],1)})):t._e()],2),t._v(" "),o("el-main",[o("RelationGraph",{ref:"relationGraph",attrs:{options:t.options,"on-node-click":t.handleNodeClick,"on-line-click":t.handleLineClick}})],1)],1)],1)}),[],!1,(function(t){for(let a in x)this[a]=x[a]}),"0d0269ba",null,null).exports;export default y;
