// ==UserScript==
// @name           DxD Mobage English Translation
// @namespace      DxD
// @description    DxD Mobage Japanese > English translation
// @include        http://g12014827.sp.pf.mbga.jp/*
// @include        https://g12014827.sp.pf.mbga.jp/*
// @version        0.6.1
// @require        https://code.jquery.com/jquery-2.1.4.min.js
// @require        https://raw.githubusercontent.com/js-cookie/js-cookie/master/src/js.cookie.js
// @icon           http://dxdmobage.xp3.biz/ico.ico
// @downloadURL    https://raw.githubusercontent.com/Tracehunter/DXD-Mobage/master/main.js
// @updateURL      https://raw.githubusercontent.com/Tracehunter/DXD-Mobage/master/main.js
// ==/UserScript==
/*jshint multistr: true */

// @require        https://raw.githubusercontent.com/Tracehunter/DXD-Mobage/master/test.js


//// Store current url to check which translation table need to be used
var URL = window.location.href;
var bodyId = document.body.id;

// Autobossfight ! need to add a magic check
// if (bodyId === "tpl_raid_battle-ready") {goNext(1,1,4);}

//// Main menu reconstruction, to be able to use specific buttons.
$('.modalMenuBtn').html('<li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_list.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/CardList.png" alt="Card list" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_deck.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Decks.png" alt="Decks" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_composition.html%3Faction%3Dequipment%26chkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/upgrade.png" alt="Upgrades" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_composition.html%3Faction%3Dbalance_break%26chkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Balance%20Breaker.png" alt="Balance Breaker" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_reborn.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Reborn.png" alt="Reincarnation" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_storage_list.html%3Faction%3Dplural%26chkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Collection.png" alt="Collection" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_album.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Album.png" alt="Album" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fitem.html%3Flist_type%3D6%26chkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Inventory.png" alt="Inventory" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fguild_top.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Guild.png" alt="Guild" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Ffriend_list.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Friendlist.png" alt="Friendlist" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fprofile.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Profile.png" alt="Profile" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Finvitation.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/RAF.png" alt="RAF" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fpresent.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Giftbox.png" alt="Giftbox" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html"><img src="http://dxdmobage.xp3.biz/Help.png" alt="Help" width="67" height="44"></a></li> \
        <li><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fannounce.html%3FchkLogin%3Dtrue"><img src="http://dxdmobage.xp3.biz/Announces.png" alt="Announces" width="67" height="44"></a></li> \
        <li><a target="_blank" href="https://dxdmobage.wordpress.com/"><img src="http://dxdmobage.xp3.biz/Guide.png" alt="Guide" width="67" height="44"></a></li> \
        <li><a href="http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fspecial.html%3Fname%3Dlogin_bonus"><img src="http://dxdmobage.xp3.biz/Login Bonus.png" alt="Login Bonus" width="67" height="44"></a></li> \
        <li><a href="https://github.com/Tracehunter/DXD-Mobage/raw/master/Dxd.user.js"><img src="http://dxdmobage.xp3.biz/Ver06.png" alt="V0.6" width="67" height="44"></a></li>');

//SKIP Friend Gacha cardlist
//$('#tpl_gacha-complete > section:nth-child(10)').html('');

// Out of AP : Use Phenix tears !
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(1)>a').html('<span style="font-size:10px;">Use 1 <br>20% AP</span>');
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(2)>a').html('<span style="font-size:10px;">Use 2 <br>40% AP</span>');
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(3)>a').html('<span style="font-size:10px;">Use 3<br>60% AP</span>');
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(4)>a').html('<span style="font-size:10px;">Use 4<br>80% AP</span>');
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(5)>a').html('<span style="font-size:10px;">Use 5<br>100% AP</span>');
$('#tpl_raid_battle-ready > section:nth-child(18) > div:nth-child(2) > ul > li:nth-child(1) > a').html();
$('#reward_calendar > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > p').html('<img src="http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fspecial%2Flogin%2Fbackground%2Fnumber%2F1.png" height="15"><img src="http://dxdmobage.xp3.biz/Day.png" height="15">');


$('#tpl_raid_battle-ready > section:nth-child(14) > dl:nth-child(1) > dd > ul > li:nth-child(1) > a').html('<strong>Attack</strong><br>-20MP');
$('#tpl_raid_battle-ready > section:nth-child(14) > dl:nth-child(1) > dd > ul > li:nth-child(2) > a').html('<strong>Boosted Attack</strong><br>-60MP');
$('#tpl_raid_battle-ready > section:nth-child(14) > dl:nth-child(1) > dd > ul > li:nth-child(3) > a').html('<strong>Explosion</strong><br>-100MP');


//// Added shortcut after deleting a friend request ;-)
$('#tpl_friend_complete > section:nth-child(10)').html('<img src="http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fline_3a.png" width="320"><ul class="btn1Column"><li class="btnLongPink"><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Ffriend_list.html%3Faction%3Dpending">Back to pending request</a><li class="btnLongPink"><a href="?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Ffriend_search.html">Search friends</a></li></ul>');

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

