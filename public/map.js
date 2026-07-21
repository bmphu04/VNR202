// ============================================================
// MAP.JS  –  All Leaflet map logic for VN Global Map
// ============================================================

// ── Live Clock ─────────────────────────────────────────────
function updateClock() {
  const now = new Date();
  const hn  = new Date(now.toLocaleString("en-US",{timeZone:"Asia/Ho_Chi_Minh"}));
  const pad = n => String(n).padStart(2,"0");
  document.getElementById("live-time").textContent =
    `${pad(hn.getHours())}:${pad(hn.getMinutes())}:${pad(hn.getSeconds())}`;
}
setInterval(updateClock, 1000);
updateClock();

// ── Map Initialization ──────────────────────────────────────
const corner1 = L.latLng(-90, -180);
const corner2 = L.latLng(90, 180);
const bounds = L.latLngBounds(corner1, corner2);

const map = L.map("map", {
  center: [15, 105],
  zoom: 3, // Zoom phù hợp để vừa khung hình
  minZoom: 2,
  maxZoom: 8,
  maxBounds: bounds,
  maxBoundsViscosity: 1.0, // Giữ cứng bản đồ không cho kéo ra ngoài biên
  zoomControl: true,
  attributionControl: false,
});

// Bản đồ nền sạch không nhãn của Esri (Esri World Light Gray Base - Chuyên dùng cho trực quan hóa dữ liệu)
L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  { maxZoom: 16, noWrap: true }
).addTo(map);

// Đã ẩn các layer nhãn đậm và nhãn đè Biển Đông theo yêu cầu để bản đồ hoàn toàn sạch sẽ.

// ── Layer Groups ────────────────────────────────────────────
const layers = {
  l1: L.layerGroup().addTo(map),  // Diplomatic
  l2: L.layerGroup().addTo(map),  // Humanitarian
  l3: L.layerGroup().addTo(map),  // Economic
  l4: L.layerGroup().addTo(map),  // Cultural
  l5: L.layerGroup().addTo(map),  // Space & Science
  l6: L.layerGroup().addTo(map),  // Logistics
  l7: L.layerGroup().addTo(map),  // Export & Import
};

const layerState = { 1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true };

// ── Color helpers ───────────────────────────────────────────
function isVietnam(name) {
  return name.toLowerCase().includes("viet") || name === "Vietnam";
}

function getDiplomaticColor(name) {
  if (isVietnam(name))                                      return "#DA251D"; // Đỏ cờ VN
  if (DIPLOMATIC.comprehensive_special.includes(name))      return "#0056B3"; // Xanh đậm nhất
  if (DIPLOMATIC.strategic.includes(name))                  return "#2979FF"; // Xanh chiến lược
  if (DIPLOMATIC.comprehensive_partner.includes(name))      return "#64B5F6"; // Xanh nhạt
  return "#b0bec5"; // Xám - chưa có quan hệ / không phân loại
}

function getDiplomaticOpacity(name) {
  if (isVietnam(name))                                      return 0.35; // Giảm xuống 0.35 để không che ranh giới và chữ tỉnh lỵ
  if (DIPLOMATIC.comprehensive_special.includes(name))      return 0.80;
  if (DIPLOMATIC.strategic.includes(name))                  return 0.65;
  if (DIPLOMATIC.comprehensive_partner.includes(name))      return 0.50;
  return 0.30; // Xám mờ cho nước chưa ngoại giao
}

function getCulturalColor(name) {
  const c = CULTURAL.find(x => x.name === name);
  if (!c) return null;
  const total = (c.students || 0) + (c.workers || 0);
  if (total > 400000) return { color:"#FF6D00", opacity:0.78 };
  if (total > 100000) return { color:"#FFB300", opacity:0.65 };
  if (total > 20000)  return { color:"#FFD54F", opacity:0.50 };
  return { color:"#FFF9C4", opacity:0.35 };
}

// ── GeoJSON Loading ─────────────────────────────────────────
let geojsonData  = null;   // stored globally for year-switching
let allFeatures  = [];

// Load world GeoJSON from CDN
fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
  .then(r => r.json())
  .then(data => {
    geojsonData  = data;
    allFeatures  = data.features;
    buildLayer1(data);
    buildLayer4Choropleth(data);
    buildCulturalMarkers(); // Gọi dựng marker L4 sau khi lớp bản đồ con người văn hóa hoàn thành tải
    buildLayer5();          // Khởi dựng Lớp 5
    buildLayer6();          // Khởi dựng Lớp 6
    buildLayer7();          // Khởi dựng Lớp 7 – Xuất nhập khẩu
    updateLegend();         // Khởi dựng bảng chú giải ban đầu
    finishLoading();
  })
  .catch(() => {
    fetch("https://unpkg.com/world-atlas@2/countries-110m.json")
      .then(r => r.json())
      .then(() => finishLoading());
  });

// ── Layer 1: Diplomatic Choropleth ──────────────────────────
function buildLayer1(geojson) {
  // Clear before rebuild
  layers.l1.clearLayers();

  const gl = L.geoJSON(geojson, {
    style: f => {
      const name = f.properties.ADMIN || f.properties.name || "";
      const vn    = isVietnam(name);
      const color   = getDiplomaticColor(name);
      const opacity = getDiplomaticOpacity(name);
      return {
        fillColor:   color,
        fillOpacity: opacity,
        color: vn ? "#DA251D" : "rgba(0,0,0,0.1)",
        weight: vn ? 1.5 : 0.6,
      };
    },
    onEachFeature: (f, layer) => {
      const name = f.properties.ADMIN || f.properties.name || "Unknown";

      layer.on("mouseover", function(e) {
        if (!layerState[1]) return;
        const vn = isVietnam(name);
        if (!vn) {
          this.setStyle({ fillOpacity: Math.min(getDiplomaticOpacity(name) + 0.18, 1), weight: 1.5 });
        }
        L.tooltip({ className:"country-tooltip", sticky:true })
         .setContent(`<b>${name}</b><br><span style="color:#5a6a88;font-size:0.72rem">${getCountryData(name).relLabel}</span>`)
         .setLatLng(e.latlng)
         .addTo(map);
      });

      layer.on("mouseout", function() {
        gl.resetStyle(this);
        map.eachLayer(l => { if (l instanceof L.Tooltip) map.removeLayer(l); });
      });

      layer.on("click", function(e) {
        showPopup(name, e.latlng);
        L.DomEvent.stopPropagation(e);
      });
    }
  }).addTo(layers.l1);

  // Vietnam: Đỏ cờ thuần + nhấp nháy nhẹ (Thêm trực tiếp vào map để luôn hiển thị cố định)
  if (window.vnPermanentLayer) {
    map.removeLayer(window.vnPermanentLayer);
  }
  geojson.features.forEach(f => {
    const name = f.properties.ADMIN || f.properties.name || "";
    if (isVietnam(name)) {
      window.vnPermanentLayer = L.geoJSON(f, {
        style: {
          fillColor:   "#DA251D",  // Đỏ cờ Việt Nam
          fillOpacity: 0.35,       // Giảm opacity để lộ địa danh/ranh giới tỉnh bên dưới
          color:       "#DA251D",  // Viền đỏ cờ đồng nhất
          weight:      1.5,
        }
      }).addTo(map);

      // Nhấp nháy nhẹ
      let glow = true;
      setInterval(() => {
        glow = !glow;
        if (window.vnPermanentLayer) {
          window.vnPermanentLayer.setStyle({ fillOpacity: glow ? 0.40 : 0.22 });
        }
      }, 1400);
    }
  });

  // Vẽ Hoàng Sa & Trường Sa của Việt Nam
  buildIslands();
}

