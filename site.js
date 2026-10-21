(function () {
  var TG = "https://t.me/m/UTD0GwilMTY8";

  [["icon", "favicon.png"], ["apple-touch-icon", "apple-touch-icon.png"]].forEach(function (i) {
    var l = document.createElement("link");
    l.rel = i[0];
    l.href = i[1];
    document.head.appendChild(l);
  });

  var el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML =
    '<header><div class="wrap"><nav>' +
      '<a class="brand" href="index.html">MOONLIT HUB</a>' +
      '<a class="btn sm" href="' + TG + '">Contact Us</a>' +
    '</nav></div></header>';
})();
