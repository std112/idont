async function search() {
  const input = document.getElementById('searchInput').value.trim();
  const loader = document.getElementById('loadingSpinner');
  const searchContainer = document.getElementById('searchContainer');
  const resultArea = document.getElementById('resultArea');

  if (input === "") {
    alert("Please enter a Steam profile link or ID.");
    return;
  }

  loader.style.display = "block";

  try {
    let name = "Dis4mik3";
    let avatarUrl = "image.png";

    if (input.startsWith("https://steamcommunity.com/")) {
      const cleanUrl = input.replace("https://steamcommunity.com/", "");
      const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=https://steamcommunity.com/${cleanUrl}?xml=1`;
      const response = await fetch(proxyUrl);
      const xml = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "text/xml");

      name = xmlDoc.getElementsByTagName("steamID")[0]?.textContent || name;
      avatarUrl = xmlDoc.getElementsByTagName("avatarFull")[0]?.textContent || avatarUrl;
    }

    setTimeout(() => {
      loader.style.display = "none";
      searchContainer.style.display = "none";

      resultArea.innerHTML = `
        <div class="result-area">
          <div class="steam-id">${input}</div>
          <div class="profile-card">
            <img src="${avatarUrl}" alt="Avatar">
            <div class="profile-info">
              <p class="profile-name">${name}</p>
              <p class="profile-status">Currently Offline</p>
            </div>
          </div>
        </div>
        <div class="action-container">
  <button class="action-button" onclick="gotohonest()">Click here to make an appeal to this reports</button>
  <img class="action-image" src="https://i.imgur.com/U5cEibR.png" alt="Valve Info">
  <p style="font-size: 0.85rem; color: #999; max-width: 700px; text-align: center;">
    🔧 This tool is powered by the community to help improve reporting and awareness.
  </p>
</div>

      `;
    }, 1500);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch Steam profile data.");
  }
}

function gotohonest() {
  window.open("https://report.appeal.today/", "_blank");
}

