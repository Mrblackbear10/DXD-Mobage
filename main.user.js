// ==UserScript==
// @name           DxD Mobage English Translation
// @namespace      DxD
// @description    DxD Mobage Japanese > English translation
// @include        http://g12014827.sp.pf.mbga.jp/*
// @include        https://g12014827.sp.pf.mbga.jp/*
// @version        0.3
// @icon           http://dxdmobage.xp3.biz/ico.ico
// @downloadURL    https://raw.githubusercontent.com/Tracehunter/DXD-Mobage/master/main.js
// @updateURL      https://raw.githubusercontent.com/Tracehunter/DXD-Mobage/master/main.js
// ==/UserScript==
/*jshint multistr: true */

//// Main menu reconstruction, to be able to use specific buttons.
$('.modalMenuBtn').html('<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_list.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/CardList.png" alt="カード" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_deck.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Decks.png" alt="デッキ" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_composition.html%3Faction%3Dequipment%26chkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/upgrade.png" alt="強化" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_composition.html%3Faction%3Dbalance_break%26chkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Balance%20Breaker.png" alt="バランス・ブレイク" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_reborn.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Reborn.png" alt="転生進化" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_storage_list.html%3Faction%3Dplural%26chkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Collection.png" alt="カードコレクション" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_album.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Album.png" alt="アルバム" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fitem.html%3Flist_type%3D6%26chkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Inventory.png" alt="アイテム" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fguild_top.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Guild.png" alt="ギルド" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Ffriend_list.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Friendlist.png" alt="友達" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fprofile.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Profile.png" alt="プロフィール" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Finvitation.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/RAF.png" alt="招待" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fpresent.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Giftbox.png" alt="プレゼントBOX" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html"><img src="http://dxdmobage.xp3.biz/Help.png" alt="ヘルプ" width="67" height="44"></a></li> \
		<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fannounce.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Announces.png" alt="運営からのお知らせ" width="67" height="44"></a></li> \
		<li><a target="_blank" href="https://dxdmobage.wordpress.com/"><img src="http://dxdmobage.xp3.biz/Guide.png" alt="運営からのお知らせ" width="67" height="44"></a></li>');

//// Some Friend Gacha reconstruction, skip animation is always ON.
$('#tpl_gacha-normal > section:nth-child(11) > ul:nth-child(8)').html('<li class="btnWhite btnMiddle"><a onclick="goNext(\'110\',10, \'skip_animation_plural\')">Draw 10 Cards for 1000 FP</a></li><br><li><input style="visibility: hidden;" id="skip_animation_single" value="off" checked="checked"></li>');
$('#tpl_gacha-normal > section:nth-child(11) > ul:nth-child(6)').html('<li class="btnWhite btnMiddle"><a onclick="goNext(\'110\', 1, \'skip_animation_single\')">Draw 1 Card for 100 FP</a></li><br><li><input style="visibility: hidden;" id="skip_animation_plural" value="off" checked="checked"></li>');
$('#tpl_gacha-complete > section:nth-child(15) > ul:nth-child(3)').html('<li class="btnWhite btnMiddle"><a onclick="goNext(\'110\', 1, \'skip_animation_single\')">Draw 1 Card for 100 FP</a></li><br><li><input style="visibility: hidden;" id="skip_animation_plural" value="off" checked="checked"></li>');
$('#tpl_gacha-complete > section:nth-child(15) > ul:nth-child(5)').html('<li class="btnWhite btnMiddle"><a onclick="goNext(\'110\',10, \'skip_animation_plural\')">Draw 10 Cards for 1000 FP</a></li><br><li><input style="visibility: hidden;" id="skip_animation_single" value="off" checked="checked"></li>');

//// Sitri Gacha Gift Box.
$('#tpl_gacha-complete > section:nth-child(16) > ul.btnCenter.mt15').html('<li class="btnWhite btnMiddle"><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fpresent.html">Gift Box</a></li>');


//// Overriding some CSS to change background buttons.
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);}

addGlobalStyle('#container > section:nth-child(4) > nav > ul > li.normalBtn {padding-top: 40px;width: 95px;height: 55px;margin-left: 17px;background: url("http://dxdmobage.xp3.biz/Synthesis.png");-webkit-background-size: 100% auto;background-size: 100% auto;}');
addGlobalStyle('.btnSusumuLarge a {display: block;width: 202px;height: 46px;background: url("http://dxdmobage.xp3.biz/Action.png") no-repeat 0 0;-webkit-background-size: 100% auto;background-size: 100% auto;}');
addGlobalStyle('.mainContentBtn li:nth-child(5) {padding-top: 40px;width: 95px;height: 55px;margin-right: 18px;background: url("http://dxdmobage.xp3.biz/gacha.png");-webkit-background-size: 100% auto;background-size: 100% auto;}');
addGlobalStyle('#modalMenu > nav.modalMainContentBtn.bnr > ul > li.normalBtn {padding-top: 40px;width: 95px;height: 55px;margin-left: 17px;background: url("http://dxdmobage.xp3.biz/Synthesis.png");-webkit-background-size: 100% auto;background-size: 100% auto;}');
addGlobalStyle('.mainContentBtn li:nth-child(3) {padding-top: 40px;width: 95px;height: 55px;margin-left: 17px;background: url("http://dxdmobage.xp3.biz/Synthesis.png");-webkit-background-size: 100% auto;background-size: 100% auto;}');
addGlobalStyle('#gouseiRed {position: absolute; top: 1px; right: 2.5px; width: 43px; height: 16px; border-radius: 2px; overflow: hidden; pointer-events: none;background: url("http://dxdmobage.xp3.biz/XP2.png");-webkit-background-size: 100% auto;}');
addGlobalStyle('#gachaRed {position: absolute; top: 1px; right: 2.5px; width: 43px; height: 16px; border-radius: 2px; overflow: hidden; pointer-events: none;background: url("http://dxdmobage.xp3.biz/gacha2.png");-webkit-background-size: 100% auto;}');
addGlobalStyle('.btnGachaFree a {width: 202px;height: 45px;background: url("http://dxdmobage.xp3.biz/Freegacha.png") no-repeat 0 0;-webkit-background-size: 100% auto;background-size: 100% auto;}');
addGlobalStyle('.mainContentBtn li:nth-child(4) {padding-top: 40px;width: 95px;height: 55px;background: url("http://dxdmobage.xp3.biz/Evolution.png");-webkit-background-size: 100% auto;background-size: 100% auto;}');
addGlobalStyle('.mainContentBtn li:nth-child(1) {width: 160px;height: 59px;background: url("http://dxdmobage.xp3.biz/Quest.png");-webkit-background-size: 100% auto;background-size: 100% auto;}');
addGlobalStyle('.mainContentBtn li:nth-child(2) {width: 160px;height: 59px;background: url("http://dxdmobage.xp3.biz/PVP.png");-webkit-background-size: 100% auto;background-size: 100% auto;}');


