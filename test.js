//// Store current url to check which translation table need to be used
var URL = window.location.href;
var bodyId = document.body.id;

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
        <li><a href="https://github.com/Tracehunter/DXD-Mobage/raw/master/Dxd.user.js"><img src="http://dxdmobage.xp3.biz/Ver05.png" alt="V0.5" width="67" height="44"></a></li>');

// PERSO TOO
if (URL == "http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fcard_list.html%3Faction%3Dlist%26phase%3Ddetail%26user_card_id%3D1460036749191156139%26anchor_no%3D") {
$('#tpl_card_list_detail > section:nth-child(9)').html('<div id="viewer" style="position: relative; margin: 0px; width: 640px; height: 800px; zoom: 0.5; background: url(&quot;http://mb.hsdd.maql-games.jp/sp/image/cards/L1/6335_AW0rVtq8oFdF5HD3Q0fD5cUCSH3AXhXB.jpg&quot;) 0% 0% no-repeat;"><canvas width="73" height="105" style="position: absolute; top: 213px; left: 414px;"></canvas><canvas width="98" height="104" style="position: absolute; top: 255px; left: 314px;"></canvas></div>');
}

//Event Oil
$('#tpl_top > section:nth-child(14) > div').html('<p style="text-align:center;">24 hours only Overboost effect X1.5 !!<br><span class="textGlow kousaiPink white">Ends on April 16th 2016 10:59:59</span><br></p>');
$('#tpl_top > div.textGlow.kousaiPink.white.mb5.mt5').html('<p class="center" title="★Get 1.2X more items for 24hours only★">★Get 1.2X more items for 24hours only★</p>');
$('#count_extra_quest2').html('<p class="center" title="Dimensional dungeon&nbsp;" style="display:inline;">Dimensional dungeon&nbsp;</p></span>');
$('#count_extra_quest3').html('<span id="count_extra_quest3" class="textGlow  white" style="white-space:nowrap;"><p class="center" title="You only need " style="display:inline;">You only need </p></span>');
$('#count_extra_quest3 > p').eq(2).prop('title', "Left!");
$('#count_extra_quest3 > p').eq(2).text("Left!");
if (window.location.href.indexOf("http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fevent150_quest_main.html") > -1) {
var str = $('#count_extra_quest3 > p').eq(1).prop('title');
var Title = str.slice(0, 3);
$('#count_extra_quest3 > p').eq(1).prop('title', Title + " Oil units");
}

//SKIP Friend Gacha cardlist
//$('#tpl_gacha-complete > section:nth-child(10)').html('');
// Out of AP : Use Phenix tears !
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(1)>a').html('<span style="font-size:10px;">Use 1 <br>20% AP</span>');
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(2)>a').html('<span style="font-size:10px;">Use 2 <br>40% AP</span>');
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(3)>a').html('<span style="font-size:10px;">Use 3<br>60% AP</span>');
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(4)>a').html('<span style="font-size:10px;">Use 4<br>80% AP</span>');
$('#tpl_quest_shortage_active > section:nth-child(11) > dl > dd > ul.btn2Column.mt5 > li:nth-child(5)>a').html('<span style="font-size:10px;">Use 5<br>100% AP</span>');
$('#reward_calendar > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > p').html('<img src="http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fspecial%2Flogin%2Fbackground%2Fnumber%2F1.png" height="15"><img src="http://dxdmobage.xp3.biz/Day.png" height="15">');


$('#tpl_raid_battle-ready > section:nth-child(14) > dl:nth-child(1) > dd > ul > li:nth-child(1) > a').html('<strong>Attack</strong><br>-20PM');
$('#tpl_raid_battle-ready > section:nth-child(14) > dl:nth-child(1) > dd > ul > li:nth-child(2) > a').html('<strong>Boosted Attack</strong><br>-60PM');
$('#tpl_raid_battle-ready > section:nth-child(14) > dl:nth-child(1) > dd > ul > li:nth-child(3) > a').html('<strong>Explosion</strong><br>-100PM');


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
    'ピース：' : 'Money: ',
    'カード：' : 'Cards: ',
    'コンプリート報酬が受け取れます' : 'Relic set reward pending !',
    '新しいあいさつがあります' : 'You received a new message !',
    'レイドボス出現中!' : 'Boss !',
    '逃亡まで' : 'Time left: ',
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
    '自動受入' : 'Recruitment',
    '注意事項' : 'Notes',
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

};