// ── Quần đảo Hoàng Sa và Trường Sa (Việt Nam) ──────────────────
function buildIslands() {
  // 1. Hoàng Sa (Paracels) - Center [16.5, 112.0]
  const hsBound = L.circle([16.5, 112.0], {
    radius: 70000, // 70km zone
    color: "rgba(218,37,29,0.45)",
    fillColor: "#DA251D",
    fillOpacity: 0.15,
    weight: 1.2,
    dashArray: "4 4"
  }).addTo(map); // Đưa trực tiếp vào map để luôn hiển thị cố định

  hsBound.bindTooltip("<b>Quần đảo Hoàng Sa (Việt Nam)</b><br><span style='color:#b38f00;font-weight:600;font-size:0.7rem'>Chủ quyền lãnh thổ VN 🇻🇳</span>", {
    className: "country-tooltip",
    sticky: true
  });

  // Điểm các đảo chính thuộc Hoàng Sa
  const hsIslands = [
    [16.53, 111.77], // Đảo Hoàng Sa
    [16.83, 112.33], // Đảo Phú Lâm
    [16.67, 112.73]  // Đảo Linh Côn
  ];

  hsIslands.forEach(coord => {
    L.circleMarker(coord, {
      radius: 4,
      color: "#DA251D",
      weight: 1,
      fillColor: "#FFD700", // Sao vàng lấp lánh nhẹ
      fillOpacity: 0.95
    }).addTo(map).bindTooltip("<b>Đảo Hoàng Sa</b> (Việt Nam)", { className: "country-tooltip" });
  });

  // 2. Trường Sa (Spratlys) - Center [9.5, 114.5]
  const tsBound = L.circle([9.5, 114.5], {
    radius: 170000, // 170km zone
    color: "rgba(218,37,29,0.45)",
    fillColor: "#DA251D",
    fillOpacity: 0.12,
    weight: 1.2,
    dashArray: "4 4"
  }).addTo(map); // Đưa trực tiếp vào map để luôn hiển thị cố định

  tsBound.bindTooltip("<b>Quần đảo Trường Sa (Việt Nam)</b><br><span style='color:#b38f00;font-weight:600;font-size:0.7rem'>Chủ quyền lãnh thổ VN 🇻🇳</span>", {
    className: "country-tooltip",
    sticky: true
  });

  // Điểm các đảo chính thuộc Trường Sa
  const tsIslands = [
    [8.65, 111.92],  // Đảo Trường Sa
    [10.38, 114.37], // Đảo Ba Bình
    [11.05, 114.28], // Đảo Thị Tứ
    [10.18, 114.36], // Đảo Nam Yết
    [9.87, 114.33],  // Đảo Sinh Tồn
    [10.75, 115.82]  // Đảo Bình Nguyên
  ];

  tsIslands.forEach(coord => {
    L.circleMarker(coord, {
      radius: 3,
      color: "#DA251D",
      weight: 0.8,
      fillColor: "#FFD700",
      fillOpacity: 0.95
    }).addTo(map).bindTooltip("<b>Đảo Trường Sa</b> (Việt Nam)", { className: "country-tooltip" });
  });
}

// ── Layer 4 Choropleth (Cultural) ───────────────────────────
function buildLayer4Choropleth(geojson) {
  // Clear before rebuild
  layers.l4.clearLayers();

  L.geoJSON(geojson, {
    style: f => {
      const name = f.properties.ADMIN || f.properties.name || "";
      const c = getCulturalColor(name);
      if (!c) return { fillOpacity:0, stroke:false };
      return {
        fillColor: c.color,
        fillOpacity: c.opacity,
        color: c.color,
        weight: 1.5,
        opacity: 0.6,
      };
    },
    onEachFeature: (f, layer) => {
      const name = f.properties.ADMIN || f.properties.name || "";
      layer.on("click", e => showPopup(name, e.latlng));
    }
  }).addTo(layers.l4);
}

// ── Layer 2: Humanitarian Pulse Dots ────────────────────────
function buildLayer2() {
  HUMANITARIAN.forEach(h => {
    const iconHtml = `
      <div class="pulse-marker">
        <div class="pulse-ring"></div>
        <div class="pulse-inner" style="${
          h.type==='un_peacekeeping'
            ? 'background:#00E5FF;box-shadow:0 0 8px #00E5FF'
            : h.type==='disaster'
            ? 'background:#FF9800;box-shadow:0 0 8px #FF9800'
            : ''
        }"></div>
      </div>`;

    const marker = L.marker([h.lat, h.lng], {
      icon: L.divIcon({ html: iconHtml, className:"", iconSize:[16,16], iconAnchor:[8,8] })
    });

    marker.on("click", () => showPopup(h.name, [h.lat, h.lng]));
    marker.bindTooltip(`<b>${h.icon} ${h.name}</b><br><span style="color:#8899b4;font-size:0.7rem">${h.info}</span>`,
      { className:"country-tooltip", direction:"top", offset:[0,-10] });

    layers.l2.addLayer(marker);
  });
}
buildLayer2();

// ── Layer 3: Economic Flow Lines + Markers ──────────────────
const VN_COORD = [16.04, 108.24]; // Đà Nẵng as visual center