addGlobalStyle('.btnVoiceLarge {width: 320px;height: 28px;background: url("http://dxdmobage.xp3.biz/Voice.png") no-repeat 0 0;-webkit-background-size: 100% auto;background-size: 100% auto;cursor: pointer;}');
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
addGlobalStyle('.btnSusumuOrange a {display: block;width: 196px;height: 39px;background: url("http://dxdmobage.xp3.biz/Action_gold.png") no-repeat 0 0;-webkit-background-size: 100% auto;background-size: 100% auto;margin: 4px 0;}');
addGlobalStyle('.btnSusumuBlue a {display: block;width: 196px;height: 38px;background: url("http://dxdmobage.xp3.biz/Action_blue.png") no-repeat 0 0;-webkit-background-size: 100% auto;background-size: 100% auto;margin: 4px 0;}');
// Main page dictionnary http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fmypage.html
var mainpage = {
    'さんがレリックを奪われたわ!ギルドリベンジのチャンスよ!' : ' has been attacked ! You can avenge him in the Rating Game!',
    'ギルド掲示板に新しい投稿があります' : 'New guild message !',
    '新着情報はありません' : 'No news',
    '友情ガチャが回せます' : 'Your daily FREE Friend Gacha has arrived !',
    'プレゼントが届いています' : 'There\'s still items in your Gift Box !',
    'ギルドへの勧誘がきています' : 'You have a guild invitation pending !',
    '期間限定イベント開催中!4/18(月)10:59まで' : 'Limited event ! Ends  4/18 (Monday) 10:59 !',
    '割り振りPtがあります' : 'There are Stats points waiting to be allocated !',
    '余っている割り振りPtがあるようね。早速割り振ってデッキを強くするのよ!' : 'You have some Stats points to allocate.',
    '友情Ptがたまってるわね。さっそく引いてごらんなさい！' : 'You\'ve got a lot of Friend points, you should use some of them !',
    '贈り物が届いているわ、プレゼントBOXから受け取るのよ！' : 'There\'s items waiting in your Gift Box !',
    '行動力不足応援要請がきています' : 'A friend is asking for AP gift !',
    '友情Ptがたまってるわね。さっそく引いてごらんなさい！' : 'You\'ve got a lot of Friend points, you should use some of them !',
    'あいさつを返す' : 'Reply',
    'レーティングゲームでレリックをたくさん獲得するわよ！' : 'You can earn relics in the Rating Game !',
    '友達申請がきています' : 'You received a friend request !',
    'さんがギルドに加入したわ!あいさつして交流を深めるのよ!' : ' has joined the guild ! Feel free to get acquainted !',
    'が友達になりました' : ' is now your friend !',
    '行動力：' : 'AP: ',
    '魔力：' : 'MP: ',
    '友情Pt：' : 'Friend PT: ',
    '信頼度がMaxになったカードがあります' : 'A card has reached max reliability !',
    'ピース：' : 'Money: ',
    'カード：' : 'Cards: ',
    'コンプリート報酬が受け取れます' : 'Relic set reward pending !',
    '新しいあいさつがあります' : 'You received a new message !',
    'ギルドボス出現中!' : 'Guild Boss !',
    'レイドボス出現中!' : 'Boss !',
    '逃亡まで' : 'Time left: ',
    'ギルドボス出現中！' : 'A raid battle is available !',
    'レイドボス出現中！' : 'A raid battle is available !',
// Event 26-04
    '期間限定イベント開催中!4/26(火)10:59まで' : 'Limited event available until 4/26 (Tuesday) 10:59.',
    
// Slider
    'イベント限定ガチャにSSRゼノヴィア、アーシア追加!4/26(火)10:59まで' : 'Limited Time SSR cards Asia and Zenovia added to the event ! (End on Tuesday 4/26, 10:59AM)',

// News (can be deleted after a while)
    '【更新】「温泉旅館で極楽です!」' : '【Update】 Hot bath event', 
    '【開始】「温泉旅館で極楽です!」' : '【Start】 Hot bath event',
    '【終了】「SEXYビスチェで、アフターパーティーです!!」' : '【End】 Sexy bustier event',
    '【更新】「SEXYビスチェで、アフターパーティーです!!」' : '【Update】 Sexy bustier event',
    '【予告】「温泉旅館で極楽です!」' : '【Note】 Hot bath event incoming',
    
// News 2 (can be deleted after a while)
    'イベント限定ガチャにSSR[湯けむりⅢ]シュリヤー、小猫追加!' : 'Koneko card added to the event Gacha !',
    '「合成EXP2倍キャンペーン」（4/23まで）' : 'Synthesis Exp x2 until 23/04 ! !',
    'イベント限定ガチャにSSRゼノヴィア、アーシア追加!' : 'Asia and Zenovia cards added to the event Gacha !',
    '「合成EXP2倍キャンペーン」（4/21まで）' : 'Synthesis EXP x2 (until 4/21)',
    'Infinity[自撮りⅡ]リアス登場!「リアス部長の悩殺セルフィーBOXガチャ」' : 'New Gacha: Rias Selfie !',
    'ガチャ告知アニメーション内誤表記のお詫び' : 'Erratum about Zenovia\'s overboost effects',
    'レアメダルの誤配布に関するお詫び' : 'Appology about an error in the event',
    

};

// Statpoints allocation page http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fallocate.html
var statpoints = {
    '割り振りPtの割り振りが完了しました' : 'Stats points allocated !',
    '行動力' : 'Maximum AP',
    '攻撃コスト' : 'Attack deck size',
    '防御コスト' : 'Defense deck size',
    'クエスト' : 'Back to quests',
    '30割り振りPt' : '30 points',
    '割り振りPtが足りません。' : 'Max 30 points at a time !',
    'レーティングゲーム' : 'Back to Rating Games',
    'デッキを編集する' : 'Edit your decks',
    '上記内容で割り振る' : 'Allocate as seen above',
    '自動割り振り' : 'Automatic allocation (not recommended)',
    'ステータス' : 'Stats points',
    '割り振りPt' : 'Allocation point',
    '※一度に割り振れるのは' : '※You can only use up to ',
    'までです' : ' at a time',
};

// Guild
var Guild = {
    '掲示板をみる' : 'Back to message board',
    'ギルド掲示板投稿' : 'Post a guild message',
    'ギルド掲示板' : 'Guild message board',
    'ギルドリーダー' : 'Guild leader',
    'ギルドメンバー　' : 'Guild members',
    '貢献度Pt:' : 'Contribution:',
    '自動受入不可' : 'Non-automatic validation',
    '自動受入可' : 'Automatic validation',
    '自動受入' : 'Recruitment',
    '注意事項' : 'Notes',
    'ギルド加入申請を出す' : 'Apply to the guild',
    'ＨＰ20%増加中！' : 'Increase HP by 20% !',
    '防御障壁：' : 'Defense barrier:',
    'ギルドガチャについて' : 'About guild Gacha',
    '◆本名、メールアドレス、電話番号などの個人情報や個人の特定に繋がる情報は入力しないでください' : '◆Do not post personnal informations like Name, Phone, Bank Cards,...',
    '過去の履歴' : 'Previous history',
    '古い順' : 'Sorted by joining date',
    '(次のLvまで' : '(Next level in ',
    '貢献度順 ' : 'Sorted by contribution',
    '累計ギルドPt' : 'Guild points',
    'ギルドレベル' : 'Guild level',
    'ギルドガチャPt' : 'Guild points',
    'ギルドガチャを引く' : 'Draw a guild card',
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
    'ギルド情報' : 'Guild informations',
    '所属ギルド名:' : 'Guild name: ',
    'ギルドメンバー数:' : 'Guild members: ',

};

// Guild invit received
var Guildinvit = {
    'ギルド勧誘一覧へ' : 'Back to guild solicitations',
    'ギルド勧誘一覧' : 'Guild invitation list',
    'ギルドレベル：' : 'Guild lv:',
    'ギルドリーダー：' : 'Guild leader:',
    '承認する' : 'Approve',
    '拒否する' : 'Deny',
    '勧誘を拒否しました。' : 'You declined the invitation.',
    'ギルド勧誘拒否完了' : 'Guild solicitation declined !',
    
};

