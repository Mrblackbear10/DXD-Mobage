// ==UserScript==
// @name           DxD Mobage English Translation
// @namespace      DxD
// @description    DxD Mobage Japanese > English translation
// @include        http://g12014827.sp.pf.mbga.jp/*
// @include        https://g12014827.sp.pf.mbga.jp/*
// @version        0.1
// @icon           http://dxdmobage.xp3.biz/ico.ico
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
