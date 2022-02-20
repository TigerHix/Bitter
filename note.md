$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$session.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36"
$session.Cookies.Add((New-Object System.Net.Cookie("LIVE_BUVID", "AUTO7515735510362139", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("rpdid", "|(k~Jk|Y~)Rk0J'ul~JlluuR|", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("stardustpgcv", "0606", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("INTVER", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("dy_spec_agreed", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("deviceFingerprint", "acce4157767b255630bc93579564b777", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("pgv_pvi", "6654267392", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("pgv_si", "s2257481728", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("route", "", "/", "api.bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("AMCVS_98CF678254E93B1B0A4C98A5%40AdobeOrg", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("blackside_state", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_server_inner", "__custom__", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_is_closed", "", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_season_ep424607", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_season_ss39482", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_season_ep424213", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_season_ep424913", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_season_ss39481", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_season_ep424837", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_curr_season_id", "39424", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_season_ep424181", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_server_custom", "https://api.qiu.moe", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("_uuid", "C6BC774F-CA2B-9AA6-49105-8210B961654C471711infoc", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("video_page_version", "v_old_home", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("b_ut", "5", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("fingerprint_s", "ab5637240d4732728c370cfd9d6d2787", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("CURRENT_QUALITY", "64", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("buvid4", "BB2A1ED0-800B-DCF5-605A-5A138CDD87C748237-022012118-aQOSgGD5QyIEhx/E8lLqIw%3D%3D", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("buvid3", "57330DB6-6049-446F-8D02-F3D8BC8C832A148795infoc", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("bp_article_offset_3234445", "625260059057027200", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("fingerprint3", "9b7754e3f7ade1530d36fd5ba1c8e84f", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("i-wanna-go-back", "2", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("AMCV_98CF678254E93B1B0A4C98A5%40AdobeOrg", "-2121179033%7CMCIDTS%7C18659%7CMCMID%7C91774871608695326806648085221169664475%7CMCAAMLH-1645518898%7C3%7CMCAAMB-1645518898%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1644921298s%7CNONE%7CvVersion%7C5.3.0", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("UM_distinctid", "17efd01d784a5c-02279ac50bfdf2-576153e-384000-17efd01d785f3b", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("CURRENT_BLACKGAP", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("balh_season_ep471492", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("CURRENT_FNVAL", "4048", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("bsource", "search_google", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("bp_video_offset_3234445", "628544901589433301", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("bp_t_offset_3234445", "628544901589433301", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("fingerprint", "f8f3b4087ff64a47cceeec152be8f398", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("buvid_fp_plain", "undefined", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("PVID", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("innersign", "1", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("b_lsid", "5DAD426C_17F166B2E56", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("SESSDATA", "87e4c86b%2C1660900918%2C4fe1c%2A21", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("bili_jct", "a1ffd8a60504c4380fda94b92a6a0273", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("DedeUserID", "3234445", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("DedeUserID__ckMd5", "366b642bf226628e", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("sid", "6ig8f7ar", "/", ".bilibili.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("buvid_fp", "1a9a64996b6c613a7cfe77a04de94be5", "/", ".bilibili.com")))
Invoke-WebRequest -UseBasicParsing -Uri "https://api.bilibili.com/x/v2/reply/action" `
-Method "POST" `
-WebSession $session `
-Headers @{
"method"="POST"
"authority"="api.bilibili.com"
"scheme"="https"
"path"="/x/v2/reply/action"
"sec-ch-ua"="`" Not A;Brand`";v=`"99`", `"Chromium`";v=`"98`", `"Google Chrome`";v=`"98`""
"sec-ch-ua-mobile"="?0"
"sec-ch-ua-platform"="`"Windows`""
"accept"="*/*"
"sec-fetch-site"="none"
"sec-fetch-mode"="cors"
"sec-fetch-dest"="empty"
"referer"="https://t.bilibili.com"
"accept-encoding"="gzip, deflate, br"
"accept-language"="en,zh-CN;q=0.9,zh;q=0.8,zh-TW;q=0.7,fr;q=0.6,it;q=0.5,ja;q=0.4,en-US;q=0.3,en-GB;q=0.2,ko;q=0.1,pt;q=0.1,la;q=0.1"
} `
-ContentType "application/x-www-form-urlencoded;charset=UTF-8" `
-Body "oid=629103908755451994&type=17&rpid=103039511792&action=1&ordering=heat&jsonp=jsonp&csrf=a1ffd8a60504c4380fda94b92a6a0273"