// Quest page dictionnary http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fquest_select.html
var questselect = {
    '今しか遊べない限定イベント!' : 'Play the limited time event !',
    '限定スペシャルカードや豪華アイテムをGETしよう!' : 'Try to get special cards and amazing rewards !',
    'メインシナリオを進めよう!!' : 'Play through the scenario and make Ddraig proud of you !',
    'ノーマルクエスト' : 'Quest',
    'イベント開催中' : 'Event available',

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
    '進化度' : 'Evolution stade',
    'ベースカードに選択する' : 'Select this card',
    '売却する' : 'Sell',
    '信頼度' : 'Reliability',
    '成長度' : 'XP bar',
    '戦闘力' : 'Attack',
    '合成とは' : 'Synthesis FAQ',
    'セイクリッドギアとは' : 'Sacred Gear FAQ',
    '詳細' : 'Details',
    'ソケット' : 'Socket',
    '空' : 'Empty',
    'コスト' : 'Cost',
    '効果：' : 'Effect:',
    'スキル：' : 'Skill:',
    'カードコレクションを確認' : 'Check card collection',

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
    '進化度1のみ' : 'Evolution stade 1 Only',
    'ボイス付き' : 'With voice',
    '全て' : 'All',

};


// GiftBox
var giftBox = {
        'レジェンドチケット' : ' Legendary ticket',
    'ピース' : ' Money',
    'セイクリッドギア' : ' Sacred Gear',
    'ガチャをまわす' : 'Go to gacha',

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
}

// 
var full = {
}

// Table with each bodyID and translation
TABLE = {'tpl_mypage' : mainpage,
         'tpl_allocate-input' : statpoints,
         'tpl_guild_top' : Guild,
         'tpl_guild_member' : Guild,
         'tpl_friend_list' : friendlist,
         'tpl_friend_confirm' : friendlist,
         'tpl_friend_complete' : friendlist,
         'tpl_quest_select' : questselect,
         'tpl_quest_shortage_active' : Outofap,
         'tpl_card_list' : cards,
         
         'tpl_present' : giftBox,
         'tpl_present_storage' : giftBox,
         'tpl_quest_request_rescue_list' : apRequest,
         'tpl_quest_main' : quest,
         'tpl_quest_top' : quest,
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
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_menu.png', 'http://dxdmobage.xp3.biz/Menu.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_02.jpg', 'http://dxdmobage.xp3.biz/BTN_Quest.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_03.jpg', 'http://dxdmobage.xp3.biz/BTN_Pvp.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_04.jpg', 'http://dxdmobage.xp3.biz/Shop.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_mypage.png', 'http://dxdmobage.xp3.biz/HomePage.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fback_to_mypage_pink.png', 'http://dxdmobage.xp3.biz/Back to main page.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fback_to_mypage_orange.png', 'http://dxdmobage.xp3.biz/Back to main pageorange.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fpagetop.png', 'http://dxdmobage.xp3.biz/Scroll_to_top.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_gloval_announce.png', 'http://dxdmobage.xp3.biz/HomePage.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fpage_top_orange.jpg%3F67.91', 'http://dxdmobage.xp3.biz/Scroll_to_toporange.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_aisatsu_rireki_2.png', 'http://dxdmobage.xp3.biz/Messages.png');

    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_motto_arrow.png', 'http://dxdmobage.xp3.biz/More.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_shinchaku.png', 'http://dxdmobage.xp3.biz/Events.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_event.png', 'http://dxdmobage.xp3.biz/NEWS.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fttl_unei.png', 'http://dxdmobage.xp3.biz/MmAnnounces.png');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcommon%2Fbtn_motto_miru.png', 'http://dxdmobage.xp3.biz/showmore.png');

// PERSO
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcards%2FL5%2F6268_KUg54hFqfInKMPOczOOVjM9WziFYUaq7.jpg', 'http://dxdmobage.xp3.biz/9KSyiBD.jpg');
    tags[i].src = tags[i].src.replace('http://mb.hsdd.maql-games.jp/sp/image/cards/L1/6255_OgW0MOgtiXoK2waT5JPqy9sEJuXOlbE7.jpg', 'http://mb.hsdd.maql-games.jp/sp/image/cards/L1/6335_AW0rVtq8oFdF5HD3Q0fD5cUCSH3AXhXB.jpg');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcards%2FM%2F6255_OgW0MOgtiXoK2waT5JPqy9sEJuXOlbE7.jpg', 'http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcards%2FM%2F6335_AW0rVtq8oFdF5HD3Q0fD5cUCSH3AXhXB.jpg');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcards%2FT%2F6255_OgW0MOgtiXoK2waT5JPqy9sEJuXOlbE7.jpg', 'http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcards%2FT%2F6335_AW0rVtq8oFdF5HD3Q0fD5cUCSH3AXhXB.jpg');
    tags[i].src = tags[i].src.replace('http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcards%2FM%2F6255_OgW0MOgtiXoK2waT5JPqy9sEJuXOlbE7.jpg', 'http://sp.pf-img-a.mbga.jp/12014827?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fimage%2Fcards%2FM%2F6335_AW0rVtq8oFdF5HD3Q0fD5cUCSH3AXhXB.jpg');

}

