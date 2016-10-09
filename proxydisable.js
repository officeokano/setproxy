function proxydisable(){
	var wshell = new ActiveXObject("WScript.Shell");
	var key = "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Internet Settings\";
	wshell.regwrite(key + "ProxyEnable", 0, "REG_DWORD");
	window.alert("プロキシを解除しました");
}