// Friendlist
var friendlist = {
    'Lv昇順で並べ替え' : 'Sort by lvl (ascending order)',
    'Lv降順で並べ替え' : 'Sort by lvl (descending order)',
    '最終ログイン早い順で並べ替え' : 'Sort by last connection (newest to oldest)',
    '最終ログイン遅い順で並べ替え' : 'Sort by last connection (oldest to newest)',
    '無所属' : 'Without guild',
    '友達とは' : 'Friends FAQ',
    '友達リストから外す' : 'Remove friend',
    '最終ログイン' : 'Last time online',
    '友達を増やして、ゲームをもっと楽しみましょう。' : 'Here\'s your friendlist !',
    '友達が多いほど最大コストも多くなるわ。' : 'You and your friends will be able to help each other defeating boss and raid boss.',
    '登録できる友達数はレベルの上昇によって増えていくのよ。' : 'Each friend you have give you 3 Allocation points. The size of your friendlist increase as you gain levels.',
    '友達登録数 ' : 'Friendlist size',
    'あいさつ履歴' : 'Message history',
    '友情Ptとは' : 'Friend points FAQ',
    '申請を取り消す' : 'Cancel the invitation',
    '友達リストへ' : 'Back to friend list',
    '承認する' : 'Confirm',
    '断る' : 'Deny',
    '友達申請承認' : 'Friend request approval',
    '友達申請の承認が完了しました。' : 'You now have one more friend !',
    'クエスト' : 'Quests',

    '友情Pt' : ' Friend points',
    '友達リスト' : 'Friend list',
    '所属' : '',
    '友達へのお誘いを取り下げました。' : 'Friend request cancelled.',
    'お誘い取り下げ完了' : 'Cancelling friend request',
    'あいさつ' : 'Send a message',
    '友達を探す' : 'Search friends',
    '友情Ptとは' : 'Friend points FAQ',
    '友達から外す' : 'Removing a friend',
    'さんを友達から外しますがよろしいですか？' : ' will be removed from your friends. Are you sure you want to do that ?',
    'お誘いの取り下げ' : 'Cancelling friend invitation',
    'さんへの友達へのお誘いを取り下げます。' : ' won\'t be able to accept your request anymore.',
    '取り下げる' : 'Confirm',
    '友達申請の承認完了' : 'One more friend !',
    'さんからの友達申請を承認しますがよろしいですか？' : ' will be added to your friends. Are you sure you want to accept this invitation ?',
    'よろしいですか？' : 'Are you sure you want to cancel your invitation ?',
    '登録済' : 'Friends',
    '申請中' : 'Pending',
    '承認待ちのユーザはいません' : 'There is no friend application waiting for your approval.',
    '承認待' : 'Waiting your approval',  
    'ギルド勧誘' : 'Guild inv.',
    'ギルド' : 'Guild',
};

// Quest progression
var quest = {
    '行動力' : 'AP ',
    'レアリティ：' : 'Rarity: ',
    '獲得ピース' : 'Money per action',
    'を手にいれた！' : 'was just found !',
'カード枚数：' : 'Cards owned:',
'戻る' : 'Back',
};

// Quest page dictionnary http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fquest_select.html
var questselect = {
    '今しか遊べない限定イベント!' : 'Play the limited time event !',
    '限定スペシャルカードや豪華アイテムをGETしよう!' : 'Try to get special cards and amazing rewards !',
    'メインシナリオを進めよう!!' : 'Play through the scenario and make Ddraig proud of you !',
    'ノーマルクエスト' : 'Quest',
    'イベント開催中' : 'Event available',

};

// Raid
var raid = {
'逃亡までの残り時間' : 'Sort by time remaining',
    'レイドボスのLv' : 'Sort by boss LVL',
    '残りHPが高い順' : 'Sort by HP left (Descending)',
    '残りHPが低い順' : 'Sort by HP left (Ascending)',
    '発見者:' : 'Found by ',
    '撃破者:' : 'Defeated by ',
    '残り時間:' : 'Time left:',
        '出現レイドボス一覧' : 'Raid boss',
    '自分が遭遇' : 'Boss encounter',
    '救援に向かう' : 'Fight',
    '現在レイドボスは' : 'No boss at the moment.',
    '出現していません。' : 'They\'re probably afraid of the Red dragon emperor !',
    '救援要請' : 'Friend\'s boss',
    'イベントトップ' : 'Back to events',
    '更新する' : 'Refresh',

};

// Quest out of AP http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fevent150_quest_shortage_active.html
var Outofap = {
    '行動力不足' : 'Lack of action points',

    '友達に応援要請を送りました。' : 'You asked your friends to send you AP.',
    '次回の応援要請は' : 'Your next available request will be on',
    'に使用できます。' : '',
    '友達に応援を要請する' : 'Ask your friends for AP Gift',
    '行動力が尽きてしまったみたいね。' : 'You\'re out of Action points.',
    '行動力は時間がたてば徐々に回復していくわ。' : 'You\'ll recover your Action points over time.',
    '全回復まであと ' : 'Your AP will be full in ',
    '分' : ' minutes.',
    'フェニックスの涙を' : 'Use ',
    '個使う' : " Phenix tears",
    '行動力100%回復' : 'Regain 100% of your AP',
    '所持数：' : 'You have: ',
    '使う' : 'Use',
    'キャンセル' : 'Cancel',
    'フェニックスの涙を1個使用しますか？' : 'Are you sure you want to use 1 Phenix tears ?',
    'フェニックスの涙(小)を1個使用しますか？' : 'Are you sure you want to use 1 small Phenix tears ?',
    'フェニックスの涙(小)を2個使用しますか？' : 'Are you sure you want to use 2 small Phenix tears ?',
    'フェニックスの涙(小)を3個使用しますか？' : 'Are you sure you want to use 3 small Phenix tears ?',
    'フェニックスの涙(小)を4個使用しますか？' : 'Are you sure you want to use 4 small Phenix tears ?',
    'フェニックスの涙(小)を5個使用しますか？' : 'Are you sure you want to use 5 small Phenix tears ?',
    'よ。' : '',
    'フェニックスの涙(小)：残り' : 'Small Phenix tears: ',
    '個' : ' units',
    'フェニックスの涙：残り' : 'Phenix tears: ',
    '合成' : 'Synthesis',
    '進化' : 'Evolution',
    'クエストTOP' : 'Back to quests',
    'イベントTOPへ' : 'Back to event',
    'レーティングゲーム' : 'To the Rating Games',

};

// AP Request http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fquest_request_rescue_list.html

var apRequest = {
    'するのよ!' : ' It only takes few seconds !',
    '応援した分、' : '',
    '応援依頼はありません。' : 'There\'s no AP gift request pending',
    '全員を応援して行動力回復' : 'Giving AP to everyone !',
    '友達を応援すると応援した友達の行動力が' : 'Give AP to your friends !',
    '5回復' : ' 5 AP are given to each friend in the list !',
    'あなたの行動力も回復' : 'You also receive the same amount of AP you gifted !',
    'するわ!' : '',
    '応援要請が届きました' : 'Asked for AP !',
    '応援成功回数：' : 'Received:',
    '応援成功率：' : 'Rate:',
    '応援依頼' : 'Friends AP requests',
    '応援要請' : 'Your AP request',
    '応援リスト' : 'AP Gift page',

};


