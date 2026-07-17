// ============================================================
// DATA.JS  –  Dữ liệu theo năm cho VN Global Map
// Hỗ trợ 2 mốc thời gian: 1986 (Đổi Mới) và 2026 (Hiện tại)
// ============================================================

// ────────────────────────────────────────────────────────────
// NĂM 2026 – DỮ LIỆU HIỆN TẠI
// ────────────────────────────────────────────────────────────
const DATA_2026 = {

  DIPLOMATIC: {
    comprehensive_special: [
      "United States of America","China","Russia","Japan","India","South Korea",
      "Australia","France","Laos","Cambodia","Cuba"
    ],
    strategic: [
      "United Kingdom","Germany","Spain","Italy","Malaysia","Singapore",
      "Thailand","Indonesia","Philippines","New Zealand","Argentina",
      "Brazil","Mexico","South Africa","Egypt","Saudi Arabia","United Arab Emirates",
      "Turkey","Pakistan","Bangladesh","Sri Lanka","Venezuela","Chile",
      "Ukraine","Hungary","Poland","Czech Republic","Romania","Denmark"
    ],
    comprehensive_partner: [
      "Canada","Belgium","Netherlands","Portugal","Sweden","Norway",
      "Finland","Switzerland","Austria","Greece","Israel","Kazakhstan",
      "Uzbekistan","Azerbaijan","Myanmar","Brunei","Mongolia","Ethiopia",
      "Kenya","Tanzania","Ghana","Mozambique","Algeria","Morocco","Tunisia",
      "Ecuador","Peru","Colombia","Bolivia","Paraguay","Uruguay",
      "Papua New Guinea","East Timor","Fiji"
    ]
  },

  HUMANITARIAN: [
    { name:"Cuba",              lat: 21.5, lng: -79.5, type:"food",  icon:"🌾",
      info:"Viện trợ lương thực & chuyên gia y tế nhiều thập kỷ. Quan hệ đặc biệt từ 1960." },
    { name:"Mozambique",        lat:-18.7, lng:  35.0, type:"food",  icon:"🌾",
      info:"Hỗ trợ nông nghiệp & chuyên gia. Viettel đang cung cấp hạ tầng viễn thông." },
    { name:"Congo",             lat: -4.0, lng:  21.8, type:"food",  icon:"🌾",
      info:"Viện trợ lương thực & hỗ trợ phát triển nông nghiệp." },
    { name:"Angola",            lat:-11.2, lng:  17.9, type:"food",  icon:"🌾",
      info:"Hỗ trợ sản xuất lương thực; chuyên gia nông nghiệp Việt Nam." },
    { name:"Nigeria",           lat:  9.1, lng:   8.7, type:"food",  icon:"🌾",
      info:"Hợp tác nông nghiệp và xuất khẩu gạo Việt Nam." },
    { name:"Senegal",           lat: 14.5, lng: -14.5, type:"food",  icon:"🌾",
      info:"Viện trợ lương thực & hỗ trợ kỹ thuật nông nghiệp." },
    { name:"Sudan",             lat: 15.6, lng:  32.5, type:"food",  icon:"🌾",
      info:"Hỗ trợ nhân đạo và lương thực qua các tổ chức LHQ." },
    { name:"Madagascar",        lat:-20.0, lng:  46.9, type:"food",  icon:"🌾",
      info:"Chuyên gia lúa gạo Việt Nam hỗ trợ canh tác." },
    { name:"Sierra Leone",      lat:  8.5, lng: -11.8, type:"food",  icon:"🌾",
      info:"Viện trợ nhân đạo và phát triển nông nghiệp." },
    { name:"Turkey",            lat: 39.9, lng:  32.9, type:"disaster", icon:"🏥",
      info:"Cứu trợ động đất Thổ Nhĩ Kỳ 2023: Việt Nam gửi đoàn cứu hộ và hàng viện trợ." },
    { name:"Syria",             lat: 34.8, lng:  38.9, type:"disaster", icon:"🏥",
      info:"Cứu trợ nhân đạo, hỗ trợ người tị nạn Syria qua các quỹ quốc tế." },
    { name:"Nepal",             lat: 28.4, lng:  84.1, type:"disaster", icon:"🏥",
      info:"Cứu trợ động đất Nepal 2015: Đoàn y tế và viện trợ trực tiếp." },
    { name:"Myanmar",           lat: 17.1, lng:  96.2, type:"disaster", icon:"🏥",
      info:"Hỗ trợ y tế sau đảo chính; viện trợ nhân đạo." },
    { name:"South Sudan",       lat:  6.9, lng:  31.3, type:"un_peacekeeping", icon:"🕊️",
      info:"Lực lượng GGHB LHQ - Phái bộ UNMISS. VN triển khai bệnh viện dã chiến cấp 2." },
    { name:"Central African Republic", lat: 6.6, lng: 20.9, type:"un_peacekeeping", icon:"🕊️",
      info:"Lực lượng GGHB LHQ - Phái bộ MINUSCA. Sĩ quan Quân đội nhân dân VN." },
  ],

  ECONOMIC: {
    viettel: [
      { name:"Mozambique",  lat:-18.7, lng: 35.0, brand:"Movitel",  subs:"7.5M", year:2012 },
      { name:"Cameroon",    lat:  3.9, lng: 11.5, brand:"Nexttel",  subs:"3.2M", year:2014 },
      { name:"Burundi",     lat: -3.4, lng: 29.9, brand:"Lumitel",  subs:"2.1M", year:2015 },
      { name:"Peru",        lat:-12.0, lng:-77.0, brand:"Bitel",    subs:"1.5M", year:2013 },
      { name:"Haiti",       lat: 18.9, lng:-72.3, brand:"Natcom",   subs:"1.8M", year:2012 },
      { name:"East Timor",  lat: -8.9, lng:125.7, brand:"Telemor",  subs:"0.4M", year:2012 },
      { name:"Cambodia",    lat: 11.6, lng:104.9, brand:"Metfone",  subs:"8.5M", year:2009 },
      { name:"Laos",        lat: 18.0, lng:102.5, brand:"Unitel",   subs:"5.2M", year:2009 },
      { name:"Myanmar",     lat: 17.1, lng: 96.1, brand:"Mytel",    subs:"9.0M", year:2018 },
      { name:"Tanzania",    lat: -6.4, lng: 34.8, brand:"Halotel",  subs:"5.0M", year:2016 },
      { name:"Guinea",      lat: 11.0, lng:-15.3, brand:"Nuvox",    subs:"0.5M", year:2020 },
      { name:"South Sudan", lat:  6.9, lng: 31.3, brand:"Vicel",    subs:"0.2M", year:2019 },
    ],
    tech_industry: [
      { name:"United States of America", lat: 37.8, lng:-96.0, brand:"FPT/VinFast", year:2022, type:"tech" },
      { name:"Germany",                  lat: 51.2, lng: 10.5, brand:"FPT Software", year:2018, type:"tech" },
      { name:"France",                   lat: 46.2, lng:  2.2, brand:"FPT Software", year:2019, type:"tech" },
      { name:"Japan",                    lat: 35.7, lng:139.7, brand:"FPT/VinFast",  year:2020, type:"tech" },
      { name:"Singapore",                lat:  1.35,lng:103.8, brand:"VNG/Vingroup", year:2018, type:"tech" },
      { name:"India",                    lat: 22.0, lng: 78.0, brand:"VinFast",      year:2023, type:"auto" },
      { name:"Indonesia",                lat: -2.5, lng:118.0, brand:"Viettel/FPT",  year:2021, type:"tech" },
    ]
  },

  CULTURAL: [
    { name:"Japan",                    lat: 35.7, lng:139.7, students:450000, workers:580000, food:5 },
    { name:"South Korea",              lat: 37.5, lng:127.0, students:65000,  workers:50000,  food:4 },
    { name:"Taiwan",                   lat: 25.0, lng:121.5, students:10000,  workers:220000, food:4 },
    { name:"United States of America", lat: 37.8, lng:-96.0, students:30000,  workers:5000,   food:5 },
    { name:"Australia",                lat:-25.3, lng:133.8, students:35000,  workers:3000,   food:5 },
    { name:"Germany",                  lat: 51.2, lng: 10.5, students:20000,  workers:2000,   food:4 },
    { name:"France",                   lat: 46.2, lng:  2.2, students:8000,   workers:1500,   food:5 },
    { name:"United Kingdom",           lat: 51.5, lng: -1.5, students:12000,  workers:2000,   food:4 },
    { name:"Canada",                   lat: 56.1, lng:-106.3,students:25000,  workers:2000,   food:4 },
    { name:"Russia",                   lat: 61.5, lng:105.3, students:8000,   workers:1000,   food:3 },
    { name:"Czech Republic",           lat: 49.8, lng: 15.5, students:15000,  workers:500,    food:4 },
    { name:"Singapore",                lat:  1.35,lng:103.8, students:4000,   workers:2000,   food:4 },
    { name:"China",                    lat: 35.0, lng:104.0, students:20000,  workers:1000,   food:3 },
  ],

  SPACE_SCIENCE: {
    satellites: [
      { name: "VINASAT-1", lat: 10.5, lng: 106.7, partner: "France", partnerLat: 5.2, partnerLng: -52.8, type: "communication", year: 2008, desc: "Vệ tinh viễn thông đầu tiên của Việt Nam, chế tạo bởi Lockheed Martin (Mỹ), phóng bằng tên lửa Ariane 5 từ bãi phóng vũ trụ Kourou tại Guyane thuộc Pháp vào ngày 18/04/2008." },
      { name: "VINASAT-2", lat: 10.5, lng: 106.7, partner: "United States of America", partnerLat: 28.5, partnerLng: -80.6, type: "communication", year: 2012, desc: "Vệ tinh viễn thông thứ hai của Việt Nam nhằm tăng cường năng lực và dự phòng, phóng lên quỹ đạo ngày 16/05/2012 bởi Arianespace (Kourou, Guyane thuộc Pháp)." },
      { name: "MicroDragon", lat: 10.5, lng: 106.7, partner: "Japan", partnerLat: 31.25, partnerLng: 131.08, type: "research", year: 2019, desc: "Vệ tinh nghiên cứu do 36 kỹ sư Việt Nam chế tạo hoàn toàn tại Nhật Bản, phóng từ Trung tâm Vũ trụ Uchinoura ngày 18/01/2019 bằng tên lửa Epsilon-4." },
      { name: "LOTUSat-1", lat: 10.5, lng: 106.7, partner: "Japan", partnerLat: 31.25, partnerLng: 131.08, type: "radar", year: 2026, desc: "Vệ tinh quan sát Trái Đất thế hệ mới sử dụng công nghệ radar SAR hiện đại, hợp tác chế tạo cùng tập đoàn NEC (Nhật Bản), phục vụ quản lý thiên tai và biến đổi khí hậu." }
    ],
    antarctica: [
      { name: "Trạm nghiên cứu Nam Cực (South Pole)", lat: -90.0, lng: 0.0, year: 1997, researcher: "PGS.TS Nguyễn Trọng Hiền", desc: "Nhà vật lý thiên văn người Việt đầu tiên cắm cờ đỏ sao vàng tại cực Nam của Trái Đất, lắp đặt kính viễn vọng đo bức xạ nền vũ trụ." },
      { name: "Hành trình nghiên cứu Nam Cực", lat: -77.85, lng: 166.66, year: 2016, researcher: "TS. Nguyễn Thế Lương", desc: "Tham gia đoàn nghiên cứu quốc tế khảo sát địa chất học và tác động của biến đổi khí hậu toàn cầu tại vùng cực." }
    ]
  },

  LOGISTICS: {
    maritime: [
      { name: "Cảng Cái Mép - Thị Vải", lat: 10.53, lng: 107.03, type: "port", connections: [
        { dest: "Los Angeles", lat: 33.74, lng: -118.26, name: "Bờ Tây nước Mỹ" },
        { dest: "Rotterdam", lat: 51.92, lng: 4.48, name: "Châu Âu" },
        { dest: "Singapore", lat: 1.35, lng: 103.82, name: "Singapore" }
      ]},
      { name: "Cảng Lạch Huyện (Hải Phòng)", lat: 20.83, lng: 106.87, type: "port", connections: [
        { dest: "Tokyo", lat: 35.68, lng: 139.76, name: "Đông Á" },
        { dest: "Rotterdam", lat: 51.92, lng: 4.48, name: "Châu Âu" }
      ]}
    ],
    aviation: [
      { from: "Hà Nội / TP.HCM", lat: 16.04, lng: 108.24, routes: [
        { dest: "San Francisco", lat: 37.77, lng: -122.42, name: "Mỹ (Direct)" },
        { dest: "London", lat: 51.51, lng: -0.13, name: "Anh" },
        { dest: "Paris", lat: 48.85, lng: 2.35, name: "Pháp" },
        { dest: "Frankfurt", lat: 50.11, lng: 8.68, name: "Đức" },
        { dest: "Sydney", lat: -33.87, lng: 151.21, name: "Úc (Sydney)" },
        { dest: "Melbourne", lat: -37.81, lng: 144.96, name: "Úc (Melbourne)" },
        { dest: "New Delhi", lat: 28.61, lng: 77.21, name: "Ấn Độ" }
      ]}
    ]
  },

  STATS: {
    countries: 193,
    comprehensive: 11,
    strategic: 29,
    viettel_markets: 12,
    label: "2026 — Hội nhập Toàn cầu"
  }
};


