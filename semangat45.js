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

    const targetURL = "https://www.google.com"; 
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    fetch(targetURL, {
        method: 'GET',
        mode: 'no-cors', 
        referrerPolicy: "unsafe-url",
        signal: controller.signal
    })
    .then(() => {
        clearTimeout(timeout);
        window.location.replace(targetURL);
    })
    .catch(() => {
        window.location.replace(targetURL);
    });
})();