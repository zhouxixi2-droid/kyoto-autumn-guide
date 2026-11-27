// Manual snapshot: 2026-11-27, Asia/Shanghai. Source observation dates are kept separately.
const CONDITIONS_UPDATED = '2026-11-27';
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
    "observed": "11/26",
    "status": "已见頃",
    "start": null,
    "fall": null,
    "tone": "steady",
    "tag": "保留原日",
    "advice": "11/26现场照片仍报见頃。保留11/30上午，先看树冠、三重塔和参道；雨后兼看苔地落叶。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR东海实拍"
  },
  {
    "id": "kiyomizu",
    "name": "清水寺",
    "visit": "11/30",
    "observed": "11/25",
    "status": "已见頃",
    "start": null,
    "fall": "12/05",
    "tone": "steady",
    "tag": "窗口较合适",
    "advice": "11/25现场照片报见頃。11/30为本次秋季夜间末场，保留；落叶起点为预测，不代表整园同时落尽。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR东海·现场照片",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26112/",
    "forecastChecked": "11/27"
  },
  {
    "id": "tofukuji",
    "name": "东福寺",
    "visit": "12/04",
    "observed": "11/25",
    "status": "已见頃",
    "start": null,
    "fall": "12/06",
    "tone": "watch",
    "tag": "早场优先",
    "advice": "11/25实拍仍报见頃，预测12/6开始落叶。保留12/4 08:30；最新商业预报降雨概率40%，已较11/25的60%下降，暂不因此换日。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26111/",
    "forecastChecked": "11/27"
  },
  {
    "id": "tenjuan",
    "name": "天授庵",
    "visit": "11/30",
    "observed": "11/26",
    "status": "已见頃",
    "start": null,
    "fall": null,
    "tone": "watch",
    "tag": "保留11/30",
    "advice": "11/26仍报见頃。保留11/30下午，比原12/2提前；从大阪出发后不再绕国际会馆寄存行李。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "eikando",
    "name": "永观堂",
    "visit": "12/01",
    "observed": "11/26",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/05",
    "tone": "steady",
    "tag": "提前一天",
    "advice": "建议移至12/1上午，避免12/2从洛东横穿到龟冈。寺方11/26报见頃，Weathernews预测12/5前后开始落叶。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR东海实拍／寺方供稿Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26120/",
    "forecastChecked": "11/27"
  },
  {
    "id": "rurikoin",
    "name": "瑠璃光院",
    "visit": "12/03",
    "observed": "11/26",
    "status": "已见頃",
    "start": null,
    "fall": null,
    "tone": "review",
    "tag": "保留预约",
    "advice": "11/26现场照片仍报见頃。保留12/3 10:00预约；大阪出发需留约110–135分钟，并另留入场缓冲。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "rengeji",
    "name": "莲华寺",
    "visit": "12/03",
    "observed": "11/26",
    "status": "已见頃",
    "start": null,
    "fall": null,
    "tone": "review",
    "tag": "顺路保留",
    "advice": "11/26现场照片报见頃。接瑠璃光院后参拜，再赴一乘寺，避免返回大阪再进京都。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "enkoji",
    "name": "圆光寺",
    "visit": "12/03",
    "observed": "11/26",
    "status": "已见頃",
    "start": null,
    "fall": "12/05",
    "tone": "watch",
    "tag": "保留预约",
    "advice": "11/26实拍仍报见頃。保留12/3 15:00；预测12/5开始落叶，树冠和苔地落叶都可作为看点。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR东海·现场照片",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26114/",
    "forecastChecked": "11/27"
  },
  {
    "id": "houkyoin",
    "name": "宝筐院",
    "visit": "12/02",
    "observed": "11/26",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/05",
    "tone": "steady",
    "tag": "合并岚山日",
    "advice": "寺方11/26供图仍报见頃，预测12/5前后开始落叶。建议12/2 10:30参拜，与常寂光寺、小火车同日，延后一天属交通取舍。",
    "url": "https://www.weathernews.jp/koyo/spot/26102/?fm=pref",
    "provider": "宝筐院供稿 · Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26102/",
    "forecastChecked": "11/27"
  },
  {
    "id": "jojakkoji",
    "name": "常寂光寺",
    "visit": "12/02",
    "observed": "11/25",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/10",
    "tone": "steady",
    "tag": "合并岚山日",
    "advice": "寺方11/25供图报见頃，预测12/10前后开始落叶。建议12/2 09:00先看庭园，再宝筐院；无需为单独提前一天多跑一次岚山。",
    "url": "https://www.weathernews.jp/koyo/spot/26134/",
    "provider": "常寂光寺供图 · Weathernews",
    "forecastUrl": "https://www.weathernews.jp/koyo/spot/26134/",
    "forecastChecked": "11/27"
  },
  {
    "id": "arashiyama",
    "name": "岚山整体",
    "visit": "12/02",
    "observed": "11/26",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "11/30",
    "tone": "watch",
    "tag": "庭园优先",
    "advice": "整体预测11/30前后开始落叶；不等同于宝筐院和常寂光寺同日落尽。12/2优先两座庭园和已购小火车，渡月桥只顺路。",
    "url": "https://weathernews.jp/koyo/spot/26101/",
    "provider": "嵐山保勝会供稿／Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26101/",
    "forecastChecked": "11/27"
  },
  {
    "id": "hozukyo",
    "name": "保津峡·小火车沿线",
    "visit": "12/02",
    "observed": "11/26",
    "status": "已见頃 · 小火车沿线",
    "start": null,
    "fall": null,
    "tone": "steady",
    "tag": "沿线见頃",
    "advice": "JR西日本11/26报小火车沿线见頃。12/2龟冈预报20/10°C、降雨概率20%；峡谷带防风层。",
    "url": "https://kisetsu.jr-odekake.net/result/MMJ/A1005?lang=ja",
    "provider": "JR 西日本"
  },
  {
    "id": "osakacastle",
    "name": "大阪城公园",
    "visit": "11/29",
    "observed": "11/24",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/02",
    "tone": "steady",
    "tag": "保留原日",
    "advice": "11/24状态仍为见頃，预测12/2开始落叶。11/29继续保留上午，住天满桥附近可步行往公园。",
    "url": "https://weathernews.jp/koyo/spot/26207/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26207/",
    "forecastChecked": "11/27"
  }
];
const DAY_CONDITIONS = {
  "11.28": {
    "leaf": "晚间抵达，入住大阪休息。",
    "weather": "关西机场19/14°C，降雨概率60%。晚间落地，雨具随身；日概率不代表20:55必定下雨。"
  },
  "11.29": {
    "leaf": "大阪城仍报见頃，上午看银杏与城郭。",
    "weather": "大阪市12/8°C，降雨概率30%。降温，上午大阪城；不引用京都70%为大阪概率。"
  },
  "11.30": {
    "leaf": "真如堂、天授庵11/26仍为见頃，清水寺11/25见頃。保留夜场末日。",
    "weather": "京都市16/5°C，降雨概率20%。气象厅14/1°C、20%；按较冷情景准备清水寺夜场。"
  },
  "12.01": {
    "leaf": "永观堂11/26已见頃，建议提前一天；下午留给换酒店与休息。",
    "weather": "京都市20/8°C，降雨概率20%。气象厅17/5°C、30%；上午永观堂，下午返回大阪。"
  },
  "12.02": {
    "leaf": "常寂光寺、宝筐院仍报见頃；两座庭园与14:30小火车合并，减少东西横穿。",
    "weather": "京都市／龟冈20/10°C，降雨概率20%。气象厅京都17/7°C、30%；14:30龟冈发车，14:00前到站。"
  },
  "12.03": {
    "leaf": "瑠璃光院、莲华寺、圆光寺11/26均报见頃；保留两场预约。",
    "weather": "京都市21/11°C，降雨概率30%。气象厅17/7°C、20%；两场预约保留，早出发。"
  },
  "12.04": {
    "leaf": "东福寺11/25仍报见頃，12/6落叶起点只是预测；保留早到。",
    "weather": "京都市20/11°C，降雨概率40%。较11/25的60%降低；出门前复核，不因旧预报提前删景点。"
  },
  "12.05": {
    "leaf": "大阪退房，直接前往关西机场。",
    "weather": "关西机场20/14°C，降雨概率60%。返程日备雨具；从大阪站乘HARUKA，目标10:30到机场。"
  }
};
const TRIP_WEATHER = {
  "11.28": [
    "关西机场",
    19,
    14,
    60,
    "",
    "晚间落地，雨具随身；日概率不代表20:55必定下雨。"
  ],
  "11.29": [
    "大阪市",
    12,
    8,
    30,
    "",
    "降温，上午大阪城；不引用京都70%为大阪概率。"
  ],
  "11.30": [
    "京都市",
    16,
    5,
    20,
    "",
    "气象厅14/1°C、20%；按较冷情景准备清水寺夜场。"
  ],
  "12.01": [
    "京都市",
    20,
    8,
    20,
    "",
    "气象厅17/5°C、30%；上午永观堂，下午返回大阪。"
  ],
  "12.02": [
    "京都市／龟冈",
    20,
    10,
    20,
    "",
    "气象厅京都17/7°C、30%；14:30龟冈发车，14:00前到站。"
  ],
  "12.03": [
    "京都市",
    21,
    11,
    30,
    "",
    "气象厅17/7°C、20%；两场预约保留，早出发。"
  ],
  "12.04": [
    "京都市",
    20,
    11,
    40,
    "较远期",
    "较11/25的60%降低；出门前复核，不因旧预报提前删景点。"
  ],
  "12.05": [
    "关西机场",
    20,
    14,
    60,
    "较远期",
    "返程日备雨具；从大阪站乘HARUKA，目标10:30到机场。"
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
    "date": "12/1",
    "text": "日间¥1,500，09:00–16:00受付、17:00闭门；夜场¥1,000，17:30–20:30受付、21:00闭门。普通日夜场无预售、分场购票。11/11–12/6卧龙廊及千佛堂关闭，多宝塔视情况开放；带鞋袋。",
    "url": "https://www.eikando.or.jp/haikan.html"
  },
  {
    "id": "jojakkoji",
    "name": "常寂光寺",
    "type": "无需预约",
    "date": "12/2",
    "text": "庭园普通参拜无需预约；09:00–17:00，16:30停止受付，成人¥600。本堂、书院特别开放仅11/18–11/30，特别开放另¥600；12/1安排庭园、仁王门、石阶与多宝塔外观。",
    "url": "https://jojakko-ji.or.jp/"
  },
  {
    "id": "houkyoin",
    "name": "宝筐院",
    "type": "普通个人现场购票",
    "date": "12/2",
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
    "date": "12/1",
    "text": "12月08:40–16:30，16:10停止受付；方丈、三门各¥600。南禅院仅11/1–11/30临时开放，法堂内阵仅11/16–11/29（11/26除外），12/2不列入游览范围。",
    "url": "https://www.nanzenji.or.jp/information/202609024"
  },
  {
    "id": "eikando-early",
    "name": "永观堂早朝 · 可选",
    "type": "需另行预约 · 未预订",
    "date": "12/1备选",
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
  return `<aside class="day-conditions"><div class="conditions-label"><strong>红叶 · 天气</strong><button data-view="conditions">${esc(CONDITIONS_UPDATED.slice(5).replace('-', '/'))} 更新 ↗</button></div><p><span>红叶</span>${esc(note.leaf)}</p><p><span>天气</span>${esc(note.weather)}</p></aside>`;
}
function renderPlaceConditions(id) {
  const p = FOLIAGE.find(x => x.id === (id === 'sagano' ? 'hozukyo' : id));
  if (!p) return '';
  return `<section class="place-conditions tone-${p.tone}"><div class="conditions-label"><strong>红叶近况</strong><span>${esc(p.observed)} 实况</span></div><p><b>${esc(p.status)}</b> · ${esc(foliageForecast(p))}</p><p>${esc(p.advice)}</p><div class="conditions-links">${conditionsSource(p.url, p.provider)}<button data-view="conditions" data-close-place="true">全部近况 ↗</button></div></section>`;
}
function renderConditions() {
  $('#content').innerHTML = `
    <section class="conditions-page" aria-labelledby="conditions-title">
      <div class="section-top"><div><p class="kicker">AUTUMN WATCH / 2026</p><h2 id="conditions-title">红叶与天气</h2></div><time class="snapshot-date" datetime="${CONDITIONS_UPDATED}">11 月 27 日更新</time></div>
      <p class="conditions-intro">京都日游 11/30—12/4 · 大阪住宿方案 · 12/5 返程 · 11/27 核对</p>
      <div class="conditions-highlights">
        <article class="condition-card tone-steady"><h3>11/30 · 洛东与清水寺</h3><p>真如堂、天授庵、清水寺已报见頃。保留日间两寺和清水寺夜间末场。</p><button data-goday="2">查看当天 ↗</button></article>
        <article class="condition-card tone-steady"><h3>12/1 · 永观堂</h3><p>11/26仍报见頃。建议提前一天，岚山两寺并到12/2，与小火车衔接。</p><button data-goday="3">查看当天 ↗</button></article>
        <article class="condition-card tone-watch"><h3>12/4 · 东福寺</h3><p>11/25实拍仍在见頃。京都降雨概率现为40%，保留08:30早到，临近再看小时预报。</p><button data-goday="6">查看当天 ↗</button></article>
      </div>
      <details class="conditions-details" open><summary>12/2 · 岚山小火车</summary>
        <p>12/2 14:30龟冈 → 14:56嵯峨，普通单程票成人2位已确认。保津峡11/26见頃；龟冈20/10°C、降雨概率20%。上午两座庭园，13:00前后从JR嵯峨岚山经马堀步行到小火车龟冈，14:00前到站。</p>
        <div class="conditions-links">${conditionsSource('https://www.sagano-kanko.co.jp/train-info/','运行时刻')} · ${conditionsSource('https://weathernews.jp/onebox/tenki/kyoto/26206/week.html','龟冈天气')}</div>
      </details>
      <div class="section-top conditions-section-head"><h3>逐景点近况</h3><span class="subtle">实况日期见各行 · 行程判断为本手册建议</span></div>
      <div class="foliage-scroll"><table class="foliage-table"><caption class="visually-hidden">景点红叶实况、预测和到访建议</caption><thead><tr><th>景点 / 到访</th><th>最新实况</th><th>日期预测</th><th>行程建议</th></tr></thead><tbody>${FOLIAGE.map(p => `<tr><th scope="row">${PLACES.some(x=>x.id===p.id)?`<button data-place="${p.id}">${esc(p.name)} ↗</button>`:esc(p.name)}<small>${esc(p.visit)} 到访</small></th><td><strong>${esc(p.status)}</strong><small>${esc(p.observed)} · ${conditionsSource(p.url,p.provider)}</small></td><td>${esc(foliageForecast(p))}<small>${p.forecastUrl ? conditionsSource(p.forecastUrl,'Weathernews · '+p.forecastChecked+'复核') : '以现场照片与官网复核'}</small></td><td><span class="condition-tag tone-${p.tone}">${esc(p.tag)}</span><p>${esc(p.advice)}</p></td></tr>`).join('')}</tbody></table></div>
      <p class="conditions-footnote">实况日期见各行。落叶起点为预估，各庭园与坡向进度不同。景点配图为往年实拍。</p>
      <div class="conditions-section-head section-top"><h3>天气</h3><span class="subtle">日本当地时间</span></div>
      <div class="weather-grid">
        <article class="weather-card"><h3>京都 · 气象厅一周预报</h3><p>11/27 05:00发布。11/30晴间多云14/1°C、20%；12/1多云间晴17/5°C、30%；12/2多云间晴17/7°C、30%；12/3晴间多云17/7°C、20%。早晚按较冷情景准备。</p><small>${conditionsSource(FOLIAGE_SOURCES.jma,'气象厅 · 京都')}</small></article>
        <article class="weather-card"><h3>旅行期 · 11/27 预报</h3><p>11/28关西机场60%；11/29大阪30%；11/30–12/2京都20%；12/3京都30%；12/4京都40%；12/5关西机场60%。商业预报温度高于气象厅，分别列示，不平均。</p><small>${conditionsSource('https://weathernews.jp/onebox/tenki/kyoto/26100/week.html','京都')} · ${conditionsSource('https://weathernews.jp/onebox/tenki/osaka/27100/week.html','大阪')} · ${conditionsSource('https://weathernews.jp/onebox/tenki/spot/41000214/week.html','关西机场')}</small></article>
      </div>
      <details class="conditions-details" open><summary>逐日天气 · 11/28—12/5（Weathernews）</summary>
      <div class="foliage-scroll"><table class="weather-table"><thead><tr><th>日期</th><th>地区</th><th>最高 / 最低</th><th>降雨概率</th><th>准备</th></tr></thead><tbody>
      ${Object.entries(TRIP_WEATHER).map(([date,[region,hi,lo,rain,confidence,action]]) => `<tr><td>${esc(date)}</td><td>${esc(region)}</td><td>${hi} / ${lo}°C</td><td>${rain}%${confidence ? ' · '+confidence : ''}</td><td>${esc(action)}</td></tr>`).join('')}
      </tbody></table></div><p class="conditions-footnote">Weathernews 11/27查询；日本当地日期。12/4–5为较远期预报，天气与概率可继续变化；气象厅数据另列。</p></details>
      <details class="conditions-details"><summary>旅行期常年气温 · 打包参考</summary><div class="foliage-scroll"><table class="weather-table"><thead><tr><th>地区</th><th>时段</th><th>平均日最高</th><th>平均日最低</th></tr></thead><tbody><tr><td>京都</td><td>11 月下旬</td><td>15.3°C</td><td>6.5°C</td></tr><tr><td>京都</td><td>12 月上旬</td><td>13.3°C</td><td>4.7°C</td></tr><tr><td>大阪</td><td>11 月下旬</td><td>15.9°C</td><td>8.4°C</td></tr><tr><td>大阪</td><td>12 月上旬</td><td>13.9°C</td><td>6.7°C</td></tr></tbody></table></div><p class="conditions-footnote">1991—2020 常年值，非本次旅行逐日预报。${conditionsSource(FOLIAGE_SOURCES.kyoto,'京都')} · ${conditionsSource(FOLIAGE_SOURCES.osaka,'大阪')}</p></details>
      <div class="utility-grid conditions-utilities"><div class="utility"><div class="label">随身</div><p>保暖中层＋防风外套；夜枫、峡谷加围巾，书院带厚袜。小伞与防滑步行鞋。</p></div><div class="utility"><div class="label">风雨 / 叶量不足</div><p>强风雨前优先看树上红叶；雨后看落叶与池景。晚红叶备选：下鸭神社糺之森、建仁寺潮音庭；先看当期照片再决定。</p></div><div class="utility"><div class="label">复核时间</div><p>出门前查逐小时降雨。12/4重点看东福寺08:30前后，12/5重点看关西机场上午。</p></div></div>
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
