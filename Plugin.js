// @require        https://code.jquery.com/jquery-2.1.4.min.js
// @require        https://raw.githubusercontent.com/js-cookie/js-cookie/master/src/js.cookie.js
// @require        https://raw.githubusercontent.com/Tracehunter/DXD-Mobage/master/plugin.js
//// Store URL and BodyID for useful use later ;
var URL = window.location.href;
var bodyId = document.body.id;
////

// PLUGIN AREA
// Checking cookies for plugins
var autofight = Cookies.get('Autofight');
var soundsfx = Cookies.get('SoundSFX');
//Plugin Configuration page rendering;
if (URL == "http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html?configure") {
    $('#tpl_help > section:nth-child(8) > h1.midashiPink2.midashiText1').html('Plugin configuration page');
    $('#tpl_help > section:nth-child(8) > h1.midashiC').html('Available plugins:');
    if (autofight == "enabled"){
    $('#tpl_help > section:nth-child(9) > dl:nth-child(1)').html('Autofight (<font color="green">' +autofight +'</font>)<br><a href="http://g12014827.sp.pf.mbga.jp/?autofight?disable">Disable autofight</a>');}
    else {
    $('#tpl_help > section:nth-child(9) > dl:nth-child(1)').html('Autofight (<font color="red">' +autofight +'</font>)<br><a href="http://g12014827.sp.pf.mbga.jp/?autofight?enable">Enable autofight</a>');}

    if (soundsfx == "enabled"){
    $('#tpl_help > section:nth-child(9) > dl:nth-child(2)').html('Sound SFX (<font color="green">' +soundsfx +'</font>)<br><a href="http://g12014827.sp.pf.mbga.jp/?soundsfx?disable">Disable autofight</a>');}
    else {
    $('#tpl_help > section:nth-child(9) > dl:nth-child(2)').html('Sound SFX (<font color="red">' +soundsfx +'</font>)<br><a href="http://g12014827.sp.pf.mbga.jp/?soundsfx?enable">Enable autofight</a>');}

};

//AUTOFIGHT ENABLING/DISABLING
if (URL == "http://g12014827.sp.pf.mbga.jp/?autofight?enable") {
Cookies.set('Autofight', "enabled");
window.location.href = 'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html?configure';
}
if (URL == "http://g12014827.sp.pf.mbga.jp/?autofight?disable") {
Cookies.set('Autofight', "disabled");
window.location.href = 'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html?configure';
}

// #PLUGIN --- Autobossfight --- 
if (autofight == "enabled" && bodyId == "tpl_raid_battle-ready") {
var APleft = parseInt($('#modalMenu > nav.modalMainContentBtn.bnr > ul > li:nth-child(2) > div.btnStatus').prop('innerHTML').substring(3, 5));
if(APleft > 19){goNext(1,0,'');} else {goNext(1,1,4);};    
    };

//SoundSFX ENABLING/DISABLING
if (URL == "http://g12014827.sp.pf.mbga.jp/?soundsfx?enable") {
Cookies.set('SoundSFX', "enabled");
window.location.href = 'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html?configure';
}
if (URL == "http://g12014827.sp.pf.mbga.jp/?soundsfx?disable") {
Cookies.set('SoundSFX', "disabled");
window.location.href = 'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html?configure';
}
    

if (bodyId == "tpl_evolution-animation"){
if (soundsfx == "enabled"){var audio = new Audio('http://dxdmobage.xp3.biz/[English]%20Explosion!.mp3');
audio.play();};
var URL2 = URL.replace("action%3Danimation_evolution%26battle_id", "action%3Dresult%26battle_id");
var URL3 = URL2.replace("#form", "");
    setTimeout(function(){
window.location.href = URL3;
}, 1500);
};

if (bodyId == "tpl_encount_guild_raid-animation"){
if (soundsfx == "enabled"){var audio = new Audio('http://dxdmobage.xp3.biz/[English]%20Explosion!.mp3');
audio.play();};
var URL2 = URL.replace("action%3Danimation_encount_guild_raid%26battle_id", "action%3Dresult%26battle_id");
var URL3 = URL2.replace("#form", "");
    setTimeout(function(){
window.location.href = URL3;
}, 1500);
};

// END OF PLUGIN AREA