// ────────────────────────────────────────────────────────────
// NĂM 1986 – ĐỔI MỚI BƯỚC ĐẦU
// Bối cảnh: VN vừa khai mạc Đại hội VI, tuyên bố Đổi Mới.
// Bị bao vây cấm vận, chỉ có quan hệ với khối XHCN.
// ────────────────────────────────────────────────────────────
const DATA_1986 = {

  DIPLOMATIC: {
    // Quan hệ đặc biệt / Anh em: chỉ có Liên Xô, Lào, Cuba, Campuchia
    comprehensive_special: [
      "Russia",       // Liên Xô – chỗ dựa chính trị, kinh tế, quân sự
      "Laos",         // Quan hệ đặc biệt
      "Cambodia",     // VN đang đóng quân (đến 1989)
      "Cuba",         // Quan hệ đặc biệt XHCN
    ],
    // Quan hệ bình thường trong khối XHCN
    strategic: [
      "Poland",               // Ba Lan – đối tác XHCN
      "Hungary",              // Hungary – đối tác XHCN
      "Romania",              // Romania – đối tác XHCN
      "Bulgaria",             // Bulgaria – đối tác XHCN
      "Mongolia",             // Mông Cổ – XHCN
      "India",                // Ấn Độ – không liên kết, thân thiện
      "France",               // Pháp – có quan hệ từ sau 1975
      "Sweden",               // Thụy Điển – viện trợ nhân đạo
      "Finland",              // Phần Lan – quan hệ trung lập
      "Angola",               // Angola – XHCN châu Phi
      "Mozambique",           // Mozambique – XHCN châu Phi
      "Ethiopia",             // Ethiopia – XHCN châu Phi
      "Algeria",              // Algeria – quan hệ từ phong trào giải phóng
      "Libya",                // Libya – quan hệ ngoại giao
    ],
    // Quan hệ ngoại giao cơ bản
    comprehensive_partner: [
      "Norway",               // Na Uy – viện trợ nhân đạo
      "Denmark",              // Đan Mạch – viện trợ
      "Netherlands",          // Hà Lan – quan hệ ngoại giao
      "Austria",              // Áo – trung lập, quan hệ tốt
      "Italy",                // Ý – quan hệ ngoại giao
      "Mexico",               // Mexico – quan hệ ngoại giao
      "Venezuela",            // Venezuela – quan hệ ngoại giao
      "Brazil",               // Brazil – quan hệ ngoại giao
      "Argentina",            // Argentina
      "Tanzania",             // Tanzania – quan hệ châu Phi
      "Kenya",                // Kenya – quan hệ châu Phi
      "Iraq",                 // Iraq – thân thiện
      "Syria",                // Syria – thân thiện
      "Sri Lanka",            // Sri Lanka – quan hệ ngoại giao
    ]
    // KHÔNG CÓ quan hệ / rất căng thẳng:
    // - Mỹ: cấm vận hoàn toàn đến 1994
    // - Trung Quốc: xung đột biên giới, cực kỳ căng thẳng
    // - Hầu hết ASEAN: chống VN vì vấn đề Campuchia
    // - Tây Âu: đa số lạnh nhạt do Chiến tranh Lạnh
    // - Hàn Quốc, Nhật Bản: hạn chế do áp lực từ Mỹ
  },

  // 1986: VN NHẬN viện trợ, CHƯA cho đi nhiều
  HUMANITARIAN: [
    { name:"Russia",     lat: 61.5, lng:105.3, type:"food", icon:"🤝",
      info:"Liên Xô viện trợ VN ~1 tỷ rúp/năm: dầu mỏ, máy móc, lương thực, vũ khí." },
    { name:"Cuba",       lat: 21.5, lng: -79.5, type:"food", icon:"🌾",
      info:"VN hỗ trợ Cuba chuyên gia nông nghiệp, Cuba hỗ trợ VN y tế và giáo dục." },
    { name:"Sweden",     lat: 62.0, lng: 16.0, type:"disaster", icon:"🏥",
      info:"Thụy Điển cung cấp viện trợ nhân đạo lớn nhất trong khối Tây cho VN 1986." },
    { name:"Norway",     lat: 64.0, lng: 13.0, type:"disaster", icon:"🏥",
      info:"Na Uy viện trợ phát triển qua NORAD cho các dự án nông nghiệp & giáo dục." },
    { name:"Finland",    lat: 64.0, lng: 26.0, type:"disaster", icon:"🏥",
      info:"Phần Lan hỗ trợ xây dựng nhà máy giấy Bãi Bằng (Phú Thọ) – dự án lớn." },
  ],

  // 1986: KHÔNG CÓ đầu tư ra nước ngoài
  // Viettel chưa thành lập (1989), FPT chưa có (1988)
  ECONOMIC: {
    viettel: [],
    tech_industry: []
  },

  // 1986: Cộng đồng người Việt ở nước ngoài rất nhỏ, chủ yếu là:
  // - Thực tập sinh/lưu học sinh ở Liên Xô & Đông Âu
  // - Người tị nạn "thuyền nhân" ở Mỹ, Pháp, Đức (chưa về nước nhiều)
  CULTURAL: [
    { name:"Russia",      lat: 61.5, lng:105.3, students:28000,  workers:35000,  food:1,
      note:"Lưu học sinh & chuyên gia tại Liên Xô theo chương trình XHCN" },
    { name:"Germany",     lat: 51.2, lng: 10.5, students:3000,   workers:12000,  food:1,
      note:"Đông Đức: công nhân xuất khẩu lao động theo hiệp định XHCN" },
    { name:"France",      lat: 46.2, lng:  2.2, students:1500,   workers:500,    food:2,
      note:"Cộng đồng người Việt tại Pháp từ thời Pháp thuộc + sau 1975" },
    { name:"United States of America", lat: 37.8, lng:-96.0, students:500, workers:200, food:1,
      note:"Rất ít – chủ yếu là người tị nạn, quan hệ VN-Mỹ còn thù địch" },
    { name:"Poland",      lat: 51.9, lng: 19.1, students:4000,   workers:20000,  food:1,
      note:"Công nhân xuất khẩu lao động sang Ba Lan – chương trình XHCN" },
    { name:"Czech Republic", lat: 49.8, lng: 15.5, students:3500, workers:18000, food:1,
      note:"Tiệp Khắc: công nhân xuất khẩu lao động theo hiệp định XHCN" },
    { name:"Hungary",     lat: 47.2, lng: 19.5, students:2500,   workers:15000,  food:1,
      note:"Hungary: công nhân xuất khẩu lao động theo hiệp định XHCN" },
    { name:"Bulgaria",    lat: 42.7, lng: 25.5, students:2000,   workers:8000,   food:1,
      note:"Bulgaria: lưu học sinh & công nhân XHCN" },
    { name:"Cuba",        lat: 21.5, lng: -79.5, students:1000,  workers:500,    food:1,
      note:"Lưu học sinh VN tại Cuba theo chương trình hợp tác XHCN" },
  ],

  SPACE_SCIENCE: {
    satellites: [
      { name: "Chương trình Interkosmos", lat: 10.5, lng: 106.7, partner: "Russia", partnerLat: 55.75, partnerLng: 37.62, type: "cooperation", year: 1980, desc: "Việt Nam gia nhập chương trình Interkosmos của Liên Xô. Anh hùng Phạm Tuân trở thành người Việt Nam và người châu Á đầu tiên bay vào vũ trụ ngày 23/07/1980 trên tàu Soyuz 37." }
    ],
    antarctica: []
  },

  LOGISTICS: {
    maritime: [
      { name: "Cảng Hải Phòng", lat: 20.86, lng: 106.68, type: "port", connections: [
        { dest: "Vladivostok", lat: 43.12, lng: 131.89, name: "Liên Xô (Viễn Đông)" }
      ]},
      { name: "Cảng Sài Gòn", lat: 10.77, lng: 106.70, type: "port", connections: [
        { dest: "Odessa", lat: 46.48, lng: 30.72, name: "Liên Xô (Biển Đen)" }
      ]}
    ],
    aviation: [
      { from: "Hà Nội", lat: 21.03, lng: 105.85, routes: [
        { dest: "Moscow", lat: 55.75, lng: 37.62, name: "Liên Xô" },
        { dest: "Vientiane", lat: 17.97, lng: 102.63, name: "Lào" },
        { dest: "Phnom Penh", lat: 11.55, lng: 104.92, name: "Campuchia" }
      ]}
    ]
  },

  STATS: {
    countries: 54,       // Chỉ ~54 nước có quan hệ chính thức
    comprehensive: 4,    // Quan hệ đặc biệt: LX, Lào, CPC, Cuba
    strategic: 14,       // Chủ yếu khối XHCN
    viettel_markets: 0,  // Chưa có
    label: "1986 — Đổi Mới Bắt Đầu"
  }
};