function buildLayer3() {
  // Viettel markets
  ECONOMIC.viettel.forEach(v => {
    const animatedLine = L.polyline([VN_COORD, [v.lat, v.lng]], {
      color: "#39FF14",
      weight: 1.5,
      opacity: 0.55,
      dashArray: "8 4",
      className: "flow-line"
    }).addTo(layers.l3);

    // Endpoint marker
    const markerHtml = `
      <div style="
        width:12px;height:12px;border-radius:50%;
        background:#39FF14;
        box-shadow:0 0 10px #39FF14, 0 0 20px rgba(57,255,20,0.4);
        border:2px solid rgba(57,255,20,0.5);
      "></div>`;

    const marker = L.marker([v.lat, v.lng], {
      icon: L.divIcon({ html:markerHtml, className:"", iconSize:[12,12], iconAnchor:[6,6] })
    });
    marker.bindTooltip(`
      <b>📡 ${v.brand}</b><br>
      <span style="color:#8899b4;font-size:0.7rem">Viettel tại ${v.name}</span><br>
      <span style="color:#39FF14;font-size:0.72rem;font-family:monospace">${v.subs} thuê bao • ${v.year}</span>
    `, { className:"country-tooltip", direction:"top", offset:[0,-8] });
    marker.on("click", () => showPopup(v.name, [v.lat, v.lng]));
    layers.l3.addLayer(marker);
  });

  // Tech/Industry
  ECONOMIC.tech_industry.forEach(t => {
    const line = L.polyline([VN_COORD, [t.lat, t.lng]], {
      color: "#2e7d32",
      weight: 1.5,
      opacity: 0.5,
      dashArray: "5 8",
      className: "flow-line"
    }).addTo(layers.l3);

    const markerHtml = `
      <div style="
        width:10px;height:10px;border-radius:3px;
        background:#388e3c;
        box-shadow:0 0 6px rgba(56,142,60,0.7);
        transform:rotate(45deg);
      "></div>`;

    const marker = L.marker([t.lat, t.lng], {
      icon: L.divIcon({ html:markerHtml, className:"", iconSize:[10,10], iconAnchor:[5,5] })
    });
    marker.bindTooltip(`
      <b>💼 ${t.brand}</b><br>
      <span style="color:#8899b4;font-size:0.7rem">Đầu tư tại ${t.name} (${t.year})</span>
    `, { className:"country-tooltip", direction:"top", offset:[0,-8] });
    marker.on("click", () => showPopup(t.name, [t.lat, t.lng]));
    layers.l3.addLayer(marker);
  });
}
buildLayer3();

// ── Vietnam Star Marker ─────────────────────────────────────
const vnStarHtml = `
  <div style="
    width:45px;height:30px;
    border-radius:2px; /* Dạng hình chữ nhật lá cờ, bo góc cực nhẹ 2px */
    background:#DA251D; /* Đỏ cờ Việt Nam */
    box-shadow:0 0 10px rgba(218,37,29,0.5);
    display:flex;align-items:center;justify-content:center;
    font-size:22px;
    color: #FFD700; /* Ngôi sao ở giữa màu vàng */
    text-shadow: 0 0 3px #FFD700;
    animation:vnStar 2s ease-in-out infinite;
  ">★</div>
  <style>@keyframes vnStar{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}</style>`;

L.marker([16.04, 108.24], {
  icon: L.divIcon({ html:vnStarHtml, className:"", iconSize:[45,30], iconAnchor:[22.5,15] }),
  zIndexOffset: 9999
}).bindTooltip("<b>🇻🇳 Việt Nam</b><br><span style='color:#FFD700;font-size:0.7rem'>Dấu Ấn Toàn Cầu</span>",
  { className:"country-tooltip", permanent:false, direction:"top", offset:[0,-15] })
  .addTo(map);

// ── Layer 3: Cultural People Markers ───────────────────────
function buildCulturalMarkers() {
  CULTURAL.forEach(c => {
    const total = (c.students||0) + (c.workers||0);
    const size = total > 400000 ? 18 : total > 100000 ? 14 : 10;
    const col  = total > 400000 ? "#FF6D00" : total > 100000 ? "#FFB300" : "#FFD54F";

    const markerHtml = `
      <div style="
        width:${size}px;height:${size}px;border-radius:50%;
        background:${col};
        box-shadow:0 0 ${size}px ${col}, 0 0 ${size*2}px rgba(255,179,0,0.3);
        border:1.5px solid rgba(255,255,255,0.2);
      "></div>`;

    const marker = L.marker([c.lat, c.lng], {
      icon: L.divIcon({ html:markerHtml, className:"", iconSize:[size,size], iconAnchor:[size/2,size/2] })
    });
    marker.bindTooltip(`
      <b>🌏 Cộng đồng VN tại ${c.name}</b><br>
      <span style="color:#FFB300;font-family:monospace;font-size:0.72rem">
        👨‍🎓 ${(c.students||0).toLocaleString()} du học sinh<br>
        👷 ${(c.workers||0).toLocaleString()} lao động
      </span>
    `, { className:"country-tooltip", direction:"top", offset:[0,-size/2] });
    marker.on("click", () => showPopup(c.name, [c.lat, c.lng]));
    layers.l4.addLayer(marker);
  });
}
buildCulturalMarkers();
buildLayer5();
buildLayer6();
buildLayer7();

// ── Popup System ────────────────────────────────────────────
function showPopup(name, latlng) {
  const data  = getCountryData(name);
  const relClass = {
    comprehensive_special: "rel-comprehensive",
    strategic:             "rel-strategic",
    comprehensive_partner: "rel-partner",
    normal:                "rel-normal"
  }[data.relation] || "rel-normal";

  const tagsHtml = (data.tags || []).map(t => {
    const cfg = {
      diplomatic:  { cls:"tag-diplomatic",   icon:"🤝", lbl:"Ngoại giao" },
      humanitarian:{ cls:"tag-humanitarian", icon:"🎗️", lbl:"Nhân đạo" },
      economic:    { cls:"tag-economic",     icon:"📈", lbl:"Kinh tế" },
      cultural:    { cls:"tag-cultural",     icon:"🌏", lbl:"Văn hóa" },
    }[t] || { cls:"", icon:"", lbl:t };
    return `<span class="popup-tag ${cfg.cls}">${cfg.icon} ${cfg.lbl}</span>`;
  }).join("");

  const eventsHtml = (data.events || []).map(e =>
    `<li><span class="event-year">${e.year}</span><span>${e.text}</span></li>`
  ).join("");

  const html = `
    <div class="popup-card">
      <div class="popup-header">
        <div class="popup-flag">${data.flag || "🌐"}</div>
        <div class="popup-meta">
          <div class="popup-name">${name}</div>
          <span class="popup-rel ${relClass}">${data.relLabel}</span>
        </div>
      </div>
      <div class="popup-tags">${tagsHtml}</div>
      <hr class="popup-divider"/>
      <div class="popup-section-title">Lịch sử & Hợp tác</div>
      <ul class="popup-events">${eventsHtml}</ul>
    </div>`;

  const ll = Array.isArray(latlng) ? L.latLng(latlng[0], latlng[1]) : latlng;
  L.popup({ maxWidth:340, closeButton:true, autoPan:true, className:"" })
   .setLatLng(ll)
   .setContent(html)
   .openOn(map);
}

