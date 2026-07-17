
export interface MilestoneData {
  year: string;
  title: string;
  subtitle: string;
  quote: string;
  description: string;
  story: string;
  stats: {
    value: string;
    label: string;
    desc: string;
  }[];
  highlights: string[];
}

export const milestonesData: MilestoneData[] = [
  {
    year: "1986",
    title: "BƯỚC NGOẶT ĐỔI MỚI",
    subtitle: "Khủng hoảng & Quyết định lịch sử",
    quote: "Đại hội Đảng Cộng sản Việt Nam lần thứ VI chính thức đưa ra đường lối Đổi Mới toàn diện, chuyển dịch từ kinh tế bao cấp sang kinh tế thị trường.",
    description: "Trước năm 1986, nền kinh tế Việt Nam rơi vào khủng hoảng trầm trọng sau chiến tranh, lạm phát tăng phi mã và đời sống nhân dân vô cùng khó khăn dưới chế độ bao cấp, phân phối tem phiếu. Quyết định lịch sử năm 1986 đã cởi trói tư duy kinh tế, thừa nhận cơ cấu kinh tế nhiều thành phần.",
    story: "Chính sách Đổi Mới không chỉ là cải cách kinh tế mà là một cuộc đổi mới tư duy sâu sắc, đặt nền móng đầu tiên đưa Việt Nam tự chủ sản xuất và thoát khỏi tình thế bị cô lập kinh tế toàn cầu.",
    stats: [
      { value: "774.7%", label: "Lạm phát phi mã", desc: "Đỉnh điểm lạm phát năm 1986 khiến đồng tiền mất giá cực độ." },
      { value: "Đại Hội VI", label: "Đường lối mới", desc: "Chính thức xóa bỏ cơ chế tập trung quan liêu bao cấp." }
    ],
    highlights: [
      "Thừa nhận sự tồn tại của kinh tế nhiều thành phần.",
      "Xóa bỏ hệ thống phân phối thu mua độc quyền của nhà nước.",
      "Mở cửa thu hút đầu tư nước ngoài sơ khởi."
    ]
  },
  {
    year: "1989",
    title: "KỲ TÍCH HẠT GẠO VIỆT",
    subtitle: "Từ thiếu thốn đến xuất khẩu thế giới",
    quote: "Xóa bỏ hoàn toàn chế độ bao cấp đối với lương thực. Việt Nam lần đầu tiên xuất khẩu 1.4 triệu tấn gạo, bước ra thế giới.",
    description: "Chỉ sau 3 năm Đổi Mới, từ một nước thiếu đói triền miên phải nhập khẩu lương thực và nhận viện trợ, Việt Nam đã có sự lột xác thần kỳ trong nông nghiệp nhờ cơ chế khoán sản phẩm (Khoán 10). Người nông dân làm chủ thửa ruộng của mình và tự do lưu thông hàng hóa.",
    story: "Cảng Sài Gòn những ngày cuối năm 1989 nhộn nhịp những con tàu chở gạo Việt đi muôn nơi. Đây là bằng chứng sống động nhất cho thấy sức mạnh của sự giải phóng sức sản xuất và thị trường tự do.",
    stats: [
      { value: "1.4 triệu tấn", label: "Xuất khẩu gạo", desc: "Việt Nam vươn lên thành nước xuất khẩu gạo lớn thứ 3 toàn cầu." },
      { value: "Khoán 10", label: "Cởi trói nông nghiệp", desc: "Giao quyền sử dụng đất lâu dài và tự chủ sản xuất cho nông dân." }
    ],
    highlights: [
      "Xóa bỏ hoàn toàn tem phiếu lương thực trên toàn quốc.",
      "Tự do hóa lưu thông lúa gạo, xóa bỏ các trạm kiểm soát nội địa.",
      "Kinh tế gia đình và hợp tác xã tự chủ nở rộ."
    ]
  },
  {
    year: "1995",
    title: "MỞ CỬA HỘI NHẬP VƠI THẾ GIỚI",
    subtitle: "Bình thường hóa quan hệ Việt - Mỹ & Gia nhập ASEAN",
    quote: "Phá bỏ hoàn toàn thế bao vây cấm vận. Việt Nam chính thức bình thường hóa quan hệ ngoại giao với Hoa Kỳ và gia nhập gia đình ASEAN.",
    description: "Tháng 7 năm 1995 ghi dấu ấn lịch sử kép trong chính sách đối ngoại. Việt Nam thiết lập quan hệ ngoại giao đầy đủ với Hoa Kỳ và trở thành thành viên thứ 7 của ASEAN, mở ra kỷ nguyên hội nhập sâu rộng với khu vực và toàn cầu.",
    story: "Cái bắt tay giữa Tổng thống Bill Clinton và các nhà lãnh đạo Việt Nam đã khép lại một chương đau thương của quá khứ, mở ra làn sóng đầu tư và thương mại chưa từng có trong lịch sử hiện đại.",
    stats: [
      { value: "Tháng 7", label: "Mốc lịch sử kép", desc: "Thiết lập quan hệ ngoại giao Việt - Mỹ và gia nhập ASEAN." },
      { value: "10 năm", label: "Phá thế cấm vận", desc: "Hoàn tất bình thường hóa quan hệ thương mại quốc tế." }
    ],
    highlights: [
      "Ký kết hiệp định thương mại song phương bước đầu.",
      "Hội nhập khu vực Đông Nam Á, thúc đẩy an ninh và hợp tác phát triển.",
      "Đón nhận các phái đoàn kinh tế, tài chính quốc tế quay trở lại."
    ]
  },
  {
    year: "2007",
    title: "BƯỚC VÀO SÂN CHƠI TOÀN CẦU",
    subtitle: "Trở thành thành viên chính thức thứ 150 của WTO",
    quote: "Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới WTO, khẳng định vị thế bình đẳng trên thị trường toàn cầu.",
    description: "Sau 11 năm đàm phán kiên trì, ngày 11/1/2007, Việt Nam chính thức bước vào sân chơi WTO. Cam kết mở cửa thị trường sâu rộng giúp Việt Nam trở thành thỏi nam châm thu hút các tập đoàn đa quốc gia khổng lồ như Samsung, Intel, Canon...",
    story: "Gia nhập WTO là bài kiểm tra lớn về năng lực cạnh tranh của doanh nghiệp Việt, đồng thời là động lực thúc đẩy cải cách thể chế kinh tế mạnh mẽ nhằm tương thích với luật chơi quốc tế.",
    stats: [
      { value: "Thứ 150", label: "Thành viên WTO", desc: "Việt Nam được công nhận là nền kinh tế hội nhập đầy đủ toàn cầu." },
      { value: "+100 tỷ USD", label: "Làn sóng FDI", desc: "Tổng vốn FDI đăng ký tăng vọt trong những năm sau gia nhập." }
    ],
    highlights: [
      "Cắt giảm thuế quan sâu rộng cho hàng hóa nhập khẩu.",
      "Samsung chính thức đầu tư nhà máy điện thoại đầu tiên tại Bắc Ninh năm 2008.",
      "Xuất khẩu dệt may, da giày, nông sản Việt Nam tăng trưởng vượt bậc."
    ]
  },
  {
    year: "2020",
    title: "KỶ NGUYÊN SỐ & MAKE IN VIETNAM",
    subtitle: "Chuyển đổi số quốc gia & Thách thức đại dịch",
    quote: "Phê duyệt chương trình Chuyển đổi số quốc gia. Việt Nam vươn lên thành một trong những nền kinh tế số phát triển nhanh nhất Đông Nam Á.",
    description: "Đại dịch COVID-19 bùng nổ đã thúc đẩy tiến trình số hóa tại Việt Nam diễn ra nhanh hơn gấp nhiều lần. Các giải pháp công nghệ 'Make in Vietnam' ra đời, thương mại điện tử, thanh toán không tiền mặt bùng nổ, đưa kinh tế số trở thành động lực phát triển mới.",
    story: "Từ những cửa hàng tạp hóa chuyển sang dùng QR Code đến các dịch vụ hành chính công trực tuyến, Việt Nam đã chứng kiến cuộc cách mạng số len lỏi vào từng ngõ ngách đời sống xã hội.",
    stats: [
      { value: "14 tỷ USD", label: "Quy mô kinh tế số", desc: "Đạt mức tăng trưởng ấn tượng bất chấp khó khăn của dịch bệnh toàn cầu." },
      { value: "Top 3", label: "Hệ sinh thái Startup", desc: "Việt Nam khẳng định vị thế trung tâm khởi nghiệp sáng tạo khu vực ASEAN." }
    ],
    highlights: [
      "Ra mắt chiến lược quốc gia phát triển doanh nghiệp công nghệ số Việt Nam.",
      "Phổ cập thanh toán số qua ngân hàng di động, ví điện tử phổ rộng.",
      "Khai sinh nhiều startup 'kỳ lân' công nghệ mới."
    ]
  },
  {
    year: "2045",
    title: "TẦM NHÌN VIỆT NAM HÙNG CƯỜNG",
    subtitle: "100 năm lập nước & Khát vọng thịnh vượng",
    quote: "Mục tiêu trở thành quốc gia phát triển, thu nhập cao, vững bước trên con đường công nghiệp hóa và Net-Zero bền vững.",
    description: "Hướng tới dấu mốc lịch sử 100 năm thành lập nước (1945 - 2045), Việt Nam đặt mục tiêu chiến lược trở thành nước phát triển, thu nhập cao. Nền kinh tế sẽ dựa hoàn toàn trên tri thức, đổi mới sáng tạo, chuyển đổi xanh bền vững và làm chủ công nghệ lõi.",
    story: "Một bức tranh tương lai nơi Việt Nam không chỉ là nơi lắp ráp mà là trung tâm phát minh công nghệ xanh, bán dẫn, sinh học hàng đầu khu vực, đồng hành cùng thế giới hướng tới phát thải ròng bằng không.",
    stats: [
      { value: "Net-Zero", label: "Cam kết khí hậu", desc: "Hiện thực hóa mục tiêu phát thải ròng bằng không bền vững." },
      { value: "Thu nhập cao", label: "Mục tiêu GDP", desc: "Gia nhập nhóm các nước phát triển thịnh vượng toàn diện." }
    ],
    highlights: [
      "Làm chủ chuỗi cung ứng công nghệ bán dẫn và AI cao cấp.",
      "Hệ thống siêu đô thị thông minh, tuần hoàn xanh hoàn chỉnh.",
      "Chỉ số phát triển con người (HDI) nằm trong nhóm dẫn đầu châu Á."
    ]
  }
];

