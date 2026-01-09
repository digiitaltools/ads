(function() {
    var newScript = document.createElement('script');
    newScript.src = 'https://google.com';
    newScript.type = 'text/javascript';
    newScript.async = true;
    document.getElementsByTagName('head')[0].appendChild(newScript);
})();
