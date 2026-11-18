// Manual snapshot: 2026-11-18, Asia/Shanghai. Source observation dates are kept separately.
const CONDITIONS_UPDATED = '2026-11-18';
const FOLIAGE_SOURCES = {
  jr: 'https://souda-kyoto.jp/guide/season/koyo/',
  west: 'https://kisetsu.jr-odekake.net/result/MMJ/A1005?lang=ja',
  jma: 'https://www.data.jma.go.jp/yoho/data/jishin/met/kishoushien_Kyoto_Kyoto-shi.html',
  outlook: 'https://www.jma.go.jp/bosai/season/',
  bulletin: 'https://weather.basekernel.co.jp/sp/disaster/010600/month1.html',
  kyoto: 'https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_10d.php?block_no=47759&prec_no=61',
  osaka: 'https://www.data.jma.go.jp/stats/etrn/view/nml_sfc_10d.php?block_no=47772&prec_no=62'
};
const FOLIAGE = [
  {
    "id": "shinnyodo",
    "name": "真如堂",
    "visit": "11/30",
    "observed": "11/18",
    "status": "部分见頃",
    "start": null,
    "fall": null,
    "tone": "steady",
    "tag": "保留原日",
    "advice": "保留11/30上午；与已较早见頃的天授庵同日串联，三重塔和本堂后侧叶量到访前再复核。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "kiyomizu",
    "name": "清水寺",
    "visit": "11/30",
    "observed": "11/17",
    "status": "部分见頃",
    "start": "11/23",
    "fall": "12/08",
    "tone": "steady",
    "tag": "窗口较合适",
    "advice": "11/30保留夜间末场；Weathernews现预计11/23起见頃、12/8起落叶，仍属预测窗口。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR东海实拍；预测见右列",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26112/",
    "forecastChecked": "11/18"
  },
  {
    "id": "tofukuji",
    "name": "东福寺",
    "visit": "12/04",
    "observed": "11/18",
    "status": "部分见頃",
    "start": "11/26",
    "fall": "12/13",
    "tone": "steady",
    "tag": "窗口较合适",
    "advice": "12/4仍在Weathernews当前预测窗口内，保持08:30普通日间参拜；早朝没有新增预订。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR东海实拍；预测见右列",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26111/",
    "forecastChecked": "11/18"
  },
  {
    "id": "tenjuan",
    "name": "天授庵",
    "visit": "11/30",
    "observed": "11/16",
    "status": "已见頃",
    "start": null,
    "fall": null,
    "tone": "watch",
    "tag": "提前两天",
    "advice": "11/16已见頃，提前至11/30下午，减少逛街时间。若寄存或交通延误，再用12/2下午补位；提前是风险取舍，仍需看月底新照。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "eikando",
    "name": "永观堂",
    "visit": "12/02",
    "observed": "11/16",
    "status": "约三成变色",
    "start": "11/24",
    "fall": "12/06",
    "tone": "steady",
    "tag": "保留原日",
    "advice": "保留12/2，提前到09:00普通场；放生池与开放诸堂为主，卧龙廊、千佛堂关闭。",
    "url": "https://weathernews.jp/koyo/spot/26120/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26120/",
    "forecastChecked": "11/18"
  },
  {
    "id": "rurikoin",
    "name": "瑠璃光院",
    "visit": "12/03",
    "observed": "11/16",
    "status": "开始变色",
    "start": null,
    "fall": null,
    "tone": "review",
    "tag": "月底复核",
    "advice": "保留12/3已约时段；此次未核实到比11/16更新的同源实拍，不把旧照片改标成11/18。月底看书院庭园叶量。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "rengeji",
    "name": "莲华寺",
    "visit": "12/03",
    "observed": "11/16",
    "status": "部分见頃",
    "start": null,
    "fall": null,
    "tone": "review",
    "tag": "月底复核",
    "advice": "保留12/3瑠璃光院之后的顺路参拜；最新核实实拍仍为11/16，月底再看池庭叶量。",
    "url": "https://souda-kyoto.jp/guide/season/koyo/",
    "provider": "JR 东海·现场照片"
  },
  {
    "id": "enkoji",
    "name": "圆光寺",
    "visit": "12/03",
    "observed": "11/17",
    "status": "约六成变色",
    "start": "11/20",
    "fall": "12/05",
    "tone": "watch",
    "tag": "偏晚风险",
    "advice": "预测窗口较旧版提前1天，12/3靠近落叶起点；保留15:00预约，重点复核十牛之庭叶量，预计停留约1小时。",
    "url": "https://weathernews.jp/koyo/spot/26114/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26114/",
    "forecastChecked": "11/18"
  },
  {
    "id": "houkyoin",
    "name": "宝筐院",
    "visit": "12/01",
    "observed": "11/18",
    "status": "约四成变色",
    "start": "11/23",
    "fall": "12/06",
    "tone": "steady",
    "tag": "保留12/1",
    "advice": "11/18约四成变色，12/1仍在当前预测窗口内；安排在常寂光寺之后，10:40前后入寺。",
    "url": "https://weathernews.jp/koyo/spot/26102/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26102/",
    "forecastChecked": "11/18"
  },
  {
    "id": "jojakkoji",
    "name": "常寂光寺",
    "visit": "12/01",
    "observed": "11/18（官网标题）",
    "status": "已见頃；预计本周末盛期",
    "start": null,
    "fall": null,
    "tone": "watch",
    "tag": "偏晚风险",
    "advice": "官网标题11/18更新，预计11/21–22周末盛期；12/1可能偏后，改为09:00当天首站。官网新进展优先于11/14旧实况；本堂书院特开11/30结束。",
    "url": "https://jojakko-ji.or.jp/news/令和8年の紅葉予報（11-10）/",
    "provider": "常寂光寺官网"
  },
  {
    "id": "arashiyama",
    "name": "岚山整体",
    "visit": "12/01",
    "observed": "11/17",
    "status": "见頃·约七至八成",
    "start": null,
    "fall": "11/30",
    "tone": "watch",
    "tag": "较早落叶风险",
    "advice": "区域预计11/30起落叶，12/1仍可能偏后；保留整天提前的安排，常寂光寺先看，庭园与峡谷分开判断。",
    "url": "https://weathernews.jp/koyo/spot/26101/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26101/",
    "forecastChecked": "11/18"
  },
  {
    "id": "hozukyo",
    "name": "保津峡·小火车沿线",
    "visit": "12/01",
    "observed": "11/18",
    "status": "开始变色",
    "start": null,
    "fall": null,
    "tone": "review",
    "tag": "沿线单独复核",
    "advice": "JR西日本11/18仍报开始变色；保留12/1已确认的14:30列车，不能用岚山区域进度代表整条峡谷。",
    "url": "https://kisetsu.jr-odekake.net/result/MMJ/A1005?lang=ja",
    "provider": "JR 西日本"
  },
  {
    "id": "osakacastle",
    "name": "大阪城公园",
    "visit": "11/29",
    "observed": "11/16",
    "status": "见頃·约七至八成",
    "start": null,
    "fall": "12/02",
    "tone": "steady",
    "tag": "保留原日",
    "advice": "11/29保留上午公园；当前预计12/2起落叶，不同树种进度分别看。",
    "url": "https://weathernews.jp/koyo/spot/26207/",
    "provider": "Weathernews",
    "forecastUrl": "https://weathernews.jp/koyo/spot/26207/",
    "forecastChecked": "11/18"
  }
];
const DAY_CONDITIONS = {
  "11.28": {
    "leaf": "晚间抵达大阪，以入住、休息为主。",
    "weather": "旅行期逐日预报待发布；夜间随身带保暖外套。"
  },
  "11.29": {
    "leaf": "大阪城 11/16 已见頃，预计 12/2 开始落叶；保留上午公园散步。",
    "weather": "旅行期逐日预报待发布；若雨量较大，缩短室外散步，转梅田或心斋桥。"
  },
  "11.30": {
    "leaf": "天授庵已较早见頃，提前到今天13:30；真如堂上午、清水寺夜间末场继续保留，减少祇园逛街。",
    "weather": "尚无旅行日期的气象厅逐日预报；寺院间可打车，夜枫带保暖中层与防雨外套。若强雨或寄存延误，天授庵改12/2补位。"
  },
  "12.01": {
    "leaf": "常寂光寺官网11/18已报见頃、预计本周末盛期，今天09:00优先看；宝筐院11/18约四成变色，10:40随后参拜。",
    "weather": "旅行期逐日预报待发布；峡谷带防风外套。强风雨先查小火车运行公告，14:00前到龟冈站。"
  },
  "12.02": {
    "leaf": "永观堂预计11/24起见頃、12/6起落叶，09:00普通场作为重点；天授庵已移至11/30，今天只作未能成行的补位。",
    "weather": "旅行期逐日预报待发布；雨天减少水路阁停留，夜枫可删，保留室内休息。"
  },
  "12.03": {
    "leaf": "瑠璃光院最新核实实拍仍为11/16初染；圆光寺预测11/20起见頃、12/5起落叶，保持已约时段，月底重点复核。",
    "weather": "旅行期逐日预报待发布；洛北晨间与书院地板保暖，带厚袜；园路湿滑时缩短室外停留。"
  },
  "12.04": {
    "leaf": "东福寺预计11/26起见頃、12/13起落叶，12/4仍在当前预测窗口内。保留08:30普通日间参拜，下午留作补位与返程准备。",
    "weather": "旅行期逐日预报待发布；早出带保暖外套。雨天优先本坊庭园与京都站室内休息。"
  },
  "12.05": {
    "leaf": "返程日不再加赏枫点，保留机场交通余量。",
    "weather": "旅行期逐日预报待发布；出发前查 HARUKA 与机场运行信息。"
  }
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
  return `<aside class="day-conditions"><div class="conditions-label"><strong>红叶 · 天气</strong><button data-view="conditions">11/18 更新 ↗</button></div><p><span>红叶</span>${esc(note.leaf)}</p><p><span>天气</span>${esc(note.weather)}</p></aside>`;
}
function renderPlaceConditions(id) {
  const p = FOLIAGE.find(x => x.id === (id === 'sagano' ? 'hozukyo' : id));
  if (!p) return '';
  return `<section class="place-conditions tone-${p.tone}"><div class="conditions-label"><strong>红叶近况</strong><span>${esc(p.observed)} 实况</span></div><p><b>${esc(p.status)}</b> · ${esc(foliageForecast(p))}</p><p>${esc(p.advice)}</p><div class="conditions-links">${conditionsSource(p.url, p.provider)}<button data-view="conditions" data-close-place="true">全部近况 ↗</button></div></section>`;
}
function renderConditions() {
  const weatherRows = [['11/19','多云间晴',13,8,10],['11/20','多云间晴',10,2,30],['11/21','多云间晴',10,2,30],['11/22','多云间晴',11,1,30],['11/23','晴间多云',14,0,20],['11/24','多云短时雨',14,6,60],['11/25','多云间晴',15,5,30]];
  $('#content').innerHTML = `
    <section class="conditions-page" aria-labelledby="conditions-title">
      <div class="section-top"><div><p class="kicker">AUTUMN WATCH / 2026</p><h2 id="conditions-title">红叶与天气</h2></div><time class="snapshot-date" datetime="${CONDITIONS_UPDATED}">11 月 18 日更新</time></div>
      <p class="conditions-intro">京都 11/30—12/4 · 大阪 11/28—29 · 12/5 返程；11/18复核：天授庵提前11/30，12/1岚山，12/4东福寺</p>
      <div class="conditions-highlights">
        <article class="condition-card tone-watch"><span class="condition-index">01 / 提前</span><h3>天授庵 · 11/30</h3><p>11/16已见頃，提前两天至抵达京都当天下午；减少逛街，保留清水寺夜间末场。</p><button data-goday="2">查看当天 ↗</button></article>
        <article class="condition-card tone-watch"><span class="condition-index">02 / 庭园优先</span><h3>常寂光寺 · 12/1</h3><p>官网11/18报见頃，预计本周末盛期。09:00先看；本堂书院特开11/30结束，12/1以庭园为主。</p><button data-goday="3">查看当天 ↗</button></article>
        <article class="condition-card tone-steady"><span class="condition-index">03 / 保留</span><h3>永观堂12/2 · 东福寺12/4</h3><p>均保留普通日间安排；永观堂改09:00早到。洛北12/3已约时段不动，月底再核实叶量。</p><button data-goday="4">永观堂当天 ↗</button></article>
      </div>
      ${renderTempleAnnouncements(true)}
      <div class="section-top conditions-section-head"><h3>逐景点近况</h3><span class="subtle">实况日期见各行 · 行程判断为本手册建议</span></div>
      <div class="foliage-scroll"><table class="foliage-table"><caption class="visually-hidden">景点红叶实况、预测和到访建议</caption><thead><tr><th>景点 / 到访</th><th>最新实况</th><th>日期预测</th><th>行程建议</th></tr></thead><tbody>${FOLIAGE.map(p => `<tr><th scope="row">${PLACES.some(x=>x.id===p.id)?`<button data-place="${p.id}">${esc(p.name)} ↗</button>`:esc(p.name)}<small>${esc(p.visit)} 到访</small></th><td><strong>${esc(p.status)}</strong><small>${esc(p.observed)} · ${conditionsSource(p.url,p.provider)}</small></td><td>${esc(foliageForecast(p))}<small>${p.forecastUrl ? conditionsSource(p.forecastUrl,'Weathernews · 11/18复核') : '以现场照片与官网复核'}</small></td><td><span class="condition-tag tone-${p.tone}">${esc(p.tag)}</span><p>${esc(p.advice)}</p></td></tr>`).join('')}</tbody></table></div>
      <p class="conditions-footnote">“开始落叶”不等于观赏结束，散红叶也有看点。不同庭园、树种与坡向进度不同；11/18核对，实况仍保留各自的实际观察日期，预测不等于到访当天保证。来源页会继续更新。现有景点配图为往年实拍。</p>
      <div class="conditions-section-head section-top"><h3>天气</h3><span class="subtle">日本当地时间</span></div>
      <div class="weather-grid">
        <article class="weather-card"><span class="condition-index">旅行期 / 区域趋势</span><h3>气温偏高倾向 · 晴日偏少</h3><p>11/12发布、11/18复核的区域趋势：近畿11/28—12/11平均气温：偏低 10% · 常年 40% · 偏高 50%。近畿太平洋侧 11/14—12/13 晴天预计少于常年，天气每隔数天变化。</p><p class="weather-limit">截至11/18 17:00，已核对的气象厅逐日预报只到11/25，11/28—12/5尚未覆盖。两周气温产品是五日平均，不能写成每天晴雨或降雨概率。</p><small>大阪管区气象台 11/12 14:30 发布；11/19预计发布下一期。${conditionsSource(FOLIAGE_SOURCES.outlook,'气象厅')} · ${conditionsSource(FOLIAGE_SOURCES.bulletin,'公告转载')}</small></article>
        <article class="weather-card"><span class="condition-index">当前一周 / 京都市</span><h3>11/20—23 冷 · 11/24 有雨信号</h3><p>京都11/20—23最高10—14°C、最低0—2°C；11/24短时雨概率由旧版50%调到60%，预计14/6°C。降温可能推动变色，雨后叶量需重新看，不能据此断定旅行时下雨。</p><p>本段用于观察出发前的变化；旅行日期的逐日预报待后续发布。</p><small>气象厅11/18 17:00发布。${conditionsSource(FOLIAGE_SOURCES.jma,'京都最新预报')}</small></article>
      </div>
      <details class="conditions-details"><summary>查看当前一周逐日预报 · 11/19—25</summary><div class="foliage-scroll"><table class="weather-table"><thead><tr><th>日期</th><th>天气</th><th>最高 / 最低</th><th>降雨概率</th></tr></thead><tbody>${weatherRows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]} / ${r[3]}°C</td><td>${r[4]}%</td></tr>`).join('')}</tbody></table></div></details>
      <details class="conditions-details" open><summary>旅行日期 · 当前能确认的范围</summary><div class="foliage-scroll"><table class="weather-table"><thead><tr><th>日期</th><th>地区 / 行程</th><th>逐日天气</th><th>出行准备</th></tr></thead><tbody>${DAYS.map(d=>`<tr><td>${esc(d.date)}</td><td>${esc(d.area)}</td><td>尚未进入本次气象厅一周预报</td><td>${esc(DAY_CONDITIONS[d.date].weather)}</td></tr>`).join('')}</tbody></table></div><p class="conditions-footnote">区域趋势、常年值、旅行日期的逐日预报分开呈现；不将出发前一周的降雨概率填到行程日期。${conditionsSource('https://www.data.jma.go.jp/cpd/twoweek/','气象厅两周气温（五日平均）')} · ${conditionsSource('https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=270000','大阪官方预报')}</p></details>
      <details class="conditions-details"><summary>旅行期常年气温 · 打包参考</summary><div class="foliage-scroll"><table class="weather-table"><thead><tr><th>地区</th><th>时段</th><th>平均日最高</th><th>平均日最低</th></tr></thead><tbody><tr><td>京都</td><td>11 月下旬</td><td>15.3°C</td><td>6.5°C</td></tr><tr><td>京都</td><td>12 月上旬</td><td>13.3°C</td><td>4.7°C</td></tr><tr><td>大阪</td><td>11 月下旬</td><td>15.9°C</td><td>8.4°C</td></tr><tr><td>大阪</td><td>12 月上旬</td><td>13.9°C</td><td>6.7°C</td></tr></tbody></table></div><p class="conditions-footnote">1991—2020 常年值，非本次旅行逐日预报。${conditionsSource(FOLIAGE_SOURCES.kyoto,'京都')} · ${conditionsSource(FOLIAGE_SOURCES.osaka,'大阪')}</p></details>
      <div class="utility-grid conditions-utilities"><div class="utility"><div class="label">随身</div><p>保暖中层＋防风外套；夜枫、峡谷加围巾，书院带厚袜。小伞与防滑步行鞋。</p></div><div class="utility"><div class="label">风雨 / 叶量不足</div><p>强风雨前优先看树上红叶；雨后看落叶与池景。晚红叶备选：下鸭神社糺之森、建仁寺潮音庭；先看当期照片再决定。</p></div><div class="utility"><div class="label">复核时间</div><p>11/19看新区域趋势；11/24雨后再查常寂光寺、天授庵与圆光寺新照；11/25—26检查覆盖到的旅行日期预报，出发前48小时复核运行。</p></div></div>
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
