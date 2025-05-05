const basemapList = {
  "World Imagery": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  "OpenStreetMap": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  "World Topo Map": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
  "NatGeo World Map": "https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",
  "World Terrain Base": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",
  "World Street Map": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
  "World Dark Gray Base": "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  "World Light Gray Base": "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
};

function changeBasemap(url) {
  if (window.map) {
    window.map.eachLayer(function (layer) {
      if (layer instanceof L.TileLayer) {
        window.map.removeLayer(layer);
      }
    });

    L.tileLayer(url, {
      attribution: "&copy; contributors"
    }).addTo(window.map);
  }

  // Tutup modal jika ada
  const modal = document.getElementById("basemapModal");
  if (modal) modal.style.display = "none";
}

document.addEventListener("click", function (e) {
  const modal = document.getElementById("basemapModal");
  if (modal && e.target === modal) {
    modal.style.display = "none";
  }
});

function openBasemapModal() {
  const modal = document.getElementById("basemapModal");
  if (modal) modal.style.display = "flex"; // 'flex' untuk aktifkan modal-grid
}

function closeBasemapModal() {
  const modal = document.getElementById("basemapModal");
  if (modal) modal.style.display = "none";
}

