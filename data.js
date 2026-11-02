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
    "hours": "09:00–16:00 · 15:45 停止受付",
    "booking": "现场购票",
    "route": "总门 → 三重塔 → 本堂周边 → 涅槃之庭 / 随缘之庭",
    "photo": "三重塔与枫枝 · 参道纵深 · 苔地落叶",
    "crowd": "主参道、塔前人多",
    "next": "祇园 → 清水寺",
    "note": "禁止三脚架、一脚架、拍摄会。",
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
    "date": "12/04",
    "image": "houkyoin",
    "tags": [
      "石径",
      "苔庭",
      "红叶地毯"
    ],
    "stay": "45–60 分钟",
    "arrival": "09:00",
    "fee": "成人 ¥500",
    "hours": "12 月 09:00–16:00 受付",
    "booking": "现场购票",
    "route": "山门 → 石径 → 庭园参拜道",
    "photo": "石径纵深 · 苔地落叶 · 红黄枫叶",
    "crowd": "院落小、通道窄",
    "next": "常寂光寺 · 清凉寺",
    "note": "禁止携带三脚架、一脚架；不接受以摄影为目的的入寺。",
    "url": "https://www.houkyouin.jp/contents/info.html",
    "lat": 35.0239,
    "lng": 135.6737
  },
  {
    "id": "jojakkoji",
    "name": "常寂光寺",
    "jp": "常寂光寺・じょうじゃっこうじ",
    "area": "岚山",
    "date": "12/04",
    "image": "jojakkoji2",
    "tags": [
      "石阶",
      "仁王门",
      "多宝塔"
    ],
    "stay": "75–90 分钟",
    "arrival": "09:00–10:30",
    "fee": "成人 ¥600",
    "hours": "09:00–17:00 · 16:30 停止受付",
    "booking": "现场购票",
    "route": "山门 → 仁王门 → 石阶 → 本堂 → 多宝塔",
    "photo": "红叶石阶 · 多宝塔 · 屋檐框景",
    "crowd": "石阶、门洞易拥堵",
    "next": "宝筐院 · 小火车岚山站",
    "note": "山坡与石阶较多；雨天注意防滑。",
    "url": "https://jojakko-ji.or.jp/access/",
    "lat": 35.0196,
    "lng": 135.6704
  },
  {
    "id": "tenjuan",
    "name": "天授庵",
    "jp": "南禅寺塔頭 天授庵",
    "area": "洛东",
    "date": "12/02",
    "image": "tenjuan",
    "tags": [
      "枯山水",
      "池泉庭",
      "倒影"
    ],
    "stay": "60–75 分钟",
    "arrival": "09:00",
    "fee": "成人 ¥500",
    "hours": "09:00–17:00 · 冬季至 16:30",
    "booking": "日间现场购票",
    "route": "白砂枯山水庭 → 池泉回游庭",
    "photo": "白砂与石径 · 池面倒影 · 枫叶侧光",
    "crowd": "池边通道狭窄",
    "next": "南禅寺 → 永观堂",
    "note": "与南禅寺三门、方丈分别收费。",
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
    "arrival": "09:00 或 12:30",
    "fee": "日间 ¥1,500 · 夜间另 ¥1,000",
    "hours": "日间 09:00–16:00 受付 · 夜间 17:30–20:30 受付",
    "booking": "日间、夜间均无预售 · 当日窗口购票 · 昼夜分场",
    "route": "诸堂 → 放生池 → 开放的多宝塔区域",
    "photo": "池面倒影 · 桥与枫树 · 多宝塔",
    "crowd": "放生池、夜场入口人多",
    "next": "天授庵 · 南禅寺 · 冈崎",
    "note": "卧龙廊停止通行，千佛堂关闭；多宝塔可能关闭。",
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
    "booking": "现场购票",
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
    "date": "12/01",
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
    "jp": "嵯峨野11号・ジオラマセット券",
    "area": "岚山",
    "date": "12/04",
    "image": "sagano",
    "tags": [
      "保津峡",
      "指定席",
      "铁路模型馆"
    ],
    "stay": "列车23分钟 · 模型馆40–50分钟",
    "arrival": "13:40 前到小火车嵯峨站",
    "fee": "成人2位 ¥2,500 · 需购票",
    "hours": "14:02 嵯峨发 → 14:25 龟冈到；模型馆09:00–17:00，16:30停止入场",
    "booking": "需预约 · 12/04 14:02 · 2 位 · 需购票",
    "route": "小火车嵯峨站 → 保津峡 → 小火车龟冈站 → 步行至JR马堀站",
    "photo": "河谷 · 铁桥 · 车窗红叶",
    "crowd": "全车指定席",
    "next": "宝筐院 · 常寂光寺 · 铁路模型馆",
    "note": "小火车嵯峨站在JR嵯峨岚山站旁；QR码仅乘车当天显示，凭实时电子票入场，打印凭证和截图不能代替车票。取消：12/03日本时间23:59前免费，乘车当日不退款。",
    "url": "https://www.sagano-kanko.co.jp/ticket/",
    "lat": 35.0186,
    "lng": 135.6813
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
    "title": "真如堂与清水寺夜枫",
    "sub": "大阪 → 国际会馆 → 真如堂 → 祇园 → 清水寺",
    "map": "d3",
    "walk": "约 7–10 km",
    "places": [
      "shinnyodo",
      "kiyomizu"
    ],
    "route": [
      "真如堂",
      "祇园",
      "清水寺"
    ],
    "access": "大阪 → 京都：JR新快速约 30 分钟；京都 → 国际会馆：乌丸线约 20–25 分钟。国际会馆 → 真如堂：出租车约 20–35 分钟。",
    "events": [
      [
        "07:45",
        "大阪退房",
        "铁路前往京都"
      ],
      [
        "10:15",
        "国际会馆附近酒店",
        "寄存行李"
      ],
      [
        "11:00",
        "真如堂",
        "三重塔 · 红叶参道；60–90 分钟",
        "shinnyodo"
      ],
      [
        "12:30",
        "祇园午餐",
        "真如堂 → 祇园，接驳约 35–60 分钟"
      ],
      [
        "14:00",
        "八坂塔 · 二三年坂",
        "步行上山，途中茶休"
      ],
      [
        "16:00",
        "早晚餐",
        "17:15 前到清水寺参道上段"
      ],
      [
        "17:30",
        "清水寺夜间参拜",
        "舞台 · 奥之院方向 · 红叶谷",
        "kiyomizu",
        "秋季夜场最后一晚"
      ],
      [
        "19:30",
        "返回国际会馆",
        "下山 → 五条站 → 乌丸线"
      ]
    ],
    "food": "祇园 · 东山安井｜16:00 左右早晚餐",
    "rain": "缩短祇园街步行，保留寺院与室内休息",
    "alt": "寄存延误：删书院与逛店，保留两处核心参拜"
  },
  {
    "date": "12.01",
    "week": "周二",
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
    "alt": "下午只补一处；早朝或夜间专场需另订，本行程为08:30普通日间参拜"
  },
  {
    "date": "12.02",
    "week": "周三",
    "area": "南禅寺 · 永观堂",
    "title": "池庭与红叶海",
    "sub": "天授庵 → 南禅寺 → 永观堂 → 冈崎",
    "map": "d5",
    "walk": "约 5–8 km",
    "places": [
      "tenjuan",
      "eikando"
    ],
    "route": [
      "天授庵",
      "南禅寺",
      "永观堂"
    ],
    "access": "国际会馆 → 乌丸御池换东西线 → 蹴上 → 步行10–15分钟。酒店至天授庵预留55–70分钟。",
    "events": [
      [
        "07:50",
        "国际会馆出发",
        "地铁至蹴上"
      ],
      [
        "09:00",
        "天授庵",
        "枯山水 · 池泉庭；60–75 分钟",
        "tenjuan"
      ],
      [
        "10:10",
        "南禅寺",
        "三门外观 · 水路阁；登三门/方丈二选一"
      ],
      [
        "11:30",
        "午餐",
        "南禅寺门前 · 永观堂道"
      ],
      [
        "12:30",
        "永观堂",
        "诸堂 · 放生池；120–150 分钟",
        "eikando"
      ],
      [
        "15:00",
        "冈崎休息",
        "热饮 · 坐下休息 30–60 分钟"
      ],
      [
        "17:30",
        "永观堂夜间点灯",
        "可选；另购 ¥1,000 / 人",
        "eikando",
        "可选"
      ],
      [
        "19:00",
        "返回国际会馆",
        "步行至蹴上 / 东山站 → 地铁"
      ]
    ],
    "food": "南禅寺门前汤豆腐 · 冈崎定食/咖啡",
    "rain": "减少水路阁久留，夜场可删",
    "alt": "永观堂排队过长：日间、夜间二选一"
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
    "area": "岚山 · 嵯峨野",
    "title": "岚山庭园与保津峡小火车",
    "sub": "宝筐院 → 常寂光寺 → 铁路模型馆 → 小火车嵯峨站 → 龟冈",
    "map": "d4",
    "walk": "约 7–10 km",
    "places": [
      "houkyoin",
      "jojakkoji",
      "sagano"
    ],
    "route": [
      "宝筐院",
      "常寂光寺",
      "小火车嵯峨站",
      "小火车龟冈站"
    ],
    "access": "国际会馆 → 京都站 → JR嵯峨岚山 → 步行15–20分钟至宝筐院。全段预留 80–100 分钟。",
    "events": [
      [
        "07:15",
        "国际会馆出发",
        "乌丸线 → 京都站 → JR嵯峨野线；全段预留80–100分钟"
      ],
      [
        "09:00",
        "宝筐院",
        "庭园参拜；45–60分钟",
        "houkyoin"
      ],
      [
        "10:00",
        "步行至常寂光寺",
        "约15–20分钟"
      ],
      [
        "10:25",
        "常寂光寺",
        "仁王门 · 本堂 · 多宝塔；约75–90分钟",
        "jojakkoji"
      ],
      [
        "11:55",
        "嵯峨野午餐",
        "清凉寺门前 / JR嵯峨岚山周边；午餐后步行回嵯峨站，预留25–35分钟"
      ],
      [
        "12:45",
        "铁路模型馆",
        "小火车嵯峨站旁；套票已含，约40–50分钟"
      ],
      [
        "13:40",
        "小火车嵯峨站验票",
        "JR嵯峨岚山站旁；打开实时电子票，核对座号"
      ],
      [
        "14:02",
        "嵯峨野11号 → 龟冈",
        "14:25到达；成人2位 · 套票需购票",
        "sagano",
        "需预约 · 需购票"
      ],
      [
        "14:25",
        "步行至JR马堀站",
        "约10–15分钟 → JR嵯峨野线回京都"
      ],
      [
        "16:00–16:30",
        "返回国际会馆",
        "整理行李 · 确认次日HARUKA与航站楼"
      ]
    ],
    "food": "清凉寺门前 · JR嵯峨岚山站附近",
    "rain": "保留已订列车（1号车）；庭园石阶注意防滑，模型馆可作室内休息",
    "alt": "交通延误：先删模型馆，13:40前到嵯峨站；列车改期需取消重买"
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
    "name": "岚山小火车＋模型馆",
    "date": "12/04 14:02",
    "status": "需预约 · 需购票",
    "detail": "2位 ¥2,500；嵯峨站上车；实时电子票",
    "url": "https://www.sagano-kanko.co.jp/"
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
    "date": "12/02",
    "status": "当日窗口购票",
    "detail": "两场均无预售；日夜入替、分别购票",
    "url": "https://www.eikando.or.jp/English/haikan_e.html"
  },
  {
    "name": "东福寺 · 普通日间",
    "date": "12/01 08:30",
    "status": "现场购票",
    "detail": "通天桥与本坊分开购票；早朝/夜间专场需另订",
    "url": "https://tofukuji.jp/guide/"
  },
  {
    "name": "真如堂",
    "date": "11/30",
    "status": "现场购票",
    "detail": "普通个人参拜；团体、商业摄影另有规定",
    "url": "https://shin-nyo-do.jp/info/"
  },
  {
    "name": "天授庵",
    "date": "12/02",
    "status": "现场购票",
    "detail": "日间庭园参拜；未见个人预约要求",
    "url": "https://www.kyoto-kankou.or.jp/info_search/173"
  },
  {
    "name": "宝筐院",
    "date": "12/04",
    "status": "现场购票",
    "detail": "普通庭园参拜；12月16:00停止受付",
    "url": "https://www.houkyouin.jp/contents/info.html"
  },
  {
    "name": "常寂光寺",
    "date": "12/04",
    "status": "无需预约",
    "detail": "官网FAQ明确无需事先预约；16:30停止受付",
    "url": "https://jojakko-ji.or.jp/faq/"
  },
  {
    "name": "莲华寺",
    "date": "12/03",
    "status": "现场购票",
    "detail": "普通个人参拜；未见预约要求",
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
  }
];
