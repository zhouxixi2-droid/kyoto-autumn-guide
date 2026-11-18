// Manual snapshot: 2026-11-17, Asia/Shanghai. Source observation dates are kept separately.
const CONDITIONS_UPDATED = '2026-11-17';
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
  {id:'shinnyodo', name:'真如堂', visit:'11/30', observed:'11/16', status:'部分见頃', start:null, fall:null, tone:'steady', tag:'保留原日', advice:'保留 11/30；到访前复核塔前与本堂后侧的新照。', url:FOLIAGE_SOURCES.jr, provider:'JR 东海·现场照片'},
  {id:'kiyomizu', name:'清水寺', visit:'11/30', observed:'11/16', status:'约四成变色', start:'11/22', fall:'12/07', tone:'steady', tag:'窗口较合适', advice:'11/30 在当前预测窗口内，保留最后一晚夜枫。', url:'https://weathernews.jp/koyo/spot/26112/', provider:'Weathernews'},
  {id:'tofukuji', name:'东福寺', visit:'12/04', observed:'11/16', status:'约两成变色', start:'11/26', fall:'12/13', tone:'steady', tag:'窗口较合适', advice:'当前预测见頃起点为 11/26，12/4 仍在当前预测窗口内，保留普通日间参拜。', url:'https://weathernews.jp/koyo/spot/26111/', provider:'Weathernews'},
  {id:'tenjuan', name:'天授庵', visit:'12/02', observed:'11/16', status:'已见頃', start:null, fall:null, tone:'watch', tag:'偏晚风险', advice:'已较早进入见頃。11/25–26 复核；若落叶加快，12/2 缩短天授庵停留，主看永观堂。', url:FOLIAGE_SOURCES.jr, provider:'JR 东海·现场照片'},
  {id:'eikando', name:'永观堂', visit:'12/02', observed:'11/16', status:'约三成变色', start:'11/23', fall:'12/05', tone:'steady', tag:'保留原日', advice:'12/2 在当前预测窗口后段；若遇强风雨，优先赶在风雨前到访。', url:'https://weathernews.jp/koyo/spot/26120/', provider:'Weathernews'},
  {id:'rurikoin', name:'瑠璃光院', visit:'12/03', observed:'11/16', status:'开始变色', start:null, fall:null, tone:'review', tag:'月底复核', advice:'保留原预约时段。尚无核实到的逐日见頃预测，月底查看书院庭园新照。', url:FOLIAGE_SOURCES.jr, provider:'JR 东海·现场照片'},
  {id:'rengeji', name:'莲华寺', visit:'12/03', observed:'11/16', status:'部分见頃', start:null, fall:null, tone:'review', tag:'月底复核', advice:'与瑠璃光院顺路保留；月底复核池庭叶量，再决定停留长短。', url:FOLIAGE_SOURCES.jr, provider:'JR 东海·现场照片'},
  {id:'enkoji', name:'圆光寺', visit:'12/03', observed:'11/17', status:'约六成变色', start:'11/21', fall:'12/06', tone:'review', tag:'窗口后段', advice:'12/3 接近当前预测窗口后段，保留预约；月底重点查看十牛之庭叶量。', url:'https://weathernews.jp/koyo/spot/26114/', provider:'Weathernews'},
  {id:'houkyoin', name:'宝筐院', visit:'12/01', observed:'11/16', status:'约三成变色', start:'11/23', fall:'12/06', tone:'steady', tag:'提前三天', advice:'改到12/1，较原安排提前三天，仍在当前预测窗口内；早到拍树上红叶与苔地落叶。', url:'https://weathernews.jp/koyo/spot/26102/', provider:'Weathernews'},
  {id:'jojakkoji', name:'常寂光寺', visit:'12/01', observed:'11/14', status:'约三成变色', start:'11/23', fall:'12/10', tone:'steady', tag:'提前三天', advice:'12/1 在当前预测窗口内；这条实况较旧，出发前需再次核对。', url:'https://weathernews.jp/koyo/spot/26134/', provider:'Weathernews'},
  {id:'arashiyama', name:'岚山整体', visit:'12/01', observed:'11/17', status:'见頃·约七至八成', start:null, fall:'11/30', tone:'watch', tag:'较早落叶风险', advice:'提前到12/1仍可能进入散红叶阶段。寺院与保津峡单独判断，不以区域预测代替各景点实况。', url:'https://weathernews.jp/koyo/spot/26101/', provider:'Weathernews'},
  {id:'hozukyo', name:'保津峡·小火车沿线', visit:'12/01', observed:'11/17', status:'开始变色', start:null, fall:null, tone:'review', tag:'沿线单独复核', advice:'保留既定小火车行程；峡谷与岚山区域进度有差异，目前不能保证 12/1 全线盛红。', url:FOLIAGE_SOURCES.west, provider:'JR 西日本'},
  {id:'osakacastle', name:'大阪城公园', visit:'11/29', observed:'11/16', status:'见頃·约七至八成', start:null, fall:'12/02', tone:'steady', tag:'保留原日', advice:'11/29 仍早于预计落叶起点，上午保留公园散步；不同树种进度不一。', url:'https://weathernews.jp/koyo/spot/26207/', provider:'Weathernews'}
];
const DAY_CONDITIONS = {
  '11.28': {leaf:'晚间抵达大阪，以入住、休息为主。', weather:'逐日预报待更新；夜间随身带保暖外套。'},
  '11.29': {leaf:'大阪城 11/16 已见頃，预计 12/2 开始落叶；保留上午公园散步。', weather:'逐日预报待更新；若雨量较大，缩短室外散步，转梅田或心斋桥。'},
  '11.30': {leaf:'真如堂已部分见頃；清水寺预计 11/22 起见頃、12/7 起落叶，保留当天组合。', weather:'逐日预报待更新；夜枫带保暖中层、小伞，湿石阶慢行。'},
  '12.01': {leaf:'整天岚山提前三天：宝筐院、常寂光寺仍在11/17预测窗口内；区域与保津峡进度分开判断，不能保证全线盛红。', weather:'逐日预报待更新；峡谷带防风外套。强风雨先查运行公告，14:00前到小火车龟冈站。'},
  '12.02': {leaf:'天授庵 11/16 已见頃，12/2 有偏晚风险；永观堂预计 12/5 起落叶，作为当天重点。', weather:'逐日预报待更新；小雨保留池庭，强雨转室内休息。若天授庵叶量少，可缩短停留，留时给永观堂。'},
  '12.03': {leaf:'瑠璃光院仍在初染，莲华寺部分见頃；圆光寺约六成变色、预计 12/6 起落叶。保留预约，月底复核。', weather:'逐日预报待更新；洛北清晨及书院地板注意保暖，带厚袜，园路湿滑时缩短室外停留。'},
  '12.04': {leaf:'东福寺预计11/26起见頃、12/13起落叶，12/4仍在当前预测窗口内。保留08:30普通日间参拜，下午留作补位与返程准备。', weather:'逐日预报待更新；早出带保暖外套。雨天优先本坊庭园与京都站室内休息。'},
  '12.05': {leaf:'返程日不再加赏枫点，保留机场交通余量。', weather:'逐日预报待更新；出发前查 HARUKA 与机场运行信息。'}
};
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
  return `<aside class="day-conditions"><div class="conditions-label"><strong>红叶 · 天气</strong><button data-view="conditions">11/17 更新 ↗</button></div><p><span>红叶</span>${esc(note.leaf)}</p><p><span>天气</span>${esc(note.weather)}</p></aside>`;
}
function renderPlaceConditions(id) {
  const p = FOLIAGE.find(x => x.id === (id === 'sagano' ? 'hozukyo' : id));
  if (!p) return '';
  return `<section class="place-conditions tone-${p.tone}"><div class="conditions-label"><strong>红叶近况</strong><span>${esc(p.observed)} 实况</span></div><p><b>${esc(p.status)}</b> · ${esc(foliageForecast(p))}</p><p>${esc(p.advice)}</p><div class="conditions-links">${conditionsSource(p.url, p.provider)}<button data-view="conditions" data-close-place="true">全部近况 ↗</button></div></section>`;
}
function renderConditions() {
  const weatherRows = [['11/19','多云间晴',13,4,20],['11/20','多云间晴',10,2,30],['11/21','多云间晴',10,2,30],['11/22','多云间晴',11,1,30],['11/23','晴间多云',14,0,20],['11/24','多云短时雨',15,5,50]];
  $('#content').innerHTML = `
    <section class="conditions-page" aria-labelledby="conditions-title">
      <div class="section-top"><div><p class="kicker">AUTUMN WATCH / 2026</p><h2 id="conditions-title">红叶与天气</h2></div><time class="snapshot-date" datetime="${CONDITIONS_UPDATED}">11 月 17 日更新</time></div>
      <p class="conditions-intro">京都 11/30—12/4 · 大阪 11/28—29 · 12/5 返程；11/18调整路线：12/1岚山、12/4东福寺</p>
      <div class="conditions-highlights">
        <article class="condition-card tone-steady"><span class="condition-index">01 / 保留</span><h3>东福寺 · 12/4</h3><p>预计 11/26 起见頃、12/13 起落叶，调整后仍在当前预测窗口内。</p><button data-goday="6">查看当天 ↗</button></article>
        <article class="condition-card tone-watch"><span class="condition-index">02 / 优先复核</span><h3>天授庵 · 12/2</h3><p>11/16 已见頃。若月底落叶加快，12/2 缩短天授庵停留，主看永观堂。</p><button data-goday="4">查看当天 ↗</button></article>
        <article class="condition-card tone-review"><span class="condition-index">03 / 分区判断</span><h3>岚山 · 12/1</h3><p>整天提前三天；上午寺院、下午龟冈→嵯峨小火车。出发前分别查看庭园与保津峡叶量。</p><button data-goday="3">查看当天 ↗</button></article>
      </div>
      <div class="section-top conditions-section-head"><h3>逐景点近况</h3><span class="subtle">实况日期见各行 · 行程判断为本手册建议</span></div>
      <div class="foliage-scroll"><table class="foliage-table"><caption class="visually-hidden">景点红叶实况、预测和到访建议</caption><thead><tr><th>景点 / 到访</th><th>最新实况</th><th>日期预测</th><th>行程建议</th></tr></thead><tbody>${FOLIAGE.map(p => `<tr><th scope="row">${PLACES.some(x=>x.id===p.id)?`<button data-place="${p.id}">${esc(p.name)} ↗</button>`:esc(p.name)}<small>${esc(p.visit)} 到访</small></th><td><strong>${esc(p.status)}</strong><small>${esc(p.observed)} · ${conditionsSource(p.url,p.provider)}</small></td><td>${esc(foliageForecast(p))}<small>${p.start || p.fall ? '约略起点，随天气调整' : '以现场照片复核'}</small></td><td><span class="condition-tag tone-${p.tone}">${esc(p.tag)}</span><p>${esc(p.advice)}</p></td></tr>`).join('')}</tbody></table></div>
      <p class="conditions-footnote">“开始落叶”不等于观赏结束，散红叶也有看点。不同庭园、树种与坡向进度不同；以上是 11/17 查阅的静态快照，来源页会继续更新。现有景点配图为往年实拍。</p>
      <div class="conditions-section-head section-top"><h3>天气</h3><span class="subtle">日本当地时间</span></div>
      <div class="weather-grid">
        <article class="weather-card"><span class="condition-index">旅行期 / 区域趋势</span><h3>气温偏高倾向 · 晴日偏少</h3><p>近畿 11/28—12/11 平均气温：偏低 10% · 常年 40% · 偏高 50%。近畿太平洋侧 11/14—12/13 晴天预计少于常年，天气每隔数天变化。</p><p class="weather-limit">11/28—12/5 尚未进入本次核对的气象厅逐日预报范围，暂不填写每天晴雨、温度与降雨概率。</p><small>大阪管区气象台 11/12 14:30 发布；11/19 下次发布。${conditionsSource(FOLIAGE_SOURCES.outlook,'气象厅')} · ${conditionsSource(FOLIAGE_SOURCES.bulletin,'公告转载')}</small></article>
        <article class="weather-card"><span class="condition-index">当前一周 / 京都市</span><h3>11/19—23 早晚明显转冷</h3><p>白天最高 10—14°C，清晨最低 0—4°C。降温可能推动变色，实际速度仍须看现场叶况。</p><p>本段用于观察出发前的变化；旅行日期的逐日预报待后续发布。</p><small>气象厅 11/17 17:00 发布。${conditionsSource(FOLIAGE_SOURCES.jma,'京都最新预报')}</small></article>
      </div>
      <details class="conditions-details"><summary>查看当前一周逐日预报 · 11/19—24</summary><div class="foliage-scroll"><table class="weather-table"><thead><tr><th>日期</th><th>天气</th><th>最高 / 最低</th><th>降雨概率</th></tr></thead><tbody>${weatherRows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]} / ${r[3]}°C</td><td>${r[4]}%</td></tr>`).join('')}</tbody></table></div></details>
      <details class="conditions-details"><summary>旅行期常年气温 · 打包参考</summary><div class="foliage-scroll"><table class="weather-table"><thead><tr><th>地区</th><th>时段</th><th>平均日最高</th><th>平均日最低</th></tr></thead><tbody><tr><td>京都</td><td>11 月下旬</td><td>15.3°C</td><td>6.5°C</td></tr><tr><td>京都</td><td>12 月上旬</td><td>13.3°C</td><td>4.7°C</td></tr><tr><td>大阪</td><td>11 月下旬</td><td>15.9°C</td><td>8.4°C</td></tr><tr><td>大阪</td><td>12 月上旬</td><td>13.9°C</td><td>6.7°C</td></tr></tbody></table></div><p class="conditions-footnote">1991—2020 常年值，非本次旅行逐日预报。${conditionsSource(FOLIAGE_SOURCES.kyoto,'京都')} · ${conditionsSource(FOLIAGE_SOURCES.osaka,'大阪')}</p></details>
      <div class="utility-grid conditions-utilities"><div class="utility"><div class="label">随身</div><p>保暖中层＋防风外套；夜枫、峡谷加围巾，书院带厚袜。小伞与防滑步行鞋。</p></div><div class="utility"><div class="label">风雨 / 叶量不足</div><p>强风雨前优先看树上红叶；雨后看落叶与池景。晚红叶备选：下鸭神社糺之森、建仁寺潮音庭；先看当期照片再决定。</p></div><div class="utility"><div class="label">复核时间</div><p>11/19 看区域趋势；11/25—26 查天授庵、洛北与岚山新照及旅行期预报；出发前 48 小时查风雨与列车运行。</p></div></div>
      <div class="conditions-links conditions-bottom-links">${conditionsSource(FOLIAGE_SOURCES.jr,'JR 东海·现场照片与晚红叶参考')}${conditionsSource(FOLIAGE_SOURCES.west,'JR 西日本·保津峡')}${conditionsSource('https://www.sagano-kanko.co.jp/','小火车运行公告')}</div>
    </section>`;
}