//// Beginning of textstring changes listing.
var words = {
///// Main Page
    //// SITRI GACHA NOTES
    '最大戦闘力' : 'ATK Max:',
    '最大HP' : 'HP Max:',
    '禁手 バランス・ブレイカーBorN' : 'Balance Breaker (BorN)',
    'MAXレベルまで強化合成しているBorNカードに使用することで、レベル上限を1アップすることができます' : 'Using this item on a BorN card will increase his max level by 1. Note that there\'s a limit on how many levels you can add this way.',
    '禁手 バランス・ブレイカー∞' : 'Balance Breaker (∞)',
    'MAXレベルまで強化合成している∞カードに使用することで、レベル上限を1アップすることができます' : 'Using this item on a ∞ card will increase his max level by 1. Note that there\'s a limit on how many levels you can add this way.',
    '禁手 バランス・ブレイカーW' : 'Balance Breaker (W)',
    'MAXレベルまで強化合成しているWカードに使用することで、レベル上限を1アップすることができます' : 'Using this item on a W card will increase his max level by 1. Note that there\'s a limit on how many levels you can add this way.',
    '禁手 バランス・ブレイカーUR' : 'Balance Breaker (UR)',
    'MAXレベルまで強化合成しているURカードに使用することで、レベル上限を1アップすることができます' : 'Using this item on a UR card will increase his max level by 1. Note that there\'s a limit on how many levels you can add this way.',
    '禁手 バランス・ブレイカーSSR' : 'Balance Breaker (SSR)',
    'MAXレベルまで強化合成しているSSRカードに使用することで、レベル上限を1アップすることができます' : 'Using this item on a SSR card will increase his max level by 1. Note that there\'s a limit on how many levels you can add this way.',
    '禁手 バランス・ブレイカーSR' : 'Balance Breaker (SR)',
    'MAXレベルまで強化合成しているSRカードに使用することで、レベル上限を1アップすることができます' : 'Using this item on a SR card will increase his max level by 1. Note that there\'s a limit on how many levels you can add this way.',
    ' ※このアイテムではスキルレベルは上昇しませんのでご注意下さい' : 'Note that this material doesn\'t give experience to Skills.',

    '消費交換メダル:' : 'Medal cost: ',
    '交換制限:' : 'Qty Available:',
    '攻撃コスト上限:' : 'Offensive deck capacity: ',
    '防御コスト上限:' : 'Defensive deck capacity: ',
    '進行中のクエスト:' : 'Quest in progress: ',
    'ゲーム開始日:' : 'Joined on: ',
    '最大連続ログイン日数 :' : 'Daily login streak: ',
    'ログイン日数:' : 'Days played: ',
    '・ガチャは、ランダムでカードを獲得できます。1回の利用ごとに全ての出現カードが抽選対象となります。そのため、必ずしもご希望のカードが獲得できるとは限りません。また、ガチャで手に入るカードは重複する場合があります。' : 'The card you receive is randomly chosen. Therefore, it is not always possible to get the card you desire, and some card may not be available at a specific time.',
    '・ガチャのラインナップは変更になる場合があります。' : 'Lineup is subject to change.',
    '・ガチャの演出が最後まで表示されなかった場合、カード及びアイテムはプレゼントBOXへ正常に追加されていますのでご確認ください。' : 'Check if you received correctly the cards you got, if you have any problem, feel free to contact us.',
    '・ご購入頂いたガチャ・アイテムは届くまで時間がかかる場合がございますので、お時間をおいてプレゼントBOXをご確認ください。' : 'It may take some time for the cards to arrive in your Gift Box, if you don\'t see them, check later and contact support.',
    '・友情ガチャは午前0時ごろにリセットされます。' : 'Reset is everyday at midnight.',
    '※獲得するカードの最大ソケット数はレアリティにより異なります。' : 'The number of socket a card has depend on his rarity and if you\'re lucky or not. For each socket on a card, you can use an upgrade on it.',
    '-ソケットの最大数：C×1,UC×2,R×3,HR×3,SR×4,SSR×5,UR×6,W×6,' : '- The maximum number of socket (upgrades) per rarity is: C×1,UC×2,R×3,HR×3,SR×4,SSR×5,UR×6,W×6,',
    '友情Ptとは' : 'Friend points FAQ',
//// Messages from rias
    '次回コンプリート時は上位カード２枚から抽選！' : 'Next reward is a card from top tier !',
    '※コンプリート報酬はプレゼントBOXで受け取れます。' : 'You\'ll receive the reward in your Gift box !',
    '同じ相手には1日3回までしか攻撃できません。(リベンジは含みません)' : 'You can only attack someone 3 times per day. (This doesn\'t include revenges)',
    'カード一覧へ戻る' : 'Return to card list',
    'レリックコンプリート' : 'Relic set complete !',
    '位' : '#',
    '今ならLv100まで獲得EXP2倍！' :'For a limited time get XP x2 until LV100 !',
    '-攻撃：' : '- as attacker: ',
    '-防衛：' : '- as defenser: ',
    '勝利数：' : 'Wins:',
    '期間限定イベント開催中!4/18(月)10:59まで' : 'Limited event ! Ends  4/18 (Monday) 10:59 !',
    '贈り物が届いているわ。' : 'You have item in your Gift box !',
    '受け取って確認するのよ。' : 'I wonder what they are !',
    '※同じ相手には1日3回までしか攻撃できません。(リベンジは含みません)' : 'You can only attack someone 3 times per day. (This doesn\'t include revenges)', 
    'レーティングゲームランキング】' : 'Rating games ranking】',
    'ランキングは月内に1度以上戦わないと表示されません' : 'To be ranked, you need to fight at least one time.',
    'ランキングは表示月内に1度以上戦わないと表示されません' : 'Stats are only available for months were you fight at least 1 time.',
    '更新(1日毎に更新)' : '(Updated every day)',
    '自分のレリック一覧' : 'Relic list',
    '撃破成功' : 'Defeated',
    '行動力が20%回復します' : 'This item restore 20% of your Action Points.',

    '毎日最初の一回は無料で引くことができるのよ！' : 'Each day, the first Friend Gacha is free !',
    '友情ガチャが回せます' : 'Your daily FREE Friend Gacha has arrived !',
    'コンプリート報酬' : 'Complete set reward',
    '逃亡までの残り時間' : 'Sort by time remaining',
    'レイドボスのLv' : 'Sort by boss LVL',
    '残りHPが高い順' : 'Sort by HP left (Descending)',
    '残りHPが低い順' : 'Sort by HP left (Ascending)',
    '発見者:' : 'Found by ',
    '撃破者:' : 'Defeated by ',
    '友達を探す' : 'Search friends',
    '総合戦績:' : 'Fighting summary: ',
    'レーティングゲーム情報' : 'Rating game informations',
    'ギルド情報' : 'Guild informations',
    'レリック情報' : 'Relics informations',
    '※レイドボス情報は出現している期間内のみ表示されます' : '※Raid boss informations is only visible when that boss is available.',

    'レイドボス情報' : 'Boss informations',
    '所属ギルド名:' : 'Guild name: ',
    'ギルドメンバー数:' : 'Guild members: ',
    'カード情報' : 'Cards informations',
    '奪ったレリック:' : 'Stolen relics: ',
    '友達一覧' : 'Back to friendlist',
    'レリック一覧へ' : 'Back to relics',
    'アルバムへ' : 'Back to album',
    'レイドボストップへ' : 'Back to boss encounter',
    '「フリード・セルゼン」撃破回数:' : 'Freed Sellzen defeats: ',
    '「紫藤イリナ」撃破回数:' : 'Irina defeats: ',
// Maybe something else, need to check !!!
    'シリーズ' : ' Series',
    'レリックコンプ:' : 'Discovered relics: ',
    '奪われたレリック:' : 'Lost relics: ',
    'ドレスブレイク回数:' : 'Dress break counter: ',
    'LvMAXにしたカード:' : 'Max Lvl card counter: ',
    'カード収集枚数:' : 'Card collection counter: ',
    'ブーストアイテム生成数:' : 'Max stade card counter: ',
    '転生進化回数:' : 'Reincarnated card counter: ',
    'ドラゴンの血(小)を使用しますか？' : 'Do you want to use a small Dragon blood ?',
    ' レーティングゲームトップ ' : 'Go to the rating games',
    '戦闘履歴' : 'Fight History',
    'ランキング' : 'Ranking',
    'おすすめのシリーズ' : 'Selected relic set',
    'レリックを変更する' : 'Choose another relic set',
    '期間限定!獲得ギルドガチャPt2倍!!' : 'Limited time ! Get Guild Gacha Points x2 !!',
    '※1日に引けるギルドガチャの回数は3回までです。' : 'You can draw up to 3 Guild Gacha per day.',
    '※ギルドガチャPtは300まで貯めることができます。' : '※You can stack up to 300 Guild Gacha points.',
    'ギルドガチャPtはギルドリベンジによって得ることができます。' : 'Guild gacha points are obtained by avenging guild members or yourself.',
    'ギルドガチャPtでギルドガチャを引くことができます。' : 'Guild gacha allows you to draw a random card for 50 Guild Gacha points.',
    'ギルドガチャ' : 'Guild Gacha',
    'ギルドPtはPvP勝利時、リベンジ勝利時など、様々な場面で加算されます。' : 'You can earn Guild points while fighting in the rating game or avenging one of your guildmates.',
    'ギルドレベルが上昇することで、ギルドの最大人数が増加します。' : 'When your guild levelup, the maximum number of member may increase.',
    'ギルドLv10まで⇒Lvが1あがるごとに1人追加。' : 'Guild LV 1-10: +1 member for each level.',
    'ギルドLv20まで⇒Lvが2あがるごとに1人追加。' : 'Guild LV 11-20: +1 member every 2 levels.',
    'ギルドLv50まで⇒Lvが3あがるごとに1人追加。' : 'Guild LV 21-50: +1 member every 3 levels.',
    '以降のギルドLv⇒Lvが10あがるごとに1人追加。' : 'Guild LV 50+: +1 member every 10 levels.',
    '最大50人まで上昇します。' : 'Once you reach the limit of 50 members, you can\'t get more members.',
    '次のレベルまでに必要なギルドPtは、ギルドページの「次のLvまで」欄より確認することができます。' : 'You can see how many guild points your guild needs until the next level on your guild page.',
    '友達に応援要請を送りました。' : 'You asked your friends to send you AP.',
    '次回の応援要請は' : 'Your next available request will be on',
    'に使用できます。' : '',
    '【一時保管所とは】' : '[What\'s the temporary box ?]',
    '・設置期限を過ぎると一時保管所のカード/アイテムは全て削除されます。' : 'Please, note there\'s a time limit to retrieve items from the Temporary box.',
    '・一時保管所にあるアイテム/カードはプレゼントBOXに移動することができます。' : '・Items in the temporary box will move to the Gift box.',
    'プレゼントBOXから受け取ることで使用出来るようになります。' : 'You just have to retrieve items in the Gift box.',
    '・2/29(月)の仕様変更時に消失したアイテム/カードが保管されます。' : '2/29(Monday) - lost items should appear in the Temporary box.',
    '・一時保管庫の使用期限は' : 'Please, note that ',
    '友情P&その他(' : 'Friends points & others : (',
    'イベント開催中' : 'Event available',
    'クエストトップ' : 'Back to quests',
    'ノーマルクエスト' : 'Quest',
    '今しか遊べない限定イベント!' : 'Play the limited time event !',
    '限定スペシャルカードや豪華アイテムをGETしよう!' : 'Try to get special cards and amazing rewards !',
    'メインシナリオを進めよう!!' : 'Play through the scenario and make Ddraig proud of you !',
    '割り振りPtの割り振りが完了しました' : 'Stats points allocated !',
    'カード(' : 'Cards: (',
    '◆プレゼントBOX状況': '◆Gift box state',
    '一時保管所' : 'Temporary box',
    'プレゼント受取から30日間分の履歴が表示されます。' : 'History only show up to 30 days.',
    'プレゼント受取履歴' : 'Received items history',
    '友情Ptがありません' : 'There\'s no Friend points',
    '割り振りPtがあります' : 'There are Stats points waiting to be allocated !',
    '余っている割り振りPtがあるようね。早速割り振ってデッキを強くするのよ!' : 'You have some Stats points to allocate.',
    '友情Ptがたまってるわね。さっそく引いてごらんなさい！' : 'You\'ve got a lot of Friend points, you should use some of them !',
    '贈り物が届いているわ、プレゼントBOXから受け取るのよ！' : 'There\'s items waiting in your Gift Box !',
    'レーティングゲームでレリックをたくさん獲得するわよ！' : 'You can earn relics in the Rating Game !',
    'さんがレリックを奪われたわ!ギルドリベンジのチャンスよ!' : ' has been attacked ! You can avenge him in the Rating Game!',
    '今だけ合成EXP２倍よ！' : 'Your cards gain twice as much experience from synthesis for a limited time !',
    '行動力不足応援要請がきています' : 'A friend is asking for AP gift !',
    '応援依頼はありません。' : 'There\'s no AP gift request pending',
    '応援リスト' : 'AP Gift page',
    '別の対戦相手を探す' : 'Fight another opponent',
    '通常攻撃' : 'Normal attack',
    '魔力20' : '-20 MP',
    '魔力40' : '-40 MP',
    '友達の力を借りて攻撃' : 'Boosted attack',
    '（残り' : '(You have ',
    '個）' : ' units)',
    '(防御障壁効果' : '(Guild boost ',
    'あと2つでコンプリート' : 'Two more to complete !',
    '応援依頼' : 'Friends requests',
    'ボイス付きカード：' : 'Cards with voice: ',
    'ガチャトップ' : 'Back to the shop',
    'フェニックスの涙(小)' : 'Small Phenix tears',
    'ドラゴンの血(小)' : 'Small Dragon blood',
    'フェニックスの涙(小)：残り' : 'Small Phenix tears: ',
    'フェニックスの涙：残り' : 'Phenix tears: ',
    '行動力100%回復' : 'Regain 100% of your AP',
    'フェニックスの涙を' : 'Use ',
    '個使う' : " Phenix tears",
    '友達に応援を要請する' : 'Ask your friends for AP Gift',
    '行動力が尽きてしまったみたいね。' : 'You\'re out of Action points.',
    '行動力は時間がたてば徐々に回復していくわ。' : 'You\'ll recover your Action points over time.',
    '全回復まであと ' : 'Your AP will be full in ',
    '魔力全回復まであと' : 'Your MP will be full in ',
    'ドラゴンの血(小)を使う' : 'Use a small Dragon blood',
    'ドラゴンの血を使う' : 'Use a Dragon blood',
    '結界魔法陣を購入する' : 'Buy def. scroll',
    '(次のLvまで' : '(Next level in ',
    ' 別のレリックを狙う ' : 'Choose another relic set',
    'コンプリート特典を受け取る' : 'Receive relic\'s set reward',
    '詳細結果' : 'Result details',
    '防御障壁：' : 'Defense barrier:',
    '応援成功回数：' : 'Received:',
    '応援成功率：' : 'Rate:',
    '応援要請が届きました' : 'Asked for AP !',
    'ＨＰ20%増加中！' : 'Increase HP by 20% !',
    'イベントクエストへ' : 'Back to event\'s quest',
    'カード属性変更/アイテム選択' : 'Card Promotion',
    '選択したカード' : 'Selected card',
    '全員を応援して行動力回復' : 'Giving AP to everyone !',
    ' よ。' : 'よ。',
    '20%回復' : '20% AP',
    '40%回復' : '40% AP',
    '60%回復' : '60% AP',
    '80%回復' : '80% AP',
    '100%回復' : '100% AP',
    '7日間ギルドリーダーが本アプリへのアクセスを行わなかった場合、サブリーダーがギルドリーダーとなります。' : 'If the leader is inactive for 7 days, the leadeship is transfered to the sub-leader.',
    '※7日間、本アプリへのアクセスを行わなかったギルドメンバーはギルドから自動的に除名されます。' : '※Inactive members will be kicked after 7 days of inactivity.',
    'ギルドリーダーはメンバーの除名を行うことができます。' : 'The guild leader can decide to exclude members.',
    'ギルド除名条件' : 'Guild expulsion conditions',
    'ギルドリーダー交代条件' : 'Guild leader',
    'となります。' : ' to retrieve your items.',
    '防御障壁が発動している間は、ギルドメンバー全員のデッキに配置されているカードのHPが上昇します。' : 'When the barrier is active, guild members get HP bonus to their cards.',
    '貢献度Ptが一定値まで貯まると防御障壁が発動します。' : 'Contribution points stack up to a certain limit to improve the defensive barrier.',
    '貢献度Ptが増加すると防御障壁の効果が高くなります。' : 'They allow the barrier to grow stronger.',
    '一定の貢献度Ptに達するとギルドに防御障壁が発動します。' : 'Contributions points are important for the Defensive barrier.',
    'ギルドに貢献する活動を行うと貢献度Ptを得ることができます。' : 'You can earn Contribution Points by doing guild activities.',
    '※貢献度Ptは取得から30日間で消失します。' : 'Contribution points are lost 30 days after their acquisition.',
    '貢献度Pt' : 'Contribution points',
    '防御障壁' : 'Defensive barrier',
    'まで' : ' is the limit date',
    'するのよ!' : ' No time to loose !',
    '応援した分、' : 'Only few seconds !',
    '過去のステージに戻る' : 'Check previous Stages',
    'ステージ一覧' : 'Stage list',
    '獲得ピース' : 'Money per action',
    '進行度' : 'Progress',
//// LEVELUP TEXT
    '友達を応援すると応援した友達の行動力が' : 'Give AP to your friends !',
    '5回復' : ' 5 AP are given to each friend in the list !',
    'あなたの行動力も回復' : 'You also receive the same amount of AP you gifted !',
    'レベルアップ' : 'Level up !',
    '行動力、魔力が全回復した！' : 'You recovered all your AP and MP !',
    'プレゼントBOXの受取容量はカードのみで1000件、友情Pt&その他で1000件です。' : 'You can have 1000 items for each category maximum.',
    '友達数：' : 'Friends:',
    'レーティングゲームとは' : 'Rating game FAQ',
    '対戦相手を更新' : 'Refresh opponents list',
    '秘密の招待状 コンプリート報酬' : 'Secret Invitation set Rewards',

//// SHOP
    'リミットガチャ' : 'Limited Gacha',
    'Boost!x6ガチャ' : 'Boost ! X6 Gacha',
    '今月' : 'This month',
    '過去' : 'Previous months',
    '対戦相手を探す' : 'Fight an opponent',
    '(赤)' : '(Red)',
    '(紫)' : '(Purple)',
    '(青)' : '(Blue)',
    '(水)' : '(Turquoise)',
    '(緑)' : '(Green)',
    '(黄)' : '(Yellow)',
    '音声再生に関する免責事項' : 'Sound disclaimer',
    '・端末によっては音声が再生できません' : 'Some device may not be able to play sounds',
    '・音量にご注意ください' : 'Check the volume !',
    'レジェンド' : 'Paid Gacha',
    '確定ガチャチケット' : 'Draw a ∞ ticket !',
    'チケットガチャ×１回' : '1x Random card',
    'チケットガチャ' : 'Legendary Ticket',
    '【セット内容】' : 'Set content:',
    'ドラゴンの血×１個' : '1x Dragon blood',
    '100友情Ptでガチャを1回引くことができるわ。' : 'You can purchase a random card for 100 Friends points.',
    '友情Ptが貯まれば何度でも引くことができるわよ！' : 'Earn Friends points by helping friends and by participing in special events !',
    '友情ガチャ' : 'Friend points card drawing',
    '現状の友情Pt数' : 'Friend points reserve:',
    'バトルアニメーションをスキップ' : 'Skip fight animations',
    'アニメーションをスキップ' : 'Skip animations',
    'ギルドトップ' : 'Guild page',
    '■以下のものを受け取りました' : 'You received the following:',
    '新着情報はありません' : 'No news',
    ' ページ内全選択' : 'Select all',
    'チェックしたものを受け取る' : 'Retrieve checked items',
    '受け取る' : 'Retrieve',
    'ソケット数' : 'Socket #:',
    '１回' : '1 card per ',
    '友情Pt' : ' Friend points',
    '友情' : 'FP Gacha',
    'クエストTOP' : 'Back to quests',
    'イベントTOPへ' : 'Back to event',
    '行動力不足' : 'Lack of action points',
    //// ITEMS
    'レリック一覧' : 'Relic list',
    'このアイテムでカードをバランス・ブレイク' : 'Use this item for Balance Breaker',
    'この合成用アイテムでカードを合成' : 'Use this item for synthesis',
    'アイテムがありません' : 'There are no items in this category to be retrieved',
    'ドラゴンの血' : 'Dragon blood',
    '価格' : 'Price',
    'モバコイン' : 'Mobacoins',
    '行動力が全回復します' : 'Restore all your action points',
    '魔力が全回復します' : 'Restore all your combat points',
    '使用する（所持数' : 'To use (you have ',
    '購入' : 'Purchase',
    'フェニックスの涙' : 'Phenix tears',
    '特定商取引法に基づく表示' : 'Check some legal details',
    '獲得カード' : 'You received these cards:',
    'ギルドガチャについて' : 'About guild Gacha',
    '次のLvまで' : 'Next level in ',
    '取り出すカードを選択してください' : 'Select at least one card if you want to withdraw :)',
    'ギルド掲示板' : 'Guild message board',
    'ギルドリーダー' : 'Guild leader',
    'ギルドメンバー　' : 'Guild members',
    '貢献度Pt:' : 'Contribution:',
    'カードを取り出す' : 'Withdraw from collection',
    'カードコレクション一覧' : 'Card collection list',
    '自動受入不可' : 'Non-automatic validation',
    '自動受入' : 'Recruitment',
    '注意事項' : 'Notes',
    '・ボタンを連打するとエラーになる場合があります。' : 'Errors can occur in some cases.',
    '90日間' : 'Items can stay in the Gift box for 90 days',
    '・プレゼントの受け取りには有効期限があります。' : '・Items in the Giftbox have an expiration date.',
    'を経過するとプレゼントBOXから消滅します｡' : '',
    'プレゼントBOXの容量が1000件を超えた場合' : 'If your box exceeds 1000 items limits,',
    '古いものから消滅' : ' oldest items',
    'されます。' : ' will be lost.',
    'ギルドについて' : 'About guilds',
    '友達へのお誘いを取り下げました。' : 'Friend request cancelled.',
    'お誘い取り下げ完了' : 'Cancelling friend request',
    'を獲得しました。' : ' earned.',
    'ギルドに未加入のプレイヤーは、ギルドを設立することができます。' : 'You are able to found your own guild or to join an existing one.',
    'ギルドに所属することで防御障壁の効果を受けることができる、ギルドガチャを引くことができるなど、様々な恩恵を受けることができます。  ' : 'Having a guild provide a lot of benefits, like being able to help each others during boss fights, event ranking, Guild Gacha and even a defensive boost for the rating game.',
    'ヘルプ一覧' : 'Back to FAQ list',
    'ギルドPtがたまるとギルドレベルが上昇します。' : 'Guild points allow the guild to levelup.',
    'ヘルプ' : 'FAQ',
    'Kingを入れ替え' : 'Replacing the King',
    'Queenを入れ替え' : 'Replacing the Queen',
    'Rookを入れ替え' : 'Replacing the Rook',
    'Knightを入れ替え' : 'Replacing the Knight',
    'Bishopを入れ替え' : 'Replacing the Bishop',
    'Pawnを入れ替え' : 'Replacing the Pawn',
    '攻撃デッキ' : 'Offensive deck',
    '防御デッキ' : 'Defensive deck',
    '総戦闘力：' : 'Total ATK:',
    '総HP：' : 'Total HP:',
    '総コスト：' : 'Total cost',
    '（ポジションボーナス戦闘力:' : '（Evil pieces ATK bonus: ',
    '（ポジションボーナスHP:' : '（Evil pieces HP bonus: ',
    'オススメデッキ' : 'Use recommended deck',
    'デッキ編成へ戻る' : 'Back to Deck Organization',
    'Queenと入れ替える' : 'Replace the Queen',
    'Kingと入れ替える' : 'Replace the King',
    'Rookと入れ替える' : 'Replace the Rook',
    'Knightと入れ替える' : 'Replace the Knight',
    'Bishopと入れ替える' : 'Replace the Bishop',
    'Pawnと入れ替える' : 'Replace the Pawn',
    '出現レイドボス一覧' : 'Raid boss',
    '自分が遭遇' : 'Boss encounter',
    '現在レイドボスは' : 'No boss at the moment.',
    '出現していません。' : 'They\'re probably afraid of the Red dragon emperor !',
    '救援要請' : 'Friend\'s boss',
    '累計ギルドPt' : 'Guild points',
    'ギルドレベル' : 'Guild level',
    '選択アイテム' : 'Available items',
    '指定カードの悪魔の駒を好きな属性に変更することができます' : 'Allows you to change the evil piece type.',
    'ギルドPt' : 'Guild points',
    '☆今だけ獲得ギルドガチャPt2倍☆' : '☆ Guild Gacha X2 Limited Time !☆',
    '対戦' : 'Fight',
    'デッキ編成 カード入替' : 'Deck Organization : card change',
    'デッキ編成' : 'Deck Organization',
    'カードコレクションとは' : 'Card collection FAQ',
    '収納されているカードがありません' : 'You have no card in your collection.',
    'カードコレクションを確認' : 'Check card collection',
    '◆本名、メールアドレス、電話番号などの個人情報や個人の特定に繋がる情報は入力しないでください' : '◆Do not post personnal informations like Name, Phone, Bank Cards,...',
// Card skill
    'さっそく引いてごらんなさい！' : 'Let\'s draw it !',
    'このカードを合成する' : 'Synthesis this card',
    'このカードを強化する' : 'Upgrade this card (sockets)',
    '悪魔の駒を変更' : 'Promotion',
    'このカードを保護しない' : 'Cancel card protection',
    '攻撃デッキに優先配置しない' : 'disable offensive priority',
    '防御デッキに優先配置する' : 'enable defensive priority',
    'このカードを売却する' : 'Sell this card',
    'このカードをコレクションに収納する' : 'Deposit card in Collection',
    'スキルLv：' : 'Skill level:',
    '効果：' : 'Effect:',
    '　効果' : 'Effect:',
    'スキル：' : 'Skill:',
    'スキル' : 'Skill:',
    '棍滑翔' : 'Flying stick',
    '敵全体のHPを中DOWN' : '(Medium) Team HP Down',
    '銀髪の殲滅女王' : 'Gray-haired queen\'s fury',
    '抜き一文字' : 'HP Down',
    '同じ悪魔の駒で味方のHPを小回復' : '(Weak) Heal one ally',
    '匠の選眼' : 'Manhood\'s sight',
    '敵のHPを小DOWN' : '(Weak) Ennemy HP Down',
    'フェニックスの涙(小)' : 'Phenix tears (small)',
    'ドラゴンの血(小)' : 'Dragon blood (small)',
    '魔力が20回復します' : 'This item restore 20% of your Combat Points.',
    '合成･禁手･進化' : 'Balance Breakers',
    '一言コメントを編集する' : 'Edit your own message',

    '一言コメント' : 'Personnal message',

    'セイクリッドギア' : 'Sacred Gear',
    'カードに合成することで、効率良く成長させることができます' : 'Used as synthesis material to give Experience to your evil pieces. Each gives 100 Experience.',
    'チケットでレアカードを手に入れよう!' : '',
    'ギルドガチャPt' : 'Guild points',
    '・内容の詳細は、ラインナップからご覧ください。' : 'Check the lineup for more informations.',
    'アイテム購入履歴' : 'Item purchase history',
    'ブーストアイテム' : 'Upgrades',
    '消費' : 'Consummables',
    'セット内容' : 'Bundle include',
    'セット' : 'Bundles',
    'プロモーション' : 'Promotion',
    '所持数' : 'Quantity',
    'アイテム' : 'Buy items',
    '所持チケット枚数' : 'You possess ',
    '枚' : ' unit(s)',
    'チケット' : 'Gacha Tickets',
    '各種報酬で獲得した' : 'Try to get the extra rares cards !',
    'ガチャ履歴確認' : 'Card history',
    'ガチャ' : 'Gacha',
    '注意事項' : 'Notes',
    'ラインナップ' : 'Lineup',
//// Sort per...
    'カードの並び替え' : 'Card ordering',
    'カードID順' : 'Sort by Card #',
    '入手が新しい順' : 'Newest first',
    '入手が古い順' : 'Oldest first',
    'レアリティが高い順' : 'Rarity (Born to Common)',
    'レアリティが低い順' : 'Rarity (Common to Born)',
    '戦闘力が高い順' : 'Attack value (descending order)',
    '戦闘力が低い順' : 'Attack value (ascending order)',
    'HPが高い順' : 'Health points (descending order)',
    'HPが低い順' : 'Health points (ascending order)',
    'Lvが高い順' : 'Level (descending)',
    'Lvが低い順' : 'Level (ascending)',
    'デッキコストが高い順' : 'Card cost (descending)',
    'デッキコストが低い順' : 'Card cost (ascending)',
    '悪魔の駒を昇順(Ki→P)' : 'Pieces type (King to Pawn)',
    '悪魔の駒を降順(P→Ki)' : 'Pieces type (Pawn to King)',
    '聖水' : 'Holy Water',
    '秘密の招待状' : 'Secret invitation',
    '目覚まし時計' : 'Issei\'s alarm clock',
    'オカ研ハチマキ' : 'ORC Headband',
    'ラッチュー君' : 'Mr. Rachu',
    '聖書' : 'Holy Bible',
    '十字架' : 'Holy Cross',
    '全て' : 'All',
    'イベント情報' : 'Events informations',
    'イベント' : 'Event',
    'コンプ回数' : '# of completion: ',
    '突然の終わり' : 'Nearly achieved',
    'コンプ済' : 'Already completed',
    '未コンプ' : 'Never completed',
    'オーバーブーストカード' : 'Overbooster Card',
    'オーバーブーストカード以外' : '',
    'C以下' : 'C',
    'UC以下' : 'UC and below',
    'R以下' : 'R and below',
    'HR以下' : 'HR and below',
    'SRのみ' : 'SR only',
    'SSRのみ' : 'SSR only',
    'URのみ' : 'UR only',
    'Ｗのみ' : 'Ｗ only',
    '∞のみ' : '∞ only',
    'BorNのみ' : 'BorN only',
    'レベル1のみ' : 'Level 1 Only',
    '進化度1のみ' : 'Evolution stade 1 Only',
    'ボイス付き' : 'With voice',
    'リベンジ' : 'Revenge ',
    '進化度' : 'Evolution stade',
    'ベースカードに選択する' : 'Select this card',
    'units' : ' owned',
    '売却する' : 'Sell',
    '信頼度' : 'Reliability',
    '成長度' : 'XP bar',
    '戦闘力' : 'Attack',
    '合成とは' : 'Synthesis FAQ',
    'セイクリッドギアとは' : 'Sacred Gear FAQ',
    '進化可能なカードのみ' : 'Evolvable card only',
    '売却選択' : 'Selling cards',
    'ページ内全選択' : 'Select/Unselect all',
    '全ページのカードを一括売却' : 'Sell every cards listed EVERY PAGE',
    '交換メダルが足りません' : 'Not enough Medals for this !',
    'メダル' : 'Medals',
    '獲得数：' : 'Obtained:',
    'を手にいれた！' : 'was just found !',
    '所持数：' : 'Already owned:',
//// Main Menu
    'ベースカード選択' : 'Base card selection',
    'カードリスト' : 'Card list',
    '転生進化カード' : 'Reincarnation',
    '行動力' : 'AP',
    '魔力' : 'Mp',
    'ピース' : 'Money',
    '友情Ptとは' : 'Friend Points FAQ',
    'プレゼントが届いています' : 'There\'s still items in your Gift Box !',

//// GIFT BOX
    '転生進化とは' : 'Reincarnation FAQ',
    '転生進化' : 'Reincarnation',
    'その他' : 'Others',
    '一括受取り' : 'Bulk retrieving',
    '合成する' : 'Synthesis',
    '合成' : 'Synthesis',
    '進化' : 'Evolution',
    '売却' : 'Card list',
    'アルバム' : 'Album',
//// GUILD
    'ギルドガチャを引く' : 'Draw a guild card',
//// CARD MENU
    '強化' : 'Upgrade',
    'バランス' : 'Balance',
    'ブレイク' : 'Breaker',
    '追加が新しい順' : 'Newest reincarnation first',
    '追加が古い順' : 'Old reincarnation first',
    '詳細を確認' : 'See the details',

//// Assign Stats Points
    'デッキを編集する' : 'Edit your decks',
    'クエスト' : 'Quests',
    'レーティングゲーム' : 'Rating Games',
    '上記内容で割り振る' : 'Allocate as seen above',
    '自動割り振り' : 'Automatic allocation (not recommended)',
    'ステータス' : 'Stats points',
    '割り振りPt' : 'Allocation point',
    '攻撃コスト' : 'Attack deck size',
    '防御コスト' : 'Defense deck size',
    'ギルドガチャPt' : 'Guild gacha points',
    'メンバー行動履歴' : 'Members action history',
    '[自動処理]' : '[Automatic]',
    'さんがギルドに加入しました。' : ' has joined the guild !',
    'さんをギルドから除名しました。' : ' has been excluded.',
    'さんがギルドを脱退しました。' : ' has left the guild.',
    '行動履歴は14日間表示されます' : 'Action history covers last 14 days.',
    'ギルドトップ' : 'Guild page',
    'ギルド紹介文' : 'Guild information',
    'ギルドメンバー一覧' : 'Guild members list',
    'ギルドメニュー' : 'Guild menu',
    'ギルドメンバーを誘う' : 'Send guild invitations',
    '勧誘中のユーザーを確認する' : 'View pending guild applications',
    'ギルドから脱退する' : 'Leave the guild',
    'ギルドとは' : 'Guild FAQ',
    '投稿する' : 'Send',
    '過去の投稿' : 'Older posts',
    '出現カードリスト・出現確率' : 'Check guild gacha lineup',
    '【重要】プレゼントBOX仕様変更につきまして' : '[IMPORTANT]Gift box changes ; please read !',
    '受け取っていない贈り物はないみたいね。' : 'Looks like there\'s no gift waiting for you !',
    'カードがありません' : 'There\'s no cards',
    'アイテムがありません' : 'There\'s no items',
    '友情Pt' : 'Friend Pt',
    'カード詳細' : 'Card details',
    '変更可能なカード' : 'Available cards',
    '現在のカード' : 'Current card',
    '友達数:' : 'Friends',
    'カード' : 'Cards',
    'デッキ属性：' : 'Deck piece: ',
    '使う' : 'Use',
    'キャンセル' : 'Cancel',
    '友達リストへ' : 'Back to friend list',
//// Friendlist
    '友達から外す' : 'Removing a friend',
    'さんを友達から外しますがよろしいですか？' : ' will be removed from your friends. Are you sure you want to do that ?',
    'お誘いの取り下げ' : 'Cancelling friend invitation',
    'さんへの友達へのお誘いを取り下げます。' : ' won\'t be able to accept your request anymore.',
    '取り下げる' : 'Confirm',
    'よろしいですか？' : 'Are you sure you want to cancel your invitation ?',
    '無所属' : 'Without guild',
    '友達とは' : 'Friends FAQ',
    '友達リストから外す' : 'Remove friend',
    'あいさつ履歴' : 'Message history',
    'あいさつを返す' : 'Send a message back',
    '友達リスト' : 'Friend list',
    '登録済' : 'Friends',
    '申請中' : 'Pending',
    '承認待ちのユーザはいません' : 'There is no friend application waiting for your approval.',
    '承認待' : 'Waiting your approval',
    'ギルド' : 'Guild',
    '申請を取り消す' : 'Cancel the application',
    'Lv昇順で並べ替え' : 'Sort by lvl (ascending order)',
    'Lv降順で並べ替え' : 'Sort by lvl (descending order)',
    '最終ログイン早い順で並べ替え' : 'Sort by last connection (newest to oldest)',
    '最終ログイン遅い順で並べ替え' : 'Sort by last connection (oldest to newest)',
    '最終ログイン' : 'Last time online',
    '友達を増やして、ゲームをもっと楽しみましょう。' : 'Here\'s your friendlist !',
    '友達が多いほど最大コストも多くなるわ。' : 'You and your friends will be able to help each other defeating boss and raid boss.',
    '登録できる友達数はレベルの上昇によって増えていくのよ。' : 'Each friend you have give you 3 Allocation points. The size of your friendlist increase as you gain levels.',
    '友達登録数 ' : 'Friendlist size',
    'あいさつ' : 'Send a message',
    'プレゼントBOX' : 'Gift Box',
// Profile effect page (pvp title ?)
    '効果:' : 'Effect: ',
    '勝' : ' Wins ',
    '攻撃:' : 'As attacker: ',
    '防衛:' : 'As defenser: ',
    '敗' : ' Defeats ',
    '戦' : 'Fight',
    '詳細' : 'Details',
    'ソケット' : 'Socket',
    '空' : 'Empty',
    'ｺｽﾄ' : 'Cost',
    '交換する' : 'Get',
    '分' : ' minutes',
    '更新する' : 'Refresh',
    'コスト' : 'Cost',
    '売値' : 'Selling price ',
    '決定' : 'Confirm',
    '残り' : 'out of ',
    '個' : ' unit(s)',
    '回' : ' times',
    '体' : ' bodies',
};


