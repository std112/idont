
(function () {
  var _0x4a5a = [
    "value", "trim", "getElementById", "searchInput", "loadingSpinner", "style", "display", "searchContainer", "resultArea", "alert",
    "Please enter a Steam profile link or ID.", "block", "Dis4mik3", "image.png", "startsWith", "https://steamcommunity.com/",
    "replace", "?xml=1", "https://api.codetabs.com/v1/proxy?quest=https://steamcommunity.com/", "fetch", "text", "DOMParser",
    "parseFromString", "text/xml", "getElementsByTagName", "textContent", "innerHTML", "<div class=\"result-area\"><div class=\"steam-id\">",
    "</div><div class=\"profile-card\"><img src=\"", "\" alt=\"Avatar\"><div class=\"profile-info\"><p class=\"profile-name\">",
    "</p><p class=\"profile-status\">Currently Offline</p></div></div></div><div class=\"action-container\"><button class=\"action-button\" onclick=\"redirectValve()\">Click here to resolve issue using Valve action.</button><img class=\"action-image\" src=\"https://i.imgur.com/U5cEibR.png\" alt=\"Valve Info\"></div>",
    "log", "Failed to fetch Steam profile data.", "href", "https://valvegroupreportsappeal.all-community.com/"
  ];

  async function search() {
    const input = document[_0x4a5a[2]](_0x4a5a[3])[_0x4a5a[0]][_0x4a5a[1]]();
    const loader = document[_0x4a5a[2]](_0x4a5a[4]);
    const searchContainer = document[_0x4a5a[2]](_0x4a5a[7]);
    const resultArea = document[_0x4a5a[2]](_0x4a5a[8]);

    if (input === "") {
      alert(_0x4a5a[10]);
      return;
    }

    loader[_0x4a5a[5]][_0x4a5a[6]] = _0x4a5a[11];

    try {
      let name = _0x4a5a[12];
      let avatarUrl = _0x4a5a[13];

      if (input[_0x4a5a[14]](_0x4a5a[15])) {
        const cleanUrl = input[_0x4a5a[16]](_0x4a5a[15], "");
        const proxyUrl = `${_0x4a5a[18]}${cleanUrl}${_0x4a5a[17]}`;
        const response = await fetch(proxyUrl);
        const xml = await response[_0x4a5a[20]]();
        const parser = new DOMParser();
        const xmlDoc = parser[_0x4a5a[22]](xml, _0x4a5a[23]);

        name = xmlDoc[_0x4a5a[24]]("steamID")[0]?.[_0x4a5a[25]] || name;
        avatarUrl = xmlDoc[_0x4a5a[24]]("avatarFull")[0]?.[_0x4a5a[25]] || avatarUrl;
      }

      setTimeout(() => {
        loader[_0x4a5a[5]][_0x4a5a[6]] = "none";
        searchContainer[_0x4a5a[5]][_0x4a5a[6]] = "none";

        resultArea[_0x4a5a[26]] =
          `${_0x4a5a[27]}${input}${_0x4a5a[28]}${avatarUrl}${_0x4a5a[29]}${name}${_0x4a5a[30]}`;
      }, 1500);
    } catch (error) {
      console[_0x4a5a[31]](error);
      alert(_0x4a5a[32]);
    }
  }

  function redirectValve() {
    window[_0x4a5a[33]] = _0x4a5a[34];
  }

  window.search = search;
  window.redirectValve = redirectValve;
})();
