_satellite.pushAsyncScript(function(event, target, $variables){
  _satellite.notify('Yandex.Metrika: Initializing at pagebottom', 3);
(function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
        try {
            w.yaCounter30346802 = new Ya.Metrika({
                id: 30346802,
                webvisor: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                trackHash: true,
                ut: "noindex"
            });
        } catch (e) {
        }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () {
            n.parentNode.insertBefore(s, n);
        };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
    _satellite.notify('Yandex.Metrika: Loaded', 3);
})(document, window, "yandex_metrika_callbacks");

});