// ── Layer Toggle ────────────────────────────────────────────
function toggleLayer(n) {
  layerState[n] = !layerState[n];
  const key = `l${n}`;
  const btn = document.getElementById(`btn-l${n}`);

  if (layerState[n]) {
    map.addLayer(layers[key]);
    btn.classList.add("active");
  } else {
    map.removeLayer(layers[key]);
    btn.classList.remove("active");
  }
  updateLegend(); // Cập nhật lại chú giải khi trạng thái lớp thay đổi
}

// ── Year Switching (Timeline) ───────────────────────────────
function switchYear(year) {
  if (!geojsonData || CURRENT_YEAR === year) return;

  // Flash overlay
  const overlay = document.getElementById("year-overlay");
  const badge   = document.getElementById("year-badge");
  overlay.classList.add("flashing");
  badge.textContent = year;
  badge.classList.add("show");

  setTimeout(() => {
    // Update data
    setYear(year);

    // Rebuild all layers
    buildLayer1(geojsonData);
    buildLayer4Choropleth(geojsonData);
    layers.l2.clearLayers();
    buildLayer2();
    layers.l3.clearLayers();
    layers.l4.clearLayers();
    layers.l5.clearLayers();
    layers.l6.clearLayers();
    layers.l7.clearLayers();
    buildLayer3();
    buildLayer4Choropleth(geojsonData);
    buildCulturalMarkers();
    buildLayer5();
    buildLayer6();
    buildLayer7();

    // Update timeline UI
    const btn86   = document.getElementById("btn-1986");
    const btn26   = document.getElementById("btn-2026");
    const dot     = document.getElementById("tl-dot");
    const fill    = document.getElementById("tl-fill");
    if (year === 1986) {
      btn86.classList.add("active-1986");
      btn26.classList.remove("active-2026");
      dot.className  = "tl-dot at-1986";
      fill.style.width = "0%";
    } else {
      btn26.classList.add("active-2026");
      btn86.classList.remove("active-1986");
      dot.className  = "tl-dot at-2026";
      fill.style.width = "100%";
    }

    // Update header stats with animated counter
    animateStat("stat-countries", CURRENT_STATS.countries);
    animateStat("stat-comp",      CURRENT_STATS.comprehensive);
    animateStat("stat-strat",     CURRENT_STATS.strategic);
    animateStat("stat-vt",        CURRENT_STATS.viettel_markets);

    // Update EXPORT_IMPORT stats in header if available
    if (EXPORT_IMPORT && EXPORT_IMPORT.stats) {
      const exportStat = document.getElementById("stat-export");
      const importStat = document.getElementById("stat-import");
      if (exportStat) exportStat.textContent = EXPORT_IMPORT.stats.total_export + " tỷ";
      if (importStat) importStat.textContent = EXPORT_IMPORT.stats.total_import + " tỷ";
    }

    // Update ticker
    updateTicker(year);

    // Fade overlay out
    overlay.classList.remove("flashing");
    setTimeout(() => badge.classList.remove("show"), 600);

    // Close any open popups
    map.closePopup();

  }, 350);
}

// Animate stat counter from old to new value
function animateStat(id, target) {
  const el  = document.getElementById(id);
  if (!el) return;
  const start = parseInt(el.textContent) || 0;
  const diff  = target - start;
  const steps = 20;
  let   i     = 0;
  const timer = setInterval(() => {
    i++;
    el.textContent = Math.round(start + diff * (i / steps));
    if (i >= steps) { el.textContent = target; clearInterval(timer); }
  }, 20);
}

// Update news ticker text for selected year
function updateTicker(year) {
  const inner = document.querySelector(".ticker-inner");
  if (!inner) return;
  if (year === 1986) {
    inner.innerHTML = `
      🏭 Việt Nam vừa khai mạc Đại hội VI (12/1986) – chính thức tuyên bố Đổi Mới
      <span class="ticker-sep">◆</span>
      📉 Xuất khẩu 1986 cực kỳ hạn chế: chỉ ~300 triệu USD – chủ yếu thủy sản và nông sản thô cho khối XHCN
      <span class="ticker-sep">◆</span>
      📥 Nhập khẩu ~1.5 tỷ USD chủ yếu từ Liên Xô – phần lớn là viện trợ và vay ưu đãi
      <span class="ticker-sep">◆</span>
      🚫 Mỹ và hầu hết phương Tây duy trì cấm vận kinh tế toàn diện với Việt Nam
      <span class="ticker-sep">◆</span>
      🇷🇺 Liên Xô viện trợ VN ~1 tỷ rúp/năm – chỗ dựa chính trị và kinh tế duy nhất
      <span class="ticker-sep">◆</span>
      🚀 VN tham gia Chương trình Interkosmos – Phạm Tuân là người châu Á đầu tiên bay vào vũ trụ (1980)
      <span class="ticker-sep">◆</span>
      ⚓ Hàng hải quốc tế cô lập – cảng Hải Phòng/Sài Gòn chủ yếu kết nối với Vladivostok &amp; Odessa (Liên Xô)
      <span class="ticker-sep">◆</span>
      👷 ~100.000 công nhân VN xuất khẩu lao động sang Đông Âu (Đông Đức, Ba Lan, Tiệp Khắc...)
      <span class="ticker-sep">◆</span>
      📉 GDP bình quân đầu người VN chỉ khoảng 86 USD – thuộc hàng nghèo nhất thế giới
      <span class="ticker-sep">◆</span>
      🌾 Lạm phát 3 chữ số (700%/năm) – VN đang trong khủng hoảng kinh tế nghiêm trọng
    `;
  } else {
    inner.innerHTML = `
      🌏 Việt Nam thiết lập quan hệ Đối tác Chiến lược Toàn diện với Hoa Kỳ (2023)
      <span class="ticker-sep">◆</span>
      📤 Xuất khẩu 2024 đạt kỷ lục ~405 tỷ USD, xuất siêu 35 tỷ USD liên tiếp nhiều năm
      <span class="ticker-sep">◆</span>
      📱 Điện thoại & linh kiện điện tử dẫn đầu xuất khẩu với ~65 tỷ USD, chiếm 28% tổng kim ngạch
      <span class="ticker-sep">◆</span>
      🇺🇸 Mỹ là thị trường xuất khẩu lớn nhất với 119.5 tỷ USD – tập trung điện thoại, dệt may, giày dép
      <span class="ticker-sep">◆</span>
      🇨🇳 Trung Quốc là đối tác nhập khẩu lớn nhất với 148.5 tỷ USD – chủ yếu máy móc và linh kiện điện tử
      <span class="ticker-sep">◆</span>
      🛰️ Làm chủ không gian – vận hành vệ tinh viễn thông VINASAT-1, VINASAT-2 và vệ tinh radar hiện đại LOTUSat-1
      <span class="ticker-sep">◆</span>
      ⚓ Siêu cảng biển Cái Mép - Thị Vải &amp; Lạch Huyện đón siêu tàu công-te-nơ kết nối trực tiếp sang Mỹ và Châu Âu
      <span class="ticker-sep">◆</span>
      ✈️ Thiết lập các đường bay thẳng xuyên lục địa từ VN đi San Francisco (Mỹ), London, Paris, Sydney, Melbourne
      <span class="ticker-sep">◆</span>
      📡 Viettel đang hoạt động tại 13 quốc gia với 50+ triệu thuê bao quốc tế
      <span class="ticker-sep">◆</span>
      🍜 Phở &amp; Cà phê Việt Nam có mặt tại hơn 140 quốc gia
    `;
  }
}

