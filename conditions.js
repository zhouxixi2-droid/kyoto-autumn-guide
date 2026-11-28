// Manual snapshot: 2026-11-27, Asia/Shanghai. Source observation dates are kept separately.
const CONDITIONS_UPDATED = '2026-11-28';
const FOLIAGE_SOURCES = {
  jr: 'https://souda-kyoto.jp/guide/season/koyo/',
  west: 'https://kisetsu.jr-odekake.net/result/MMJ/A1005?lang=ja',
  jma: 'https://www.jma.go.jp/bosai/forecast/data/forecast/260000.json',
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
    "visit": "11/29",
    "observed": "11/26",
    "status": "已见頃",
    "start": null,
    "fall": null,
    "tone": "watch",
    "tag": "提前至11/29",
    "advice": "JR西日本11/26报见頃。提前至11/29午后，目标13:30到寺，周日预留排队；不是因午后雨概率明显优于12/4而换日。",
    "url": "https://kisetsu.jr-odekake.net/result/MMJ/A1005?lang=ja",
    "provider": "JR西日本·红叶报道"
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
    "visit": "12/04可选",
    "observed": "11/24",
    "status": "已见頃 · 约七至八成",
    "start": null,
    "fall": "12/02",
    "tone": "steady",
    "tag": "大阪机动",
    "advice": "11/29上午改休息，公园改为12/4大阪自由日的可选活动；叶况仅为11/24观察，不保证12/4仍在树上高峰。",
    "url": "https://weathernews.jp/koyo/spot/26207/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26207/",
    "forecastChecked": "11/27"
  }
];
const DAY_CONDITIONS = {
  "11.28": {
    "leaf": "晚间抵达，入住大阪休息。",
    "weather": "气象厅11/28 11:00：大阪市／府（抵达参考） 19/—°C，降雨概率30%（晚间）。18–24时30%；西风偏强。市区温度不等同机场实测。"
  },
  "11.29": {
    "leaf": "东福寺从12/4前移到今天午后，JR西日本11/26仍报见頃；周日只安排这一寺。",
    "weather": "气象厅11/28 11:00：京都市／南部 12/7°C，降雨概率30%（午后）。06–12时50%、12–18时30%、18–24时10%；午后东福寺，带防风外套与小伞。"
  },
  "11.30": {
    "leaf": "真如堂、天授庵11/26仍为见頃，清水寺11/25见頃。保留夜场末日。",
    "weather": "气象厅11/28 11:00：京都市／南部 16/4°C，降雨概率10%。晴间多云；清水寺夜场注意保暖。"
  },
  "12.01": {
    "leaf": "永观堂11/26已见頃，建议提前一天；下午留给换酒店与休息。",
    "weather": "气象厅11/28 11:00：京都市／南部 19/8°C，降雨概率20%（A）。晴间多云；永观堂与哲学之道南段保留。"
  },
  "12.02": {
    "leaf": "常寂光寺、宝筐院仍报见頃；两座庭园与14:30小火车合并，减少东西横穿。",
    "weather": "气象厅11/28 11:00：京都市／南部 18/9°C，降雨概率20%（A）。晴间多云；此温度不是龟冈点位预报，14:00前到小火车龟冈站。"
  },
  "12.03": {
    "leaf": "瑠璃光院、莲华寺、圆光寺11/26均报见頃；保留两场预约。",
    "weather": "气象厅11/28 11:00：京都市／南部 17/9°C，降雨概率40%（B）。多云；两场预约保留，若下雨省略圆光寺后山。"
  },
  "12.04": {
    "leaf": "东福寺已前移至11/29。默认留大阪休息、散步或购物；若11/29未完成才补位。",
    "weather": "气象厅11/28 11:00：大阪市／府 19/12°C，降雨概率30%（B）。多云间晴；默认大阪自由日。东福寺只在11/29未完成时补位。"
  },
  "12.05": {
    "leaf": "大阪退房，直接前往关西机场。",
    "weather": "气象厅11/28 11:00：大阪市／府（返程参考） 18/12°C，降雨概率50%（C）。阴间有雨；较远期仍可变化，市区温度不等同机场点位。"
  }
};
const TRIP_WEATHER = {
  "11.28": [
    "大阪市／府（抵达参考）",
    19,
    "—",
    30,
    "晚间",
    "18–24时30%；西风偏强。市区温度不等同机场实测。"
  ],
  "11.29": [
    "京都市／南部",
    12,
    7,
    30,
    "午后",
    "06–12时50%、12–18时30%、18–24时10%；午后东福寺，带防风外套与小伞。"
  ],
  "11.30": [
    "京都市／南部",
    16,
    4,
    10,
    "",
    "晴间多云；清水寺夜场注意保暖。"
  ],
  "12.01": [
    "京都市／南部",
    19,
    8,
    20,
    "A",
    "晴间多云；永观堂与哲学之道南段保留。"
  ],
  "12.02": [
    "京都市／南部",
    18,
    9,
    20,
    "A",
    "晴间多云；此温度不是龟冈点位预报，14:00前到小火车龟冈站。"
  ],
  "12.03": [
    "京都市／南部",
    17,
    9,
    40,
    "B",
    "多云；两场预约保留，若下雨省略圆光寺后山。"
  ],
  "12.04": [
    "大阪市／府",
    19,
    12,
    30,
    "B",
    "多云间晴；默认大阪自由日。东福寺只在11/29未完成时补位。"
  ],
  "12.05": [
    "大阪市／府（返程参考）",
    18,
    12,
    50,
    "C",
    "阴间有雨；较远期仍可变化，市区温度不等同机场点位。"
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
    "date": "11/29 午后",
    "text": "普通日间无需预约；11/29目标13:30到受付，先通天桥／开山堂、后方丈，两区分别购票。16:00停止受付、16:30闭门；周日可能排队和限拍。12/4仅在11/29未完成时补位。",
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
      <div class="section-top"><div><p class="kicker">AUTUMN WATCH / 2026</p><h2 id="conditions-title">红叶与天气</h2></div><time class="snapshot-date" datetime="${CONDITIONS_UPDATED}">11 月 28 日更新</time></div>
      <p class="conditions-intro">京都日游 11/29午后—12/3 · 12/4大阪机动 · 天气11/28核对；红叶实况日期见各行</p>
      <div class="conditions-highlights">
        <article class="condition-card tone-steady"><h3>11/30 · 洛东与清水寺</h3><p>真如堂、天授庵、清水寺已报见頃。保留日间两寺和清水寺夜间末场。</p><button data-goday="2">查看当天 ↗</button></article>
        <article class="condition-card tone-steady"><h3>12/1 · 永观堂</h3><p>11/26仍报见頃。建议提前一天，岚山两寺并到12/2，与小火车衔接。</p><button data-goday="3">查看当天 ↗</button></article>
        <article class="condition-card tone-watch"><h3>11/29 · 午后东福寺</h3><p>从12/4前移；目标13:30到寺。京都午后30%，周日预留排队；12/4留作大阪自由日。</p><button data-goday="1">查看当天 ↗</button></article>
      </div>
      <details class="conditions-details" open><summary>12/2 · 岚山小火车</summary>
        <p>12/2 14:30龟冈 → 14:56嵯峨，普通单程票成人2位已确认。保津峡11/26见頃；气象厅11/28预报京都市18/9°C、20%，不作为龟冈点位温度。上午两座庭园，13:00前后从JR嵯峨岚山经马堀步行到小火车龟冈，14:00前到站。</p>
        <div class="conditions-links">${conditionsSource('https://www.sagano-kanko.co.jp/train-info/','运行时刻')} · ${conditionsSource('https://weathernews.jp/onebox/tenki/kyoto/26206/week.html','龟冈天气')}</div>
      </details>
      <div class="section-top conditions-section-head"><h3>逐景点近况</h3><span class="subtle">实况日期见各行 · 行程判断为本手册建议</span></div>
      <div class="foliage-scroll"><table class="foliage-table"><caption class="visually-hidden">景点红叶实况、预测和到访建议</caption><thead><tr><th>景点 / 到访</th><th>最新实况</th><th>日期预测</th><th>行程建议</th></tr></thead><tbody>${FOLIAGE.map(p => `<tr><th scope="row">${PLACES.some(x=>x.id===p.id)?`<button data-place="${p.id}">${esc(p.name)} ↗</button>`:esc(p.name)}<small>${esc(p.visit)} 到访</small></th><td><strong>${esc(p.status)}</strong><small>${esc(p.observed)} · ${conditionsSource(p.url,p.provider)}</small></td><td>${esc(foliageForecast(p))}<small>${p.forecastUrl ? conditionsSource(p.forecastUrl,'Weathernews · '+p.forecastChecked+'复核') : '以现场照片与官网复核'}</small></td><td><span class="condition-tag tone-${p.tone}">${esc(p.tag)}</span><p>${esc(p.advice)}</p></td></tr>`).join('')}</tbody></table></div>
      <p class="conditions-footnote">实况日期见各行。落叶起点为预估，各庭园与坡向进度不同。景点配图为往年实拍。</p>
      <div class="conditions-section-head section-top"><h3>天气</h3><span class="subtle">日本当地时间</span></div>
      <div class="weather-grid">
        <article class="weather-card"><h3>京都 · 气象厅新版预报</h3><p>11/28 11:00日本时间发布：11/29京都12/7°C，午后降雨30%；11/30晴间多云16/4°C、10%；12/1晴间多云19/8°C、20%；12/2晴间多云18/9°C、20%；12/3阴17/9°C、40%。</p><small>${conditionsSource(FOLIAGE_SOURCES.jma,'气象厅 · 京都')}</small></article>
        <article class="weather-card"><h3>大阪与返程 · 气象厅</h3><p>11/28 11:00发布：今晚大阪府18–24时30%；12/4大阪19/12°C、30%；12/5大阪18/12°C、50%，可信度C、仍可变化。这里是大阪市／府数据，不是关西机场逐小时点位预报。</p><small>${conditionsSource('https://www.jma.go.jp/bosai/forecast/data/forecast/270000.json','气象厅 · 大阪')}</small></article>
      </div>
      <details class="conditions-details" open><summary>逐日天气 · 11/28—12/5（气象厅）</summary>
      <div class="foliage-scroll"><table class="weather-table"><thead><tr><th>日期</th><th>地区</th><th>最高 / 最低</th><th>降雨概率</th><th>准备</th></tr></thead><tbody>
      ${Object.entries(TRIP_WEATHER).map(([date,[region,hi,lo,rain,confidence,action]]) => `<tr><td>${esc(date)}</td><td>${esc(region)}</td><td>${hi} / ${lo}°C</td><td>${rain}%${confidence ? ' · '+confidence : ''}</td><td>${esc(action)}</td></tr>`).join('')}
      </tbody></table></div><p class="conditions-footnote">气象厅11/28 11:00发布，日本当地日期；11/29概率取京都12–18时。11/28和12/5为大阪市／府参考，非机场点位；远期可信度A较高、C较低。</p></details>
      <details class="conditions-details"><summary>旅行期常年气温 · 打包参考</summary><div class="foliage-scroll"><table class="weather-table"><thead><tr><th>地区</th><th>时段</th><th>平均日最高</th><th>平均日最低</th></tr></thead><tbody><tr><td>京都</td><td>11 月下旬</td><td>15.3°C</td><td>6.5°C</td></tr><tr><td>京都</td><td>12 月上旬</td><td>13.3°C</td><td>4.7°C</td></tr><tr><td>大阪</td><td>11 月下旬</td><td>15.9°C</td><td>8.4°C</td></tr><tr><td>大阪</td><td>12 月上旬</td><td>13.9°C</td><td>6.7°C</td></tr></tbody></table></div><p class="conditions-footnote">1991—2020 常年值，非本次旅行逐日预报。${conditionsSource(FOLIAGE_SOURCES.kyoto,'京都')} · ${conditionsSource(FOLIAGE_SOURCES.osaka,'大阪')}</p></details>
      <div class="utility-grid conditions-utilities"><div class="utility"><div class="label">随身</div><p>保暖中层＋防风外套；夜枫、峡谷加围巾，书院带厚袜。小伞与防滑步行鞋。</p></div><div class="utility"><div class="label">风雨 / 叶量不足</div><p>强风雨前优先看树上红叶；雨后看落叶与池景。晚红叶备选：下鸭神社糺之森、建仁寺潮音庭；先看当期照片再决定。</p></div><div class="utility"><div class="label">复核时间</div><p>出门前查逐小时降雨。11/29重点看东福寺13:30前后的降雨与入场；12/5重点看关西机场上午。</p></div></div>
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