interface MagazineContentProps {
  milestoneIndex: number;
  onNext: () => void;
  onBack: () => void;
  isLast: boolean;
  isVisible: boolean;
}

export default function MagazineContent({
  milestoneIndex,
  onNext,
  onBack,
  isLast,
  isVisible
}: MagazineContentProps) {
  const data = milestonesData[milestoneIndex];
  if (!data) return null;

  return (
    <div className={`magazine-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
      
      {/* Background Watermark Year */}
      <div className="watermark-year">{data.year}</div>

      <div className="magazine-layout">
        
        {/* Header Section */}
        <header className="magazine-header">
          <div className="magazine-year-tag">{data.year}</div>
          <h1 className="magazine-title">{data.title}</h1>
          <h3 className="magazine-subtitle">{data.subtitle}</h3>
          <div className="decorative-line"></div>
        </header>

        {/* Content Body Grid */}
        <div className="magazine-body">
          
          {/* Left Column: Story and Narrative */}
          <div className="magazine-col-left">
            <blockquote className="magazine-quote">
              <span className="quote-mark">“</span>
              {data.quote}
            </blockquote>
            <p className="magazine-description">{data.description}</p>
            <p className="magazine-story">{data.story}</p>
            
            <div className="magazine-highlights">
              <h4>Điểm nhấn sự kiện:</h4>
              <ul>
                {data.highlights.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Statistics Card & Graphics placeholder */}
          <div className="magazine-col-right">
            <div className="stats-card">
              <h4 className="stats-card-title">Dữ liệu & Số liệu</h4>
              <div className="stats-grid">
                {data.stats.map((stat, idx) => (
                  <div className="stat-item" key={idx}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-desc">{stat.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Historical Card */}
            <div className="vintage-visual-card">
              <div className="visual-glow-circle"></div>
              <div className="visual-card-content">
                <span className="visual-tag">Tài liệu lịch sử</span>
                <h5>Tạp chí Số Đa Phương Tiện</h5>
                <p>Khám phá tiến trình Đổi Mới kinh tế qua các thời kỳ.</p>
                <div className="visual-line-art">
                  <div className="line-art-dot"></div>
                  <div className="line-art-path"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation controls */}
        <footer className="magazine-footer">
          <button className="btn-back" onClick={onBack}>
            <span className="arrow">←</span> Quay lại Timeline
          </button>
          
          {!isLast && (
            <button className="btn-next-step" onClick={onNext}>
              Tiếp theo <span className="arrow">→</span>
            </button>
          )}
        </footer>

      </div>
    </div>
  );
}