// ── Layer 5: Space & Science (Purple) ───────────────────────
function buildLayer5() {
  layers.l5.clearLayers();
  if (!SPACE_SCIENCE) return;

  // 1. Dựng vệ tinh & Trạm phóng đối tác
  (SPACE_SCIENCE.satellites || []).forEach(s => {
    // Tọa độ thực tế hoặc hiển thị trực quan của vệ tinh
    const satCoord = s.name === "VINASAT-1" ? [0.0, 132.0] :
                     s.name === "VINASAT-2" ? [-3.0, 128.0] :
                     s.name === "MicroDragon" ? [14.0, 116.0] :
                     [18.0, 113.0]; // LOTUSat-1 / Hoặc chương trình hợp tác khác

    const partnerCoord = [s.partnerLat, s.partnerLng];

    // Kết nối Việt Nam -> Trạm phóng đối tác
    L.polyline([VN_COORD, partnerCoord], {
      color: "#BD00FF",
      weight: 1.5,
      opacity: 0.65,
      dashArray: "6 6",
      className: "flow-line-purple"
    }).addTo(layers.l5);

    // Kết nối Trạm phóng -> Vệ tinh ngoài không gian
    L.polyline([partnerCoord, satCoord], {
      color: "#BD00FF",
      weight: 1.2,
      opacity: 0.5,
      dashArray: "3 6",
      className: "flow-line-purple"
    }).addTo(layers.l5);

    // Trạm phóng / Đối tác marker
    const launchHtml = `
      <div style="
        width:10px;height:10px;border-radius:50%;
        background:#BD00FF;
        box-shadow:0 0 8px #BD00FF;
        border:1.5px solid #fff;
      "></div>`;
    const partnerMarker = L.marker(partnerCoord, {
      icon: L.divIcon({ html: launchHtml, className: "", iconSize: [10, 10], iconAnchor: [5, 5] })
    }).addTo(layers.l5);
    partnerMarker.bindTooltip(`<b>🚀 Đối tác vũ trụ: ${s.partner}</b><br><span style="color:#c59bff;font-size:0.7rem">Hỗ trợ chế tạo/phóng vệ tinh ${s.name} (${s.year})</span>`, {
      className: "country-tooltip", direction: "top", offset: [0, -5]
    });

    // Vệ tinh marker
    const satHtml = `
      <div style="
        width:24px;height:24px;
        display:flex;align-items:center;justify-content:center;
        background:rgba(189,0,255,0.15);
        border:1.5px solid #BD00FF;
        border-radius:50%;
        animation: satPulse 3s ease-in-out infinite;
      ">
        <span style="font-size:12px;">🛰️</span>
      </div>`;
    const satMarker = L.marker(satCoord, {
      icon: L.divIcon({ html: satHtml, className: "", iconSize: [24, 24], iconAnchor: [12, 12] })
    }).addTo(layers.l5);
    satMarker.bindTooltip(`<b>🛰️ Vệ tinh ${s.name} (${s.year})</b><br><span style="color:#8899b4;font-size:0.7rem">${s.desc}</span>`, {
      className: "country-tooltip", direction: "top", offset: [0, -10]
    });
  });

  // 2. Trạm nghiên cứu Nam Cực
  (SPACE_SCIENCE.antarctica || []).forEach(a => {
    L.polyline([VN_COORD, [a.lat, a.lng]], {
      color: "#9b30ff",
      weight: 1.5,
      opacity: 0.5,
      dashArray: "8 8",
      className: "flow-line-purple"
    }).addTo(layers.l5);

    const antHtml = `
      <div style="
        width:22px;height:22px;
        display:flex;align-items:center;justify-content:center;
        background:rgba(0,229,255,0.15);
        border:1.5px solid #BD00FF;
        border-radius:50%;
        box-shadow: 0 0 8px rgba(189,0,255,0.4);
      ">
        <span style="font-size:11px;">❄️</span>
      </div>`;

    const antMarker = L.marker([a.lat, a.lng], {
      icon: L.divIcon({ html: antHtml, className: "", iconSize: [22, 22], iconAnchor: [11, 11] })
    }).addTo(layers.l5);
    antMarker.bindTooltip(`<b>❄️ ${a.name} (${a.year})</b><br><b>Nghiên cứu viên:</b> ${a.researcher}<br><span style="color:#8899b4;font-size:0.7rem">${a.desc}</span>`, {
      className: "country-tooltip", direction: "top", offset: [0, -10]
    });
  });
}

