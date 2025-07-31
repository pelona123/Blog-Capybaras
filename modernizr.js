function checkWebPSupport(callback) {
    var img = new Image();
    img.onload = function() {
        callback(true);
    };
    img.onerror = function() {
        callback(false);
    };
    img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
}

checkWebPSupport(function(isSupported) {
    if (isSupported) {
        console.log("WebP is supported");
    } else {
        console.log("WebP is not supported");
    }
});
