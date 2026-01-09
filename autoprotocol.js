(function() {
    // 1. Deteksi protokol secara dinamis
    // Jika web pemanggil https, maka proto jadi 'https:'
    // Jika web pemanggil http, maka proto jadi 'http:'
    var currentProto = window.location.protocol;

    // 2. Injeksi CSP hanya jika berada di lingkungan HTTPS
    // Ini penting agar resource http tidak terblokir di web https
    try {
        if (currentProto === 'https:') {
            var existingMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
            if (!existingMeta) {
                var meta = document.createElement('meta');
                meta.httpEquiv = "Content-Security-Policy";
                meta.content = "upgrade-insecure-requests";
                document.head.prepend(meta);
            }
        }
    } catch (e) {
        console.error("CSP Injection failed:", e);
    }

    // 3. Menentukan URL Source Iklan mengikuti protokol pemanggil
    // Menggunakan template literal untuk menggabungkan protokol dengan domain
    var adUrl = currentProto + "//www.highperformanceformat.com/c6519a79b77606d968cf36c00f3894c6/invoke.js";

    // 4. Styling Popup
    var style = document.createElement('style');
    style.innerHTML = `
        #popup-overlay-ads {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.85); display: flex; align-items: center;
            justify-content: center; z-index: 999999;
        }
        .popup-box-ads {
            width: 300px; height: 250px; background: #fff; 
            position: relative; box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }
        .close-ad-x {
            position: absolute; top: -30px; right: 0; color: #fff;
            background: #ff0000; padding: 2px 8px; cursor: pointer;
            font-size: 12px; font-family: sans-serif; border-radius: 3px;
        }
    `;
    document.head.appendChild(style);

    // 5. Membuat Elemen HTML Popup
    var overlay = document.createElement('div');
    overlay.id = 'popup-overlay-ads';
    
    var popupBox = document.createElement('div');
    popupBox.className = 'popup-box-ads';
    
    var closeBtn = document.createElement('div');
    closeBtn.className = 'close-ad-x';
    closeBtn.innerHTML = 'CLOSE [X]';
    closeBtn.onclick = function() { overlay.remove(); };

    var adContainer = document.createElement('div');
    adContainer.id = 'ad-space-300-250';

    popupBox.appendChild(closeBtn);
    popupBox.appendChild(adContainer);
    overlay.appendChild(popupBox);
    document.body.appendChild(overlay);

    // 6. Konfigurasi Iklan
    window.atOptions = {
        'key' : 'c6519a79b77606d968cf36c00f3894c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
    };

    // 7. Load Script Iklan secara dinamis sesuai protokol
    var adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = adUrl;
    
    adContainer.appendChild(adScript);
})();