// Rating game http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Ftreasure_battle.html%3FchkLogin%3Dtrue
var ratingGame = {
    'ギルド貢献度Pt' : 'Guild contribution point',
    ' レーティングゲームトップ ' : 'Go to the rating games',
    '☆今だけ獲得ギルドガチャPt2倍☆' : '☆ Guild Gacha X2 Limited Time !☆',
    'コンプリート特典を受け取る' : 'Receive relic\'s set reward',
    ' 続けてリベンジする' : 'Back to revenge',
    '期間限定!獲得ギルドガチャPt2倍!!' : 'Limited time ! Get Guild Gacha Points x2 !!',
    '同じ相手には1日3回までしか攻撃できません。(リベンジは含みません)' : 'You can only attack someone 3 times per day. (This doesn\'t include revenges)',
    '対戦相手を更新' : 'Refresh opponents list',
    '秘密の招待状 コンプリート報酬' : 'Secret Invitation set Rewards',
    'レーティングゲームとは' : 'Rating game FAQ',
    'レリックを変更する' : 'Choose another relic set',
    '所持数' : 'Progress:',
    'コンプ回数' : '| # of completion: ',
    '魔力全回復まであと' : 'Your MP will be full in ',
    'ランキング' : 'Ranking',
    '戦闘履歴' : 'Fight History',
    'レーティングゲーム' : 'Rating Games',
    'おすすめのシリーズ' : 'Selected relic set',
    'シリーズ' : ' Series',
    '聖水' : 'Holy Water',
    '秘密の招待状' : 'Secret invitation',
    '目覚まし時計' : 'Issei\'s alarm clock',
    'オカ研ハチマキ' : 'ORC Headband',
    'ラッチュー君' : 'Mr. Rachu',
    '聖書' : 'Holy Bible',
    '十字架' : 'Holy Cross',
    '別の対戦相手を探す' : 'Fight another opponent',
    'を獲得しました。' : ' earned.',
    'ピース' : ' Money',
    'ギルドPt' : 'Guild points',
    'あと1つでコンプリート' : 'Only one more to complete !',
    'あと2つでコンプリート' : 'Two more to complete !',
    'あと3つでコンプリート' : 'Three more to complete !',
    'あと4つでコンプリート' : 'Four more to complete !',
    'あと5つでコンプリート' : 'Five more to complete !',
    '結界魔法陣を購入する' : 'Buy def. scroll',
    '対戦相手を探す' : 'Fight an opponent',
    'リベンジ' : 'Revenge ',
    '対戦' : 'Fight',
    '友達数：' : 'Friends: ',
    '(赤)' : '(Red)',
    '(紫)' : '(Purple)',
    '(青)' : '(Blue)',
    '(水)' : '(Turquoise)',
    '(緑)' : '(Green)',
    '(黄)' : '(Yellow)',
    '分' : ' minutes',
    '戦闘力:' : 'Total ATK: ',
    '(防御障壁効果' : '(Guild boost ',
    'ドラゴンの血(小)を使う' : 'Use a small Dragon blood',
    '（残り' : '(You have ',
    '個）' : ' units)',
    'ドラゴンの血を使う' : 'Use a Dragon blood',
    '戦闘力：' : 'ATK: ',
    '友達の力を借りて攻撃' : 'Use your sacred gear',
    '通常攻撃' : 'Attack',
    '魔力20' : '- 20 MP',
    '魔力40' : '- 40 MP',
    'バトルアニメーションをスキップ' : 'Skip fight animations',
    '別のレリックを狙う ' : 'Choose another relic set',
    '魔力' : 'Mp',
    '個' : ' unit(s)',
    '詳細結果' : 'Result details',
    '【発動スキル】' : '【Skills trigered:】',

};

// Rating games ranking http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Ftreasure_battle.html%3Faction%3Dranking
var ratinggameRanking = {
    ' レーティングゲームトップ ' : 'Go to the rating games',
    '周辺を見る' : 'view your rank',
    '勝利数：' : 'Wins:',
    '-攻撃：' : '- as attacker: ',
    '-防衛：' : '- as defenser: ',
    'レーティングゲームランキング】' : 'Rating games ranking】',
    'ランキングは月内に1度以上戦わないと表示されません' : 'To be ranked, you need to fight at least one time.',
    'ランキングは表示月内に1度以上戦わないと表示されません' : 'Stats are only available for months were you fight at least 1 time.',
    '更新(1日毎に更新)' : ' (Updated every day)',
    '勝' : ' Wins ',
    '攻撃:' : 'As attacker: ',
    '防衛:' : 'As defenser: ',
    '敗' : ' Defeats ',
    '戦' : ' Fight ',
    'レーティングゲーム' : 'Rating Games',
    '位' : '#',

    

};

// Paid GACHA http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fgacha.html%3FchkLogin%3Dtrue
var paidGacha = {
};


// Sitri GACHA http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fgacha.html%3Fgacha_mode%3Dticket
var sitriGacha = {

};

