window.onload = () => {
    const blink = document.querySelector('#blink');
    const colors = ["#f00", "#0f0", "#00f", "#880", "#808", "#088", "green", "blue", "gray"];
    window.setInterval(() => {
        blink.style.color = colors[Math.floor(Math.random() * colors.length)];
    }, 200);

    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?da0fcebf811ff156be62a0f91792cb48";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
    })();
};