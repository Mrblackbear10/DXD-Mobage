var URL = window.location.href;

// Checking cookies for plugins
var autofight = Cookies.get('Autofight');

//Plugin Configuration page !
if (URL == "http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html?configure") {
    $('#tpl_help > section:nth-child(8) > h1.midashiPink2.midashiText1').html('Plugin configuration page');
    $('#tpl_help > section:nth-child(8) > h1.midashiC').html('Available plugins:');
    if (autofight == "enabled"){
    $('#tpl_help > section:nth-child(9) > dl:nth-child(1) > dt').html('Autofight (<font color="green">' +autofight +'</font>)');
    $('#tpl_help > section:nth-child(9) > dl:nth-child(1) > dd > ul > li:nth-child(1)').html('<a href="http://g12014827.sp.pf.mbga.jp/?autofight?disable">Disable autofight</a>');}
    else {
    $('#tpl_help > section:nth-child(9) > dl:nth-child(1) > dt').html('Autofight (<font color="red">' +autofight +'</font>)');
    $('#tpl_help > section:nth-child(9) > dl:nth-child(1) > dd > ul > li:nth-child(1)').html('<a href="http://g12014827.sp.pf.mbga.jp/?autofight?enable">Enable autofight</a>');}

};

if (URL == "http://g12014827.sp.pf.mbga.jp/?autofight?enable") {
Cookies.set('Autofight', "enabled");
window.location.href = 'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html?configure';
}
if (URL == "http://g12014827.sp.pf.mbga.jp/?autofight?disable") {
Cookies.set('Autofight', "disabled");
window.location.href = 'http://g12014827.sp.pf.mbga.jp/?url=http%3A%2F%2Fmb.hsdd.maql-games.jp%2Fsp%2Fhelp.html?configure';
}


// #PLUGIN --- Autobossfight --- 
if (autofight == "enabled") {
var onclick = $('#tpl_raid_battle-ready > section:nth-child(18) > div:nth-child(2) > ul > li:nth-child(1) > a').attr("onclick")
if (bodyId === "tpl_raid_battle-ready") {
    if (onclick == "goNext(1,0,'')") {goNext(1,0,'');} 
    else {goNext(1,1,4);}
    ;}
};