// Cards
var cards = {
        'バランス・ブレイクを続ける' : 'Balance break again',
'24時間限定! 合成の獲得EXP2倍!' : 'Get EXP x2 for 24H only !',
        'バランス・ブレイク' : 'Proceed the Balance break !',
    'さらに進化させる' : 'To further evolve !',
        'このカードを強化する' : 'Upgrade this card (sockets)',
'を受け継いだ' : ' gained !',
    '※進化するとLvとスキルLvが1になります' : '※Note that upon evolution, Card LV and Skill LV will be set to 1 !', 
    'ソケットにブーストアイテムをセットしよう。すでにセットしている場合は、ブーストアイテムを上書きします。' : 'You can apply boost to sockets. If a socket is already used, the boost will override existing one.',
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
    'カード詳細' : 'Card details',
    'カードリスト' : 'Card list',
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
    '進化可能なカードのみ' : 'Evolvable card only',
    'オーバーブーストカード以外' : 'Non overbooster cards',
    '進化度:' : 'Stade:',
    '進化しないカードです' : 'Can\'t further evolve !',
    '進化度1のみ' : 'Evolution stade 1 Only',
'スキルLvUP確率：' : 'Skill LvUp chance: ',
    '進化度' : 'Evolution stade',
    'ベースカードに選択する' : 'Select this card',
    'このカードを売却する' : 'Sell this card',
'レアリティの高い順で優先的に選出されています' : 'Cards will be used by ascending order.',
    '合成によってベースカードの成長度が100%を越える分の消費カードは除外されています。' : 'Cards will not be used once the selected card reach max level.',
    'アニメーションをスキップ' : 'Skip synthesis animation',
    '同じ悪魔の駒ボーナス!対象カードの合成獲得EXP1.5倍!' : 'EXP x1.5 when the consummed card is the same as the selected.',
    '信頼度' : 'Reliability',
    'タッチしてみる' : 'Touch !',
    '端末をシェイクしてぷるるん!' : 'You can also shake the terminal !',
    '※端末の機種やブラウザによっては揺れない場合があります。' : '※May not work depending on terminal & browser.',
    '成長度' : 'XP bar',
    '戦闘力' : 'Attack',
    '合成素材確認' : 'Synthesis confirmation',
    '以下のカードを素材にします' : 'Cards below will be destroyed during process',
    '全ページのカードを一括合成' : 'Use all sorted cards for synthesis',
    '合成素材選択' : 'Synthesis choice',
    'ｾｲｸﾘｯﾄﾞｷﾞｱで合成' : 'Use sacred gear',
    'カード合成' : 'Use cards',
        'ページ内全選択' : 'Select/Unselect all',
'ピースが少なくなったらクエストで稼ぐか要らないカードを売却するといいわ。' : 'You can also sell the cards you don\'t need ! ',
        '売却する' : 'Sell',

    '合成用アイテムとは' : 'Synthesis material FAQ',
    '合成とは' : 'Synthesis FAQ',
    'セイクリッドギアとは' : 'Sacred Gear FAQ',
    '詳細を確認' : 'Reincarnation details',
    'セイクリッドギア' : 'Sacred Gear',
    'カードに合成することで、効率良く成長させることができます' : 'Used as synthesis material to give Experience to your evil pieces. Each gives 100 Experience.',
    'チケットでレアカードを手に入れよう!' : '',
    '詳細' : 'Details',
    '強化素材選択' : 'Available upgrades',
    '効果' : 'Effect: ',
    '戦闘力' : 'Attack ',
    '強化する' : ' points',
    '空きスロット' : 'Empty socket',
    'ソケット' : 'Socket',
    '空' : 'Empty',
    'コスト' : 'Cost',
    '効果：' : 'Effect:',
    '※このアイテムではスキルレベルは上昇しませんのでご注意下さい': '※ Note that sacred gear can\'t be used for skill leveling.',
    'アイテムを使用する必要はありません。' : 'Can\'t use that item on this card.',
    '所持数' : 'Owned:',
    'スキルLv：' : 'Skill lv:',
    'スキル：' : 'Skill:',
    'カードコレクションを確認' : 'Check card collection',
    'デッキ編成' : 'Deck Organization',
    'このカードを合成する' : 'Synthesis this card',
    'このカードを強化する' : 'Upgrade this card (sockets)',
    '悪魔の駒を変更' : 'Promotion',
    'このカードを保護する' : 'Enable card protection',
    'このカードを保護しない' : 'Cancel card protection',
    '攻撃デッキに優先配置する' : 'Enable offensive priority',
    '攻撃デッキに優先配置しない' : 'Disable offensive priority',
    '防御デッキに優先配置する' : 'Enable defensive priority',
    'このカードを売却する' : 'Sell this card',
    'このカードをコレクションに収納する' : 'Deposit card in Collection',
    'アルバム' : 'Album',
    'カードコレクション一覧' : 'Card collection list',
    'このカードをリーダーにする' : 'Make this your representant',
    'オーバーブーストカード' : 'Overbooster cards',
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
    'ボイス付き' : 'With voice',
    '全て' : 'All',
    '売値' : 'Selling price ',
    'LvMAXで手に入れられるブーストアイテム' : 'Rewards once at max LV.',
    '進化1' : 'Stade 1',
    '進化2' : 'Stade 2',
    '進化3' : 'Stade 3',
    '進化4' : 'Stade 4',
    '合成を続ける' : 'Synthesis again',
    'このカードを進化させる' : 'Evolve this card',
    'このカードをバランス・ブレイクする' : 'Balance break this card',
    '合成完了' : 'Synthesis result',
    'スキル発動率' : 'Skill trigger rate',
    'スキル' : 'Skill',
    '効果' : 'Effect',
    '転生進化カード' : 'Reincarnate cards',
    '転生進化とは' : 'Reborn FAQ',
    '転生進化' : 'Reborn',
    '合成' : 'Synthesis',
    'ジョーカー進化とは' : 'Joker evolution FAQ',
    '進化とは' : 'Evolution FAQ',
    'カード進化' : 'Card evolution',
    'アイテムがありません' : 'No material available.',
    'ジョーカー進化' : 'Joker evolution',
    '強化とは' : 'Upgrade FAQ',
    '強化' : 'Upgrade',
    'バランス・ブレイクとは' : 'Balance Breaker FAQ',
    'バランス・ブレイク素材選択' : 'Balance breaker choice',
    '該当カードなし' : 'No cards meeting the search criterias',
    'バランス' : 'Balance',
    'ブレイク' : 'Breaker',
    '追加が新しい順' : 'Newest reincarnation first',
    '追加が古い順' : 'Old reincarnation first',
    '詳細を確認' : 'See the details',
    '進化素材選択' : 'Evolution choice',
    '進化完了' : 'Evolution result',
    '進化素材確認' : 'Evolution confirmation',
    '引き継ぎます' : ' (expected increase)',
    '進化' : 'Evolution',
    '売却' : 'Card list',
    'アルバム' : 'Album',
    'ベースカードを変更する' : 'Choose another card',
    'ベースカード選択' : 'Base card selection',
    '素材選択へ戻る' : 'Back to selected card',
    'ベースカード' : 'Selected card',
    '戻る' : 'Back to material choice',
    '下記カードは表示されません' : 'Following cards aren\'t displayed: ',
    'リーダーに指定されているカード' : 'Leader card',
'保護されているカード' : 'Protected cards',
'デッキに配置しているカード' : 'Cards that are in your decks',
    '枚' : ' more cards',
    '個' : 'Unit(s)',
    'レアリティ' : 'Rarity',

    'を' : '+',
    '他' : '+ ',

};


// GiftBox
var giftBox = {
        'レジェンドチケット' : ' Legendary ticket',
    'ピース' : ' Money',
    'セイクリッドギア' : ' Sacred Gear',
    'ガチャをまわす' : 'Go to gacha',
    '禁手 バランス・ブレイカ' : 'Balance Breaker',

    '■以下のものを受け取りました' : 'You received the following:',
    '◆プレゼントBOX状況': '◆Gift box state',
    '友情P&その他(' : 'Friends points & others : (',
    '友情Pt&その他引き取り履歴' : 'history',
    'アイテム一覧へ' : 'Go to your inventory',
    '受取可能なアイテムが存在しません。' : 'Gift box is empty !',
    '※注意事項' : '※Notes',
    '【重要】プレゼントBOX仕様変更につきまして' : '[IMPORTANT]Gift box changes ; please read !',
    'プレゼントBOXの受取容量はカードのみで1000件、友情Pt&その他で1000件です。' : 'You can have 1000 items for each category maximum.',
    '・ボタンを連打するとエラーになる場合があります。' : 'Errors can occur in some cases.',
    '90日間' : 'Items can stay in the Gift box for 90 days',
    '・プレゼントの受け取りには有効期限があります。' : '・Items in the Giftbox have an expiration date.',
    'を経過するとプレゼントBOXから消滅します｡' : '',
    'プレゼントBOXの容量が1000件を超えた場合' : 'If your box exceeds 1000 items limits,',
    'フェニックスの涙(小)' : 'Small Phenix tears',
    'ドラゴンの血(小)' : 'Small Dragon blood',
    'ドラゴンの血' : 'Dragon Blood',

     '【一時保管所とは】' : '[What\'s the temporary box ?]',
    '・設置期限を過ぎると一時保管所のカード/アイテムは全て削除されます。' : 'Please, note there\'s a time limit to retrieve items from the Temporary box.',
    '・一時保管所にあるアイテム/カードはプレゼントBOXに移動することができます。' : '・Items in the temporary box will move to the Gift box.',
    'プレゼントBOXから受け取ることで使用出来るようになります。' : 'You just have to retrieve items in the Gift box.',
    '・2/29(月)の仕様変更時に消失したアイテム/カードが保管されます。' : '2/29(Monday) - lost items should appear in the Temporary box.',
    '・一時保管庫の使用期限は' : 'Please, note that ',
    '古いものから消滅' : ' oldest items',
    'されます。' : ' will be lost.',
    'プレゼント受取から30日間分の履歴が表示されます。' : 'History only show up to 30 days.',
    'プレゼント受取履歴' : 'Received items history',
    '贈り物が届いているわ。' : 'You have item in your Gift box !',
    '受け取って確認するのよ。' : 'I wonder what they are !',
    ' ページ内全選択' : 'Select all',
    'チェックしたものを受け取る' : 'Retrieve checked items',
    '受け取る' : 'Retrieve',
    '友情Ptがありません' : 'There\'s no Friend points',
    'カードがありません' : 'There\'s no cards',
    'アイテムがありません' : 'There\'s no items',
    'ガチャ' : 'Shop',
    'アイテム' : 'Inventory',
    '枚' : ' unit',
    '売却する' : 'to card list',
    '受け取っていない贈り物はないみたいね。' : 'Looks like there\'s no gift waiting for you !',
    'まで' : ' is the limit date',
    'となります。' : ' to retrieve your items.',
    'ページ内全選択' : 'Select/Unselect all',
    '一括受取り' : 'Bulk retrieving',
    '合成する' : 'Synthesis',
    '合成' : 'Synthesis',
    '進化' : 'Evolution',
    '売却' : 'Card list',
    'アルバム' : 'Album',
    '入手が新しい順' : 'Newest first',
    '入手が古い順' : 'Oldest first',
    '一時保管所' : 'Temporary box',
    'を経過するとプレゼントBOXから消滅します｡' : '',
    '友情Pt' : ' Friend points',
    'カード' : 'Cards',
    'プレゼントBOX' : 'Gift Box',
    'その他' : 'Others',
    '個' : ' unit(s)',
};

