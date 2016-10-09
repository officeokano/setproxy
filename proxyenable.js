function proxyenable(){
	var wshell = new ActiveXObject("WScript.Shell");
	var key = "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\\";
	wshell.regwrite(key + "ProxyEnable", 1, "REG_DWORD");
	window.alert("プロキシを設定しました");
}