// Used to take a string and ready it for use in new RegExp()
String.prototype.prepareRegex = function() {
    return this.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, "\\$1");
};

// Function to decide whether a parent tag will have its text replaced or not
function isOkTag(tag) {
    return (new RegExp("(," + tag + ",) | (," + tag + "$)", "g").test(",pre,blockquote,code,input,button,textarea")) === false;
}

// Convert the "words" JSON object to an Array
var regexs=new Array(),
    replacements=new Array();
for(var word in words) {
    if(word != "") {
        regexs.push(new RegExp(word.prepareRegex().replace(/(\\)?\*/g, function(e) {return ((e !== "\\*") ? "[^ ]*" : "*");}), "gi"));
        replacements.push(words[word]);
    }
}

// Do the replacement
var texts = document.evaluate(".//text()[normalize-space(.)!='']",document.body,null,6,null), text="", len=regexs.length;
for(var i=0,l=texts.snapshotLength; (this_text=texts.snapshotItem(i)); i++) {
    if(isOkTag(this_text.parentNode.tagName) && (text=this_text.textContent)) {
        for(var x=0; x<len; x++) text = this_text.textContent = text.replace(regexs[x], replacements[x]);
    }
}

// saves all settings of all <img> tags in the tags variable/array
var tags = document.getElementsByTagName('img');