// ── Layer 7: Export & Import (Gold / Amber) ──────────────────
function buildLayer7() {
  layers.l7.clearLayers();
  if (!EXPORT_IMPORT) return;

  const MAX_EXPORT = Math.max(...(EXPORT_IMPORT.exports || []).map(e => e.value));
  const MAX_IMPORT = Math.max(...(EXPORT_IMPORT.imports || []).map(i => i.value));

  // 1. Vẽ tuyến xuất khẩu: từ VN_COORD tới đúng tọa độ marker
  (EXPORT_IMPORT.exports || []).forEach(ex => {
    const weight = 1.0 + (ex.value / MAX_EXPORT) * 4.0;
    const opacity = 0.40 + (ex.value / MAX_EXPORT) * 0.50;

    L.polyline([VN_COORD, [ex.lat, ex.lng]], {
      color: "#FFB300",
      weight,
      opacity,
      dashArray: "8 5",
      className: "flow-line-gold"
    }).addTo(layers.l7);

    // Mũi tên chỉ hướng
    const midLat = (VN_COORD[0] + ex.lat) / 2;
    const midLng = (VN_COORD[1] + ex.lng) / 2;
    L.marker([midLat, midLng], {
      icon: L.divIcon({
        html: `<div style="font-size:9px;color:#FF8F00;filter:drop-shadow(0 0 3px #FFB300);transform:rotate(${getBearing(VN_COORD, [ex.lat, ex.lng])}deg)">▶</div>`,
        className: "", iconSize: [10, 10], iconAnchor: [5, 5]
      })
    }).addTo(layers.l7);
  });

  // 2. Vẽ tuyến nhập khẩu: từ tọa độ marker tới VN_COORD
  (EXPORT_IMPORT.imports || []).forEach(im => {
    const weight = 1.0 + (im.value / MAX_IMPORT) * 4.0;
    const opacity = 0.40 + (im.value / MAX_IMPORT) * 0.50;

    L.polyline([[im.lat, im.lng], VN_COORD], {
      color: "#FF6D00",
      weight,
      opacity,
      dashArray: "10 6",
      className: "flow-line-orange"
    }).addTo(layers.l7);

    const midLat = (im.lat + VN_COORD[0]) / 2;
    const midLng = (im.lng + VN_COORD[1]) / 2;
    L.marker([midLat, midLng], {
      icon: L.divIcon({
        html: `<div style="font-size:9px;color:#E65100;filter:drop-shadow(0 0 3px #FF6D00);transform:rotate(${getBearing([im.lat, im.lng], VN_COORD)}deg)">▶</div>`,
        className: "", iconSize: [10, 10], iconAnchor: [5, 5]
      })
    }).addTo(layers.l7);
  });

  // 3. Marker xuất khẩu (vàng)
  (EXPORT_IMPORT.exports || []).forEach(ex => {
    const size = 8 + (ex.value / MAX_EXPORT) * 14;
    const markerHtml = `
      <div style="
        width:${size}px;height:${size}px;
        background:#FFB300;
        border:2px solid rgba(255,255,255,0.7);
        border-radius:50%;
        box-shadow:0 0 ${size/2}px rgba(255,179,0,0.8), 0 0 ${size}px rgba(255,179,0,0.3);
        display:flex;align-items:center;justify-content:center;
        font-size:${Math.max(8, size * 0.5)}px;
      ">📤</div>`;

    const marker = L.marker([ex.lat, ex.lng], {
      icon: L.divIcon({ html: markerHtml, className: "", iconSize: [size, size], iconAnchor: [size/2, size/2] })
    });

    marker.bindTooltip(`
      <div style="min-width:220px;">
        <b style="color:#E65100;">📤 XUẤT KHẨU ➔ ${ex.name}</b>
        <div style="color:#FF8F00;font-family:monospace;font-size:0.78rem;margin:4px 0;">
          ${ex.icon} <b>${ex.label}</b>
        </div>
        <div style="font-size:0.65rem;color:#888;">Sản phẩm: ${ex.products}</div>
        <div style="font-size:0.6rem;color:#aaa;margin-top:3px;">Dữ liệu ${ex.year}</div>
      </div>
    `, { className: "country-tooltip", direction: "top", offset: [0, -size/2] });

    marker.on("click", () => showPopup(ex.name, [ex.lat, ex.lng]));
    layers.l7.addLayer(marker);
  });

  // 4. Marker nhập khẩu (cam)
  (EXPORT_IMPORT.imports || []).forEach(im => {
    const size = 8 + (im.value / MAX_IMPORT) * 14;
    const markerHtml = `
      <div style="
        width:${size}px;height:${size}px;
        background:#FF6D00;
        border:2px solid rgba(255,255,255,0.7);
        border-radius:50%;
        box-shadow:0 0 ${size/2}px rgba(255,109,0,0.8), 0 0 ${size}px rgba(255,109,0,0.3);
        display:flex;align-items:center;justify-content:center;
        font-size:${Math.max(8, size * 0.5)}px;
      ">📥</div>`;

    const marker = L.marker([im.lat, im.lng], {
      icon: L.divIcon({ html: markerHtml, className: "", iconSize: [size, size], iconAnchor: [size/2, size/2] })
    });

    marker.bindTooltip(`
      <div style="min-width:220px;">
        <b style="color:#E65100;">📥 NHẬP KHẨU ← ${im.name}</b>
        <div style="color:#FF6D00;font-family:monospace;font-size:0.78rem;margin:4px 0;">
          ${im.icon} <b>${im.label}</b>
        </div>
        <div style="font-size:0.65rem;color:#888;">Sản phẩm: ${im.products}</div>
        <div style="font-size:0.6rem;color:#aaa;margin-top:3px;">Dữ liệu ${im.year}</div>
      </div>
    `, { className: "country-tooltip", direction: "top", offset: [0, -size/2] });

    marker.on("click", () => showPopup(im.name, [im.lat, im.lng]));
    layers.l7.addLayer(marker);
  });

  // 5. Vietnam hub marker
  const hubHtml = `
    <div style="
      width:22px;height:22px;border-radius:50%;
      background:linear-gradient(135deg,#FFD700,#FF8F00);
      border:2.5px solid #fff;
      box-shadow:0 0 14px rgba(255,183,0,0.9),0 0 28px rgba(255,183,0,0.4);
      display:flex;align-items:center;justify-content:center;
      font-size:11px;
      animation:tradePulse 2s ease-in-out infinite;
    ">🇻🇳</div>`;

  const hub = L.marker(VN_COORD, {
    icon: L.divIcon({ html: hubHtml, className: "", iconSize: [22, 22], iconAnchor: [11, 11] })
  }).addTo(layers.l7);

  hub.bindTooltip(`
    <b style="color:#E65100;">🇻🇳 VIỆT NAM – TRUNG TÂM XUẤT NHẬP KHẨU</b><br>
    <span style="color:#FF8F00;font-family:monospace;font-size:0.72rem;">
      📤 Xuất khẩu: <b>${EXPORT_IMPORT.stats.total_export} tỷ USD</b><br>
      📥 Nhập khẩu: <b>${EXPORT_IMPORT.stats.total_import} tỷ USD</b><br>
      ✅ Xuất siêu: <b>${EXPORT_IMPORT.stats.trade_surplus} tỷ USD</b><br>
      🌐 <b>${EXPORT_IMPORT.stats.num_partners}</b> đối tác thương mại
    </span>
  `, { className: "country-tooltip", direction: "top", offset: [0, -11] });
}

// Helper: Tính bearing (hướng) giữa 2 điểm để xoay mũi tên
function getBearing(from, to) {
  const lat1 = from[0] * Math.PI / 180;
  const lat2 = to[0]   * Math.PI / 180;
  const dLng = (to[1] - from[1]) * Math.PI / 180;
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  const bearing = Math.atan2(y, x) * 180 / Math.PI;
  return (bearing + 360) % 360;
}

