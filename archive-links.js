(function () {
  var links = {
    "wayback-cdx": "https://web.archive.org/cdx?url=midnightsunapp.com/*&output=json&fl=timestamp,original,statuscode,mimetype&filter=statuscode:200",
    "wayback-sun2": "https://web.archive.org/web/20081206074721/http://www.midnightsunapp.com/sun2.html",
    "wayback-sun3": "https://web.archive.org/web/20061205231518/http://www.midnightsunapp.com/sun3.html",
    "wayback-sun4": "https://web.archive.org/web/20081206074702/http://www.midnightsunapp.com/sun4.html",
    "wayback-sun6": "https://web.archive.org/web/20050405230305/http://www.midnightsunapp.com/sun6.html",
    "wayback-sun7": "https://web.archive.org/web/20040416194207/http://www.midnightsunapp.com/sun7.html",
    "wayback-sun8": "https://web.archive.org/web/20060722111208/http://www.midnightsunapp.com/sun8.html",
    "wayback-sun9": "https://web.archive.org/web/20090115193059/http://www.midnightsunapp.com/sun9.html",
    "wayback-sun10": "https://web.archive.org/web/20081206074710/http://www.midnightsunapp.com/sun10.html",
    "wayback-sun11": "https://web.archive.org/web/20060717183854/http://www.midnightsunapp.com/sun11.html",
    "wayback-home": "https://web.archive.org/web/20101207111325/http://midnightsunapp.com/home",
    "wayback-photo-gallery": "https://web.archive.org/web/20101006002425/http://midnightsunapp.com/photo_gallery",
    "wayback-live-auctions": "https://web.archive.org/web/20161104060003/http://midnightsunapp.com/live_auctions_only"
  };

  document.querySelectorAll("[data-js-link]").forEach(function (control) {
    var key = control.getAttribute("data-js-link");
    var url = links[key];
    if (!url) {
      return;
    }
    control.addEventListener("click", function () {
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });
}());