// ────────────────────────────────────────────────────────────
// TRẠNG THÁI HIỆN TẠI (mặc định 2026)
// ────────────────────────────────────────────────────────────
let CURRENT_YEAR = 2026;
let DIPLOMATIC   = DATA_2026.DIPLOMATIC;
let HUMANITARIAN = DATA_2026.HUMANITARIAN;
let ECONOMIC     = DATA_2026.ECONOMIC;
let CULTURAL     = DATA_2026.CULTURAL;
let SPACE_SCIENCE = DATA_2026.SPACE_SCIENCE;
let LOGISTICS     = DATA_2026.LOGISTICS;
let CURRENT_STATS = DATA_2026.STATS;

function setYear(year) {
  CURRENT_YEAR  = year;
  const d       = year === 1986 ? DATA_1986 : DATA_2026;
  DIPLOMATIC    = d.DIPLOMATIC;
  HUMANITARIAN  = d.HUMANITARIAN;
  ECONOMIC      = d.ECONOMIC;
  CULTURAL      = d.CULTURAL;
  SPACE_SCIENCE = d.SPACE_SCIENCE;
  LOGISTICS     = d.LOGISTICS;
  CURRENT_STATS = d.STATS;
}


// ────────────────────────────────────────────────────────────
// COUNTRY DATABASE (popup info) – dùng chung 2 năm
// ────────────────────────────────────────────────────────────
const COUNTRY_DATA_2026 = {
  "United States of America": {
    flag:"🇺🇸",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Đối tác Chiến lược Toàn diện",
        tags:["diplomatic","economic","cultural"],
        events:[
          { year:"2023", text:"Nâng cấp lên Đối tác Chiến lược Toàn diện (tháng 9/2023)" },
          { year:"2022", text:"Kim ngạch thương mại song phương vượt 123 tỷ USD" },
          { year:"1995", text:"Bình thường hóa quan hệ ngoại giao" },
        ]},
      1986:{ relation:"normal", relLabel:"Không có quan hệ (Cấm vận)",
        tags:["diplomatic"],
        events:[
          { year:"1986", text:"Mỹ duy trì cấm vận toàn diện với VN từ 1975" },
          { year:"1986", text:"Quan hệ thù địch – VN bị loại khỏi hệ thống Bretton Woods" },
          { year:"1975", text:"Mỹ thất bại, rút quân – bắt đầu cấm vận kinh tế" },
        ]}
    }
  },
  "China": {
    flag:"🇨🇳",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Đối tác Chiến lược Toàn diện",
        tags:["diplomatic","economic"],
        events:[
          { year:"2023", text:"Kim ngạch thương mại đạt ~176 tỷ USD, đối tác lớn nhất" },
          { year:"2008", text:"Thiết lập Đối tác Chiến lược Toàn diện" },
        ]},
      1986:{ relation:"normal", relLabel:"Quan hệ Cực kỳ Căng thẳng",
        tags:["diplomatic"],
        events:[
          { year:"1986", text:"Chiến tranh biên giới phía Bắc (1979–1989) vẫn đang diễn ra" },
          { year:"1984", text:"TQ tấn công điểm cao Vị Xuyên, Hà Giang" },
          { year:"1979", text:"TQ phát động chiến tranh xâm lược biên giới phía Bắc" },
        ]}
    }
  },
  "Russia": {
    flag:"🇷🇺",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Đối tác Chiến lược Toàn diện",
        tags:["diplomatic","economic"],
        events:[
          { year:"2012", text:"Nâng cấp lên Đối tác Chiến lược Toàn diện" },
        ]},
      1986:{ relation:"comprehensive_special", relLabel:"Quan hệ Đặc biệt (Liên Xô)",
        tags:["diplomatic","humanitarian"],
        events:[
          { year:"1986", text:"Liên Xô – đồng minh chiến lược số 1, viện trợ ~1 tỷ rúp/năm" },
          { year:"1979", text:"Hiệp ước Hữu nghị và Hợp tác VN-Liên Xô ký năm 1978" },
          { year:"1979", text:"Liên Xô sử dụng cảng Cam Ranh làm căn cứ hải quân" },
        ]}
    }
  },
  "Japan": {
    flag:"🇯🇵",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Đối tác Chiến lược Toàn diện",
        tags:["diplomatic","economic","cultural"],
        events:[
          { year:"2023", text:"Nâng cấp lên Đối tác Chiến lược Toàn diện" },
          { year:"2022", text:"450.000 du học sinh/thực tập sinh VN tại Nhật" },
        ]},
      1986:{ relation:"normal", relLabel:"Quan hệ Hạn chế",
        tags:["diplomatic"],
        events:[
          { year:"1986", text:"Nhật duy trì quan hệ ngoại giao nhưng hạn chế do áp lực Mỹ" },
          { year:"1986", text:"Chưa có viện trợ ODA hay đầu tư đáng kể" },
        ]}
    }
  },
  "Laos": {
    flag:"🇱🇦",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Quan hệ Đặc biệt",
        tags:["diplomatic","economic","cultural"],
        events:[
          { year:"2023", text:"Thương mại song phương đạt 1.4 tỷ USD" },
          { year:"2009", text:"Unitel (Viettel): 5.2M thuê bao tại Lào" },
        ]},
      1986:{ relation:"comprehensive_special", relLabel:"Quan hệ Đặc biệt",
        tags:["diplomatic"],
        events:[
          { year:"1986", text:"Quan hệ đặc biệt Việt-Lào: quân đội VN hiện diện tại Lào" },
          { year:"1977", text:"Hiệp ước Hữu nghị và Hợp tác đặc biệt VN-Lào ký 1977" },
        ]}
    }
  },
  "Cuba": {
    flag:"🇨🇺",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Quan hệ Đặc biệt",
        tags:["diplomatic","humanitarian"],
        events:[
          { year:"2023", text:"Viện trợ lương thực gạo và chuyên gia y tế" },
          { year:"1960", text:"Thiết lập quan hệ ngoại giao đặc biệt" },
        ]},
      1986:{ relation:"comprehensive_special", relLabel:"Quan hệ Đặc biệt XHCN",
        tags:["diplomatic","humanitarian"],
        events:[
          { year:"1986", text:"Cuba hỗ trợ VN y tế & giáo dục; VN hỗ trợ Cuba nông nghiệp" },
          { year:"1960", text:"Fidel Castro là một trong những lãnh đạo đầu tiên công nhận VN" },
        ]}
    }
  },
  "Cambodia": {
    flag:"🇰🇭",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Quan hệ Đặc biệt",
        tags:["diplomatic","economic"],
        events:[
          { year:"2023", text:"Kim ngạch thương mại VN-CPC: 9+ tỷ USD" },
          { year:"2009", text:"Metfone (Viettel): 8.5M thuê bao tại Campuchia" },
        ]},
      1986:{ relation:"comprehensive_special", relLabel:"Quan hệ Đặc biệt (Đang đóng quân)",
        tags:["diplomatic"],
        events:[
          { year:"1986", text:"VN đóng quân tại CPC từ 1978, dự kiến rút hoàn toàn 1989" },
          { year:"1979", text:"VN tấn công lật đổ chế độ diệt chủng Khmer Đỏ" },
        ]}
    }
  },
  "France": {
    flag:"🇫🇷",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Đối tác Chiến lược Toàn diện",
        tags:["diplomatic","economic","cultural"],
        events:[
          { year:"2023", text:"Ký Đối tác Chiến lược Toàn diện" },
          { year:"2023", text:"Cộng đồng người Việt tại Pháp: ~350.000 người" },
        ]},
      1986:{ relation:"strategic", relLabel:"Quan hệ Ngoại giao (Hạn chế)",
        tags:["diplomatic","cultural"],
        events:[
          { year:"1986", text:"Pháp duy trì quan hệ ngoại giao nhưng theo chiều hướng Tây" },
          { year:"1986", text:"~50.000 người Việt tại Pháp chủ yếu là di dân trước 1975" },
        ]}
    }
  },
  "South Korea": {
    flag:"🇰🇷",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Đối tác Chiến lược Toàn diện",
        tags:["diplomatic","economic","cultural"],
        events:[
          { year:"2022", text:"Nâng cấp lên Đối tác Chiến lược Toàn diện" },
          { year:"2022", text:"Samsung, LG... đầu tư 80+ tỷ USD vào Việt Nam" },
        ]},
      1986:{ relation:"normal", relLabel:"Không có quan hệ",
        tags:["diplomatic"],
        events:[
          { year:"1986", text:"Hàn Quốc chưa thiết lập quan hệ ngoại giao với VN" },
          { year:"1992", text:"(Sau này) Bình thường hóa quan hệ năm 1992" },
        ]}
    }
  },
  "Australia": {
    flag:"🇦🇺",
    byYear:{
      2026:{ relation:"comprehensive_special", relLabel:"Đối tác Chiến lược Toàn diện",
        tags:["diplomatic","economic","cultural"],
        events:[
          { year:"2023", text:"Nâng lên Đối tác Chiến lược Toàn diện" },
        ]},
      1986:{ relation:"normal", relLabel:"Quan hệ Ngoại giao Hạn chế",
        tags:["diplomatic"],
        events:[
          { year:"1986", text:"Úc có quan hệ ngoại giao nhưng rất hạn chế, tập trung tiếp nhận thuyền nhân" },
        ]}
    }
  },
  "Germany": {
    flag:"🇩🇪",
    byYear:{
      2026:{ relation:"strategic", relLabel:"Đối tác Chiến lược",
        tags:["diplomatic","economic","cultural"],
        events:[
          { year:"2011", text:"Nâng lên Đối tác Chiến lược" },
          { year:"2022", text:"20.000 du học sinh VN tại Đức" },
        ]},
      1986:{ relation:"strategic", relLabel:"Cộng hòa Dân chủ Đức (Đông Đức – XHCN)",
        tags:["diplomatic","cultural"],
        events:[
          { year:"1986", text:"Đông Đức (GDR): đối tác XHCN – tiếp nhận công nhân VN xuất khẩu lao động" },
          { year:"1986", text:"~12.000 công nhân VN làm việc tại Đông Đức theo hiệp định" },
        ]}
    }
  },
  "Poland": {
    flag:"🇵🇱",
    byYear:{
      2026:{ relation:"strategic", relLabel:"Đối tác Chiến lược",
        tags:["diplomatic"],
        events:[{ year:"2013", text:"Nâng lên Đối tác Chiến lược" }]},
      1986:{ relation:"strategic", relLabel:"Quan hệ Đặc biệt XHCN",
        tags:["diplomatic","cultural"],
        events:[
          { year:"1986", text:"Ba Lan: đối tác XHCN – ~20.000 công nhân VN xuất khẩu lao động" },
          { year:"1986", text:"Hợp tác kỹ thuật và đào tạo nghề nghiệp" },
        ]}
    }
  },
  "Czech Republic": {
    flag:"🇨🇿",
    byYear:{
      2026:{ relation:"strategic", relLabel:"Đối tác Chiến lược",
        tags:["diplomatic","cultural"],
        events:[{ year:"2012", text:"Nâng lên Đối tác Chiến lược" }]},
      1986:{ relation:"strategic", relLabel:"Tiệp Khắc – Đối tác XHCN",
        tags:["diplomatic","cultural"],
        events:[
          { year:"1986", text:"Tiệp Khắc: ~18.000 công nhân VN xuất khẩu lao động" },
          { year:"1986", text:"Hợp tác công nghiệp nặng và đào tạo cán bộ" },
        ]}
    }
  },
  "South Sudan": {
    flag:"🇸🇸",
    byYear:{
      2026:{ relation:"normal", relLabel:"Quan hệ Ngoại giao",
        tags:["humanitarian"],
        events:[
          { year:"2014", text:"Triển khai Bệnh viện dã chiến cấp 2 (UNMISS)" },
        ]},
      1986:{ relation:"normal", relLabel:"Chưa tồn tại (thuộc Sudan)",
        tags:[],
        events:[{ year:"1986", text:"Nam Sudan chưa độc lập (tách khỏi Sudan năm 2011)" }]}
    }
  },
  "Turkey": {
    flag:"🇹🇷",
    byYear:{
      2026:{ relation:"strategic", relLabel:"Đối tác Chiến lược",
        tags:["diplomatic","humanitarian"],
        events:[{ year:"2023", text:"Gửi đoàn cứu hộ 76 người & 25 tấn hàng viện trợ động đất" }]},
      1986:{ relation:"normal", relLabel:"Quan hệ Ngoại giao Thông thường",
        tags:["diplomatic"],
        events:[{ year:"1986", text:"Thổ Nhĩ Kỳ là thành viên NATO – quan hệ với VN rất hạn chế" }]}
    }
  },
};