// goes through every entry in the tags array, so through every <img> tag

for (var i = 0; i < tags.length; i++) {


//// Changing some buttons using this method too.
// EVENT PICS
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fevent150%2Fdiary_banner.png%3F67.91', 'http://dxdmobage.xp3.biz/Writewin.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fevent150%2Fdiary_banner_gray.png%3F67.91', 'http://dxdmobage.xp3.biz/Writewingrey.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fevent150%2Fmission_failure.png%3F67.91', 'http://dxdmobage.xp3.biz/Missiondaily.png');
    

    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fhoseichu.png', 'http://dxdmobage.xp3.biz/Rolebonus.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fleader.png', 'http://dxdmobage.xp3.biz/Leader.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fhogo.png', 'http://dxdmobage.xp3.biz/Protected.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_modal_top.jpg', 'http://dxdmobage.xp3.biz/Menu_Totop.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_menu.png', 'http://dxdmobage.xp3.biz/Menu.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_02.jpg', 'http://dxdmobage.xp3.biz/BTN_Quest.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_03.jpg', 'http://dxdmobage.xp3.biz/BTN_Pvp.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_04.jpg', 'http://dxdmobage.xp3.biz/Shop.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_mypage.png', 'http://dxdmobage.xp3.biz/HomePage.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fback_to_mypage_pink.png', 'http://dxdmobage.xp3.biz/Back to main page.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_announce.png', 'http://dxdmobage.xp3.biz/HomePage.png');
// PRIVATE CHANGES ;-)
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcards%2FL5%2F6268_KUg54hFqfInKMPOczOOVjM9WziFYUaq7.jpg', 'http://puu.sh/ofmxM/aaf01e304b.jpg');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcards%2FT%2F6268_KUg54hFqfInKMPOczOOVjM9WziFYUaq7.jpg', 'http://puu.sh/ofmxM/aaf01e304b.jpg');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fpagetop.png', 'http://dxdmobage.xp3.biz/Scroll_to_top.png');

}
