
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
    year: "1975-1986",
    title: "ĐÊM TRƯỚC ĐỔI MỚI",
    subtitle: "Thực trạng khắc nghiệt & Những bước 'Phá rào' cam go",
    quote: "Giai đoạn này không chỉ có màu xám của gian khó, mà còn là bản anh hùng ca về sự dũng cảm: dũng cảm nhìn thẳng vào sự thật, dũng cảm từ bỏ những tư duy cũ kỹ để cứu lấy vận mệnh dân tộc. Đó chính là gốc rễ của tinh thần sáng tạo mà Gen Z cần kế thừa.",
    description: "Đất nước vận hành theo mô hình kế hoạch hóa tập trung, quan liêu, bao cấp, phân phối bằng tem phiếu và hiện vật, không áp dụng đầy đủ quy luật kinh tế làm triệt tiêu động lực sản xuất. Với xuất phát điểm thấp, cộng thêm hậu quả nặng nề của 30 năm chiến tranh, các cuộc chiến đấu bảo vệ biên giới Tây Nam và phía Bắc, cùng chính sách bao vây cấm vận của Mỹ, nền kinh tế rơi vào kiệt quệ. Sản xuất đình đốn, lạm phát tăng vọt, không có tích lũy, đời sống nhân dân vô cùng khó khăn.",
    story: "Giữa cơn bão khủng hoảng, những sáng kiến 'xé rào' từ thực tiễn đã tạo ra đốm lửa hy vọng. Bắt đầu từ việc cho phép 'sản xuất bung ra' (1979), tiếp nối là sự ra đời của Chỉ thị 100 về khoán sản phẩm trong nông nghiệp và Quyết định 25-CP, 26-CP trao quyền tự chủ tài chính cho các xí nghiệp quốc doanh (1981). Cuộc đấu tranh từ bỏ cơ chế cũ hội tụ tại 'điểm chạm' lịch sử tháng 8/1986, khi Đảng dũng cảm thừa nhận nền kinh tế nhiều thành phần, chuyển đổi cơ cấu sản xuất tập trung vào Ba chương trình kinh tế lớn, chính thức mở đường cho công cuộc Đổi mới.",
    stats: [
      { value: "774%", label: "Lạm phát kỷ lục", desc: "Lạm phát tăng vọt từ mức 300% (năm 1985) lên tới mức kỷ lục vào năm 1986, khiến đời sống cán bộ, nhân dân và lực lượng vũ trang lao đao." },
      { value: "17 triệu tấn", label: "Sản lượng lương thực", desc: "Nhờ 'Làn gió mới' từ Chỉ thị 100 (1/1981), sản lượng lương thực tăng vọt từ 13,4 triệu tấn (1976-1980) lên 17 triệu tấn (1981-1985)." },
      { value: "3 Chương trình", label: "Định hướng kinh tế trọng điểm", desc: "Quyết định tập trung vào Lương thực - thực phẩm, Hàng tiêu dùng và Hàng xuất khẩu, từ bỏ việc đầu tư nóng vội vào công nghiệp nặng." }
    ],
    highlights: [
      "Bước đột phá đầu tiên (8/1979): Hội nghị Trung ương 6 chủ trương khắc phục sai lầm, xóa trạm kiểm soát để người dân tự do trao đổi, cho phép 'sản xuất bung ra'.",
      "Bước đột phá thứ hai (6/1985): Hội nghị Trung ương 8 quyết định xóa bỏ cơ chế bao cấp, lấy 'Giá - Lương - Tiền' làm khâu đột phá chuyển sang hạch toán kinh doanh XHCN.",
      "Điểm chạm Đổi mới (8/1986): Hội nghị Bộ Chính trị thừa nhận nền kinh tế nhiều thành phần là tất yếu khách quan, phân biệt rõ quản lý hành chính nhà nước với quản lý kinh doanh."
    ]
  },

  {
    year: "1988-1989",
    title: "HÁI QUẢ NGỌT ĐẦU TIÊN",
    subtitle: "Kỳ tích nông nghiệp & Sự cáo chung của chế độ tem phiếu",
    quote: "Giai đoạn xung quanh năm 1989 được coi là thời điểm 'hái quả ngọt' đầu tiên của công cuộc Đổi mới, khi những tư duy mới từ Đại hội VI (1986) bắt đầu đi vào cuộc sống và tạo ra những thay đổi mang tính bước ngoặt.",
    description: "Năm 1989 đánh dấu sự chấm dứt hoàn toàn của biểu tượng thời bao cấp khi chế độ phân phối tem phiếu bị xóa bỏ. Sự chuyển đổi từ kinh tế hiện vật sang kinh tế hàng hóa nhiều thành phần đã khơi thông nguồn lực, giúp Việt Nam giải quyết bài toán sinh tồn của dân tộc, kiềm chế thành công 'con ngựa bất kham' lạm phát và phá vỡ thế bao vây, cô lập về đối ngoại.",
    story: "Một trong những thay đổi chấn động nhất là sự lột xác thần kỳ của nông nghiệp Việt Nam nhờ chính sách 'Khoán 10'. Từ một quốc gia thiếu đói triền miên, cuối năm 1988 còn phải đối mặt với khoản thiếu hụt 45 vạn tấn gạo, thì chỉ sau một năm (1989), chúng ta đã đủ ăn, có dự trữ và lần đầu tiên vươn lên xuất khẩu gạo ra thế giới. Song song đó, tháng 9-1989, Việt Nam tuyên bố rút toàn bộ quân tình nguyện tại Campuchia về nước, hoàn thành nghĩa vụ quốc tế và tạo điều kiện thuận lợi bình thường hóa quan hệ quốc tế, mở ra cánh cửa hội nhập. Giữa bối cảnh khối XHCN rung chuyển, Hội nghị Trung ương 6 (3/1989) cũng đã kịp thời định hình 6 nguyên tắc 'vàng' để kiên định con đường Đổi mới.",
    stats: [
      { 
        value: "15 năm", 
        label: "Giao đất tự chủ", 
        desc: "Tháng 4-1988, Bộ Chính trị ban hành Nghị quyết 10 (Khoán 10), giao quyền tự chủ, giao đất ổn định cho nông dân 15 năm và đảm bảo thu nhập từ 40% sản lượng khoán trở lên." 
      },
      { 
        value: "67,1%", 
        label: "Kiềm chế lạm phát", 
        desc: "Từ mức lạm phát phi mã lên đến 774,7% (1986), thông qua giảm bội chi ngân sách và thắt chặt tiền tệ, lạm phát đã giảm mạnh xuống còn 67,1% vào năm 1991." 
      },
      { 
        value: "Xuất khẩu gạo", 
        label: "Cú sốc tích cực", 
        desc: "Năm 1988 còn thiếu 45 vạn tấn gạo, nhưng đến năm 1989 Việt Nam đã tạo nên kỳ tích khi tự túc đủ lương thực và bắt đầu xuất khẩu gạo ra thế giới." 
      }
    ],
    highlights: [
      "Xóa bỏ hoàn toàn chế độ phân phối theo tem phiếu (cuối 1988), chuyển sang cơ chế một giá, chấm dứt cảnh xếp hàng mua nhu yếu phẩm và tình trạng bao cấp bù lỗ.",
      "Rút toàn bộ quân tình nguyện khỏi Campuchia, thực hiện chính sách 'thêm bạn, bớt thù' nhằm ưu tiên môi trường hòa bình để phát triển kinh tế.",
      "Hội nghị Trung ương 6 (3/1989) định hình 6 nguyên tắc Đổi mới và lần đầu tiên chính thức sử dụng khái niệm 'hệ thống chính trị'."
    ]
  },

  {
    year: "1991-1995",
    title: "BẮT TAY MỞ CỬA HỘI NHẬP",
    subtitle: "Kỳ tích Ngoại giao & Kinh tế 'Cất cánh'",
    quote: "Giai đoạn năm 1995 được coi là 'năm bản lề' rực rỡ, đánh dấu thời điểm Việt Nam chính thức phá vỡ hoàn toàn thế bị bao vây, cấm vận và bước vào kỷ nguyên hội nhập toàn cầu với những thành tựu kinh tế kinh ngạc.",
    description: "Năm 1995 chứng kiến những bước đột phá ngoại giao chưa từng có khi Việt Nam chính thức bình thường hóa quan hệ ngoại giao với Hoa Kỳ (11/7/1995) và gia nhập ASEAN (28/7/1995). Sự kiện này đã mở ra chương mới, gỡ bỏ rào cản lớn nhất đối với việc hội nhập kinh tế toàn cầu, nâng tầm vị thế đất nước trên trường quốc tế.",
    story: "Giai đoạn 1991-1995 là minh chứng sống động cho sức sống của nền kinh tế thị trường định hướng xã hội chủ nghĩa. Nền kinh tế đã cơ bản ra khỏi khủng hoảng, bắt đầu có tích lũy từ nội bộ, tạo tiền đề để Đại hội VIII (1996) quyết định chuyển đất nước sang thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa. Bên cạnh đó, Hội nghị giữa nhiệm kỳ (1/1994) đánh dấu bước tiến về tư duy chính trị khi lần đầu tiên khẳng định chủ trương xây dựng Nhà nước pháp quyền của nhân dân, do nhân dân, vì nhân dân. Dù đạt nhiều thành tựu, Đảng vẫn bản lĩnh và tỉnh táo nhận diện 'bốn nguy cơ' để cảnh báo cho tiến trình phát triển tương lai.",
    stats: [
      { value: "8,2%", label: "Tăng trưởng GDP", desc: "Tốc độ tăng trưởng GDP bình quân giai đoạn 1991-1995 đạt 8,2%, vượt xa mức kế hoạch đề ra là 5,5 - 6,5%." },
      { value: "12,7%", label: "Khuất phục lạm phát", desc: "Lạm phát giảm mạnh từ mức 67,1% (năm 1991) xuống chỉ còn 12,7% vào năm 1995, giúp nền kinh tế ổn định và có tích lũy." },
      { value: "4 Nguy cơ", label: "Nhận diện thách thức", desc: "Hội nghị giữa nhiệm kỳ (1/1994) đã chỉ rõ 4 nguy cơ: tụt hậu kinh tế, chệch hướng XHCN, tham nhũng/quan liêu và 'diễn biến hòa bình'." }
    ],
    highlights: [
      "Bình thường hóa quan hệ ngoại giao với Hoa Kỳ (11/7/1995) và chính thức trở thành thành viên của ASEAN (28/7/1995).",
      "Lần đầu tiên khẳng định chủ trương xây dựng Nhà nước pháp quyền của dân, do dân, vì dân tại Hội nghị đại biểu giữa nhiệm kỳ (1/1994).",
      "Đại hội VIII (1996) khẳng định đất nước bước vào thời kỳ mới: Đẩy mạnh công nghiệp hóa, hiện đại hóa."
    ]
  },

  {
    year: "2006-2008",
    title: "VƯƠN MÌNH RA BIỂN LỚN",
    subtitle: "Gia nhập WTO thế giới & Khát vọng thịnh vượng",
    quote: "Năm 2007 không chỉ là hội nhập kinh tế, mà là thời điểm người Việt tự tin định vị mình trên bản đồ thịnh vượng của nhân loại, khẳng định vị thế một quốc gia đang trỗi dậy mạnh mẽ.",
    description: "Giai đoạn 2007-2008 là một cột mốc lịch sử khi Việt Nam thực sự 'vươn mình ra biển lớn'. Tháng 1-2007, sau hơn 10 năm đàm phán, Việt Nam chính thức trở thành thành viên thứ 150 của Tổ chức Thương mại Thế giới (WTO), mở rộng quan hệ giao thương với 230 quốc gia và vùng lãnh thổ. Cùng với đó, Đảng ban hành Chiến lược biển Việt Nam, định hướng đưa nước ta trở thành quốc gia mạnh về biển, làm giàu từ đại dương. Năm 2008 ghi dấu nội lực quốc gia khi Việt Nam chính thức thoát khỏi nhóm nước nghèo, gia nhập nhóm các quốc gia có thu nhập trung bình.",
    story: "Chuyển từ 'hội nhập' sang 'hòa nhập' toàn cầu, Hội nghị Trung ương 4 khóa X (2/2007) đã ban hành chủ trương lớn để nền kinh tế phát triển nhanh và bền vững khi Việt Nam là thành viên của WTO. Ngay trong năm 2007, nền kinh tế nhảy vọt: GDP tăng 8,48%, kim ngạch xuất khẩu tăng 21,5%, FDI đạt kỷ lục 20,3 tỷ USD, và tổ chức thành công Hội nghị APEC 14. Cũng tại Hội nghị Trung ương 4, Nghị quyết 09 về Chiến lược biển Việt Nam đến năm 2020 được ban hành, xác định biển là không gian sinh tồn và cửa ngõ giao lưu quốc tế. Bất chấp khủng hoảng tài chính thế giới (2008), Việt Nam vẫn duy trì tốc độ tăng trưởng GDP bình quân đạt 7%. Đồng thời, việc mở rộng địa giới Thủ đô Hà Nội (2008) cùng các nghị quyết về xây dựng giai cấp công nhân và đội ngũ trí thức đã củng cố vững chắc nội lực quốc gia.",
    stats: [
      { 
        value: "230", 
        label: "Quốc gia & Vùng lãnh thổ", 
        desc: "Việc gia nhập WTO giúp Việt Nam mở rộng mạng lưới giao thương toàn cầu, với hai đối tác lớn nhất là Hoa Kỳ và Trung Quốc." 
      },
      { 
        value: "53-55%", 
        label: "Mục tiêu GDP kinh tế biển", 
        desc: "Chiến lược biển phấn đấu đến năm 2020, kinh tế biển đóng góp khoảng 53 - 55% GDP và 55 - 60% kim ngạch xuất khẩu của cả nước." 
      },
      { 
        value: "2008", 
        label: "Thoát khỏi nước nghèo", 
        desc: "Thu nhập bình quân đầu người đạt 1.047 USD, đưa Việt Nam chính thức ra khỏi tình trạng kém phát triển để gia nhập nhóm nước có thu nhập trung bình." 
      }
    ],
    highlights: [
      "Hội nghị Trung ương 4 khóa X (2/2007): Ban hành chủ trương hội nhập WTO và Nghị quyết 09 về Chiến lược biển Việt Nam đến 2020.",
      "Năm 2007: Trở thành thành viên thứ 150 của WTO, đón dòng vốn FDI kỷ lục và tổ chức thành công Hội nghị APEC 14.",
      "Hội nghị Trung ương 6 & 7 khóa X (2008): Ban hành nghị quyết xây dựng giai cấp công nhân và đội ngũ trí thức, coi đây là 'nguyên khí quốc gia'."
    ]
  },

  {
    year: "2011-2020",
    title: "TẦM VÓC MỚI TRONG KỶ NGUYÊN SỐ",
    subtitle: "Chuyển đổi mô hình tăng trưởng & Khẳng định vị thế toàn cầu",
    quote: "Nếu thời bao cấp là cuộc chiến để đủ no, thì giai đoạn 2020 là cuộc dấn thân để vươn tầm trí tuệ. Việt Nam chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay.",
    description: "Năm 2020 đánh dấu sự kết thúc thành công Chiến lược phát triển kinh tế - xã hội 10 năm (2011-2020). Việt Nam đã có sự thay đổi về chất trong nội lực kinh tế, không còn dựa hoàn toàn vào khai thác tài nguyên và lao động giá rẻ, mà chuyển đổi mô hình tăng trưởng dựa trên năng suất, ứng dụng mạnh mẽ khoa học - công nghệ và kinh tế tri thức. Đồng thời, hệ thống chính trị được củng cố, kiên quyết đấu tranh phòng, chống tham nhũng, lãng phí để làm trong sạch đội ngũ cán bộ.",
    story: "Trong vị thế đối ngoại, Việt Nam đã chuyển biến sâu sắc từ 'phá thế bao vây' sang 'chủ động hội nhập toàn diện', tích cực tham gia xây dựng nguyên tắc, chuẩn mực quốc tế trong các thể chế đa phương. Đỉnh cao là việc Việt Nam được bầu làm Ủy viên không thường trực Hội đồng Bảo an Liên hợp quốc nhiệm kỳ 2020-2021 với số phiếu 192/193. Về xã hội, Việt Nam trở thành điểm sáng của thế giới khi hoàn thành các mục tiêu phát triển Thiên niên kỷ của Liên Hợp Quốc, thiết lập mạng lưới an sinh xã hội vững chắc với phương châm 'Không để ai bị bỏ lại phía sau'.",
    stats: [
      { 
        value: "2.779 USD", 
        label: "Thu nhập bình quân", 
        desc: "Năm 2020, thu nhập bình quân đầu người đạt 2.779 USD, phản ánh sự cải thiện rõ rệt về chất lượng tăng trưởng và mức sống nhân dân." 
      },
      { 
        value: "< 3%", 
        label: "Kỳ tích giảm nghèo", 
        desc: "Tỷ lệ hộ nghèo đa chiều giảm xuống còn dưới 3%, đồng thời tỷ lệ bao phủ bảo hiểm y tế đạt trên 90%." 
      },
      { 
        value: "192/193", 
        label: "Phiếu bầu tại LHQ", 
        desc: "Ngày 7-6-2019, cộng đồng quốc tế tín nhiệm bầu Việt Nam làm Ủy viên không thường trực Hội đồng Bảo an LHQ nhiệm kỳ 2020-2021." 
      }
    ],
    highlights: [
      "Đại hội XII (2016) đẩy mạnh cơ cấu lại nền kinh tế, nâng cao năng suất lao động và sức cạnh tranh, gắn với hội nhập quốc tế toàn diện.",
      "Hoàn thành xuất sắc Mục tiêu phát triển Thiên niên kỷ của Liên Hợp Quốc, đưa các chính sách xã hội, an sinh, dân tộc, tôn giáo phát triển mạnh mẽ.",
      "Quyết liệt đẩy mạnh cuộc đấu tranh phòng, chống tham nhũng, lãng phí nhằm củng cố Nhà nước pháp quyền của dân, do dân, vì dân."
    ]
  },

  {
    year: "2026",
    title: "HÒA NHẬP TOÀN DIỆN & TIÊU CHUẨN QUỐC TẾ",
    subtitle: "Hiện thực hóa 'Khát vọng cường quốc' kỷ niệm 40 năm Đổi mới",
    quote: "Mốc năm 2026 không chỉ đơn thuần là kỷ niệm 40 năm Đổi mới mà còn là thời điểm Việt Nam chuyển mình mạnh mẽ từ 'hội nhập cơ bản' sang 'hòa nhập toàn diện và tiêu chuẩn hóa quốc tế'.",
    description: "Đánh dấu bước đột phá về 'chất' để vươn tầm thế giới, năm 2026 là thời điểm Việt Nam áp dụng hàng loạt tiêu chuẩn toàn cầu về kinh tế, giáo dục và quản trị. Từ việc bắt buộc áp dụng IFRS, ESG trong kinh tế đến cuộc tái cấu trúc sâu sắc về tư duy an sinh xã hội, đất nước đang thiết lập một hệ sinh thái phát triển bền vững và hiện đại.",
    story: "Nếu năm 1986 là bước đột phá 'phá rào' để cứu đói, thì năm 2026 là bước đột phá để nâng tầm vị thế. Việc áp dụng chuẩn mực báo cáo tài chính quốc tế (IFRS) và ESG trở thành 'giấy thông hành' để thị trường chứng khoán Việt Nam nâng hạng, đón dòng vốn tỷ USD. Song song đó, Luật Bảo hiểm xã hội mới (hiệu lực 2026) tạo ra cuộc tái cấu trúc sâu sắc về an sinh, thay thế tư duy 'bao cấp' bằng hệ thống đa tầng, giảm rào cản hưởng lương hưu xuống 15 năm và siết chặt rút BHXH một lần. Giáo dục và quản trị quốc gia cũng bước vào kỷ nguyên 4.0 với các tiêu chuẩn kiểm định đại học khắt khe (15 tiêu chuẩn, 60 tiêu chí) và sự phổ cập chuyển đổi số qua VNeID, đồng thời triển khai đồng bộ 8 chuẩn mực con người Việt Nam để thế hệ trẻ định hình bản sắc trong kỷ nguyên số.",
    stats: [
      { 
        value: "15 năm", 
        label: "Đóng BHXH tối thiểu", 
        desc: "Luật BHXH 2024 có hiệu lực giảm thời gian đóng tối thiểu từ 20 năm xuống 15 năm, mở rộng lưới an sinh cho hàng triệu lao động." 
      },
      { 
        value: "IFRS & ESG", 
        label: "Tiêu chuẩn toàn cầu", 
        desc: "Bắt buộc áp dụng IFRS và tiêu chuẩn Môi trường - Xã hội - Quản trị (ESG) đối với doanh nghiệp niêm yết lớn để hướng tới nền kinh tế xanh." 
      },
      { 
        value: "60 Tiêu chí", 
        label: "Kiểm định thực chất", 
        desc: "Từ 15/5/2026, các cơ sở giáo dục đại học được kiểm định theo 15 tiêu chuẩn và 60 tiêu chí mới, chuyển hẳn sang đánh giá thực chất vận hành." 
      }
    ],
    highlights: [
      "Hiện thực hóa 'Khát vọng cường quốc': Áp dụng IFRS và ESG để nâng cao năng lực cạnh tranh, tạo điều kiện nâng hạng thị trường chứng khoán.",
      "Tái cấu trúc sâu sắc an sinh xã hội: Luật BHXH mới có hiệu lực, bảo đảm thu nhập ổn định khi về già, điều chỉnh lương và trợ cấp từ tháng 7/2026.",
      "Quản trị quốc gia hiện đại: Đẩy mạnh chuyển đổi số (VNeID), chuẩn hóa giáo viên và tuyển sinh đại học, định hình văn hóa Gen Z."
    ]
  },

  {
    year: "1986-2026",
    title: "TỔNG KẾT 40 NĂM ĐỔI MỚI",
    subtitle: "Hành trình từ gian khó đến cơ đồ rực rỡ",
    quote: "Kỷ niệm 40 năm công cuộc Đổi mới, Việt Nam nhìn lại một 'pho lịch sử bằng vàng' với những bước nhảy vọt thần kỳ, khẳng định bản lĩnh của một dân tộc không bao giờ khuất phục trước gian khó. Đất nước ta chưa bao giờ có được cơ đồ và vị thế như ngày nay.",
    description: "Từ xuất phát điểm là một nền kinh tế rơi vào khủng hoảng trầm trọng, lạm phát phi mã lên tới 774% vào năm 1986, thiếu đói và bị bao vây cô lập, Đảng và nhân dân ta đã dũng cảm nhìn thẳng vào sự thật. Quyết định Đổi mới toàn diện năm 1986, lấy 'dân làm gốc', đã mở ra một kỷ nguyên mới, giải phóng sức sản xuất to lớn và chuyển đổi thành công sang nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
    story: "Hành trình 40 năm là chuỗi những kỳ tích nối tiếp nhau: từ việc làm nên 'kỳ tích lúa gạo' năm 1989, chính thức vươn lên thành nước có thu nhập trung bình năm 2008, cho đến việc thu hút dòng vốn FDI hàng tỷ USD. Trên mặt trận ngoại giao, Việt Nam đã phá thế bao vây, bình thường hóa quan hệ với Hoa Kỳ, gia nhập ASEAN (1995), WTO (2007) và trở thành Ủy viên không thường trực HĐBA Liên hợp quốc với số phiếu kỷ lục. Năm 2026 đánh dấu kỷ nguyên của 'Chất', tiệm cận các chuẩn mực quản trị hiện đại toàn cầu như IFRS, ESG, cùng hệ thống an sinh đa tầng ưu việt. Website E-magazine này là nhịp cầu kết nối quá khứ gian khó với tương lai phồn vinh. Sứ mệnh của thế hệ Gen Z hôm nay là kế thừa tinh thần tự lực, tự cường, tận dụng Cách mạng 4.0 và AI để tiếp tục đưa Việt Nam trở thành quốc gia phát triển vào năm 2045.",
    stats: [
      { value: "40 Năm", label: "Hành trình Đổi mới", desc: "Chuyển mình ngoạn mục từ một quốc gia thiếu đói, lạm phát phi mã thành nền kinh tế năng động, hội nhập sâu rộng." },
      { value: "192/193", label: "Phiếu bầu kỷ lục", desc: "Sự tín nhiệm tuyệt đối của quốc tế khi Việt Nam được bầu làm Ủy viên không thường trực HĐBA Liên hợp quốc." },
      { value: "2045", label: "Tầm nhìn phát triển", desc: "Nhiệm vụ của thế hệ trẻ: Đưa Việt Nam trở thành quốc gia phát triển, thu nhập cao nhân kỷ niệm 100 năm thành lập nước." }
    ],
    highlights: [
      "1986 - Dũng cảm nhìn vào sự thật: Xóa bỏ cơ chế bao cấp, thực hiện đổi mới toàn diện cứu đất nước khỏi khủng hoảng trầm trọng.",
      "Kỳ tích kinh tế & Ngoại giao: Từ xuất khẩu gạo (1989), gia nhập WTO (2007) đến thiết lập quan hệ Đối tác Chiến lược/Toàn diện với các cường quốc.",
      "Tiêu chuẩn hóa quốc tế 2026: Áp dụng chuẩn IFRS, ESG, giảm thời gian đóng BHXH xuống 15 năm và chuẩn hóa hệ thống giáo dục, công vụ."
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
