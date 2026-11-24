const PLACES=[
  {
    "id": "shinnyodo",
    "name": "真如堂",
    "jp": "真正極楽寺・真如堂",
    "area": "洛东",
    "date": "11/30",
    "image": "shinnyodo",
    "tags": [
      "三重塔",
      "红叶参道",
      "落叶"
    ],
    "stay": "60–90 分钟",
    "arrival": "09:00–11:00",
    "fee": "境内 ¥500 · 本堂/书院另 ¥500",
    "hours": "境内08:30–16:30收费 · 室内09:00–16:00，15:45停止受付",
    "booking": "现场购票",
    "route": "总门 → 三重塔 → 本堂周边 → 涅槃之庭 / 随缘之庭",
    "photo": "三重塔与枫枝 · 参道纵深 · 苔地落叶",
    "crowd": "主参道、塔前人多",
    "next": "天授庵 → 清水寺夜间",
    "note": "11/16官网公告：11/18–12/7境内入山¥500，本堂/书院另¥500。禁止三脚架、一脚架与拍摄会；普通日间未见新增预约要求。",
    "url": "https://shin-nyo-do.jp/info/",
    "lat": 35.0293,
    "lng": 135.7897
  },
  {
    "id": "kiyomizu",
    "name": "清水寺",
    "jp": "清水寺 秋の夜間特別拝観",
    "area": "东山",
    "date": "11/30",
    "image": "kiyomizu",
    "tags": [
      "夜枫",
      "舞台",
      "蓝色光束"
    ],
    "stay": "90–120 分钟",
    "arrival": "17:00 到参道上段",
    "fee": "成人 ¥500",
    "hours": "17:30–21:00 受付 · 21:30 闭门",
    "booking": "无需预约",
    "route": "仁王门 → 本堂舞台 → 奥之院方向 → 红叶谷",
    "photo": "舞台全景 · 红叶谷 · 京都夜景",
    "crowd": "预留 30–60 分钟排队",
    "next": "二三年坂 · 祇园",
    "note": "11/30 为秋季夜间参拜最后一晚。",
    "url": "https://www.kiyomizudera.or.jp/event/yakan.php",
    "lat": 34.9949,
    "lng": 135.785
  },
  {
    "id": "houkyoin",
    "name": "宝筐院",
    "jp": "宝筐院・ほうきょういん",
    "area": "岚山",
    "date": "12/01",
    "image": "houkyoin",
    "tags": [
      "石径",
      "苔庭",
      "红叶地毯"
    ],
    "stay": "45–60 分钟",
    "arrival": "10:40前后；常寂光寺之后",
    "fee": "成人 ¥500",
    "hours": "12 月 09:00–16:00 受付",
    "booking": "现场购票",
    "route": "山门 → 石径 → 庭园参拜道",
    "photo": "石径纵深 · 苔地落叶 · 红黄枫叶",
    "crowd": "院落小、通道窄",
    "next": "常寂光寺 · 清凉寺",
    "note": "12月16:00停止受付。禁止携带三脚架、一脚架，不接待专门摄影目的的入寺；参拜为主、拍照听从现场要求。",
    "url": "https://www.houkyouin.jp/contents/info.html",
    "lat": 35.0239,
    "lng": 135.6737
  },
  {
    "id": "jojakkoji",
    "name": "常寂光寺",
    "jp": "常寂光寺・じょうじゃっこうじ",
    "area": "岚山",
    "date": "12/01",
    "image": "jojakkoji2",
    "tags": [
      "石阶",
      "仁王门",
      "多宝塔"
    ],
    "stay": "60–75分钟",
    "arrival": "09:00；12/1先看此处",
    "fee": "成人 ¥600",
    "hours": "09:00–17:00 · 16:30 停止受付",
    "booking": "官网明确普通参拜无需预约",
    "route": "山门 → 仁王门 → 石阶 → 本堂外观 → 多宝塔外观与庭园",
    "photo": "红叶石阶 · 多宝塔 · 屋檐框景",
    "crowd": "石阶、门洞易拥堵",
    "next": "宝筐院 → JR嵯峨岚山 → JR马堀",
    "note": "官网11/22更新称多宝塔周边颜色好，预计下个周末趋于盛期。本堂/书院特别开放11/30结束；12/1不安排进入。禁止携带三脚架、一脚架。",
    "url": "https://jojakko-ji.or.jp/access/",
    "lat": 35.0196,
    "lng": 135.6704
  },
  {
    "id": "tenjuan",
    "name": "天授庵",
    "jp": "南禅寺塔頭 天授庵",
    "area": "洛东",
    "date": "11/30",
    "image": "tenjuan",
    "tags": [
      "枯山水",
      "池泉庭",
      "倒影"
    ],
    "stay": "60–75 分钟",
    "arrival": "13:15–13:30；若寄存延误则缩短或回12/2补位",
    "fee": "成人 ¥500",
    "hours": "09:00–16:30（本次冬季时段）",
    "booking": "日间现场购票",
    "route": "白砂枯山水庭 → 池泉回游庭",
    "photo": "白砂与石径 · 池面倒影 · 枫叶侧光",
    "crowd": "池边通道狭窄",
    "next": "真如堂 → 天授庵 → 清水寺夜间",
    "note": "11/16已见頃，提前两天至11/30。与南禅寺三门、方丈分别收费；普通日间未见新增预约要求。",
    "url": "https://www.kyoto-kankou.or.jp/info_search/173",
    "lat": 35.0108,
    "lng": 135.7927
  },
  {
    "id": "eikando",
    "name": "永观堂",
    "jp": "永観堂 禅林寺",
    "area": "洛东",
    "date": "12/02",
    "image": "eikando2",
    "tags": [
      "放生池",
      "回廊",
      "红叶海"
    ],
    "stay": "120–150 分钟",
    "arrival": "08:40–08:50到普通场入口；09:00开放",
    "fee": "日间 ¥1,500 · 夜间另 ¥1,000",
    "hours": "日间 09:00–16:00 受付 · 夜间 17:30–20:30 受付",
    "booking": "日间、夜间均无预售 · 当日窗口购票 · 昼夜分场",
    "route": "开放的诸堂 → 放生池 → 视当日开放情况到多宝塔区域；卧龙廊、千佛堂不列入",
    "photo": "池面倒影 · 桥与枫树 · 多宝塔",
    "crowd": "放生池、夜场入口人多",
    "next": "南禅寺 · 冈崎",
    "note": "11/11–12/6卧龙廊停止通行、千佛堂关闭；多宝塔可能关闭。带鞋袋；普通日、夜场当日分别购票。08:00早朝为另一预约产品，未预订。",
    "url": "https://www.eikando.or.jp/haikan.html",
    "lat": 35.0149,
    "lng": 135.7948
  },
  {
    "id": "rurikoin",
    "name": "瑠璃光院",
    "jp": "八瀬 瑠璃光院",
    "area": "洛北",
    "date": "12/03",
    "image": "rurikoin",
    "tags": [
      "镜面红叶",
      "瑠璃之庭",
      "书院"
    ],
    "stay": "75–90 分钟",
    "arrival": "09:30 到八濑",
    "fee": "成人 ¥2,000 · 当天现金支付",
    "hours": "10:00–17:00 · 16:30 停止受付",
    "booking": "需预约 · 12/03 10:00 · 2 位；11/13–12/6 为预约期",
    "route": "山门 → 书院 → 瑠璃之庭 → 臥龙之庭",
    "photo": "桌面反射 · 窗框 · 苔庭",
    "crowd": "镜面机位需轮流",
    "next": "莲华寺 → 圆光寺",
    "note": "预约成功后，入场时出示确认邮件。",
    "url": "https://rurikoin.komyoji.com/",
    "lat": 35.0658,
    "lng": 135.8076
  },
  {
    "id": "rengeji",
    "name": "莲华寺",
    "jp": "蓮華寺・左京区上高野",
    "area": "洛北",
    "date": "12/03",
    "image": "rengeji",
    "tags": [
      "书院框景",
      "池泉庭",
      "石灯笼"
    ],
    "stay": "45–60 分钟",
    "arrival": "09:00 或 12:00",
    "fee": "成人 ¥500",
    "hours": "09:00–17:00",
    "booking": "普通个人未见须预约要求；临时法事以现场为准",
    "route": "参道 → 书院 → 池庭观赏",
    "photo": "木柱框景 · 水面与枫树 · 石灯笼",
    "crowd": "书院坐席有限",
    "next": "瑠璃光院 · 圆光寺",
    "note": "导航：左京区上高野八幡町；勿选同名寺院。",
    "url": "https://www.kyoto-kankou.or.jp/info_search/236",
    "lat": 35.0582,
    "lng": 135.8001
  },
  {
    "id": "enkoji",
    "name": "圆光寺",
    "jp": "瑞巌山 圓光寺",
    "area": "洛北",
    "date": "12/03",
    "image": "enko_official_autumn",
    "tags": [
      "十牛之庭",
      "苔庭",
      "奔龙庭"
    ],
    "stay": "约 60 分钟",
    "arrival": "14:40",
    "fee": "成人 ¥1,500",
    "hours": "09:00–17:00",
    "booking": "需预约 · 12/03 15:00 · 2 位；11/10–12/10 为预约期",
    "route": "奔龙庭 → 十牛之庭 → 水琴窟 → 竹林",
    "photo": "书院框景 · 苔地落叶 · 石组",
    "crowd": "书院正中机位人多",
    "next": "一乘寺 · 莲华寺",
    "note": "出示确认邮件；停留约 1 小时，禁止长时间摄影。",
    "url": "https://www.enkouji.jp/news/",
    "lat": 35.0446,
    "lng": 135.7958
  },
  {
    "id": "tofukuji",
    "name": "东福寺",
    "jp": "東福寺 通天橋・本坊庭園",
    "area": "京都南部",
    "date": "12/04",
    "image": "tofukuji2",
    "tags": [
      "通天桥",
      "红叶谷",
      "八相之庭"
    ],
    "stay": "120–150 分钟",
    "arrival": "08:10–08:20",
    "fee": "通天桥 ¥1,000 · 本坊另 ¥600",
    "hours": "通天桥 08:30 起 · 本坊 09:00 起 · 16:00 停止受付",
    "booking": "日间现场购票；早朝/夜间专场另需预约",
    "route": "通天桥 → 开山堂 → 本坊庭园",
    "photo": "桥与红叶谷 · 苔庭几何 · 树干层次",
    "crowd": "旺季桥上可能限拍、禁停",
    "next": "京都站 · 伏见稻荷",
    "note": "秋季无共通票；两处分别购票。",
    "url": "https://tofukuji.jp/guide/",
    "lat": 34.9769,
    "lng": 135.7738
  },
  {
    "id": "sagano",
    "name": "岚山小火车",
    "jp": "嵯峨野观光铁道・普通单程票",
    "area": "岚山",
    "date": "12/02",
    "image": "sagano",
    "tags": [
      "保津峡",
      "指定席",
      "龟冈上车"
    ],
    "stay": "约25–35分钟，按车次",
    "arrival": "建议发车前30分钟到小火车龟冈站",
    "fee": "成人普通票 ¥880/人",
    "hours": "12/2 · 发车时刻与下车站见电子票",
    "booking": "12/2乘车计划",
    "route": "JR马堀站 → 小火车龟冈站 → 保津峡 → 嵯峨／岚山方向",
    "photo": "河谷 · 铁桥 · 车窗红叶",
    "crowd": "全车指定席，座位见电子票",
    "next": "嵯峨野 · JR嵯峨岚山站",
    "note": "普通单程指定席票。PDF凭证可查须知，进闸时出示带二维码的电子票。",
    "url": "https://www.sagano-kanko.co.jp/ticket/",
    "lat": 35.0106,
    "lng": 135.6058
  }
];
const DAYS=[
  {
    "date": "11.28",
    "week": "周六",
    "area": "抵达大阪",
    "title": "上海 → 大阪",
    "sub": "PVG 17:50 → KIX 20:55",
    "map": "arrive",
    "walk": "晚间抵达",
    "places": [],
    "route": [
      "关西机场",
      "大阪入住"
    ],
    "access": "KIX → 难波：南海约 35–50 分钟；KIX → 大阪站：JR约 65–80 分钟。",
    "events": [
      [
        "20:55",
        "抵达关西机场",
        "入境 · 取行李 · 海关"
      ],
      [
        "22:00",
        "机场铁路",
        "难波：南海｜梅田 / 天王寺：JR"
      ],
      [
        "23:00",
        "酒店入住",
        "提前告知晚到，确认夜间入口"
      ]
    ],
    "food": "机场简餐 · 酒店附近便利店",
    "rain": "机场铁路 → 酒店，缩短室外步行",
    "alt": "错过末班：机场 / 临空城住宿，通知原酒店",
    "flight": "in"
  },
  {
    "date": "11.29",
    "week": "周日",
    "area": "大阪",
    "title": "城郭、银杏与道顿堀",
    "sub": "大阪城公园 → 梅田 → 难波",
    "map": "osaka",
    "walk": "约 5–7 km",
    "places": [],
    "route": [
      "大阪城",
      "梅田",
      "道顿堀"
    ],
    "access": "公园 → 梅田：铁路及步行约 25–40 分钟；梅田 → 难波：御堂筋线约 10 分钟。",
    "events": [
      [
        "09:00",
        "大阪城公园",
        "护城河 · 天守阁外观 · 银杏"
      ],
      [
        "11:15",
        "前往梅田",
        "铁路＋步行约 25–40 分钟"
      ],
      [
        "12:00",
        "梅田午餐",
        "商场 · 咖啡休息"
      ],
      [
        "16:00",
        "前往难波",
        "御堂筋线，含步行预留 25–40 分钟"
      ],
      [
        "17:00",
        "道顿堀",
        "晚餐 · 河边夜景"
      ],
      [
        "20:00",
        "返回酒店",
        "整理次日行李"
      ]
    ],
    "food": "午餐：梅田｜晚餐：难波侧街",
    "rain": "梅田商场 · 咖啡 · 餐饮",
    "alt": "道顿堀拥挤：转难波侧街",
    "image": "osaka"
  },
  {
    "date": "11.30",
    "week": "周一",
    "area": "洛东 · 东山",
    "title": "真如堂、天授庵与清水寺夜枫",
    "sub": "大阪 → 国际会馆寄存 → 真如堂 → 天授庵 → 清水寺",
    "map": "d3",
    "walk": "约6–9km · 寺院间打车",
    "places": [
      "shinnyodo",
      "tenjuan",
      "kiyomizu"
    ],
    "route": [
      "酒店寄存",
      "真如堂",
      "天授庵",
      "清水寺夜间"
    ],
    "access": "大阪 → 京都：JR新快速约30分钟；京都 → 国际会馆：乌丸线约20–25分钟。寄存后打车至真如堂约20–35分钟；真如堂 → 天授庵打车约10–20分钟，步行约30–40分钟。天授庵 → 清水道/五条坂打车约20–40分钟，另步行上坡15–25分钟，拥堵须加余量。",
    "events": [
      [
        "07:45",
        "大阪退房",
        "铁路前往京都，今天保留行李寄存时间"
      ],
      [
        "10:15",
        "国际会馆附近酒店",
        "寄存行李；不把上午排成已在京都住宿的节奏"
      ],
      [
        "11:00",
        "真如堂",
        "三重塔 · 红叶参道；约60–75分钟，本堂/书院可选",
        "shinnyodo"
      ],
      [
        "12:15",
        "午餐 · 休息",
        "白川通/丸太町或冈崎周边，约45分钟；以接驳顺路的小店为主"
      ],
      [
        "13:00",
        "接驳至天授庵",
        "真如堂周边打车约10–20分钟；叫车、落客及步行合计预留30分钟"
      ],
      [
        "13:30",
        "天授庵",
        "枯山水 → 池泉庭；约60分钟，较原12/2提前两天",
        "tenjuan",
        "提前看早红庭园"
      ],
      [
        "14:30",
        "前往清水寺周边",
        "打车到清水道/五条坂，约20–40分钟；步行上坡15–25分钟，晚高峰另留余量"
      ],
      [
        "15:30",
        "东山茶休 · 早晚餐",
        "休息60–90分钟；二三年坂只顺路短走，不安排长时间逛店"
      ],
      [
        "17:15",
        "清水寺参道上段",
        "准备购票与排队；夜间无需预约"
      ],
      [
        "17:30",
        "清水寺夜间参拜",
        "舞台 · 奥之院方向 · 红叶谷；21:00停止受付、21:30闭门",
        "kiyomizu",
        "秋季夜场最后一晚"
      ],
      [
        "19:30",
        "返回国际会馆",
        "下山后按体力选出租车，或接驳至五条站换乌丸线"
      ]
    ],
    "food": "白川通/丸太町或冈崎午餐；15:30起在清水寺周边茶休、早晚餐。",
    "rain": "小雨保留庭园与夜枫；减少东山街道步行。强雨或明显交通延误，天授庵转为12/2补位，不压缩清水寺末场余量。",
    "alt": "优先保留真如堂与清水寺末场；寄存若迟于11:00，缩短真如堂室内或将天授庵移回12/2。提前天授庵是依据已见頃的进度判断，并非保证11/30仍盛红。"
  },
  {
    "date": "12.01",
    "week": "周二",
    "area": "岚山 · 嵯峨野",
    "title": "常寂光寺、宝筐院与嵯峨野",
    "sub": "常寂光寺 → 宝筐院 → 清凉寺门前 → 嵯峨野散步",
    "map": "d4",
    "walk": "约5–8 km",
    "places": [
      "jojakkoji",
      "houkyoin"
    ],
    "route": [
      "JR嵯峨岚山",
      "常寂光寺",
      "宝筐院",
      "JR嵯峨岚山"
    ],
    "access": "国际会馆 → 京都站换JR嵯峨野线 → JR嵯峨岚山站。步行约15–20分钟至常寂光寺。",
    "events": [
      [
        "07:15",
        "国际会馆出发",
        "乌丸线 → 京都站 → JR嵯峨野线；全段预留80–100分钟"
      ],
      [
        "09:00",
        "常寂光寺",
        "先看已进入见頃的庭园；仁王门、石阶、多宝塔外观；60–75分钟；本堂书院特别开放已结束",
        "jojakkoji"
      ],
      [
        "10:15",
        "步行至宝筐院",
        "约15–20分钟，途中留5–10分钟余量"
      ],
      [
        "10:40",
        "宝筐院",
        "庭园与苔地落叶；45–60分钟，以参拜为主",
        "houkyoin"
      ],
      [
        "11:40",
        "嵯峨野午餐",
        "清凉寺门前 / JR嵯峨岚山周边；午餐与休息约45–50分钟"
      ],
      [
        "13:00",
        "嵯峨野散步",
        "按叶况选清凉寺门前或渡月桥，也可在站前茶休。"
      ],
      [
        "15:30前后",
        "返回国际会馆",
        "JR嵯峨岚山站 → 京都站换乌丸线。"
      ]
    ],
    "food": "清凉寺门前或JR嵯峨岚山站周边午餐，下午茶休灵活安排。",
    "rain": "湿石阶减速，午餐后可在站前室内休息。",
    "alt": "优先看常寂光寺多宝塔周边与宝筐院庭园深处。小火车见12/2。"
  },
  {
    "date": "12.02",
    "week": "周三",
    "area": "洛东 · 保津峡",
    "title": "永观堂与保津峡小火车",
    "sub": "永观堂与小火车按发车时间衔接",
    "map": "d5",
    "walk": "约4–7 km",
    "places": [
      "eikando",
      "sagano"
    ],
    "route": [
      "永观堂",
      "京都站",
      "JR马堀",
      "小火车龟冈站",
      "嵯峨／岚山方向"
    ],
    "access": "永观堂从国际会馆乘乌丸线经乌丸御池换东西线至蹴上。小火车从京都站换JR嵯峨野线普通车至马堀，步行约10–15分钟至小火车龟冈站。",
    "events": [
      [
        "出发前",
        "核对电子票",
        "以电子票确定车次、发车时刻和下车站，再安排当天两段路线。"
      ],
      [
        "09:00或下午",
        "永观堂普通场",
        "若小火车为下午班，永观堂可09:00先入园。若是上午班，永观堂改下午，普通场受付至16:00。",
        "eikando"
      ],
      [
        "发车前约90分钟",
        "接驳小火车龟冈站",
        "建议从京都站方向出发，搭JR普通车至马堀。若从永观堂出发，额外预留15–30分钟。"
      ],
      [
        "发车前30分钟",
        "小火车龟冈站",
        "从JR马堀站下车后步行约10–15分钟，备好二维码电子票。"
      ],
      [
        "以电子票为准",
        "岚山小火车",
        "龟冈上车，往嵯峨／岚山方向。",
        "sagano",
        "普通单程指定席"
      ],
      [
        "下车后",
        "嵯峨野／返回京都",
        "按下车站导航到JR嵯峨岚山站，乘JR至京都站换乌丸线。"
      ]
    ],
    "food": "永观堂道或京都站午餐，按乘车时间调整。",
    "rain": "优先保证车站接驳时间，雨天可缩短室外停留。",
    "alt": "南禅寺、冈崎与永观堂夜枫视乘车时间安排。日间09:00开始，夜场17:30开始并另购票。"
  },
  {
    "date": "12.03",
    "week": "周四",
    "area": "八濑 · 一乘寺",
    "title": "洛北三座庭园",
    "sub": "瑠璃光院 → 莲华寺 → 圆光寺",
    "map": "d6",
    "walk": "约 4–6 km",
    "places": [
      "rurikoin",
      "rengeji",
      "enkoji"
    ],
    "route": [
      "瑠璃光院",
      "莲华寺",
      "圆光寺"
    ],
    "access": "国际会馆 → 京都巴士19等 → 八濑駅前，车程约15–25分钟；下车步行5–10分钟至瑠璃光院。",
    "events": [
      [
        "08:50",
        "国际会馆出发",
        "京都巴士19等 / 出租车"
      ],
      [
        "09:30",
        "八濑",
        "提前到达，核对预约邮件"
      ],
      [
        "10:00",
        "瑠璃光院",
        "镜面红叶 · 瑠璃之庭；75–90 分钟",
        "rurikoin",
        "需预约 · 2 位"
      ],
      [
        "11:20",
        "前往莲华寺",
        "步行约25–35分钟 / 出租车5–10分钟"
      ],
      [
        "12:00",
        "莲华寺",
        "书院框景 · 池泉庭；45–60 分钟",
        "rengeji"
      ],
      [
        "12:50",
        "一乘寺午餐",
        "三宅八幡 → 叡山电车 → 一乘寺"
      ],
      [
        "14:40",
        "到达圆光寺",
        "一乘寺站步行约15–20分钟，上坡"
      ],
      [
        "15:00",
        "圆光寺",
        "十牛之庭 · 奔龙庭；约60分钟",
        "enkoji",
        "需预约 · 2 位"
      ],
      [
        "16:00",
        "一乘寺休息 / 晚餐",
        "出租车回国际会馆约15–25分钟"
      ]
    ],
    "food": "修学院站 · 一乘寺站周边",
    "rain": "保留两场预约，寺院之间短途出租车",
    "alt": "午餐前置，交通延误时缩短莲华寺停留"
  },
  {
    "date": "12.04",
    "week": "周五",
    "area": "京都南部",
    "title": "东福寺通天桥与京都南部",
    "sub": "东福寺 → 京都站 → 补位 / 休息",
    "map": "d7",
    "walk": "约 4–7 km",
    "places": [
      "tofukuji"
    ],
    "route": [
      "东福寺",
      "京都站",
      "下午自由"
    ],
    "access": "国际会馆 → 京都站 → JR奈良线普通车 → 东福寺站 → 步行10–15分钟。全段预留65–80分钟。",
    "events": [
      [
        "07:00",
        "国际会馆出发",
        "乌丸线 → 京都站 → JR奈良线"
      ],
      [
        "08:15",
        "东福寺入口",
        "提前排队"
      ],
      [
        "08:30",
        "通天桥 · 开山堂",
        "红叶谷；约90分钟",
        "tofukuji"
      ],
      [
        "10:00",
        "本坊庭园",
        "可选；约40–50分钟",
        "tofukuji"
      ],
      [
        "11:30",
        "京都站午餐",
        "Porta · 伊势丹 · 站南侧"
      ],
      [
        "12:30",
        "下午自由",
        "真如堂 / 永观堂回访，或伏见稻荷下段"
      ],
      [
        "16:00",
        "返回酒店",
        "整理行李 · 确认HARUKA与航站楼"
      ]
    ],
    "food": "京都站 Porta · 伊势丹 · 站南侧",
    "rain": "本坊庭园 → 京都站室内休息",
    "alt": "下午只补一处；16:00返回酒店整理行李、确认次日机场交通。12/4通天桥08:30开放，本坊09:00开放；本行程为普通日间参拜，未预订早朝或夜间专场。"
  },
  {
    "date": "12.05",
    "week": "周六",
    "area": "返程",
    "title": "京都 → 关西机场 → 上海",
    "sub": "KIX 13:45 → PVG 15:15",
    "map": "return",
    "walk": "目标 10:30 前后到机场",
    "places": [],
    "route": [
      "国际会馆",
      "京都站",
      "关西机场"
    ],
    "access": "国际会馆 → 乌丸线京都站 → HARUKA → 关西机场。酒店至航站楼预留约2.5–3小时。",
    "events": [
      [
        "07:15",
        "早餐 · 退房",
        "护照 · 行李 · 机票"
      ],
      [
        "07:45",
        "乌丸线 → 京都站",
        "约20–25分钟"
      ],
      [
        "08:20",
        "京都站换乘",
        "预留25–35分钟"
      ],
      [
        "08:30–09:00",
        "HARUKA 出发窗口",
        "铁路约80–95分钟；车次待选"
      ],
      [
        "10:30",
        "关西机场",
        "值机 · 托运 · 安检 · 出境"
      ],
      [
        "13:45",
        "飞往上海",
        "15:15 抵达 PVG"
      ]
    ],
    "food": "酒店早餐 · 机场用餐",
    "rain": "优先铁路，提前出发",
    "alt": "如从T2出发，额外预留30–45分钟接驳",
    "flight": "out"
  }
];
const CREDITS=[
  {
    "key": "sagano",
    "name": "Streetdeck",
    "license": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File:Sagano_Romantic_Train.jpg",
    "title": "岚山小火车"
  },
  {
    "key": "enkoji",
    "name": "Oilstreet",
    "license": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File:Enk%C5%8D-ji_in_Kyoto_Japan04-r.jpg",
    "title": "圆光寺书院"
  },
  {
    "key": "osaka",
    "name": "Mc681",
    "license": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File:Osaka_Castle_Keep_Tower_in_201411_001.JPG",
    "title": "大阪城"
  },
  {
    "key": "shinnyodo",
    "name": "lumoplank",
    "license": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File:Shinnyodo,_Kyoto_-_Shinnyodo7781.jpg",
    "title": "真如堂"
  },
  {
    "key": "houkyoin",
    "name": "Yanajin33",
    "license": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File:Le_Temple_H%C3%B4ky%C3%B4-in_-_La_porte_de_l%27entr%C3%A9e.jpg",
    "title": "宝筐院"
  },
  {
    "key": "tenjuan",
    "name": "mrhayata",
    "license": "CC BY-SA 2.0",
    "url": "https://commons.wikimedia.org/wiki/File:Autumn_leaves,_Tenjuan,_Kyoto_-_Nov_23,_2012.jpg",
    "title": "天授庵"
  },
  {
    "key": "rengeji",
    "name": "user:KMR",
    "license": "CC BY-SA 3.0",
    "url": "https://commons.wikimedia.org/wiki/File:PB230890_2008Nov23.jpg",
    "title": "莲华寺"
  },
  {
    "key": "kiyomizu",
    "name": "lumoplank",
    "license": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File:Kiyomizu-dera_autumn_night.jpg",
    "title": "清水寺 · 最后一晚夜枫"
  },
  {
    "key": "eikando2",
    "name": "lumoplank",
    "license": "CC0",
    "url": "https://commons.wikimedia.org/wiki/File:Eikando,_Kyoto_-_Eikando7376.jpg",
    "title": "永观堂"
  },
  {
    "key": "tofukuji2",
    "name": "Luka Peternel",
    "license": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File:Tofukuji-bridge-autumn-2017-Luka-Peternel.jpg",
    "title": "东福寺"
  },
  {
    "key": "rurikoin",
    "name": "Luka Peternel",
    "license": "CC BY-SA 4.0",
    "url": "https://commons.wikimedia.org/wiki/File:Rurikoin-autumn-reflection-2019-Luka-Peternel.jpg",
    "title": "瑠璃光院"
  },
  {
    "key": "enko_official_autumn",
    "name": "圓光寺（官方图片）",
    "license": "官方版权图片",
    "url": "https://www.enkouji.jp/season/",
    "title": "圆光寺"
  },
  {
    "key": "jojakkoji2",
    "name": "663highland",
    "license": "CC BY 2.5",
    "url": "https://commons.wikimedia.org/wiki/File:Jojakkoji_Kyoto04s3s4440.jpg",
    "title": "常寂光寺"
  },
  {
    "key": "hou_detail",
    "name": "宝筐院（官方图片）",
    "license": "官方版权图片",
    "url": "https://www.houkyouin.jp/photo_gallery/album.cgi?pg=18",
    "title": "宝筐院庭园"
  }
];
const RESERVATION_AUDIT=[
  {
    "name": "瑠璃光院",
    "date": "12/03 10:00",
    "status": "需预约 · 2位",
    "detail": "参考费用：两人 ¥4,000；出示确认邮件",
    "url": "https://rurikoin.komyoji.com/"
  },
  {
    "name": "圆光寺",
    "date": "12/03 15:00",
    "status": "需预约 · 2位",
    "detail": "确认邮件入场；成人 ¥1,500/人",
    "url": "https://www.enkouji.jp/news/"
  },
  {
    "name": "岚山小火车 · 普通单程",
    "date": "12/02",
    "status": "12/2乘车计划",
    "detail": "龟冈站上车，发车时间、车次、座位及下车站见电子票。",
    "url": "https://www.sagano-kanko.co.jp/ticket/"
  },
  {
    "name": "清水寺夜间参拜",
    "date": "11/30 17:30",
    "status": "无需预约",
    "detail": "秋季夜场最后一晚；21:00停止受付，21:30闭门",
    "url": "https://www.kiyomizudera.or.jp/event/yakan.php"
  },
  {
    "name": "永观堂 · 日间/夜间",
    "date": "12/02 09:00",
    "status": "当日窗口购票",
    "detail": "普通日夜场当日购票、分场；卧龙廊/千佛堂关闭；08:00早朝另需预约",
    "url": "https://www.eikando.or.jp/English/haikan_e.html"
  },
  {
    "name": "东福寺 · 普通日间",
    "date": "12/04 08:30",
    "status": "现场购票",
    "detail": "通天桥与本坊分开购票；早朝/夜间专场需另订",
    "url": "https://tofukuji.jp/guide/"
  },
  {
    "name": "真如堂",
    "date": "11/30",
    "status": "现场购票",
    "detail": "11/18–12/7入山¥500；本堂/书院另¥500，普通日间未见新增预约要求",
    "url": "https://shin-nyo-do.jp/"
  },
  {
    "name": "天授庵",
    "date": "11/30 13:30",
    "status": "普通日间现场购票",
    "detail": "冬季至16:30；已见頃，提前两天；未见个人预约要求",
    "url": "https://www.kyoto-kankou.or.jp/info_search/173"
  },
  {
    "name": "宝筐院",
    "date": "12/01 10:40",
    "status": "现场购票",
    "detail": "12月16:00停止受付；禁止携带三脚架/一脚架，不接待专门摄影目的入寺",
    "url": "https://www.houkyouin.jp/contents/info.html"
  },
  {
    "name": "常寂光寺",
    "date": "12/01 09:00",
    "status": "无需预约",
    "detail": "普通参拜无需预约；本堂/书院特开11/30结束，12/1看庭园与建筑外观",
    "url": "https://jojakko-ji.or.jp/faq/"
  },
  {
    "name": "莲华寺",
    "date": "12/03",
    "status": "现场购票",
    "detail": "普通个人未见须预约；09:00–17:00、¥500；未查到本次日期的新闭门公告",
    "url": "https://www.kyoto-kankou.or.jp/info_search/236"
  },
  {
    "name": "东福寺 · 早朝/夜间专场",
    "date": "可选",
    "status": "另需预约",
    "detail": "现行程未加入；通过JR东海EX旅先预约办理",
    "url": "https://tofukuji.jp/special_event/night_viewing_2025/"
  },
  {
    "name": "HARUKA 京都→关西机场",
    "date": "12/05 早上",
    "status": "建议提前购票选座",
    "detail": "尚未购票；车次待定，目标10:30前后到机场",
    "url": "https://www.westjr.co.jp/travel-information/en/tickets-passes/oneway/haruka/"
  },
  {
    "name": "永观堂 · 早朝专场",
    "date": "可选12/02 08:00",
    "status": "需预约 · 未预订",
    "detail": "08:00–09:00，08:30停止受付，¥2,300/人；EX会员产品，余位以产品页为准",
    "url": "https://souda-kyoto.jp/plan/autumn_sp/index.html"
  },
  {
    "name": "真如堂 · 夜间专场",
    "date": "可选",
    "status": "需预约 · 未预订",
    "detail": "11/18–12/8，17:30–19:30，¥1,200/人；11/30不与清水寺末场叠加",
    "url": "https://souda-kyoto.jp/plan/autumn_sp/index.html"
  },
  {
    "name": "南禅寺 · 普通日间",
    "date": "12/02 13:00",
    "status": "现场购票",
    "detail": "12月16:10停止受付；方丈、三门各¥600；南禅院/法堂内阵特开已结束",
    "url": "https://www.nanzenji.or.jp/about_rinzaishu/visit"
  }
];