// Friend points GACHA http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fgacha.html%3Fgacha_mode%3Dnormal
var fpGacha = {
    '友情Ptとは' : 'Friend Points FAQ',
    '注意事項' : 'Notes',
    '１回' : '1 card per ',
    '100友情Ptでガチャを1回引くことができるわ。' : 'You can purchase a random card for 100 Friends points.',
    '友情Ptが貯まれば何度でも引くことができるわよ！' : 'Earn Friends points by helping friends and by participing in special events !',
    '現状の友情Pt数' : 'Friend points reserve:',
    '友情Pt' : 'Friend Points',
    '・内容の詳細は、ラインナップからご覧ください。' : 'Check the lineup for more informations.',
    'アニメーションをスキップ' : 'Skip animations',
    '毎日最初の一回は無料で引くことができるのよ！' : 'Each day, the first Friend Gacha is free !',
    'さっそく引いてごらんなさい！' : 'Let\'s draw it !',
    'レジェンドチケット' : 'Legendary ticket',
    'チケット' : 'Gacha Tickets',
    'レジェンド' : 'Paid Gacha',
    '・ガチャは、ランダムでカードを獲得できます。1回の利用ごとに全ての出現カードが抽選対象となります。そのため、必ずしもご希望のカードが獲得できるとは限りません。また、ガチャで手に入るカードは重複する場合があります。' : 'The card you receive is randomly chosen. Therefore, it is not always possible to get the card you desire, and some card may not be available at a specific time.',
    '・ガチャのラインナップは変更になる場合があります。' : 'Lineup is subject to change.',
    '・ガチャの演出が最後まで表示されなかった場合、カード及びアイテムはプレゼントBOXへ正常に追加されていますのでご確認ください。' : 'Check if you received correctly the cards you got, if you have any problem, feel free to contact us.',
    '・ご購入頂いたガチャ・アイテムは届くまで時間がかかる場合がございますので、お時間をおいてプレゼントBOXをご確認ください。' : 'It may take some time for the cards to arrive in your Gift Box, if you don\'t see them, check later and contact support.',
    '・友情ガチャは午前0時ごろにリセットされます。' : 'Reset is everyday at midnight.',
    '※獲得するカードの最大ソケット数はレアリティにより異なります。' : 'The number of socket a card has depend on his rarity and if you\'re lucky or not. For each socket on a card, you can use an upgrade on it.',
    '-ソケットの最大数：C×1,UC×2,R×3,HR×3,SR×4,SSR×5,UR×6,W×6,' : '- The maximum number of socket (upgrades) per rarity is: C×1,UC×2,R×3,HR×3,SR×4,SSR×5,UR×6,W×6,',
    '友情ガチャ' : 'Friend points card drawing',
    '友情' : 'FP Gacha',
    'ガチャトップ' : 'Back to the shop',
    '合成' : 'Synthesis',
    '進化' : 'Evolution',
    '売却' : 'Card list',
    'ガチャ履歴確認' : 'Card history',
    'アルバム' : 'Album',
    'ガチャ' : 'Gacha',
};

// Login bonus
var loginBonus = {
    '最大戦闘力：' : 'Max ATK:',
    '最大HP：' : 'Max HP:',
    '進化度' : 'Evolution stade ',
    '[桜吹雪]ロスヴァイセは、' : 'Note that for this card,',
    '配布月のみジョーカー進化はできません。' : 'joker evolution isn\'t available.',
    'その他の報酬を確認する>>' : 'Check other rewards >>',
    'レジェンドチケット' : 'Gacha tickets',
    '最大連続ログイン日数 :' : 'Daily login streak: ',
    '現在累計' : 'You played ',
    '日ログイン中!' : ' days this month !',
    '開催期間：' : 'Availability: ',
};

var faq = {
    'ハイスクールD×Dとは' : 'High School DxD',
    'ハイスクールDxDについて' : 'High School DxD FAQ',
    'ハイスクールDxDとは' : 'What is High School DxD ?',
    'ハイスクールDxDはライトノベル原作、アニメも大人気の青春熱血ストーリーです。' : 'Highschool DxD is originally a light novel. It is now adapted as both a manga and an anime.',
    '本アプリではハイスクールDxDの魅力的なキャラクターたちがカードとなって登場します。' : 'The series revolves around Issei Hyoudou, a perverted high school student who is reincarnated into a Devil by Rias Gremory after being killed on his first date. He later joins the Occult Research Club as he strives to rise up the Devils\' ranks to fulfill his dream of building a harem and becoming a "Harem King".',
    '上級悪魔を目指して、自分だけのドリームチームを作りましょう。' : 'In this game, you\'ll be able to make your own team including devils and even angels (like Irina) or fallen angels (like Azazel or Raynare) !',
    'クエスト' : 'Quest',
    'クエストについて' : 'Q',
    'レーティングゲーム' : 'Rating game',
    
    'カード' : 'Cards',
    
    'デッキ' : 'Decks',
    
    'レイドボス' : 'Boss',
    
    'ギルド' : 'Guilds',
    '友達招待' : 'Friends referral',

    '友達' : 'Friends',
    
    'ガチャ' : 'Gacha',
    
    'アイテム' : 'Items',
    
    'プレゼントBOX' : 'GiftBox',
    
    'プロフィール' : 'Profile',
    
    
    '称号' : 'Title',
    
    'ログインボーナス' : 'Login Bonus',
    
    'スマートフォンの個人認証について' : 'Smartphone authentification',

    'ヘルプ一覧' : 'Back to main FAQ',
    'ヘルプ' : 'FAQ',
    'オープニングムービー' : 'Opening animation',
    'ビンゴムービー' : 'Bingo animation',
};

