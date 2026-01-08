const showMyAds = () => {
    setTimeout(() => {
        const popup = document.getElementById('popup-ads-container');
        const adsPlaceholder = document.getElementById('ads-placeholder');

        if (popup && adsPlaceholder) {
            popup.style.display = 'flex';

            window.atOptions = {
                'key' : 'c6519a79b77606d968cf36c00f3894c6',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
            };

            const adScript = document.createElement('script');
            adScript.type = 'text/javascript';
            adScript.src = 'https://www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js';
            
            adsPlaceholder.innerHTML = ''; 
            adsPlaceholder.appendChild(adScript);
        } else {
            console.error("");
        }
    }, 100);
};

// Iklan Home 728x90
const fillHomeAds = () => {
    const container = document.getElementById('ads-728x90');
    if (container) {
        window.atOptions = {
            'key' : '6a0b7fb67f4a78d4b0f45804516b9bae',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
        };
        const s = document.createElement('script');
        s.src = 'https://www.highperformanceformat.com/6a0b7fb67f4a78d4b0f45804516b9bae/invoke.js';
        container.innerHTML = '';
        container.appendChild(s);
    }
};

// Detail 320x50
const fillDetailAds = () => {
    const container = document.getElementById('ads-320x50');
    if (container) {
        window.atOptions = {
            'key' : '374a452332eafadea63e8466580e4d11',
            'format' : 'iframe',
            'height' : 20,
            'width' : 320,
            'params' : {}
        };
        const s = document.createElement('script');
        s.src = 'https://www.highperformanceformat.com/374a452332eafadea63e8466580e4d11/invoke.js';
        container.innerHTML = '';
        container.appendChild(s);
    }
};
