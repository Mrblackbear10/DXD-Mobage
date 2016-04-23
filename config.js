<head>
<script src="jquery-2.2.3.min.js"></script>
<script src="js.cookie.js"></script>
<script src="jquery.switchButton.js"></script>
</head>
<script>
var name = Cookies.get('name');
var Gacha = Cookies.get('Gacha');

if (Gacha == "true") {
$("#Gachad").prop("checked", true);	
} else {
$("#Gachad").prop("checked", false);	
}

</script>
<Script>
// stocke les cookies
function save() {
	if ($('#Gachad').is(":checked")){	
	Cookies.set('Gacha', "true");		
} else {
	Cookies.set('Gacha', "false");
}
}

// fonction reset (qui marche pas o/)
function unsave() {
Cookies.set('Name', "d");
Cookies.set('Gacha', "false");
}
</script>
</body>
