import { useState } from 'react';
import img86_1 from '../assets/86.1.jpg';
import img86_2 from '../assets/86.2.jpg';
import img95_1 from '../assets/95.1.jpg';
import img95_2 from '../assets/95.2.jpg';
import img95_3 from '../assets/95.3.jpg';
import img07_1 from '../assets/1784633975641_183231507058871077_g6777374503551308705_d14eb3522f27ce7caecf12b6f7d96563.jpg';
import img100 from '../assets/100.jpg';
import img101 from '../assets/101.jpg';
import img102 from '../assets/102.jpg';
import img145 from '../assets/145.jpg';
import img123 from '../assets/123.jpg';

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  caption: string;
}

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
  media: MediaItem[];
}

export const milestonesData: MilestoneData[] = [
  {
    year: "1975-1986",
    title: "ĐÊM TRƯỚC ĐỔI MỚI",
    subtitle: "Thực trạng khắc nghiệt & Những bước 'Phá rào' cam go",
    quote: "Giai đoạn này không chỉ có màu xám của gian khó, mà còn là bản anh hùng ca về sự dũng cảm: dũng cảm nhìn thẳng vào sự thật, dũng cảm từ bỏ những tư duy cũ kỹ để cứu lấy vận mệnh dân tộc. Đó chính là gốc rễ của tinh thần sáng tạo mà Gen Z cần kế thừa.",
    description: "Đất nước vận hành theo mô hình kế hoạch hóa tập trung, quan liêu, bao cấp, phân phối bằng tem phiếu và hiện vật, không áp dụng đầy đủ quy luật kinh tế làm triệt tiêu động lực sản xuất. Với xuất phát điểm thấp, cộng thêm hậu quả nặng nề của 30 năm chiến tranh, các cuộc chiến đấu bảo vệ biên giới Tây Nam và phía Bắc, cùng chính sách bao vây cấm vận của Mỹ, nền kinh tế rơi vào kiệt quệ.",
    story: "Giữa cơn bão khủng hoảng, những sáng kiến 'xé rào' từ thực tiễn đã tạo ra đốm lửa hy vọng. Bắt đầu từ việc cho phép 'sản xuất bung ra' (1979), tiếp nối là sự ra đời của Chỉ thị 100 về khoán sản phẩm trong nông nghiệp và Quyết định 25-CP, 26-CP trao quyền tự chủ tài chính cho các xí nghiệp quốc doanh (1981). Cuộc đấu tranh từ bỏ cơ chế cũ hội tụ tại 'điểm chạm' lịch sử tháng 8/1986, khi Đảng dũng cảm thừa nhận nền kinh tế nhiều thành phần, chuyển đổi cơ cấu sản xuất tập trung vào Ba chương trình kinh tế lớn, chính thức mở đường cho công cuộc Đổi mới.",
    stats: [
      { value: "774%", label: "Lạm phát kỷ lục", desc: "Lạm phát tăng vọt từ mức 300% (năm 1985) lên tới mức kỷ lục vào năm 1986, khiến đời sống nhân dân vô cùng lao đao." },
      { value: "17 triệu tấn", label: "Sản lượng lương thực", desc: "Nhờ 'Làn gió mới' từ Chỉ thị 100 (1/1981), sản lượng lương thực tăng vọt lên 17 triệu tấn (1981-1985)." },
      { value: "3 Chương trình", label: "Định hướng kinh tế", desc: "Quyết định tập trung vào Lương thực - thực phẩm, Hàng tiêu dùng và Hàng xuất khẩu." }
    ],
    highlights: [
      "Bước đột phá đầu tiên (8/1979): Hội nghị Trung ương 6 chủ trương xóa trạm kiểm soát để tự do trao đổi, cho phép 'sản xuất bung ra'.",
      "Bước đột phá thứ hai (6/1985): Hội nghị Trung ương 8 quyết định xóa bỏ cơ chế bao cấp, lấy 'Giá - Lương - Tiền' làm khâu đột phá.",
      "Điểm chạm Đổi mới (8/1986): Hội nghị Bộ Chính trị thừa nhận nền kinh tế nhiều thành phần là tất yếu khách quan."
    ],
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/fh-wkkbXsTE",
        title: "Tư liệu: Thời bao cấp & Đại hội VI (1986)",
        caption: "Thước phim lịch sử ghi lại bối cảnh thời kỳ bao cấp, tem phiếu và không khí sôi nổi tại Đại hội Đại biểu toàn quốc lần thứ VI."
      },
      {
        type: "image",
        url: img86_1,
        title: "Cửa hàng mậu dịch thời bao cấp",
        caption: "Hình ảnh người dân xếp hàng với sổ lương thực và tem phiếu mua nhu yếu phẩm tại cửa hàng mậu dịch quốc doanh."
      },
      {
        type: "image",
        url: img86_2,
        title: "Đốm lửa 'xé rào' trong sản xuất",
        caption: "Những mô hình khoán hộ thử nghiệm tự phát tại nông thôn miền Bắc trước khi Chỉ thị 100 ra đời."
      }
    ]
  },

  {
    year: "1988-1989",
    title: "HÁI QUẢ NGỌT ĐẦU TIÊN",
    subtitle: "Kỳ tích nông nghiệp & Sự cáo chung của chế độ tem phiếu",
    quote: "Giai đoạn xung quanh năm 1989 được coi là thời điểm 'hái quả ngọt' đầu tiên của công cuộc Đổi mới, khi những tư duy mới từ Đại hội VI (1986) bắt đầu đi vào cuộc sống và tạo ra những thay đổi mang tính bước ngoặt.",
    description: "Năm 1989 đánh dấu sự chấm dứt hoàn toàn của biểu tượng thời bao cấp khi chế độ phân phối tem phiếu bị xóa bỏ. Sự chuyển đổi từ kinh tế hiện vật sang kinh tế hàng hóa nhiều thành phần đã khơi thông nguồn lực, giúp Việt Nam giải quyết bài toán sinh tồn của dân tộc, kiềm chế lạm phát và phá vỡ thế bao vây cô lập.",
    story: "Một trong những thay đổi chấn động nhất là sự lột xác thần kỳ của nông nghiệp Việt Nam nhờ chính sách 'Khoán 10'. Từ một quốc gia thiếu đói triền miên, cuối năm 1988 còn phải đối mặt với khoản thiếu hụt 45 vạn tấn gạo, thì chỉ sau một năm (1989), chúng ta đã đủ ăn, có dự trữ và lần đầu tiên vươn lên xuất khẩu gạo ra thế giới.",
    stats: [
      { value: "15 năm", label: "Giao đất tự chủ", desc: "Nghị quyết 10 (Khoán 10) giao quyền tự chủ, giao đất ổn định cho nông dân 15 năm." },
      { value: "67,1%", label: "Kiềm chế lạm phát", desc: "Từ mức lạm phát phi mã 774,7% (1986), lạm phát đã giảm mạnh xuống còn 67,1%." },
      { value: "Xuất khẩu gạo", label: "Cú sốc tích cực", desc: "Năm 1988 thiếu 45 vạn tấn gạo, năm 1989 Việt Nam bắt đầu xuất khẩu gạo ra thế giới." }
    ],
    highlights: [
      "Xóa bỏ hoàn toàn chế độ phân phối theo tem phiếu (cuối 1988), chuyển sang cơ chế một giá.",
      "Rút toàn bộ quân tình nguyện khỏi Campuchia, thực hiện chính sách 'thêm bạn, bớt thù'.",
      "Hội nghị Trung ương 6 (3/1989) định hình 6 nguyên tắc Đổi mới."
    ],
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
        title: "Tư liệu: Chuyến gạo xuất khẩu đầu tiên 1989",
        caption: "Phim tư liệu ghi lại thời khắc Việt Nam xuất khẩu thành công đợt gạo đầu tiên ra thị trường quốc tế."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
        title: "Kỳ tích lúa gạo Khoán 10",
        caption: "Nông dân hân hoan thu hoạch lúa mùa bội thu sau khi được tự chủ trên thửa ruộng của mình."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1000&q=80",
        title: "Thị trường tự do xóa bỏ tem phiếu",
        caption: "Cảnh trao đổi hàng hóa tấp nập tại thị trường tự do khi hàng tiêu dùng ngập tràn kệ hàng năm 1989."
      }
    ]
  },

  {
    year: "1991-1995",
    title: "BẮT TAY MỞ CỬA HỘI NHẬP",
    subtitle: "Kỳ tích Ngoại giao & Kinh tế 'Cất cánh'",
    quote: "Giai đoạn năm 1995 được coi là 'năm bản lề' rực rỡ, đánh dấu thời điểm Việt Nam chính thức phá vỡ hoàn toàn thế bị bao vây, cấm vận và bước vào kỷ nguyên hội nhập toàn cầu.",
    description: "Năm 1995 chứng kiến những bước đột phá ngoại giao chưa từng có khi Việt Nam chính thức bình thường hóa quan hệ ngoại giao với Hoa Kỳ (11/7/1995) và gia nhập ASEAN (28/7/1995). Sự kiện này đã mở ra chương mới, gỡ bỏ rào cản lớn nhất đối với việc hội nhập kinh tế toàn cầu.",
    story: "Giai đoạn 1991-1995 là minh chứng sống động cho sức sống của nền kinh tế thị trường định hướng XHCN. Nền kinh tế đã cơ bản ra khỏi khủng hoảng, bắt đầu có tích lũy từ nội bộ, tạo tiền đề để Đại hội VIII (1996) quyết định chuyển đất nước sang thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa.",
    stats: [
      { value: "8,2%", label: "Tăng trưởng GDP", desc: "Tốc độ tăng trưởng GDP bình quân giai đoạn 1991-1995 đạt 8,2%, vượt kế hoạch đề ra." },
      { value: "12,7%", label: "Khuất phục lạm phát", desc: "Lạm phát giảm mạnh xuống chỉ còn 12,7% vào năm 1995, giúp kinh tế ổn định." },
      { value: "4 Nguy cơ", label: "Nhận diện thách thức", desc: "Hội nghị giữa nhiệm kỳ (1/1994) chỉ rõ 4 nguy cơ thách thức tiến trình phát triển." }
    ],
    highlights: [
      "Bình thường hóa quan hệ ngoại giao với Hoa Kỳ (11/7/1995) và chính thức gia nhập ASEAN (28/7/1995).",
      "Khẳng định chủ trương xây dựng Nhà nước pháp quyền của dân, do dân, vì dân (1/1994).",
      "Đại hội VIII (1996) khẳng định đất nước bước vào thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa."
    ],
    media: [
      {
        type: "image",
        url: img95_1,
        title: "Bình thường hóa quan hệ Việt - Mỹ",
        caption: "Lễ tuyên bố thiết lập quan hệ ngoại giao đầy đủ giữa Việt Nam và Hoa Kỳ ngày 11/7/1995."
      },
      {
        type: "image",
        url: img95_2,
        title: "Gia nhập ASEAN",
        caption: "Lễ thượng kỳ lá cờ đỏ sao vàng, chính thức kết nạp Việt Nam làm thành viên thứ 7 của ASEAN (28/7/1995)."
      },
      {
        type: "image",
        url: img95_3,
        title: "Ký kết Hiệp định khung Việt Nam - EU",
        caption: "Việt Nam và Liên minh châu Âu ký kết Hiệp định hợp tác khung năm 1995, mở ra chương mới trong quan hệ hai bên."
      }
    ]
  },

  {
    year: "2006-2008",
    title: "VƯƠN MÌNH RA BIỂN LỚN",
    subtitle: "Gia nhập WTO thế giới & Khát vọng thịnh vượng",
    quote: "Năm 2007 không chỉ là hội nhập kinh tế, mà là thời điểm người Việt tự tin định vị mình trên bản đồ thịnh vượng của nhân loại, khẳng định vị thế một quốc gia đang trỗi dậy mạnh mẽ.",
    description: "Tháng 1-2007, sau hơn 10 năm đàm phán cam go, Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO), mở rộng quan hệ giao thương với 230 quốc gia và vùng lãnh thổ. Năm 2008 ghi dấu nội lực quốc gia khi Việt Nam chính thức thoát khỏi nhóm nước nghèo.",
    story: "Ngay trong năm 2007, nền kinh tế nhảy vọt: GDP tăng 8,48%, kim ngạch xuất khẩu tăng 21,5%, FDI đạt kỷ lục 20,3 tỷ USD, và tổ chức thành công Hội nghị APEC 14 tại Hà Nội.",
    stats: [
      { value: "230", label: "Quốc gia & Vùng lãnh thổ", desc: "Gia nhập WTO giúp Việt Nam mở rộng mạng lưới giao thương toàn cầu." },
      { value: "53-55%", label: "Mục tiêu GDP biển", desc: "Nghị quyết 09 về Chiến lược biển Việt Nam đến năm 2020." },
      { value: "2008", label: "Thoát khỏi nước nghèo", desc: "Thu nhập bình quân vượt 1.047 USD, chính thức gia nhập nhóm nước thu nhập trung bình." }
    ],
    highlights: [
      "Hội nghị Trung ương 4 khóa X (2/2007): Ban hành chủ trương hội nhập WTO và Nghị quyết 09 về Chiến lược biển.",
      "Năm 2007: Trở thành thành viên thứ 150 của WTO, đón dòng vốn FDI kỷ lục và tổ chức Hội nghị APEC 14.",
      "Mở rộng địa giới Thủ đô Hà Nội năm 2008 và ban hành các nghị quyết về giai cấp công nhân và đội ngũ trí thức."
    ],
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/b7TM3sXk1_8?start=63",
        title: "Phim tư liệu: Lễ gia nhập Tổ chức Thương mại Thế giới WTO (2007)",
        caption: "Thước phim lịch sử ghi lại thời khắc Việt Nam chính thức ký kết và trao văn kiện gia nhập WTO tại Geneva."
      },
      {
        type: "image",
        url: img07_1,
        title: "Lễ trao văn kiện gia nhập WTO tại Geneva",
        caption: "Tổng Giám đốc WTO Pascal Lamy trao Nghị định thư gia nhập WTO cho Bộ trưởng Thương mại Trương Đình Tuyển và phái đoàn Việt Nam (Hình ảnh TTXVN)."
      }
    ]
  },

  {
    year: "2011-2020",
    title: "TẦM VÓC MỚI TRONG KỶ NGUYÊN SỐ",
    subtitle: "Chuyển đổi mô hình tăng trưởng & Khẳng định vị thế toàn cầu",
    quote: "Nếu thời bao cấp là cuộc chiến để đủ no, thì giai đoạn 2020 là cuộc dấn thân để vươn tầm trí tuệ. Việt Nam chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay.",
    description: "Năm 2020 đánh dấu sự kết thúc thành công Chiến lược phát triển kinh tế - xã hội 10 năm (2011-2020). Việt Nam đã chuyển đổi mô hình tăng trưởng dựa trên năng suất, ứng dụng mạnh mẽ khoa học - công nghệ và kinh tế tri thức.",
    story: "Đỉnh cao ngoại giao là việc Việt Nam được bầu làm Ủy viên không thường trực Hội đồng Bảo an Liên hợp quốc nhiệm kỳ 2020-2021 với số phiếu kỷ lục 192/193. Đồng thời, Việt Nam trở thành điểm sáng thế giới về hoàn thành Mục tiêu phát triển Thiên niên kỷ.",
    stats: [
      { value: "2.779 USD", label: "Thu nhập bình quân", desc: "Năm 2020, thu nhập bình quân đầu người đạt 2.779 USD." },
      { value: "< 3%", label: "Kỳ tích giảm nghèo", desc: "Tỷ lệ hộ nghèo đa chiều giảm xuống dưới 3%, bảo hiểm y tế đạt trên 90%." },
      { value: "192/193", label: "Phiếu bầu tại LHQ", desc: "Tín nhiệm tuyệt đối của cộng đồng quốc tế bầu Việt Nam vào HĐBA Liên Hợp Quốc." }
    ],
    highlights: [
      "Đại hội XII (2016) đẩy mạnh cơ cấu lại nền kinh tế gắn với hội nhập quốc tế toàn diện.",
      "Hoàn thành xuất sắc Mục tiêu phát triển Thiên niên kỷ của Liên Hợp Quốc.",
      "Quyết liệt đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng, lãng phí."
    ],
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/xMg-rN3-HVA",
        title: "Tư liệu: Trúng cử HĐBA Liên Hợp Quốc 192/193 phiếu",
        caption: "Khoảnh khắc đại sảnh Đại hội đồng LHQ vang dội tiếng vỗ tay chúc mừng chiến thắng kỷ lục của Việt Nam."
      },
      {
        type: "image",
        url: img100,
        title: "Vị thế đối ngoại (Hội đồng Bảo an LHQ)",
        caption: "Phòng họp Hội đồng Bảo an Liên Hợp Quốc (Nơi Việt Nam điều hành với tư cách Chủ tịch)."
      },
      {
        type: "image",
        url: img101,
        title: "Kinh tế tri thức & Chuyển đổi số",
        caption: "Hạ tầng đô thị thông minh và hiện đại tại Việt Nam."
      }
    ]
  },

  {
    year: "2026",
    title: "HÒA NHẬP TOÀN DIỆN & TIÊU CHUẨN QUỐC TẾ",
    subtitle: "Hiện thực hóa 'Khát vọng cường quốc' kỷ niệm 40 năm Đổi mới",
    quote: "Mốc năm 2026 không chỉ đơn thuần là kỷ niệm 40 năm Đổi mới mà còn là thời điểm Việt Nam chuyển mình mạnh mẽ từ 'hội nhập cơ bản' sang 'hòa nhập toàn diện và tiêu chuẩn hóa quốc tế'.",
    description: "Năm 2026 là thời điểm Việt Nam áp dụng hàng loạt tiêu chuẩn toàn cầu về kinh tế, giáo dục và quản trị. Từ việc bắt buộc áp dụng IFRS, ESG trong kinh tế đến cuộc tái cấu trúc sâu sắc về tư duy an sinh xã hội.",
    story: "Việc áp dụng chuẩn mực báo cáo tài chính quốc tế (IFRS) và ESG trở thành 'giấy thông hành' để nâng hạng thị trường chứng khoán. Đồng thời, Luật Bảo hiểm xã hội mới tạo hệ thống đa tầng hiện đại và ứng dụng phổ cập VNeID.",
    stats: [
      { value: "15 năm", label: "Đóng BHXH tối thiểu", desc: "Luật BHXH giảm thời gian đóng tối thiểu từ 20 năm xuống 15 năm." },
      { value: "IFRS & ESG", label: "Tiêu chuẩn toàn cầu", desc: "Bắt buộc áp dụng IFRS và ESG hướng tới nền kinh tế xanh." },
      { value: "60 Tiêu chí", label: "Kiểm định đại học", desc: "Kiểm định thực chất các cơ sở đại học theo 15 tiêu chuẩn và 60 tiêu chí mới." }
    ],
    highlights: [
      "Hiện thực hóa 'Khát vọng cường quốc': Áp dụng IFRS và ESG để nâng cao năng lực cạnh tranh.",
      "Tái cấu trúc sâu sắc an sinh xã hội: Luật BHXH mới có hiệu lực bảo đảm thu nhập cho người lao động.",
      "Quản trị quốc gia hiện đại: Chuyển đổi số đồng bộ qua VNeID và định hình bản sắc Gen Z."
    ],
    media: [
      {
        type: "image",
        url: img102,
        title: "Kinh tế tiêu chuẩn toàn cầu & Khát vọng",
        caption: "Tòa nhà Landmark 81 (Biểu tượng cho sức mạnh kinh tế và khát vọng vươn cao của Việt Nam thời kỳ mới)."
      },
      {
        type: "image",
        url: img145,
        title: "Hệ sinh thái số Gen Z",
        caption: "Thế hệ trẻ làm chủ công nghệ AI và nền tảng số trong kỷ nguyên quản trị 4.0."
      }
    ]
  },

  {
    year: "1986-2026",
    title: "TỔNG KẾT 40 NĂM ĐỔI MỚI",
    subtitle: "Hành trình từ gian khó đến cơ đồ rực rỡ",
    quote: "Kỷ niệm 40 năm công cuộc Đổi mới, Việt Nam nhìn lại một 'pho lịch sử bằng vàng' với những bước nhảy vọt thần kỳ, khẳng định bản lĩnh của một dân tộc không bao giờ khuất phục trước gian khó. Đất nước ta chưa bao giờ có được cơ đồ và vị thế như ngày nay.",
    description: "Từ xuất phát điểm là một nền kinh tế rơi vào khủng hoảng trầm trọng năm 1986, Đảng và nhân dân ta đã dũng cảm Đổi mới toàn diện, giải phóng sức sản xuất to lớn và chuyển đổi thành công sang nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
    story: "Hành trình 40 năm là chuỗi kỳ tích: từ kỳ tích gạo 1989, gia nhập WTO 2007, đến ủy viên HĐBA LHQ và tiêu chuẩn hóa 2026. Sứ mệnh của thế hệ Gen Z hôm nay là kế thừa tinh thần tự lực tự cường để đưa Việt Nam trở thành quốc gia phát triển vào năm 2045.",
    stats: [
      { value: "40 Năm", label: "Hành trình Đổi mới", desc: "Chuyển mình ngoạn mục từ thiếu đói thành nền kinh tế năng động hội nhập sâu rộng." },
      { value: "192/193", label: "Phiếu bầu kỷ lục", desc: "Sự tín nhiệm tuyệt đối của quốc tế với vị thế chính trị Việt Nam." },
      { value: "2045", label: "Tầm nhìn phát triển", desc: "Đưa Việt Nam trở thành quốc gia phát triển, thu nhập cao vào dịp 100 năm thành lập nước." }
    ],
    highlights: [
      "1986 - Dũng cảm nhìn vào sự thật: Xóa bao cấp, cứu đất nước khỏi khủng hoảng trầm trọng.",
      "Kỳ tích kinh tế & Ngoại giao: Từ xuất khẩu gạo, gia nhập WTO đến thiết lập quan hệ đối tác toàn diện với các cường quốc.",
      "Tiêu chuẩn hóa 2026 & Tầm nhìn 2045: Chuẩn hóa IFRS, ESG, giáo dục và định hình sức mạnh thế hệ trẻ."
    ],
    media: [
      {
        type: "video",
        url: "https://www.youtube.com/embed/KyD4Lbs6YXY",
        title: "Phim tư liệu đặc biệt: 40 Năm Đổi Mới - Hành trình khát vọng",
        caption: "Phim tư liệu toàn cảnh nhìn lại 40 năm tự lực tự cường và khát vọng bứt phá vươn mình của dân tộc."
      },
      {
        type: "image",
        url: img123,
        title: "Việt Nam rực rỡ sau 40 năm Đổi Mới",
        caption: "Toàn cảnh đô thị hiện đại và sức sống phát triển sôi động của đất nước sau 4 thập kỷ."
      }
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
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  if (!data) return null;

  const currentMedia = data.media && data.media[activeMediaIndex] ? data.media[activeMediaIndex] : data.media?.[0];

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

          {/* Right Column: Multimedia Showcase & Statistics Card */}
          <div className="magazine-col-right">

            {/* Multimedia Showcase Box (Videos & Images) */}
            {data.media && data.media.length > 0 && (
              <div className="multimedia-card">
                <div className="multimedia-header">
                  <div className="multimedia-title">
                    <span>🎬</span> Tư liệu Đa Phương Tiện
                  </div>
                  <div className="media-type-tabs">
                    {data.media.map((item, idx) => {
                      const imgIdx = item.type === 'image' 
                        ? data.media.filter((m, i) => m.type === 'image' && i <= idx).length 
                        : 0;
                      return (
                        <button
                          key={idx}
                          className={`media-tab-btn ${activeMediaIndex === idx ? 'active' : ''}`}
                          onClick={() => setActiveMediaIndex(idx)}
                        >
                          {item.type === 'video' ? '🎬 Video' : `🖼️ Ảnh ${imgIdx}`}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {currentMedia && (
                  <div className="media-content-display">
                    {currentMedia.type === 'video' ? (
                      <div className="media-video-frame">
                        <iframe
                          src={currentMedia.url}
                          title={currentMedia.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div
                        className="media-image-frame"
                        onClick={() => setLightboxOpen(true)}
                        title="Click để phóng to ảnh"
                      >
                        <img src={currentMedia.url} alt={currentMedia.title} />
                        <div className="media-zoom-overlay">
                          <span>🔍 Phóng to ảnh tư liệu</span>
                        </div>
                      </div>
                    )}

                    <div className="media-caption-box">
                      <div className="media-caption-title">{currentMedia.title}</div>
                      <div className="media-caption-text">{currentMedia.caption}</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Statistics Card */}
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

      {/* Lightbox Modal for Full-Screen Image Viewing */}
      {lightboxOpen && currentMedia && currentMedia.type === 'image' && (
        <div className="lightbox-modal" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setLightboxOpen(false)} aria-label="Đóng">
              &times;
            </button>
            <div className="lightbox-body">
              <div className="lightbox-media-container">
                <img src={currentMedia.url} alt={currentMedia.title} />
              </div>
              <div className="lightbox-info">
                <div className="lightbox-year-badge">{data.year}</div>
                <h3 className="lightbox-title">{currentMedia.title}</h3>
                <p className="lightbox-caption">{currentMedia.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