// Lấy dữ liệu popup theo năm
function getCountryData(name) {
  const entry = COUNTRY_DATA_2026[name];
  if (entry && entry.byYear) {
    const yd = entry.byYear[CURRENT_YEAR] || entry.byYear[2026];
    return { flag: entry.flag, ...yd };
  }

  // Fallback: tự tạo từ DIPLOMATIC hiện tại
  let relation = "normal", relLabel = "Quan hệ Ngoại giao Thông thường";
  if (DIPLOMATIC.comprehensive_special.includes(name)) {
    relation = "comprehensive_special";
    relLabel = CURRENT_YEAR === 1986 ? "Quan hệ Đặc biệt XHCN" : "Đối tác Chiến lược Toàn diện";
  } else if (DIPLOMATIC.strategic.includes(name)) {
    relation = "strategic";
    relLabel = CURRENT_YEAR === 1986 ? "Quan hệ XHCN / Ngoại giao Thông thường" : "Đối tác Chiến lược";
  } else if (DIPLOMATIC.comprehensive_partner.includes(name)) {
    relation = "comprehensive_partner";
    relLabel = CURRENT_YEAR === 1986 ? "Quan hệ Ngoại giao Cơ bản" : "Đối tác Toàn diện";
  } else {
    relLabel = CURRENT_YEAR === 1986 ? "Chưa có quan hệ / Cấm vận" : "Quan hệ Ngoại giao Thông thường";
  }

  const yearNote = CURRENT_YEAR === 1986
    ? `Năm 1986, Việt Nam ${relation === 'normal' ? 'chưa có hoặc rất hạn chế quan hệ' : 'có quan hệ'} với ${name}.`
    : `Việt Nam đã thiết lập quan hệ ngoại giao với ${name}.`;

  return {
    flag:"🌐", relation, relLabel, tags:["diplomatic"],
    events:[{ year: String(CURRENT_YEAR), text: yearNote }]
  };
}
