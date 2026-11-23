// Manual snapshot: 2026-11-23, Asia/Shanghai. Source observation dates are kept separately.
const CONDITIONS_UPDATED = '2026-11-23';
const FOLIAGE_SOURCES = {
  jr: 'https://souda-kyoto.jp/guide/season/koyo/',
  west: 'https://kisetsu.jr-odekake.net/result/MMJ/A1005?lang=ja',
  jma: 'https://www.data.jma.go.jp/yoho/data/jishin/met/kishoushien_Kyoto_Kyoto-shi.html',
  kyoto: 'https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_10d.php?block_no=47759&prec_no=61',
  osaka: 'https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_10d.php?block_no=47772&prec_no=62'
};
const FOLIAGE = [
  {
    "id": "shinnyodo",
    "name": "真如堂",
    "visit": "11/30",
    "observed": "11/23",
    "status": "已见頃",
    "start": null,
    "fall": null,
    "tone": "steady",
    "tag": "保留原日",
    "advice": "保留11/30上午。看三重塔、参道与本堂后侧，雨后可看散落在苔地与石阶的枫叶。",
    "url": "https://shin-nyo-do.jp/",
    "provider": "真如堂官网"
  },
  {
    "id": "kiyomizu",
    "name": "清水寺",
    "visit": "11/30",
    "observed": "11/20",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/05",
    "tone": "steady",
    "tag": "窗口较合适",
    "advice": "落叶预计起点由12/8提前到12/5。11/30仍优先保留秋季夜间参拜最后一晚。",
    "url": "https://weathernews.jp/koyo/spot/26112/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26112/",
    "forecastChecked": "11/23"
  },
  {
    "id": "tofukuji",
    "name": "东福寺",
    "visit": "12/04",
    "observed": "11/19",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/06",
    "tone": "watch",
    "tag": "偏晚风险提高",
    "advice": "落叶预计起点由12/13提前到12/6。保留12/4 08:30通天桥，11月底复核红叶谷照片。",
    "url": "https://weathernews.jp/koyo/spot/26111/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26111/",
    "forecastChecked": "11/23"
  },
  {
    "id": "tenjuan",
    "name": "天授庵",
    "visit": "11/30",
    "observed": "11/20",
    "status": "已见頃",
    "start": null,
    "fall": null,
    "tone": "watch",
    "tag": "提前两天",
    "advice": "JR东海11/20实拍仍在见頃，保留11/30 13:30。若寄存或交通延误，用12/2下午补位。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "eikando",
    "name": "永观堂",
    "visit": "12/02",
    "observed": "11/20",
    "status": "约五成变色",
    "start": "11/24",
    "fall": "12/06",
    "tone": "steady",
    "tag": "保留原日",
    "advice": "预估11/24见頃、12/6起落叶。保留12/2 09:00普通场，优先放生池与开放诸堂。",
    "url": "https://weathernews.jp/koyo/spot/26120/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26120/",
    "forecastChecked": "11/23"
  },
  {
    "id": "rurikoin",
    "name": "瑠璃光院",
    "visit": "12/03",
    "observed": "11/19",
    "status": "部分见頃",
    "start": null,
    "fall": null,
    "tone": "review",
    "tag": "月底复核",
    "advice": "较11/16开始变色有所推进。保留12/3上午的预约时段，月底关注书院当期照片。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "rengeji",
    "name": "莲华寺",
    "visit": "12/03",
    "observed": "11/19",
    "status": "已见頃",
    "start": null,
    "fall": null,
    "tone": "review",
    "tag": "月底复核",
    "advice": "保留瑠璃光院之后的顺路参拜，按池庭叶量和停留时间灵活安排。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "enkoji",
    "name": "圆光寺",
    "visit": "12/03",
    "observed": "11/20",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/05",
    "tone": "watch",
    "tag": "偏晚风险",
    "advice": "保留12/3 15:00。预计12/5起落叶，届时优先看十牛之庭的树冠与地面落叶。",
    "url": "https://weathernews.jp/koyo/spot/26114/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26114/",
    "forecastChecked": "11/23"
  },
  {
    "id": "houkyoin",
    "name": "宝筐院",
    "visit": "12/01",
    "observed": "11/22",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/05",
    "tone": "steady",
    "tag": "保留12/1",
    "advice": "寺院11/22报告境内深处已进入见頃。保留12/1约10:40，优先看庭园深处和苔地。",
    "url": "https://www.weathernews.jp/koyo/spot/26102/?fm=pref",
    "provider": "宝筐院供稿 · Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26102/",
    "forecastChecked": "11/23"
  },
  {
    "id": "jojakkoji",
    "name": "常寂光寺",
    "visit": "12/01",
    "observed": "11/22（官网标题）",
    "status": "已见頃 · 多宝塔周边颜色好",
    "start": null,
    "fall": null,
    "tone": "watch",
    "tag": "偏晚风险",
    "advice": "寺方11/22更新说多宝塔周边好，预计下个周末趋于盛期。12/1仍排09:00首站。本堂、书院特开11/30结束。",
    "url": "https://jojakko-ji.or.jp/news/令和8年の紅葉予報（11-10）/",
    "provider": "常寂光寺官网"
  },
  {
    "id": "arashiyama",
    "name": "岚山整体",
    "visit": "12/01",
    "observed": "11/20",
    "status": "渡月桥一带已见頃",
    "start": null,
    "fall": "11/30",
    "tone": "watch",
    "tag": "较早落叶风险",
    "advice": "Weathernews的区域落叶预测仍为11/30左右。各庭园、渡月桥和保津峡进度不同，维持12/1分区赏枫。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26101/",
    "forecastChecked": "11/23"
  },
  {
    "id": "hozukyo",
    "name": "保津峡·小火车沿线",
    "visit": "12/01",
    "observed": "11/23",
    "status": "开始变色 · 接近见頃",
    "start": null,
    "fall": null,
    "tone": "review",
    "tag": "沿线单独复核",
    "advice": "JR西日本11/23称峡谷逐渐接近见頃。12/1 14:30光线比12/2 16:30更适合看车窗红叶。",
    "url": "https://kisetsu.jr-odekake.net/result/MMJ/A1005?lang=ja",
    "provider": "JR 西日本"
  },
  {
    "id": "osakacastle",
    "name": "大阪城公园",
    "visit": "11/29",
    "observed": "11/20",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/02",
    "tone": "steady",
    "tag": "保留原日",
    "advice": "落叶预计12/2开始，11/29保留上午看银杏与公园。",
    "url": "https://weathernews.jp/koyo/spot/26207/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26207/",
    "forecastChecked": "11/23"
  }
];
const DAY_CONDITIONS = {
  "11.28": {
    "leaf": "抵达大阪后入住休息。",
    "weather": "关西机场19/13°C，降雨30%。20:55抵达。下机防风，机场数值为日最高／最低。"
  },
  "11.29": {
    "leaf": "大阪城11/20已见頃，预计12/2左右开始落叶。保留上午公园。",
    "weather": "大阪市16/9°C，降雨20%。上午大阪城公园，白天可脱外层。"
  },
  "11.30": {
    "leaf": "真如堂11/23官网报见頃，天授庵11/20实拍见頃。保留13:30天授庵和清水寺夜间末场。",
    "weather": "京都市18/6°C，降雨20%。清水寺夜枫带保暖中层。"
  },
  "12.01": {
    "leaf": "常寂光寺11/22多宝塔周边颜色好，宝筐院11/22见頃，保津峡接近见頃。09:00常寂光寺 → 10:40宝筐院 → 14:30小火车。",
    "weather": "京都市19/8°C，降雨20%。岚山早出，车上带防风外套。"
  },
  "12.02": {
    "leaf": "永观堂11/20约五成变色，预计11/24见頃。保留09:00普通场；小火车16:30仅作备选。",
    "weather": "京都市19/11°C，降雨20%。永观堂上午场，夜间随身加一层。"
  },
  "12.03": {
    "leaf": "瑠璃光院11/19部分见頃，莲华寺和圆光寺已见頃。圆光寺预计12/5起落叶，保留预约时间。",
    "weather": "京都市15/9°C，降雨20%。洛北早晚偏凉，室内书院备厚袜。"
  },
  "12.04": {
    "leaf": "东福寺已见頃，落叶预测提前到12/6左右。保留08:30先看通天桥和红叶谷。",
    "weather": "京都市16/7°C，降雨30%，信赖度D（随预报更新）。东福寺08:30入场，带外套和折伞。"
  },
  "12.05": {
    "leaf": "退房后前往关西机场。",
    "weather": "关西机场15/10°C，降雨50%，信赖度E（随预报更新）。返程可能遇雨，临出发复核机场和HARUKA。"
  }
};
const TRIP_WEATHER = {
  "11.28": [
    "关西机场",
    19,
    13,
    30,
    "",
    "20:55抵达。下机防风，机场数值为日最高／最低。"
  ],
  "11.29": [
    "大阪市",
    16,
    9,
    20,
    "",
    "上午大阪城公园，白天可脱外层。"
  ],
  "11.30": [
    "京都市",
    18,
    6,
    20,
    "",
    "清水寺夜枫带保暖中层。"
  ],
  "12.01": [
    "京都市",
    19,
    8,
    20,
    "",
    "岚山早出，车上带防风外套。"
  ],
  "12.02": [
    "京都市",
    19,
    11,
    20,
    "",
    "永观堂上午场，夜间随身加一层。"
  ],
  "12.03": [
    "京都市",
    15,
    9,
    20,
    "",
    "洛北早晚偏凉，室内书院备厚袜。"
  ],
  "12.04": [
    "京都市",
    16,
    7,
    30,
    "D",
    "东福寺08:30入场，带外套和折伞。"
  ],
  "12.05": [
    "关西机场",
    15,
    10,
    50,
    "E",
    "返程可能遇雨，临出发复核机场和HARUKA。"
  ]
};
const TEMPLE_NOTICES = [
  {
    "id": "rurikoin",
    "name": "瑠璃光院",
    "type": "必须预约",
    "date": "11/13–12/6",
    "text": "秋季公开至12/13；11/13–12/6须预约。10:00–17:00，16:30停止受付；成人¥2,000。官网有二次募集入口，余位以日历为准；原预约继续保留。",
    "url": "https://rurikoin.komyoji.com/"
  },
  {
    "id": "enkoji",
    "name": "圆光寺",
    "type": "必须预约",
    "date": "11/10–12/10",
    "text": "红叶特别参拜实行日期、时段预约；成人¥1,500。出示确认邮件或打印件，停留约1小时；日期或人数变更须先取消再重订，不直接改动现有预约。",
    "url": "https://www.enkouji.jp/news/"
  },
  {
    "id": "shinnyodo",
    "name": "真如堂",
    "type": "日间现场购票",
    "date": "11/30",
    "text": "11/16官网公告：11/18–12/7，08:30–16:30境内入山费¥500，本堂、书院另¥500；室内09:00–16:00，15:45停止受付。普通个人参拜未见新增预约要求。",
    "url": "https://shin-nyo-do.jp/"
  },
  {
    "id": "tenjuan",
    "name": "天授庵",
    "type": "日间现场购票",
    "date": "11/30",
    "text": "普通个人日间参拜未见须预约要求；成人¥500，冬季至16:30。已公布的11/11下午、11/12上午休观不影响本次日期；临时法事以现场为准。",
    "url": "https://www.kyoto-kankou.or.jp/info_search/173"
  },
  {
    "id": "eikando",
    "name": "永观堂",
    "type": "普通场当日购票",
    "date": "12/2",
    "text": "日间¥1,500，09:00–16:00受付、17:00闭门；夜场¥1,000，17:30–20:30受付、21:00闭门。普通日夜场无预售、分场购票。11/11–12/6卧龙廊及千佛堂关闭，多宝塔视情况开放；带鞋袋。",
    "url": "https://www.eikando.or.jp/haikan.html"
  },
  {
    "id": "jojakkoji",
    "name": "常寂光寺",
    "type": "无需预约",
    "date": "12/1",
    "text": "庭园普通参拜无需预约；09:00–17:00，16:30停止受付，成人¥600。本堂、书院特别开放仅11/18–11/30，特别开放另¥600；12/1安排庭园、仁王门、石阶与多宝塔外观。",
    "url": "https://jojakko-ji.or.jp/news/令和７年　本堂特別拝観のご案内/"
  },
  {
    "id": "houkyoin",
    "name": "宝筐院",
    "type": "普通个人现场购票",
    "date": "12/1",
    "text": "成人¥500；12月09:00–16:00受付。未见普通个人预约要求。禁止携带三脚架、一脚架；不接待以专门摄影为目的的入寺，参拜为主，拍照服从现场指示。",
    "url": "https://www.houkyouin.jp/contents/info.html"
  },
  {
    "id": "tofukuji",
    "name": "东福寺",
    "type": "普通日间现场购票",
    "date": "12/4",
    "text": "11/14–12/6通天桥08:30起、本坊09:00起，16:00停止受付、16:30闭门。通天桥¥1,000，本坊另¥600，秋期无共通票；早朝、夜间专场才需另订。",
    "url": "https://tofukuji.jp/guide/"
  },
  {
    "id": "rengeji",
    "name": "莲华寺",
    "type": "普通个人未见须预约",
    "date": "12/3",
    "text": "京都府观光联盟列示09:00–17:00、成人¥500；未查到针对本次日期的新预约或临时闭门公告，临时法事以现场为准。导航选上高野八幡町的莲华寺。",
    "url": "https://www.kyoto-kankou.or.jp/info_search/236"
  },
  {
    "id": "kiyomizu",
    "name": "清水寺夜间",
    "type": "官网明确无需预约",
    "date": "11/30",
    "text": "2026秋季夜间特别参拜11/21–11/30；21:00停止受付、21:30闭门。11/30为最后一晚，继续保留；不挪至12月。",
    "url": "https://www.kiyomizudera.or.jp/event/yakan.php"
  },
  {
    "id": "nanzen",
    "name": "南禅寺",
    "type": "普通日间现场购票",
    "date": "12/2",
    "text": "12月08:40–16:30，16:10停止受付；方丈、三门各¥600。南禅院仅11/1–11/30临时开放，法堂内阵仅11/16–11/29（11/26除外），12/2不列入游览范围。",
    "url": "https://www.nanzenji.or.jp/information/202609024"
  },
  {
    "id": "eikando-early",
    "name": "永观堂早朝 · 可选",
    "type": "需另行预约 · 未预订",
    "date": "12/2备选",
    "text": "JR东海方案11/20–12/6，08:00–09:00，08:30停止受付，¥2,300/人；EX购票需相应会员。可在结束后继续停留，堂内与寺宝展09:00起开放。余位与取消条款以产品页为准。",
    "url": "https://souda-kyoto.jp/plan/autumn_sp/index.html"
  },
  {
    "id": "shinnyodo-night",
    "name": "真如堂夜场 · 可选",
    "type": "需另行预约 · 未预订",
    "date": "11/18–12/8",
    "text": "JR东海夜间专场17:30–19:30，19:00停止受付，¥1,200/人。11/30已安排清水寺末场，不叠加；若另一天选择夜场，须先核对余位和返程交通。",
    "url": "https://souda-kyoto.jp/plan/autumn_sp/index.html"
  }
];
function conditionsSource(url, label) {
  return `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
}
function foliageForecast(p) {
  const parts = [];
  if (p.start) parts.push(`见頃 ${p.start} 起`);
  if (p.fall) parts.push(`落叶 ${p.fall} 起`);
  return parts.length ? parts.join(' · ') : '暂无核实的日期预测';
}
function renderDayConditions(day) {
  const note = DAY_CONDITIONS[day.date];
  if (!note) return '';
  return `<aside class="day-conditions"><div class="conditions-label"><strong>红叶 · 天气</strong><button data-view="conditions">11/23 更新 ↗</button></div><p><span>红叶</span>${esc(note.leaf)}</p><p><span>天气</span>${esc(note.weather)}</p></aside>`;
}
function renderPlaceConditions(id) {
  const p = FOLIAGE.find(x => x.id === (id === 'sagano' ? 'hozukyo' : id));
  if (!p) return '';
  return `<section class="place-conditions tone-${p.tone}"><div class="conditions-label"><strong>红叶近况</strong><span>${esc(p.observed)} 实况</span></div><p><b>${esc(p.status)}</b> · ${esc(foliageForecast(p))}</p><p>${esc(p.advice)}</p><div class="conditions-links">${conditionsSource(p.url, p.provider)}<button data-view="conditions" data-close-place="true">全部近况 ↗</button></div></section>`;
}
function renderConditions() {
  $('#content').innerHTML = `
    <section class="conditions-page" aria-labelledby="conditions-title">
      <div class="section-top"><div><p class="kicker">AUTUMN WATCH / 2026</p><h2 id="conditions-title">红叶与天气</h2></div><time class="snapshot-date" datetime="${CONDITIONS_UPDATED}">11 月 23 日更新</time></div>
      <p class="conditions-intro">京都 11/30—12/4 · 大阪 11/28—29 · 12/5 返程 · 11/23核对</p>
      <div class="conditions-highlights">
        <article class="condition-card tone-steady"><h3>11/30 · 洛东与清水寺</h3><p>真如堂、天授庵、清水寺已报见頃。保留日间两寺和清水寺夜间末场。</p><button data-goday="2">查看当天 ↗</button></article>
        <article class="condition-card tone-steady"><h3>12/1 · 岚山</h3><p>常寂光寺与宝筐院进入见頃，保津峡接近见頃。建议保留14:30小火车。</p><button data-goday="3">查看当天 ↗</button></article>
        <article class="condition-card tone-watch"><h3>12/4 · 东福寺</h3><p>已到见頃，预计12/6左右开始落叶。08:30先看通天桥。</p><button data-goday="6">查看当天 ↗</button></article>
      </div>
      <details class="conditions-details" open><summary>岚山小火车 · 12/2余票备选</summary>
        <p>12/2正常运行。11/23官网普通单程票查询，龟冈→嵯峨14:30不可选，16:30→17:04（嵯峨野16号）座位图仅见1个可选座位，在5号开放车厢。嵯峨→龟冈按2位成人查询无可选车次。库存随时变化。</p>
        <p>京都12/2约16:45日落，推荐12/1 14:30看峡谷。12/2晚班作为一人备选，¥880。</p>
        <div class="conditions-links">${conditionsSource('https://ars-saganokanko.triplabo.jp/activity/ja/LINKTIVITY-YRBTL','官方普通票')} ${conditionsSource('https://www.sagano-kanko.co.jp/train-info/','运行日历')} ${conditionsSource('https://eco.mtk.nao.ac.jp/koyomi/dni/2026/s2712.html','京都日落')}</div>
      </details>
      <div class="section-top conditions-section-head"><h3>逐景点近况</h3><span class="subtle">实况日期见各行 · 行程判断为本手册建议</span></div>
      <div class="foliage-scroll"><table class="foliage-table"><caption class="visually-hidden">景点红叶实况、预测和到访建议</caption><thead><tr><th>景点 / 到访</th><th>最新实况</th><th>日期预测</th><th>行程建议</th></tr></thead><tbody>${FOLIAGE.map(p => `<tr><th scope="row">${PLACES.some(x=>x.id===p.id)?`<button data-place="${p.id}">${esc(p.name)} ↗</button>`:esc(p.name)}<small>${esc(p.visit)} 到访</small></th><td><strong>${esc(p.status)}</strong><small>${esc(p.observed)} · ${conditionsSource(p.url,p.provider)}</small></td><td>${esc(foliageForecast(p))}<small>${p.forecastUrl ? conditionsSource(p.forecastUrl,'Weathernews · '+p.forecastChecked+'复核') : '以现场照片与官网复核'}</small></td><td><span class="condition-tag tone-${p.tone}">${esc(p.tag)}</span><p>${esc(p.advice)}</p></td></tr>`).join('')}</tbody></table></div>
      <p class="conditions-footnote">“开始落叶”不等于观赏结束，散红叶也有看点。不同庭园、树种与坡向进度不同；11/23核对。落叶起点为约略预测，实况日期见表。景点配图为往年实拍。</p>
      <div class="conditions-section-head section-top"><h3>天气</h3><span class="subtle">日本当地时间</span></div>
      <div class="weather-grid">
        <article class="weather-card"><h3>11/24 · 京都降雨</h3><p>日本气象厅11/23 05:00发布的京都预报显示，11/24上午降雨概率90%，下午60%。雨后可看常寂光寺、天授庵的叶量。</p><small>${conditionsSource(FOLIAGE_SOURCES.jma,'气象厅 · 京都')}</small></article>
        <article class="weather-card"><h3>旅行期 · 11/23预报</h3><p>11/30–12/3京都预报降雨概率均20%。12/4京都30%（D），12/5关西机场50%（E）。D、E的降雨预报容易变化。</p><small>${conditionsSource('https://weathernews.jp/onebox/tenki/kyoto/26100/week.html','京都')} · ${conditionsSource('https://weathernews.jp/s/forecast/detail.fcgi?area=Osaka','大阪')} · ${conditionsSource('https://weathernews.jp/onebox/tenki/spot/41000214/week.html','关西机场')}</small></article>
      </div>
      <details class="conditions-details" open><summary>逐日天气 · 11/28—12/5</summary>
      <div class="foliage-scroll"><table class="weather-table"><thead><tr><th>日期</th><th>地区</th><th>最高 / 最低</th><th>降雨概率</th><th>准备</th></tr></thead><tbody>
      ${Object.entries(TRIP_WEATHER).map(([date,[region,hi,lo,rain,confidence,action]]) => `<tr><td>${esc(date)}</td><td>${esc(region)}</td><td>${hi} / ${lo}°C</td><td>${rain}%${confidence ? ' · '+confidence : ''}</td><td>${esc(action)}</td></tr>`).join('')}
      </tbody></table></div><p class="conditions-footnote">Weathernews 11/23查询。时间为日本当地时间，温度和降雨概率为地区预报。出发前再查小时预报。</p></details>
      <details class="conditions-details"><summary>旅行期常年气温 · 打包参考</summary><div class="foliage-scroll"><table class="weather-table"><thead><tr><th>地区</th><th>时段</th><th>平均日最高</th><th>平均日最低</th></tr></thead><tbody><tr><td>京都</td><td>11 月下旬</td><td>15.3°C</td><td>6.5°C</td></tr><tr><td>京都</td><td>12 月上旬</td><td>13.3°C</td><td>4.7°C</td></tr><tr><td>大阪</td><td>11 月下旬</td><td>15.9°C</td><td>8.4°C</td></tr><tr><td>大阪</td><td>12 月上旬</td><td>13.9°C</td><td>6.7°C</td></tr></tbody></table></div><p class="conditions-footnote">1991—2020 常年值，非本次旅行逐日预报。${conditionsSource(FOLIAGE_SOURCES.kyoto,'京都')} · ${conditionsSource(FOLIAGE_SOURCES.osaka,'大阪')}</p></details>
      <div class="utility-grid conditions-utilities"><div class="utility"><div class="label">随身</div><p>保暖中层＋防风外套；夜枫、峡谷加围巾，书院带厚袜。小伞与防滑步行鞋。</p></div><div class="utility"><div class="label">风雨 / 叶量不足</div><p>强风雨前优先看树上红叶；雨后看落叶与池景。晚红叶备选：下鸭神社糺之森、建仁寺潮音庭；先看当期照片再决定。</p></div><div class="utility"><div class="label">复核时间</div><p>11/24雨后查各寺新照，11/26复核12/3洛北与12/4东福寺叶况。临出发看逐小时降雨和运行公告。</p></div></div>
      ${renderTempleAnnouncements()}
      <div class="conditions-links conditions-bottom-links">${conditionsSource(FOLIAGE_SOURCES.jr,'JR 东海·现场照片与晚红叶参考')}${conditionsSource(FOLIAGE_SOURCES.west,'JR 西日本·保津峡')}${conditionsSource('https://www.sagano-kanko.co.jp/','小火车运行公告')}</div>
    </section>`;
}

function renderPlaceAnnouncements(id) {
 const n=TEMPLE_NOTICES.find(x=>x.id===id);if(!n)return '';
 return `<section class="detail-section"><h3>公告与预约 · 11/18核对</h3><p><strong>${esc(n.type)}</strong> · ${esc(n.date)}</p><p>${esc(n.text)}</p>${conditionsSource(n.url,'官方信息')}</section>`;
}
function renderTempleAnnouncements(open=false) {
 return `<details class="conditions-details" ${open?'open':''}><summary>寺院公告与预约 · 11/18核对</summary><p class="conditions-footnote">瑠璃光院、圆光寺为本行程须预约项目；普通场与早朝、夜间专场分别核对。未购买任何新增项目。</p><div class="foliage-scroll"><table class="foliage-table"><thead><tr><th>项目 / 日期</th><th>预约要求</th><th>公告与本次安排</th></tr></thead><tbody>${TEMPLE_NOTICES.map(n=>`<tr><th scope="row">${conditionsSource(n.url,n.name)}<small>${esc(n.date)}</small></th><td>${esc(n.type)}</td><td><p>${esc(n.text)}</p></td></tr>`).join('')}</tbody></table></div></details>`;
}