// ── Layer 6: Logistics & Global Hub (Cyan) ──────────────────
function buildLayer6() {
  layers.l6.clearLayers();
  if (!LOGISTICS) return;

  // 1. Đường hàng hải
  (LOGISTICS.maritime || []).forEach(p => {
    const portHtml = `
      <div style="
        width:14px;height:14px;border-radius:50%;
        background:#00ACC1;
        border:2px solid #fff;
        box-shadow:0 0 10px rgba(0,172,193,0.8);
      "></div>`;
    const portMarker = L.marker([p.lat, p.lng], {
      icon: L.divIcon({ html: portHtml, className: "", iconSize: [14, 14], iconAnchor: [7, 7] })
    }).addTo(layers.l6);
    portMarker.bindTooltip(`<b>⚓ ${p.name}</b><br><span style="color:#8899b4;font-size:0.7rem">Siêu cảng biển trung chuyển quốc tế chiến lược</span>`, {
      className: "country-tooltip", direction: "top", offset: [0, -7]
    });

    p.connections.forEach(c => {
      L.polyline([[p.lat, p.lng], [c.lat, c.lng]], {
        color: "#00838F",
        weight: 2.0,
        opacity: 0.65,
        dashArray: "8 5",
        className: "flow-line-cyan"
      }).addTo(layers.l6);

      const destHtml = `
        <div style="
          width:8px;height:8px;border-radius:50%;
          background:#00838F;
          box-shadow:0 0 6px #00838F;
        "></div>`;
      const destMarker = L.marker([c.lat, c.lng], {
        icon: L.divIcon({ html: destHtml, className: "", iconSize: [8, 8], iconAnchor: [4, 4] })
      }).addTo(layers.l6);
      destMarker.bindTooltip(`<b>🚢 Tuyến hàng hải kết nối ➔ ${c.name}</b>`, {
        className: "country-tooltip", direction: "top", offset: [0, -4]
      });
    });
  });

  // 2. Đường hàng không
  (LOGISTICS.aviation || []).forEach(a => {
    a.routes.forEach(r => {
      L.polyline([VN_COORD, [r.lat, r.lng]], {
        color: "#00E5FF",
        weight: 1.8,
        opacity: 0.7,
        dashArray: "10 6",
        className: "flow-line-cyan"
      }).addTo(layers.l6);

      const airHtml = `
        <div style="
          width:18px;height:18px;
          display:flex;align-items:center;justify-content:center;
          background:rgba(0,229,255,0.15);
          border:1.2px solid #00E5FF;
          border-radius:50%;
        ">
          <span style="font-size:10px;transform:rotate(45deg);display:inline-block;">✈️</span>
        </div>`;
      const airMarker = L.marker([r.lat, r.lng], {
        icon: L.divIcon({ html: airHtml, className: "", iconSize: [18, 18], iconAnchor: [9, 9] })
      }).addTo(layers.l6);
      airMarker.bindTooltip(`<b>✈️ Đường bay thẳng quốc tế ➔ ${r.name}</b>`, {
        className: "country-tooltip", direction: "top", offset: [0, -9]
      });
    });
  });
}

// ── Loading Screen ──────────────────────────────────────────
function finishLoading() {
  setTimeout(() => {
    const el = document.getElementById("loading");
    el.style.opacity = "0";
    setTimeout(() => el.style.display = "none", 800);
  }, 2200);
}

// ── Animate Flow Lines ──────────────────────────────────────
// Inject CSS animation for SVG dash offset
(function injectSVGAnim() {
  const style = document.createElement("style");
  style.textContent = `
    .leaflet-zoom-animated path.flow-line {
      animation: dashFlowSVG 1.5s linear infinite;
    }
    @keyframes dashFlowSVG {
      from { stroke-dashoffset: 0; }
      to   { stroke-dashoffset: -24; }
    }
    .leaflet-zoom-animated path.flow-line-purple {
      animation: dashFlowPurple 2s linear infinite;
    }
    @keyframes dashFlowPurple {
      from { stroke-dashoffset: 0; }
      to   { stroke-dashoffset: 24; }
    }
    .leaflet-zoom-animated path.flow-line-cyan {
      animation: dashFlowCyan 1.8s linear infinite;
    }
    @keyframes dashFlowCyan {
      from { stroke-dashoffset: 0; }
      to   { stroke-dashoffset: -20; }
    }
    .leaflet-zoom-animated path.flow-line-gold {
      animation: dashFlowGold 2.2s linear infinite;
    }
    @keyframes dashFlowGold {
      from { stroke-dashoffset: 0; }
      to   { stroke-dashoffset: -28; }
    }
    .leaflet-zoom-animated path.flow-line-orange {
      animation: dashFlowOrange 1.6s linear infinite;
    }
    @keyframes dashFlowOrange {
      from { stroke-dashoffset: 0; }
      to   { stroke-dashoffset: 20; }
    }
    @keyframes tradePulse {
      0%, 100% { transform: scale(1); box-shadow: 0 0 14px rgba(255,183,0,0.9), 0 0 28px rgba(255,183,0,0.4); }
      50%       { transform: scale(1.12); box-shadow: 0 0 20px rgba(255,183,0,1), 0 0 40px rgba(255,183,0,0.6); }
    }
  `;
  document.head.appendChild(style);
})();