// Event medals box
var eventbox = {
    'レイドBOXガチャを引く' : 'Draw another Raid Box Gacha',
    'BOX内の残り' : 'Remaining prizes:',
    'レイドBOXガチャTOPへ' : 'Back to Raid Box Gacha',
    '・メダルはレイドボス撃破時やデイリーミッションの達成、ランキング報酬にて手に入れることができます。' : '・Medals can be acquired by defeating boss during the event, achieving daily mission or as ranking rewards.',
    '・次のBOXへ進んだ場合、変更前のBOX内にあるアイテムやカードは入手できなくなります。' : '・For each medal you use in a specific box, you get a random reward from that box.',
    '・A賞のカードを全て獲得後、任意で次のBOXへ進むことができます。' : '・Once you\'ve received every cards available in a specific box, you can choose to proceed to the next box.',
    '・過去のBOXで獲得しなかったカードが、BOX5で再度出現します。' : '・Note that items youn didn\'t get before proceeding will be available again in box 5.',
    '・レイドBOXガチャの内容は変更になる場合があります。' : '・Note that medals can\'t be used in a future event. Each medal is bound to the event it was gained in.',
    '・ガチャは、ランダムでアイテムを獲得できます。1回の利用ごとにBOXに残っている全てのカード、アイテムが抽選対象となります。' : '・Box contents are subject to change.',
    '・レイドBOXガチャは' : 'This Raid Box Gacha is available till ',
    'まで引くことができます。' : ' after this date, your remaining medals will be lost.',
    'レジェンドチケット 1枚' : 'Gacha Ticket x1',
    '※同一のアイテムが複数出現した際は' : '※Same item received multiple time',
    'まとめてからプレゼントBOXに送られます。' : 'are summed up into 1 stack.',
    'イベントTOPへ' : 'Back to event main page',
    '禁手 バランス・ブレイカ' : 'Balance Breaker',
    'プロモーション' : 'Promotion',
    'フェニックスの涙(小)' : 'Small Phenix Tears',
    'フェニックスの涙' : 'Phenix Tears',
    'レジェンドチケット x 1枚' : 'Gacha Ticket x1',
    'ドラゴンの血(小)' : 'Small Dragon Blood',
    'セイクリッドギア' : 'Sacred Gear',
    'ドラゴンの血' : 'Dragon Blood',
    '次のBOXの内容を確認' : 'Check next box details',
    'アニメーションをスキップ' : 'Skip animations',
    'メダルでガチャを引く' : 'Draw !',
    '所持メダル枚数 ' : 'You have: ',
    'メダル1枚で1回ガチャが引けます' : 'Each medal allow you to draw one random prize from the Gacha !',
    'レイドBOXガチャとは' : 'Raid Box Gacha FAQ',
    'レイドBOXガチャは ' : 'Raid Box Gacha is available till ',
    'レイドボスを撃破してメダルを手に入れよう!' : 'Receive medals to draw rewards by defeating boss / raid boss !',
    'レイドBOXガチャ' : 'Raid Box Gacha',
    '残り' : 'Remaining: ',
    ' まで!!' : '',
    '枚' : ' Medals',
    'メダル' : 'Medals',
    '個' : '',
    '友情Pt' : ' Friend points',
    'ピース' : ' Money',
    '4月転生アイテム' : 'April reborn Material',
    '合成' : 'Synthesis',
    '進化' : 'Evolution',
    '売却' : 'Card list',
    'アルバム' : 'Album',
    '注意事項' : 'Notes',
};

// Raid battle
var raidbattle = {
    '逃亡まで' : 'Time left: ',
    
    'オーバーブースト効果発動中!!' : 'Overboost effect triggered !!',
    '通常攻撃' : 'Boost',
    '魔力20消費' : '-20MP',
    '魔力60消費' : '-60MP',
    '魔力100消費' : '-100MP',
    '魔力消費が多いほど' : 'Damages are increased according to ',
    'スキル発動率アップ' : 'magic consumption ',
    'レイドボス覚醒率' : 'Boss has ',
    'アップ中!' : ' chance to awake !',
    '3倍攻撃' : 'Boost x3',
    'ドラゴンの血(小)1個' : '-1 small blood',
    'ドラゴンの血(小)2個' : '-2 small blood',
    'ドラゴンの血(小)3個' : '-3 small blood',
    'ドラゴンの血(小)4個' : '-4 small blood',
    'ドラゴンの血(小)5個' : '-5 small blood',
    '5倍攻撃' : 'Boost x5',
    '魔力100回復して攻撃!' : 'Dragon blood consumption regains 100MP !',
    '発見者' : 'Discoverer',
    '撃破者' : 'Finisher',
    '攻撃デッキ' : 'Your deck',
    '★オーバーブースト発動!!★' : '★Overboost triggered!!★',
    'オーバーブーストカード：' : 'Cards with Overboost: ',
    '枚' : ' pieces',
    '撃破報酬' : ' defeat rewards:',
    'ドラゴンの血(小)：残り' : 'Small dragon blood owned : ',
    'ドラゴンの血：残り' : 'You have: ',
    '個' : ' unit(s)',
    'オーバーブースト効果を考慮した' : 'Optimize your deck',
    'オススメデッキに更新' : '(with Overboost effect included)',
    'イベントデッキ編成' : 'Go to decks management',
    'バトルアニメーションをスキップ' : 'Skip battle animation',
    '友達・ギルドメンバーに' : 'Call your friends !',
    '救援要請' : '(they will be able to help you, but will get a part of the reward)',
    'イベントクエストに戻る' : 'Back to quest',
    'イベントTOPへ' : 'Back to event main page',
    '魔力' : 'MP',
    '戦闘力：' : 'ATK：',
};

// Error page
var error = {
    '画面表示の際、エラーが発生しました、恐れ入りますがマイページに戻って再度アクセスをお願い致します。' : 'An error has occured. We apology for the inconvenience.',
    'エラー' : 'Error',

};

// General word used on each page (ei menu or card pages)
var general = {
    '特定商取引法に基づく表示' : 'Check some legal details',
    '行動力：' : 'AP: ',
    '魔力：' : 'MP: ',
    '友情Pt：' : 'Friend PT: ',
    'ピース：' : 'Money: ',
    'カード：' : 'Cards: ',
    'ガチャ履歴確認' : 'Friend points card history',
    'ラインナップ' : 'Lineup',
    '【重要】プレゼントBOX仕様変更につきまして' : '[IMPORTANT]Gift box changes ; please read !',
    '音声再生に関する免責事項' : 'Sound disclaimer',
    '・端末によっては音声が再生できません' : 'Some device may not be able to play sounds',
    '・音量にご注意ください' : 'Check the volume !',
    '本' : ' Oil units',
};


// 
var full = {
};

// Table with each bodyID and translation
TABLE = {'tpl_mypage' : mainpage,
         'tpl_allocate-input' : statpoints,
         'tpl_guild_top' : Guild,
         'tpl_guild_member' : Guild,
         'tpl_guild_bid_rcv-list' : Guildinvit,
         'tpl_guild_bid_rcv-complete_ng' : Guildinvit,
         'tpl_friend_list' : friendlist,
         'tpl_friend_confirm' : friendlist,
         'tpl_friend_complete' : friendlist,
         'tpl_quest_select' : questselect,
         'tpl_quest_shortage_active' : Outofap,
         'tpl_raid_battle-ready' : raidbattle,
         'tpl_raid_battle-result_win' : raidbattle,
         'tpl_card_list' : cards,
         'tpl_card_list_detail' : cards,
         'tpl_card_composition' : cards,
         'tpl_card_composition_complete' : cards,
         'tpl_card_reborn' : cards,
         'tpl_present' : giftBox,
         'tpl_present_storage' : giftBox,
         'tpl_login_bonus' : loginBonus,
         'tpl_quest_request_rescue_list' : apRequest,
         'tpl_quest_main' : quest,
         'tpl_quest_top' : quest,
         'tpl_raid_battle-list' : raid,
         'tpl_treasure_battle-opponent_list' : ratingGame,
         'tpl_treasure_battle-revenge_list' : ratingGame,
         'tpl_treasure_battle-ready' : ratingGame,
         'tpl_treasure_battle-result' : ratingGame,
         'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Ftreasure_battle.html%3Faction%3Dranking' : ratinggameRanking,
         'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fgacha.html%3Fgacha_mode%3Drare' : paidGacha,
         'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fgacha.html%3Fgacha_mode%3Dticket' : sitriGacha,
         'tpl_gacha-normal' : fpGacha,
         'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fgacha.html%3Faction%3Dcomplete' : fpGacha,
         'tpl_gacha-complete' : fpGacha,
         'tpl_help' : faq,
         'tpl_help_detail' : faq,
         'tpl_error' : error,
         
// Event
         'tpl_gacha_event_box' : eventbox,
         'tpl_gacha_event_box-complete' : eventbox,
        
        
};



// Check the URL in the TABLE and retrieve the translation to be applied. If no translation is found for that page, only apply general translations.
if (bodyId in TABLE){var specific = TABLE[bodyId]}
else specific = full;


// Function merging both specific and general objects. 
function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}
var words = extend(specific, general);


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

    //// Changing Top Menu
        tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_menu.png%3Fm%3D1464667775', 'http://dxdmobage.xp3.biz/Menu.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_02.jpg%3Fm%3D1464667775', 'http://dxdmobage.xp3.biz/BTN_Quest.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_03.jpg%3Fm%3D1464667776', 'http://dxdmobage.xp3.biz/BTN_Pvp.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_04.jpg%3Fm%3D1464667776', 'http://dxdmobage.xp3.biz/Shop.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_mypage.png%3Fm%3D1464667776', 'http://dxdmobage.xp3.biz/HomePage.png');
    
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_menu.png', 'http://dxdmobage.xp3.biz/Menu.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_02.jpg', 'http://dxdmobage.xp3.biz/BTN_Quest.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_03.jpg', 'http://dxdmobage.xp3.biz/BTN_Pvp.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_04.jpg', 'http://dxdmobage.xp3.biz/Shop.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_mypage.png', 'http://dxdmobage.xp3.biz/HomePage.png');




    //// Changing some buttons using this method too.
    // EVENT PICS
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fevent150%2Fdiary_banner.png%3F67.91', 'http://dxdmobage.xp3.biz/Writewin.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fevent150%2Fdiary_banner_gray.png%3F67.91', 'http://dxdmobage.xp3.biz/Writewingrey.png');
    // TO be changed, picture is for the daily missions achieved !
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fevent150%2Fmission_failure.png%3F67.91', 'http://dxdmobage.xp3.biz/Missiondaily.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fevent150%2Fmission_success.png%3F67.91', 'http://dxdmobage.xp3.biz/Missiondaily.png');

    //// Month login rewards
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fspecial%2Flogin%2Fbackground%2Fmidashi_desc1.png', 'http://dxdmobage.xp3.biz/Dailyreward.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fspecial%2Flogin%2Fbackground%2Fmidashi_desc2.png', 'http://dxdmobage.xp3.biz/Tomorrow.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fspecial%2Flogin%2Fbackground%2Fmidashi_desc3.png', 'http://dxdmobage.xp3.biz/Gridrewards.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fspecial%2Flogin%2Fbackground%2Fday-L.png', 'http://dxdmobage.xp3.biz/Days.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fspecial%2Flogin%2Fbackground%2Fday-S.png', 'http://dxdmobage.xp3.biz/Days.png');
    
    ////
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fhoseichu.png', 'http://dxdmobage.xp3.biz/Rolebonus.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fleader.png', 'http://dxdmobage.xp3.biz/Leader.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fhogo.png', 'http://dxdmobage.xp3.biz/Protected.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_modal_top.jpg', 'http://dxdmobage.xp3.biz/Menu_Totop.png');
        tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fback_to_mypage_pink.png', 'http://dxdmobage.xp3.biz/Back to main page.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fback_to_mypage_orange.png', 'http://dxdmobage.xp3.biz/Back to main pageorange.png');

    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fback_to_mypage_blue.png', 'http://dxdmobage.xp3.biz/backtomainpage_blue.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fpage_top_blue.jpg', 'http://dxdmobage.xp3.biz/Scroll_to_top_blue.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_next_quest_orange.png', 'Next_Quest_Gold.png');


    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fpagetop.png', 'http://dxdmobage.xp3.biz/Scroll_to_top.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_announce.png', 'http://dxdmobage.xp3.biz/HomePage.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fpage_top_orange.jpg%3F67.91', 'http://dxdmobage.xp3.biz/Scroll_to_toporange.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fpage_top_orange.jpg%3F67.93', 'http://dxdmobage.xp3.biz/Scroll_to_toporange.png');
    
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_aisatsu_rireki_2.png', 'http://dxdmobage.xp3.biz/Messages.png');

    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_motto_arrow.png', 'http://dxdmobage.xp3.biz/More.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_shinchaku.png', 'http://dxdmobage.xp3.biz/Events.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_event.png', 'http://dxdmobage.xp3.biz/NEWS.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_unei.png', 'http://dxdmobage.xp3.biz/MmAnnounces.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_motto_miru.png', 'http://dxdmobage.xp3.biz/showmore.png');

    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Ftop_mypage_btn.png', 'http://dxdmobage.xp3.biz/MainPage.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_motto_blue.png', 'http://dxdmobage.xp3.biz/More_Blue.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_motto_green.png', 'http://dxdmobage.xp3.biz/More_Green.png');


    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_oshirase.png', 'http://dxdmobage.xp3.biz/Events_2.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_event_green.png', 'http://dxdmobage.xp3.biz/News_2.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_unei_blue.png', 'http://dxdmobage.xp3.biz/Announces_2.png');
    
    
    
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn400_gousei.png', 'http://dxdmobage.xp3.biz/Synthesis_act.png');


    // Evolve button
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn400_shinka.png', 'http://dxdmobage.xp3.biz/Evolve.png');    
    // Giftbox button
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn400_present.png', 'http://dxdmobage.xp3.biz/Giftboxbutton.png');    

    // AP IN Quest progress
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fquest%2Fkoudouryoku.png%3F1.55', 'http://dxdmobage.xp3.biz/AP.png');    
}