// ── Dynamic Legend System ───────────────────────────────────
const LEGENDS = {
  1: `
    <div class="legend-title">Chú giải – Lớp 1: Ngoại giao</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#DA251D;border:1px solid #FFD700;height:6px;width:24px;border-radius:3px;"></div>🇻🇳 Việt Nam</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#0056B3;"></div>Đối tác Toàn diện Đặc biệt</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#2979FF;"></div>Đối tác Chiến lược</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#64B5F6;"></div>Đối tác Toàn diện</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#b0bec5;"></div>Chưa phân loại / Cấm vận</div>
  `,
  2: `
    <div class="legend-title">Chú giải – Lớp 2: Nhân đạo</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#00E5FF;border-radius:50%;width:8px;height:8px;margin-left:8px;margin-right:8px;"></div>✈️ Gìn giữ hòa bình (LHQ)</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#FF9800;border-radius:50%;width:8px;height:8px;margin-left:8px;margin-right:8px;"></div>🌾 Viện trợ &amp; Thiên tai</div>
  `,
  3: `
    <div class="legend-title">Chú giải – Lớp 3: Kinh tế</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#39FF14;border-radius:50%;width:8px;height:8px;margin-left:8px;margin-right:8px;"></div>📡 Thị trường Viettel</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#388e3c;border-radius:2px;width:8px;height:8px;transform:rotate(45deg);margin-left:8px;margin-right:8px;"></div>💼 Đầu tư công nghệ / sản xuất</div>
    <div class="legend-row"><div class="legend-swatch" style="border-top:1.5px dashed #39FF14;background:transparent;width:24px;height:0;"></div>── Tuyến đầu tư kinh tế</div>
  `,
  4: `
    <div class="legend-title">Chú giải – Lớp 4: Văn hóa</div>
    <div class="legend-row">
      <div style="display:flex;align-items:center;gap:4px;width:24px;justify-content:center;">
        <div style="background:#FF6D00;border-radius:50%;width:10px;height:10px;"></div>
        <div style="background:#FFB300;border-radius:50%;width:7px;height:7px;"></div>
      </div>
      <span>Cộng đồng &amp; Du học sinh (Quy mô)</span>
    </div>
  `,
  5: `
    <div class="legend-title">Chú giải – Lớp 5: Vũ trụ</div>
    <div class="legend-row"><span style="font-size:12px;width:24px;text-align:center;">🛰️</span> Vệ tinh Việt Nam (Quỹ đạo)</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#BD00FF;border-radius:50%;width:8px;height:8px;margin-left:8px;margin-right:8px;"></div>🚀 Đối tác / Trạm phóng vũ trụ</div>
    <div class="legend-row"><span style="font-size:11px;width:24px;text-align:center;">❄️</span> Trạm nghiên cứu Nam Cực</div>
    <div class="legend-row"><div class="legend-swatch" style="border-top:1.5px dashed #BD00FF;background:transparent;width:24px;height:0;"></div>── Quỹ đạo / Tuyến hành trình</div>
  `,
  6: `
    <div class="legend-title">Chú giải – Lớp 6: Logistics</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#00ACC1;border:1.5px solid #fff;border-radius:50%;width:10px;height:10px;margin-left:7px;margin-right:7px;"></div>⚓ Siêu cảng biển kết nối</div>
    <div class="legend-row"><span style="font-size:11px;width:24px;text-align:center;">✈️</span> Sân bay quốc tế kết nối</div>
    <div class="legend-row"><div class="legend-swatch" style="border-top:2px dashed #00838F;background:transparent;width:24px;height:0;"></div>── Tuyến hàng hải quốc tế</div>
    <div class="legend-row"><div class="legend-swatch" style="border-top:1.5px dashed #00E5FF;background:transparent;width:24px;height:0;"></div>── Đường bay thẳng liên lục địa</div>
  `,
  7: `
    <div class="legend-title">Chú giải – Lớp 7: Xuất nhập khẩu</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#FFB300;border-radius:50%;width:10px;height:10px;margin-left:7px;margin-right:7px;box-shadow:0 0 4px #FFB300;"></div>📤 Xuất khẩu (bán ra)</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#FF6D00;border-radius:50%;width:10px;height:10px;margin-left:7px;margin-right:7px;box-shadow:0 0 4px #FF6D00;"></div>📥 Nhập khẩu (mua vào)</div>
    <div class="legend-row"><div class="legend-swatch" style="border-top:2px dashed #FFB300;background:transparent;width:24px;height:0;"></div>── Tuyến xuất khẩu (kim ngạch)</div>
    <div class="legend-row"><div class="legend-swatch" style="border-top:2px dashed #FF6D00;background:transparent;width:24px;height:0;"></div>── Tuyến nhập khẩu (kim ngạch)</div>
    <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(0,86,179,0.08);">
      <div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-muted);margin-bottom:6px;">Sản phẩm xuất khẩu chính</div>
      <div style="font-size:0.62rem;color:#888;line-height:1.7;">
        📱 Điện thoại/máy tính · 👕 Dệt may/giày<br>
        🦐 Thủy sản · 🍚 Gạo · ☕ Cà phê
      </div>
    </div>
    <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(0,86,179,0.08);">
      <div style="font-size:0.6rem;text-transform:uppercase;letter-spacing:1.5px;color:var(--text-muted);margin-bottom:6px;">Sản phẩm nhập khẩu chính</div>
      <div style="font-size:0.62rem;color:#888;line-height:1.7;">
        ⚙️ Máy móc/thiết bị · 🔌 Chip bán dẫn<br>
        🧵 Vải/NL dệt · 🛢️ Dầu mỏ · 🧪 Hóa chất
      </div>
    </div>
  `
};

const LAYER_NAMES = {
  1: "Ngoại giao Toàn cầu",
  2: "Nhân đạo & Viện trợ",
  3: "Kinh tế & Đầu tư",
  4: "Con người & Văn hóa",
  5: "Khoa học & Vũ trụ",
  6: "Logistics & Kết nối",
  7: "Xuất khẩu & Nhập khẩu"
};

function updateLegend() {
  const legendEl = document.getElementById("legend");
  if (!legendEl) return;

  // Lọc các lớp đang hoạt động
  const activeLayers = Object.keys(layerState)
    .map(Number)
    .filter(k => layerState[k]);

  if (activeLayers.length === 0) {
    // Mặc định lớp 1
    legendEl.innerHTML = LEGENDS[1];
    closeLegendModal();
  } else if (activeLayers.length === 1) {
    // Chỉ có 1 lớp
    legendEl.innerHTML = LEGENDS[activeLayers[0]];
    closeLegendModal();
  } else {
    // Nhiều lớp: Hiển thị nút mở popup chú giải tổng hợp
    legendEl.innerHTML = `
      <div class="legend-title">Chú giải đang hoạt động</div>
      <div style="font-size: 0.7rem; color: var(--text-muted); margin-bottom: 6px;">Đang hiển thị ${activeLayers.length} lớp dữ liệu.</div>
      <button onclick="openLegendModal()" style="
        width: 100%;
        background: #0056B3;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 8px;
        font-family: var(--font-main);
        font-size: 0.72rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 4px 12px rgba(0,86,179,0.2);
        margin-top: 4px;
        text-align: center;
      ">
        🔍 Xem chú giải tổng hợp (${activeLayers.length} lớp)
      </button>
    `;

    const modalContentEl = document.getElementById("legend-modal-content");
    if (modalContentEl) {
      modalContentEl.innerHTML = activeLayers.map(layerNum => {
        return `
          <div style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1.5px dashed rgba(0,86,179,0.08);">
            <div style="font-weight: 700; font-size: 0.72rem; color: #0056B3; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
              Lớp ${layerNum}: ${LAYER_NAMES[layerNum]}
            </div>
            ${LEGENDS[layerNum]}
          </div>
        `;
      }).join("");
    }
  }
}

function openLegendModal() {
  const modal = document.getElementById("legend-modal");
  if (modal) modal.style.display = "block";
}

function closeLegendModal() {
  const modal = document.getElementById("legend-modal");
  if (modal) modal.style.display = "none";
}

// Gắn vào window
window.openLegendModal = openLegendModal;
window.closeLegendModal = closeLegendModal;
window.updateLegend = updateLegend;

// ── Fly to Vietnam on load ──────────────────────────────────
setTimeout(() => {
  map.flyTo([14.0, 108.0], 3, { duration:2.5, easeLinearity:0.3 });
}, 2500);
