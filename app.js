const assets = [
  { id: "TS01", name: "Dữ liệu bạn đọc" },
  { id: "TS02", name: "Cơ sở dữ liệu sách" },
  { id: "TS03", name: "Dữ liệu mượn/trả" },
  { id: "TS04", name: "Tài khoản nhân viên thư viện" },
  { id: "TS05", name: "Tài khoản quản trị" },
  { id: "TS06", name: "Phần mềm quản lý thư viện" },
  { id: "TS07", name: "Máy chủ thư viện" },
  { id: "TS08", name: "Máy tính tra cứu công cộng" },
  { id: "TS09", name: "File sao lưu" },
  { id: "TS10", name: "Nhật ký hệ thống" }
];

const riskLibrary = [
  {
    id: "RR01",
    name: "Rò rỉ dữ liệu bạn đọc",
    relatedAssets: ["TS01", "TS04"],
    keywords: ["rò rỉ", "ro ri", "lộ dữ liệu", "lo du lieu", "dữ liệu cá nhân", "bạn đọc", "truy cập trái phép", "sai quyền", "phân quyền"],
    threat: "Truy cập trái phép, sử dụng sai quyền",
    vulnerability: "Phân quyền chưa chặt chẽ, chưa rà soát quyền định kỳ",
    likelihoodQuestions: [
      "Có phân quyền truy cập dữ liệu bạn đọc theo vai trò không?",
      "Có rà soát quyền truy cập định kỳ không?",
      "Có ghi log truy cập dữ liệu bạn đọc không?",
      "Có cấm sử dụng tài khoản dùng chung không?",
      "Có áp dụng chính sách mật khẩu mạnh không?"
    ],
    suggestions: [
      "Phân quyền truy cập theo vai trò",
      "Rà soát quyền truy cập định kỳ",
      "Ghi log truy cập dữ liệu bạn đọc",
      "Không sử dụng tài khoản dùng chung",
      "Tăng cường chính sách mật khẩu"
    ]
  },
  {
    id: "RR02",
    name: "Mất dữ liệu mượn/trả",
    relatedAssets: ["TS03", "TS09"],
    keywords: ["mất dữ liệu", "mat du lieu", "xóa nhầm", "xoa nham", "sao lưu", "backup", "phục hồi", "phuc hoi", "hỏng dữ liệu", "hong du lieu", "mượn trả", "muon tra", "khôi phục"],
    threat: "Lỗi hệ thống, thao tác nhầm, hỏng thiết bị",
    vulnerability: "Sao lưu chưa đầy đủ, chưa kiểm tra phục hồi",
    likelihoodQuestions: [
      "Có sao lưu dữ liệu mượn/trả định kỳ không?",
      "Có kiểm tra khả năng phục hồi dữ liệu không?",
      "Có phân quyền người được xóa hoặc sửa dữ liệu không?",
      "Có ghi nhật ký thao tác xóa, sửa dữ liệu không?",
      "Có người phụ trách kiểm tra sao lưu không?"
    ],
    suggestions: [
      "Sao lưu dữ liệu định kỳ",
      "Kiểm tra khả năng phục hồi dữ liệu",
      "Phân quyền thao tác xóa/sửa dữ liệu",
      "Ghi log thao tác quan trọng",
      "Phân công người phụ trách kiểm tra backup"
    ]
  },
  {
    id: "RR03",
    name: "Sai lệch dữ liệu sách",
    relatedAssets: ["TS02"],
    keywords: ["sai lệch", "sai lech", "dữ liệu sách", "du lieu sach", "cập nhật sai", "cap nhat sai", "xóa nhầm sách", "danh mục sách", "chỉnh sửa sách"],
    threat: "Cập nhật sai, xóa nhầm dữ liệu",
    vulnerability: "Thiếu kiểm tra dữ liệu, phân quyền cập nhật chưa rõ",
    likelihoodQuestions: [
      "Có phân quyền cập nhật dữ liệu sách không?",
      "Có ghi nhận lịch sử chỉnh sửa không?",
      "Có kiểm tra dữ liệu sách định kỳ không?",
      "Có xác nhận trước khi xóa dữ liệu không?",
      "Có sao lưu dữ liệu danh mục sách không?"
    ],
    suggestions: [
      "Phân quyền cập nhật dữ liệu sách",
      "Ghi nhận lịch sử chỉnh sửa",
      "Kiểm tra dữ liệu định kỳ",
      "Xác nhận trước khi xóa dữ liệu",
      "Sao lưu dữ liệu danh mục sách"
    ]
  },
  {
    id: "RR04",
    name: "Lạm dụng tài khoản nhân viên",
    relatedAssets: ["TS04"],
    keywords: ["tài khoản nhân viên", "tai khoan nhan vien", "lạm dụng", "lam dung", "dùng chung", "dung chung", "sai mục đích", "theo dõi thao tác"],
    threat: "Sử dụng tài khoản sai mục đích",
    vulnerability: "Tài khoản dùng chung, chưa theo dõi thao tác",
    likelihoodQuestions: [
      "Mỗi nhân viên có tài khoản riêng không?",
      "Có giới hạn quyền theo vai trò không?",
      "Có theo dõi các thao tác quan trọng không?",
      "Có rà soát tài khoản định kỳ không?",
      "Có khóa tài khoản không còn sử dụng không?"
    ],
    suggestions: [
      "Sử dụng tài khoản riêng cho từng nhân viên",
      "Giới hạn quyền theo vai trò",
      "Theo dõi các thao tác quan trọng",
      "Rà soát tài khoản định kỳ",
      "Khóa tài khoản không còn sử dụng"
    ]
  },
  {
    id: "RR05",
    name: "Lạm dụng tài khoản quản trị",
    relatedAssets: ["TS05"],
    keywords: ["tài khoản quản trị", "tai khoan quan tri", "admin", "quản trị", "quan tri", "vượt quyền", "vuot quyen", "đăng nhập quản trị", "mật khẩu mạnh"],
    threat: "Thao tác vượt quyền, truy cập trái phép",
    vulnerability: "Quyền quản trị cao, thiếu kiểm soát đăng nhập",
    likelihoodQuestions: [
      "Có hạn chế số lượng tài khoản quản trị không?",
      "Có ghi log thao tác quản trị không?",
      "Có kiểm soát đăng nhập tài khoản quản trị không?",
      "Có sử dụng mật khẩu mạnh không?",
      "Có rà soát quyền quản trị định kỳ không?"
    ],
    suggestions: [
      "Hạn chế số lượng tài khoản quản trị",
      "Ghi log thao tác quản trị",
      "Kiểm soát đăng nhập tài khoản quản trị",
      "Sử dụng mật khẩu mạnh",
      "Rà soát quyền quản trị định kỳ"
    ]
  },
  {
    id: "RR06",
    name: "Gián đoạn dịch vụ thư viện",
    relatedAssets: ["TS06", "TS07"],
    keywords: ["gián đoạn", "gian doan", "dịch vụ", "dich vu", "máy chủ", "may chu", "mất điện", "mat dien", "lỗi phần mềm", "loi phan mem", "khôi phục dịch vụ"],
    threat: "Lỗi máy chủ, mất điện, lỗi phần mềm",
    vulnerability: "Thiếu kế hoạch khôi phục, thiếu giám sát hệ thống",
    likelihoodQuestions: [
      "Có theo dõi trạng thái máy chủ thường xuyên không?",
      "Có bảo trì hệ thống định kỳ không?",
      "Có kế hoạch khôi phục dịch vụ không?",
      "Có sao lưu cấu hình hệ thống không?",
      "Có phương án xử lý khi mất điện hoặc lỗi máy chủ không?"
    ],
    suggestions: [
      "Theo dõi trạng thái máy chủ",
      "Bảo trì hệ thống định kỳ",
      "Xây dựng kế hoạch khôi phục dịch vụ",
      "Sao lưu cấu hình hệ thống",
      "Chuẩn bị phương án xử lý khi mất điện hoặc lỗi máy chủ"
    ]
  },
  {
    id: "RR07",
    name: "Máy tính tra cứu bị sử dụng sai mục đích",
    relatedAssets: ["TS08"],
    keywords: ["máy tính tra cứu", "may tinh tra cuu", "cài phần mềm", "cai phan mem", "phần mềm lạ", "phan mem la", "thay đổi cấu hình", "công cộng", "sai mục đích"],
    threat: "Cài phần mềm lạ, thay đổi cấu hình",
    vulnerability: "Giới hạn quyền chưa đầy đủ, thiếu kiểm tra định kỳ",
    likelihoodQuestions: [
      "Có giới hạn quyền cài đặt phần mềm không?",
      "Có khóa cấu hình hệ thống không?",
      "Có kiểm tra thiết bị định kỳ không?",
      "Có chỉ cho phép truy cập chức năng tra cứu cần thiết không?",
      "Có cơ chế khôi phục cấu hình máy khi cần không?"
    ],
    suggestions: [
      "Giới hạn quyền cài đặt phần mềm",
      "Khóa cấu hình hệ thống",
      "Kiểm tra thiết bị định kỳ",
      "Chỉ cho phép truy cập các chức năng tra cứu cần thiết",
      "Khôi phục cấu hình máy sau mỗi phiên sử dụng nếu cần"
    ]
  },
  {
    id: "RR08",
    name: "Thiếu nhật ký giám sát",
    relatedAssets: ["TS10"],
    keywords: ["nhật ký", "nhat ky", "log", "ghi log", "giám sát", "giam sat", "thao tác bất thường", "thao tac bat thuong", "theo dõi log"],
    threat: "Không phát hiện thao tác bất thường",
    vulnerability: "Chưa ghi log đầy đủ, chưa theo dõi log thường xuyên",
    likelihoodQuestions: [
      "Có bật ghi log truy cập không?",
      "Có ghi log thao tác thêm, sửa, xóa dữ liệu không?",
      "Có lưu trữ log trong thời gian phù hợp không?",
      "Có kiểm tra log định kỳ không?",
      "Có cảnh báo khi có thao tác bất thường không?"
    ],
    suggestions: [
      "Bật ghi log truy cập",
      "Ghi log thao tác thêm, sửa, xóa dữ liệu",
      "Lưu trữ log trong thời gian phù hợp",
      "Kiểm tra log định kỳ",
      "Cảnh báo khi có thao tác bất thường"
    ]
  },
  {
    id: "RR09",
    name: "File sao lưu không sử dụng được",
    relatedAssets: ["TS09"],
    keywords: ["file sao lưu", "backup lỗi", "backup loi", "sao lưu hỏng", "sao luu hong", "không phục hồi", "khong phuc hoi", "file backup", "lưu trữ backup"],
    threat: "Backup lỗi, file sao lưu bị hỏng",
    vulnerability: "Không kiểm tra phục hồi, lưu trữ backup chưa an toàn",
    likelihoodQuestions: [
      "File backup có được kiểm tra định kỳ không?",
      "Có thử phục hồi dữ liệu theo lịch không?",
      "Backup có được lưu ở vị trí an toàn không?",
      "Có nhiều bản backup theo thời gian không?",
      "Có ghi nhận kết quả kiểm tra backup không?"
    ],
    suggestions: [
      "Kiểm tra file backup định kỳ",
      "Thử phục hồi dữ liệu theo lịch",
      "Lưu backup ở vị trí an toàn",
      "Có nhiều bản backup theo thời gian",
      "Ghi nhận kết quả kiểm tra backup"
    ]
  },
  {
    id: "RR10",
    name: "Tài khoản cũ không được thu hồi",
    relatedAssets: ["TS04", "TS05"],
    keywords: ["tài khoản cũ", "tai khoan cu", "thu hồi", "thu hoi", "nghỉ việc", "nghi viec", "đổi nhiệm vụ", "khóa tài khoản", "khong con nhiem vu"],
    threat: "Người không còn nhiệm vụ vẫn có quyền truy cập",
    vulnerability: "Chưa có quy trình thu hồi tài khoản rõ ràng",
    likelihoodQuestions: [
      "Có quy trình thu hồi tài khoản rõ ràng không?",
      "Có rà soát danh sách tài khoản định kỳ không?",
      "Có khóa tài khoản của nhân sự không còn nhiệm vụ không?",
      "Có ghi nhận lịch sử cấp và thu hồi tài khoản không?",
      "Có người chịu trách nhiệm quản lý tài khoản không?"
    ],
    suggestions: [
      "Xây dựng quy trình thu hồi tài khoản",
      "Rà soát danh sách tài khoản định kỳ",
      "Khóa tài khoản của nhân sự không còn nhiệm vụ",
      "Ghi nhận lịch sử cấp và thu hồi tài khoản",
      "Phân công người chịu trách nhiệm quản lý tài khoản"
    ]
  },
  {
    id: "RR11",
    name: "Phần mềm quản lý thư viện chưa được cập nhật",
    relatedAssets: ["TS06"],
    keywords: [
      { text: "chưa cập nhật", weight: 4 },
      { text: "chua cap nhat", weight: 4 },
      { text: "bản vá", weight: 4 },
      { text: "ban va", weight: 4 },
      { text: "lỗ hổng phần mềm", weight: 4 },
      { text: "phiên bản cũ", weight: 3 },
      { text: "update", weight: 3 },
      { text: "patch", weight: 3 },
      { text: "phần mềm thư viện", weight: 2 }
    ],
    threat: "Lỗi bảo mật phần mềm, khai thác lỗ hổng đã biết",
    vulnerability: "Phần mềm chưa được cập nhật bản vá, thiếu quy trình kiểm tra phiên bản",
    likelihoodQuestions: [
      "Phần mềm quản lý thư viện có được cập nhật định kỳ không?",
      "Có theo dõi phiên bản phần mềm đang sử dụng không?",
      "Có kiểm tra thông tin lỗ hổng hoặc bản vá từ nhà cung cấp không?",
      "Có kế hoạch kiểm thử trước khi cập nhật phần mềm không?",
      "Có người phụ trách quản lý việc cập nhật phần mềm không?"
    ],
    suggestions: [
      "Thiết lập quy trình cập nhật phần mềm định kỳ",
      "Theo dõi phiên bản phần mềm đang sử dụng",
      "Kiểm tra thông tin bản vá từ nhà cung cấp",
      "Sao lưu dữ liệu trước khi cập nhật",
      "Phân công người chịu trách nhiệm quản lý cập nhật"
    ]
  },
  {
    id: "RR12",
    name: "Máy chủ hoặc máy tính thư viện bị nhiễm mã độc",
    relatedAssets: ["TS06", "TS07", "TS08"],
    keywords: [
      { text: "mã độc", weight: 5 },
      { text: "ma doc", weight: 5 },
      { text: "virus", weight: 5 },
      { text: "malware", weight: 5 },
      { text: "nhiễm độc", weight: 4 },
      { text: "phần mềm lạ", weight: 3 },
      { text: "file lạ", weight: 3 },
      { text: "máy tính tra cứu", weight: 2 },
      { text: "máy chủ", weight: 2 }
    ],
    threat: "Phần mềm độc hại, tệp tin lạ, thiết bị lưu trữ không an toàn",
    vulnerability: "Thiếu phần mềm bảo vệ, người dùng có thể cài đặt hoặc mở tệp không rõ nguồn gốc",
    likelihoodQuestions: [
      "Máy chủ và máy tính thư viện có phần mềm bảo vệ chống mã độc không?",
      "Hệ thống có được cập nhật mẫu nhận diện mã độc thường xuyên không?",
      "Người dùng có bị giới hạn quyền cài đặt phần mềm lạ không?",
      "Có kiểm soát việc sử dụng USB hoặc thiết bị lưu trữ ngoài không?",
      "Có kiểm tra định kỳ các thiết bị có nguy cơ nhiễm mã độc không?"
    ],
    suggestions: [
      "Cài đặt và cập nhật phần mềm chống mã độc",
      "Giới hạn quyền cài đặt phần mềm trên thiết bị thư viện",
      "Kiểm soát việc sử dụng USB và thiết bị ngoài",
      "Quét mã độc định kỳ trên máy chủ và máy tra cứu",
      "Đào tạo người dùng không mở tệp không rõ nguồn gốc"
    ]
  },
  {
    id: "RR13",
    name: "Truy cập trái phép vào mạng hoặc hệ thống thư viện",
    relatedAssets: ["TS01", "TS03", "TS06", "TS07"],
    keywords: [
      { text: "truy cập trái phép", weight: 5 },
      { text: "truy cap trai phep", weight: 5 },
      { text: "không có quyền", weight: 4 },
      { text: "xâm nhập", weight: 4 },
      { text: "mạng nội bộ", weight: 3 },
      { text: "wifi", weight: 2 },
      { text: "hệ thống thư viện", weight: 2 },
      { text: "đăng nhập lạ", weight: 3 }
    ],
    threat: "Đối tượng không có thẩm quyền truy cập vào mạng hoặc hệ thống nội bộ",
    vulnerability: "Kiểm soát truy cập mạng chưa đầy đủ, mật khẩu yếu, thiếu giám sát kết nối",
    likelihoodQuestions: [
      "Hệ thống có kiểm soát người dùng được phép truy cập mạng thư viện không?",
      "Mật khẩu truy cập hệ thống có được đặt theo chính sách đủ mạnh không?",
      "Có giám sát các phiên đăng nhập hoặc truy cập bất thường không?",
      "Có tách mạng nội bộ thư viện với mạng công cộng không?",
      "Có rà soát danh sách thiết bị hoặc tài khoản được phép truy cập không?"
    ],
    suggestions: [
      "Tăng cường kiểm soát truy cập mạng",
      "Áp dụng chính sách mật khẩu mạnh",
      "Theo dõi đăng nhập và kết nối bất thường",
      "Tách mạng nội bộ với mạng công cộng",
      "Rà soát định kỳ tài khoản và thiết bị truy cập"
    ]
  },
  {
    id: "RR14",
    name: "Mất kết nối mạng làm gián đoạn tra cứu và mượn/trả",
    relatedAssets: ["TS06", "TS07", "TS08"],
    keywords: [
      { text: "mất mạng", weight: 5 },
      { text: "mat mang", weight: 5 },
      { text: "mất kết nối", weight: 5 },
      { text: "không truy cập được", weight: 4 },
      { text: "gián đoạn tra cứu", weight: 4 },
      { text: "mượn trả không được", weight: 4 },
      { text: "lỗi mạng", weight: 3 },
      { text: "wifi", weight: 2 }
    ],
    threat: "Sự cố mạng, lỗi thiết bị mạng, mất kết nối Internet hoặc mạng nội bộ",
    vulnerability: "Thiếu phương án dự phòng mạng, thiếu giám sát trạng thái kết nối",
    likelihoodQuestions: [
      "Hệ thống mạng thư viện có được theo dõi trạng thái hoạt động không?",
      "Có phương án xử lý khi mạng nội bộ hoặc Internet bị gián đoạn không?",
      "Thiết bị mạng có được kiểm tra và bảo trì định kỳ không?",
      "Có kênh kết nối dự phòng cho các nghiệp vụ quan trọng không?",
      "Có quy trình thông báo và xử lý khi mất kết nối mạng không?"
    ],
    suggestions: [
      "Theo dõi trạng thái kết nối mạng",
      "Bảo trì thiết bị mạng định kỳ",
      "Xây dựng phương án kết nối dự phòng",
      "Chuẩn bị quy trình xử lý khi mất mạng",
      "Ghi nhận và đánh giá các sự cố mạng đã xảy ra"
    ]
  },
  {
    id: "RR15",
    name: "Lộ mật khẩu tài khoản hệ thống thư viện",
    relatedAssets: ["TS04", "TS05"],
    keywords: [
      { text: "lộ mật khẩu", weight: 5 },
      { text: "lo mat khau", weight: 5 },
      { text: "mật khẩu yếu", weight: 5 },
      { text: "chia sẻ mật khẩu", weight: 5 },
      { text: "password", weight: 3 },
      { text: "đăng nhập", weight: 2 },
      { text: "tài khoản bị lộ", weight: 4 },
      { text: "bị đoán mật khẩu", weight: 4 }
    ],
    threat: "Mật khẩu bị chia sẻ, bị đoán, bị lưu không an toàn hoặc bị lộ",
    vulnerability: "Chính sách mật khẩu yếu, chưa thay đổi mật khẩu định kỳ, thiếu nhận thức người dùng",
    likelihoodQuestions: [
      "Hệ thống có yêu cầu mật khẩu đủ mạnh không?",
      "Người dùng có được khuyến cáo không chia sẻ mật khẩu không?",
      "Tài khoản có bị khóa sau nhiều lần đăng nhập sai không?",
      "Mật khẩu có được thay đổi khi nghi ngờ bị lộ không?",
      "Có kiểm tra hoặc rà soát các tài khoản sử dụng mật khẩu yếu không?"
    ],
    suggestions: [
      "Áp dụng chính sách mật khẩu mạnh",
      "Không cho phép sử dụng tài khoản dùng chung",
      "Khóa tài khoản sau nhiều lần đăng nhập sai",
      "Yêu cầu đổi mật khẩu khi nghi ngờ bị lộ",
      "Nâng cao nhận thức người dùng về bảo vệ mật khẩu"
    ]
  },
  {
    id: "RR16",
    name: "Sao chép dữ liệu ra thiết bị lưu trữ ngoài trái phép",
    relatedAssets: ["TS01", "TS03", "TS08"],
    keywords: [
      { text: "usb", weight: 5 },
      { text: "sao chép dữ liệu", weight: 5 },
      { text: "copy dữ liệu", weight: 5 },
      { text: "thiết bị ngoài", weight: 4 },
      { text: "ổ cứng ngoài", weight: 4 },
      { text: "dữ liệu bị lấy ra", weight: 4 },
      { text: "rò rỉ dữ liệu", weight: 3 }
    ],
    threat: "Người dùng sao chép dữ liệu ra USB, ổ cứng ngoài hoặc thiết bị cá nhân",
    vulnerability: "Thiếu kiểm soát thiết bị ngoại vi, thiếu giám sát thao tác sao chép dữ liệu",
    likelihoodQuestions: [
      "Có kiểm soát việc sử dụng USB hoặc thiết bị lưu trữ ngoài không?",
      "Người dùng có bị giới hạn quyền sao chép dữ liệu quan trọng không?",
      "Có ghi log thao tác xuất hoặc sao chép dữ liệu không?",
      "Có quy định về việc sử dụng thiết bị cá nhân trong thư viện không?",
      "Có kiểm tra định kỳ các thiết bị công cộng có nguy cơ bị sao chép dữ liệu không?"
    ],
    suggestions: [
      "Giới hạn việc sử dụng thiết bị lưu trữ ngoài",
      "Kiểm soát quyền sao chép dữ liệu",
      "Ghi log thao tác xuất dữ liệu",
      "Ban hành quy định sử dụng thiết bị cá nhân",
      "Kiểm tra định kỳ máy tính tra cứu và thiết bị liên quan"
    ]
  },
  {
    id: "RR17",
    name: "Lỗi nhập liệu làm sai thông tin mượn/trả",
    relatedAssets: ["TS03", "TS04"],
    keywords: [
      { text: "nhập sai", weight: 5 },
      { text: "nhap sai", weight: 5 },
      { text: "lỗi nhập liệu", weight: 5 },
      { text: "sai thông tin mượn trả", weight: 5 },
      { text: "ghi nhầm", weight: 4 },
      { text: "thao tác nhầm", weight: 4 },
      { text: "mượn trả", weight: 3 },
      { text: "dữ liệu sai", weight: 3 }
    ],
    threat: "Nhân viên nhập sai thông tin, thao tác nhầm trong quá trình mượn/trả",
    vulnerability: "Thiếu kiểm tra dữ liệu nhập, giao diện nghiệp vụ chưa có bước xác nhận",
    likelihoodQuestions: [
      "Dữ liệu mượn/trả có được kiểm tra trước khi lưu không?",
      "Hệ thống có cảnh báo khi thông tin nhập không hợp lệ không?",
      "Có bước xác nhận trước các thao tác quan trọng không?",
      "Nhân viên có được hướng dẫn quy trình nhập liệu đúng không?",
      "Có ghi nhận lịch sử chỉnh sửa dữ liệu mượn/trả không?"
    ],
    suggestions: [
      "Bổ sung kiểm tra dữ liệu đầu vào",
      "Thêm bước xác nhận trước thao tác quan trọng",
      "Ghi nhận lịch sử chỉnh sửa dữ liệu",
      "Đào tạo nhân viên về quy trình nhập liệu",
      "Rà soát định kỳ dữ liệu mượn/trả"
    ]
  },
  {
    id: "RR18",
    name: "Phân quyền không phù hợp với vai trò người dùng",
    relatedAssets: ["TS01", "TS02", "TS03", "TS04", "TS05"],
    keywords: [
      { text: "phân quyền sai", weight: 5 },
      { text: "phan quyen sai", weight: 5 },
      { text: "quyền không phù hợp", weight: 5 },
      { text: "quyền quá cao", weight: 5 },
      { text: "vượt quyền", weight: 4 },
      { text: "role", weight: 3 },
      { text: "vai trò", weight: 3 },
      { text: "rà soát quyền", weight: 3 }
    ],
    threat: "Người dùng có quyền cao hơn nhu cầu công việc",
    vulnerability: "Chưa áp dụng nguyên tắc phân quyền theo vai trò, thiếu rà soát quyền định kỳ",
    likelihoodQuestions: [
      "Hệ thống có phân quyền theo vai trò người dùng không?",
      "Quyền truy cập có được cấp theo đúng nhu cầu công việc không?",
      "Có rà soát quyền truy cập định kỳ không?",
      "Có thu hồi quyền khi người dùng thay đổi nhiệm vụ không?",
      "Có ghi log các thao tác thay đổi quyền không?"
    ],
    suggestions: [
      "Áp dụng phân quyền theo vai trò",
      "Cấp quyền theo nguyên tắc tối thiểu",
      "Rà soát quyền truy cập định kỳ",
      "Thu hồi quyền khi thay đổi nhiệm vụ",
      "Ghi log thao tác cấp, sửa và thu hồi quyền"
    ]
  },
  {
    id: "RR19",
    name: "Thiếu quy trình xử lý sự cố an toàn thông tin",
    relatedAssets: ["TS01", "TS03", "TS06", "TS07", "TS09", "TS10"],
    keywords: [
      { text: "sự cố", weight: 4 },
      { text: "su co", weight: 4 },
      { text: "xử lý sự cố", weight: 5 },
      { text: "không biết xử lý", weight: 4 },
      { text: "phản ứng sự cố", weight: 5 },
      { text: "mất dữ liệu", weight: 2 },
      { text: "gián đoạn", weight: 2 },
      { text: "khôi phục", weight: 2 }
    ],
    threat: "Sự cố xảy ra nhưng không được xử lý kịp thời hoặc xử lý không thống nhất",
    vulnerability: "Chưa có quy trình phản ứng sự cố, chưa phân công trách nhiệm rõ ràng",
    likelihoodQuestions: [
      "Thư viện có quy trình xử lý sự cố an toàn thông tin không?",
      "Có phân công người chịu trách nhiệm khi sự cố xảy ra không?",
      "Có kênh thông báo sự cố rõ ràng không?",
      "Có ghi nhận và lưu lại thông tin sự cố sau khi xử lý không?",
      "Có đánh giá lại nguyên nhân sau mỗi sự cố không?"
    ],
    suggestions: [
      "Xây dựng quy trình xử lý sự cố an toàn thông tin",
      "Phân công trách nhiệm xử lý sự cố",
      "Thiết lập kênh thông báo sự cố",
      "Ghi nhận lịch sử sự cố",
      "Rà soát và cải tiến sau khi xử lý sự cố"
    ]
  },
  {
    id: "RR20",
    name: "Nhật ký hệ thống bị xóa hoặc chỉnh sửa trái phép",
    relatedAssets: ["TS10"],
    keywords: [
      { text: "xóa log", weight: 5 },
      { text: "xoa log", weight: 5 },
      { text: "sửa log", weight: 5 },
      { text: "nhật ký bị xóa", weight: 5 },
      { text: "che giấu thao tác", weight: 4 },
      { text: "log hệ thống", weight: 3 },
      { text: "nhật ký hệ thống", weight: 3 },
      { text: "truy vết", weight: 3 }
    ],
    threat: "Người dùng xóa log, chỉnh sửa log hoặc che giấu thao tác bất thường",
    vulnerability: "Log chưa được bảo vệ, quyền truy cập log chưa được kiểm soát",
    likelihoodQuestions: [
      "Nhật ký hệ thống có được bảo vệ khỏi sửa/xóa trái phép không?",
      "Chỉ người có thẩm quyền mới được truy cập log không?",
      "Có ghi nhận thao tác truy cập hoặc thay đổi log không?",
      "Log có được sao lưu hoặc lưu ở vị trí an toàn không?",
      "Có kiểm tra tính đầy đủ của log định kỳ không?"
    ],
    suggestions: [
      "Giới hạn quyền truy cập nhật ký hệ thống",
      "Bảo vệ log khỏi chỉnh sửa hoặc xóa trái phép",
      "Sao lưu log ở vị trí an toàn",
      "Theo dõi thao tác truy cập log",
      "Kiểm tra tính đầy đủ của log định kỳ"
    ]
  },
  {
    id: "RR21",
    name: "Truy cập vật lý trái phép vào máy chủ hoặc thiết bị lưu trữ",
    relatedAssets: ["TS07", "TS09"],
    keywords: [
      { text: "truy cập vật lý", weight: 5 },
      { text: "phòng máy chủ", weight: 5 },
      { text: "máy chủ", weight: 3 },
      { text: "thiết bị lưu trữ", weight: 4 },
      { text: "vào phòng máy", weight: 4 },
      { text: "không khóa", weight: 3 },
      { text: "backup bị lấy", weight: 4 }
    ],
    threat: "Người không có thẩm quyền tiếp cận máy chủ, thiết bị lưu trữ hoặc file sao lưu",
    vulnerability: "Khu vực đặt thiết bị chưa được kiểm soát, thiếu khóa hoặc giám sát vật lý",
    likelihoodQuestions: [
      "Khu vực đặt máy chủ có được khóa hoặc kiểm soát ra vào không?",
      "Chỉ người có thẩm quyền mới được tiếp cận thiết bị lưu trữ không?",
      "Có ghi nhận người ra vào khu vực đặt thiết bị quan trọng không?",
      "File sao lưu vật lý có được lưu ở nơi an toàn không?",
      "Có kiểm tra định kỳ tình trạng bảo vệ vật lý của thiết bị không?"
    ],
    suggestions: [
      "Kiểm soát ra vào khu vực đặt máy chủ",
      "Giới hạn người được tiếp cận thiết bị lưu trữ",
      "Ghi nhận lịch sử ra vào khu vực quan trọng",
      "Lưu file sao lưu ở nơi an toàn",
      "Kiểm tra định kỳ an toàn vật lý"
    ]
  },
  {
    id: "RR22",
    name: "File sao lưu chứa dữ liệu nhạy cảm bị lộ",
    relatedAssets: ["TS01", "TS03", "TS09"],
    keywords: [
      { text: "lộ backup", weight: 5 },
      { text: "lộ file sao lưu", weight: 5 },
      { text: "backup bị lộ", weight: 5 },
      { text: "file sao lưu", weight: 3 },
      { text: "dữ liệu nhạy cảm", weight: 4 },
      { text: "không mã hóa backup", weight: 5 },
      { text: "backup không an toàn", weight: 4 }
    ],
    threat: "File backup bị truy cập trái phép hoặc lưu trữ ở nơi không an toàn",
    vulnerability: "Backup chưa được bảo vệ, chưa mã hóa, quyền truy cập file sao lưu chưa chặt chẽ",
    likelihoodQuestions: [
      "File sao lưu có được giới hạn quyền truy cập không?",
      "File sao lưu có được lưu trữ ở vị trí an toàn không?",
      "File sao lưu chứa dữ liệu nhạy cảm có được mã hóa hoặc bảo vệ không?",
      "Có theo dõi người truy cập file sao lưu không?",
      "Có quy định về việc sao chép hoặc di chuyển file backup không?"
    ],
    suggestions: [
      "Giới hạn quyền truy cập file sao lưu",
      "Lưu backup ở vị trí an toàn",
      "Mã hóa hoặc bảo vệ file sao lưu quan trọng",
      "Ghi log truy cập file backup",
      "Quy định rõ việc sao chép và di chuyển file sao lưu"
    ]
  },
  {
    id: "RR23",
    name: "Phụ thuộc vào một cá nhân trong vận hành hệ thống",
    relatedAssets: ["TS05", "TS06", "TS07", "TS09"],
    keywords: [
      { text: "phụ thuộc một người", weight: 5 },
      { text: "không có người thay thế", weight: 5 },
      { text: "không bàn giao", weight: 4 },
      { text: "nghỉ việc", weight: 3 },
      { text: "quản trị viên vắng mặt", weight: 4 },
      { text: "thiếu tài liệu vận hành", weight: 4 },
      { text: "nhân sự vận hành", weight: 3 }
    ],
    threat: "Người phụ trách chính vắng mặt, nghỉ việc hoặc không bàn giao đầy đủ",
    vulnerability: "Thiếu tài liệu vận hành, thiếu người thay thế, kiến thức hệ thống tập trung vào một cá nhân",
    likelihoodQuestions: [
      "Có tài liệu hướng dẫn vận hành hệ thống thư viện không?",
      "Có ít nhất một người dự phòng có thể tiếp nhận công việc không?",
      "Tài khoản và quyền quản trị có được quản lý theo quy trình không?",
      "Có quy trình bàn giao khi nhân sự thay đổi không?",
      "Các thao tác quan trọng có được ghi nhận để người khác có thể theo dõi không?"
    ],
    suggestions: [
      "Xây dựng tài liệu vận hành hệ thống",
      "Đào tạo người thay thế hoặc người dự phòng",
      "Thiết lập quy trình bàn giao nhân sự",
      "Quản lý tài khoản quản trị theo quy trình",
      "Ghi nhận các thao tác và cấu hình quan trọng"
    ]
  },
  {
    id: "RR24",
    name: "Sai cấu hình quyền trên phần mềm quản lý thư viện",
    relatedAssets: ["TS01", "TS02", "TS03", "TS04", "TS06"],
    keywords: [
      { text: "sai cấu hình quyền", weight: 5 },
      { text: "cấu hình quyền", weight: 4 },
      { text: "quyền sai", weight: 5 },
      { text: "truy cập vượt quyền", weight: 4 },
      { text: "quyền tối thiểu", weight: 3 },
      { text: "phần mềm quản lý thư viện", weight: 2 },
      { text: "role sai", weight: 3 }
    ],
    threat: "Người dùng truy cập hoặc thao tác vượt quá quyền cần thiết",
    vulnerability: "Cấu hình quyền chưa được kiểm tra, thiếu nguyên tắc quyền tối thiểu",
    likelihoodQuestions: [
      "Cấu hình quyền trên phần mềm có được kiểm tra định kỳ không?",
      "Người dùng có chỉ được cấp quyền phù hợp với nhiệm vụ không?",
      "Có tài liệu mô tả các nhóm quyền trong hệ thống không?",
      "Có kiểm tra quyền sau khi tạo hoặc sửa tài khoản không?",
      "Có ghi log thao tác thay đổi cấu hình quyền không?"
    ],
    suggestions: [
      "Rà soát cấu hình quyền trên phần mềm",
      "Áp dụng nguyên tắc quyền tối thiểu",
      "Tài liệu hóa các nhóm quyền người dùng",
      "Kiểm tra quyền sau khi cấp hoặc sửa tài khoản",
      "Ghi log thao tác thay đổi phân quyền"
    ]
  },
  {
    id: "RR25",
    name: "Dữ liệu không được bảo vệ khi truyền tải",
    relatedAssets: ["TS01", "TS03", "TS06"],
    keywords: [
      { text: "truyền tải", weight: 4 },
      { text: "không mã hóa", weight: 5 },
      { text: "http", weight: 4 },
      { text: "https", weight: 3 },
      { text: "nghe lén", weight: 5 },
      { text: "dữ liệu bị chặn", weight: 4 },
      { text: "kết nối không an toàn", weight: 5 }
    ],
    threat: "Dữ liệu bị nghe lén, thu thập hoặc can thiệp trong quá trình truyền tải",
    vulnerability: "Kết nối chưa được bảo vệ phù hợp, thiếu cấu hình an toàn khi truy cập hệ thống",
    likelihoodQuestions: [
      "Kết nối đến hệ thống thư viện có sử dụng giao thức an toàn không?",
      "Dữ liệu nhạy cảm có được bảo vệ khi truyền tải không?",
      "Người dùng có được khuyến cáo không truy cập hệ thống qua mạng không an toàn không?",
      "Có kiểm tra cấu hình bảo mật kết nối định kỳ không?",
      "Có giám sát các truy cập bất thường đến hệ thống không?"
    ],
    suggestions: [
      "Sử dụng kết nối an toàn cho hệ thống thư viện",
      "Bảo vệ dữ liệu nhạy cảm khi truyền tải",
      "Kiểm tra cấu hình bảo mật kết nối",
      "Hạn chế truy cập qua mạng không tin cậy",
      "Giám sát các truy cập bất thường"
    ]
  }
];

const genericRisk = {
  id: "GEN",
  name: "Checklist chung",
  relatedAssets: [],
  threat: "Chưa xác định rõ nhóm rủi ro từ mô tả đã nhập",
  vulnerability: "Cần rà soát thêm kiểm soát truy cập, sao lưu, log và trách nhiệm quản lý",
  likelihoodQuestions: [
    "Đã có phân quyền truy cập phù hợp chưa?",
    "Đã có sao lưu hoặc phương án khôi phục chưa?",
    "Đã có ghi log thao tác quan trọng chưa?",
    "Đã có người chịu trách nhiệm xử lý rủi ro chưa?",
    "Đã có quy trình kiểm tra định kỳ chưa?"
  ],
  suggestions: [
    "Rà soát quyền truy cập",
    "Thiết lập hoặc kiểm tra sao lưu",
    "Ghi nhật ký thao tác quan trọng",
    "Phân công người phụ trách",
    "Theo dõi và đánh giá lại định kỳ"
  ]
};

const impactQuestions = [
  "Rủi ro có ảnh hưởng đến dữ liệu cá nhân không?",
  "Rủi ro có ảnh hưởng đến dữ liệu nghiệp vụ chính không?",
  "Rủi ro có làm gián đoạn hoạt động thư viện không?",
  "Rủi ro có ảnh hưởng đến nhiều người dùng không?",
  "Rủi ro có ảnh hưởng đến uy tín hoặc trách nhiệm quản lý không?"
];

const STORAGE_KEY = "libraryRiskAssessment.currentUser";
const API_BASE = "";

const loginPage = document.querySelector("#loginPage");
const dashboardPage = document.querySelector("#dashboardPage");
const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const rememberInput = document.querySelector("#rememberLogin");
const passwordToggle = document.querySelector("#passwordToggle");
const loginError = document.querySelector("#loginError");
const usernameError = document.querySelector("#usernameError");
const passwordError = document.querySelector("#passwordError");
const userSummary = document.querySelector("#userSummary");
const logoutButton = document.querySelector("#logoutButton");
const assetSelect = document.querySelector("#assetSelect");
const riskSelect = document.querySelector("#riskSelect");
const riskDescription = document.querySelector("#riskDescription");
const analyzeRiskButton = document.querySelector("#analyzeRiskButton");
const analysisCard = document.querySelector("#analysisCard");
const confidenceBadge = document.querySelector("#confidenceBadge");
const suggestedRiskName = document.querySelector("#suggestedRiskName");
const analysisNote = document.querySelector("#analysisNote");
const matchedKeywordBox = document.querySelector("#matchedKeywordBox");
const matchedKeywordText = document.querySelector("#matchedKeywordText");
const threatText = document.querySelector("#threatText");
const weaknessText = document.querySelector("#weaknessText");
const manualRiskSelect = document.querySelector("#manualRiskSelect");
const confirmRiskButton = document.querySelector("#confirmRiskButton");
const proceedChecklistButton = document.querySelector("#proceedChecklistButton");
const likelihoodChecklist = document.querySelector("#likelihoodChecklist");
const impactChecklist = document.querySelector("#impactChecklist");
const calculateButton = document.querySelector("#calculateButton");
const resultPanel = document.querySelector("#resultPanel");
const saveRiskButton = document.querySelector("#saveRiskButton");
const saveStatus = document.querySelector("#saveStatus");
const riskRecordsBody = document.querySelector("#riskRecordsBody");
const refreshRecordsButton = document.querySelector("#refreshRecordsButton");
const recordDetailPanel = document.querySelector("#recordDetailPanel");

let suggestedRisk = null;
let activeRisk = null;
let currentResult = null;
let savedRiskRecords = [];

init();

function init() {
  bindLoginEvents();
  bindWizardEvents();
  populateManualRiskSelect();
  populateRiskSelect();
  populateAssetSelect();
  renderImpactChecklist();

  const existingUser = getCurrentUser();
  if (existingUser) showDashboard(existingUser);
}

function bindLoginEvents() {
  loginForm.addEventListener("submit", handleLogin);
  passwordToggle.addEventListener("click", togglePassword);
  usernameInput.addEventListener("input", () => validateRequired(usernameInput, usernameError));
  passwordInput.addEventListener("input", () => validateRequired(passwordInput, passwordError));
  logoutButton.addEventListener("click", handleLogout);
}

function bindWizardEvents() {
  analyzeRiskButton.addEventListener("click", analyzeRisk);
  confirmRiskButton.addEventListener("click", confirmSuggestedRisk);
  manualRiskSelect.addEventListener("change", handleManualRiskChange);
  riskSelect.addEventListener("change", resetCurrentAssessment);
  assetSelect.addEventListener("change", resetCurrentAssessment);
  riskDescription.addEventListener("input", resetCurrentAssessment);
  proceedChecklistButton.addEventListener("click", () => showStep(2));
  document.querySelectorAll("[data-next-step]").forEach((button) => {
    button.addEventListener("click", () => showStep(Number(button.dataset.nextStep)));
  });
  document.querySelectorAll("[data-prev-step]").forEach((button) => {
    button.addEventListener("click", () => showStep(Number(button.dataset.prevStep)));
  });
  document.querySelectorAll("[data-step-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = Number(button.dataset.stepTarget);
      if (target === 1 || activeRisk) showStep(target);
    });
  });
  calculateButton.addEventListener("click", calculateRisk);
  saveRiskButton.addEventListener("click", saveRiskRecord);
  refreshRecordsButton.addEventListener("click", loadRiskRecords);
  riskRecordsBody.addEventListener("click", handleRiskRecordClick);
}

async function handleLogin(event) {
  event.preventDefault();
  clearMessages();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  const validUsername = validateRequired(usernameInput, usernameError);
  const validPassword = validateRequired(passwordInput, passwordError);
  if (!validUsername || !validPassword) return;

  try {
    const currentUser = await apiRequest("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password })
    });

    saveSession(currentUser);
    showDashboard(currentUser);
  } catch (error) {
    loginError.textContent = error.message || "Tên đăng nhập hoặc mật khẩu không đúng.";
    loginError.classList.remove("hidden");
    passwordInput.classList.add("input-invalid");
  }
}

function analyzeRisk() {
  const description = riskDescription.value.trim();
  const selectedRisk = getRiskById(riskSelect.value);

  if (!description) {
    showAnalysisMessage("Vui lòng nhập mô tả rủi ro trước khi tiếp tục.", "low");
    return;
  }

  if (!selectedRisk) {
    showAnalysisMessage("Vui lòng chọn nhóm rủi ro trong thư viện mẫu.", "low");
    return;
  }

  suggestedRisk = selectedRisk;
  activeRisk = selectedRisk;
  currentResult = null;
  manualRiskSelect.value = selectedRisk.id;
  proceedChecklistButton.disabled = false;
  resultPanel.innerHTML = "";
  saveStatus.classList.add("hidden");
  analysisCard.classList.add("hidden");

  renderLikelihoodChecklist(activeRisk);
  showStep(2);
}

function renderInference(risk, inference) {
  const confidence = inference.confidence;
  const confidenceLabel = {
    high: "Kết quả gợi ý",
    medium: "Kết quả gần nhất",
    low: "Checklist chung"
  }[confidence];

  manualRiskSelect.value = risk.id;
  confidenceBadge.textContent = confidenceLabel;
  confidenceBadge.dataset.confidence = confidence;
  suggestedRiskName.textContent = risk.id === "GEN" ? "Checklist chung" : `${risk.id} - ${risk.name}`;
  analysisNote.textContent = buildAnalysisNote(risk, inference);
  threatText.textContent = risk.threat;
  weaknessText.textContent = risk.vulnerability;
  confirmRiskButton.textContent = risk.id === "GEN" ? "Sử dụng checklist chung" : "Sử dụng checklist này";
  confirmRiskButton.classList.remove("hidden");
  renderMatchedKeywords(inference);
  analysisCard.classList.remove("hidden");
}

function showAnalysisMessage(message, confidence) {
  suggestedRisk = genericRisk;
  manualRiskSelect.value = "GEN";
  confidenceBadge.textContent = confidence === "low" ? "Cần bổ sung thông tin" : "Thông báo";
  confidenceBadge.dataset.confidence = confidence;
  suggestedRiskName.textContent = "Chưa thể tiếp tục";
  analysisNote.textContent = message;
  threatText.textContent = "Chưa có dữ liệu";
  weaknessText.textContent = "Chưa có dữ liệu";
  matchedKeywordBox.classList.add("hidden");
  confirmRiskButton.classList.add("hidden");
  analysisCard.classList.remove("hidden");
}

function confirmSuggestedRisk() {
  activeRisk = getRiskById(manualRiskSelect.value) || suggestedRisk || genericRisk;
  renderLikelihoodChecklist(activeRisk);
  proceedChecklistButton.disabled = false;
  saveStatus.classList.add("hidden");
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function inferRiskFromText(inputText, library, selectedAssetId) {
  const normalizedInput = normalizeText(inputText);
  let bestMatch = null;
  let bestScore = 0;
  let bestKeywordScore = 0;
  let bestMatchedKeywords = [];
  const rankedMatches = [];

  library.forEach((risk) => {
    let score = 0;
    let keywordScore = 0;
    const matchedKeywords = [];
    const matchedKeywordSet = new Set();

    risk.keywords.forEach((keyword) => {
      const keywordText = typeof keyword === "string" ? keyword : keyword.text;
      const normalizedKeyword = normalizeText(keywordText);
      if (normalizedInput.includes(normalizedKeyword) && !matchedKeywordSet.has(normalizedKeyword)) {
        const weight = typeof keyword === "string"
          ? (keywordText.trim().includes(" ") ? 2 : 1)
          : keyword.weight;
        score += weight;
        keywordScore += weight;
        matchedKeywords.push(keywordText);
        matchedKeywordSet.add(normalizedKeyword);
      }
    });

    if (keywordScore > 0 && risk.relatedAssets.includes(selectedAssetId)) {
      score += 1;
    }

    if (score > 0) {
      rankedMatches.push({ risk, score, keywordScore, matchedKeywords });
    }

    if (score > bestScore) {
      bestScore = score;
      bestKeywordScore = keywordScore;
      bestMatch = risk;
      bestMatchedKeywords = matchedKeywords;
    }
  });

  rankedMatches.sort((a, b) => b.score - a.score);

  if (bestKeywordScore === 0) {
    return {
      matchedRisk: null,
      confidence: "low",
      score: 0,
      matchedKeywords: [],
      alternatives: rankedMatches.slice(0, 3)
    };
  }

  const confidence = bestScore >= 4 ? "high" : "medium";

  return {
    matchedRisk: bestMatch,
    confidence,
    score: bestScore,
    matchedKeywords: bestMatchedKeywords,
    alternatives: rankedMatches.slice(0, 3)
  };
}

function buildAnalysisNote(risk, inference) {
  if (risk.id === "GEN") {
    return "Chưa nhận diện rõ nhóm rủi ro. App sẽ dùng checklist chung để tiếp tục đánh giá.";
  }

  if (inference.confidence === "high") {
    return "Hệ thống gợi ý nhóm rủi ro phù hợp nhất. Vui lòng xác nhận để tiếp tục.";
  }

  return "Hệ thống có gợi ý gần nhất. Vui lòng kiểm tra tên nhóm rủi ro trước khi tiếp tục.";
}

function renderMatchedKeywords(inference) {
  if (!inference.matchedKeywords || inference.matchedKeywords.length === 0) {
    matchedKeywordBox.classList.add("hidden");
    return;
  }

  matchedKeywordText.textContent = inference.matchedKeywords.join(", ");
  matchedKeywordBox.classList.remove("hidden");
}

function handleManualRiskChange() {
  suggestedRisk = getRiskById(manualRiskSelect.value) || genericRisk;
  suggestedRiskName.textContent = suggestedRisk.id === "GEN" ? "Checklist chung" : `${suggestedRisk.id} - ${suggestedRisk.name}`;
  threatText.textContent = suggestedRisk.threat;
  weaknessText.textContent = suggestedRisk.vulnerability;
  confirmRiskButton.textContent = suggestedRisk.id === "GEN" ? "Sử dụng checklist chung" : "Sử dụng checklist này";
  proceedChecklistButton.disabled = true;
}

function renderLikelihoodChecklist(risk) {
  likelihoodChecklist.innerHTML = risk.likelihoodQuestions.map((question, index) => renderRadioQuestion({
    group: "likelihood",
    index,
    question,
    options: [
      { label: "Có", value: 0 },
      { label: "Có một phần", value: 1 },
      { label: "Không", value: 2 }
    ]
  })).join("");
}

function renderImpactChecklist() {
  impactChecklist.innerHTML = impactQuestions.map((question, index) => renderRadioQuestion({
    group: "impact",
    index,
    question,
    options: [
      { label: "Có", value: 1 },
      { label: "Không", value: 0 }
    ]
  })).join("");
}

function renderRadioQuestion({ group, index, question, options }) {
  const buttons = options.map((option) => `
    <label class="choice-pill">
      <input type="radio" name="${group}-${index}" value="${option.value}">
      <span>${option.label}</span>
    </label>
  `).join("");

  return `
    <div class="checklist-item">
      <p>${question}</p>
      <div class="choice-row">${buttons}</div>
    </div>
  `;
}

function showStep(step) {
  if (step > 1 && !activeRisk) {
    saveStatus.textContent = "Vui lòng chọn nhóm rủi ro và nhập mô tả trước khi tiếp tục.";
    saveStatus.classList.remove("hidden");
    return;
  }

  if (step === 4 && !currentResult) {
    calculateRisk();
    return;
  }

  document.querySelectorAll(".wizard-page").forEach((page) => {
    page.classList.toggle("active", Number(page.dataset.step) === step);
  });

  document.querySelectorAll(".step-dot").forEach((dot) => {
    dot.classList.toggle("active", Number(dot.dataset.stepTarget) === step);
  });
}

function calculateRisk() {
  const risk = activeRisk || genericRisk;
  const likelihoodAnswers = collectAnswers("likelihood", risk.likelihoodQuestions.length);
  const impactAnswers = collectAnswers("impact", impactQuestions.length);

  if (!likelihoodAnswers || !impactAnswers) {
    saveStatus.textContent = "Vui lòng trả lời đầy đủ checklist trước khi xem kết quả.";
    saveStatus.classList.remove("hidden");
    return;
  }

  const controlGapScore = sum(likelihoodAnswers);
  const impactTotal = sum(impactAnswers);
  const likelihood = mapLikelihood(controlGapScore);
  const impact = mapImpact(impactTotal);
  const riskScore = likelihood.score * impact.score;
  const level = mapRiskLevel(riskScore);

  currentResult = {
    riskId: risk.id,
    riskGroup: risk.id === "GEN" ? risk.name : `${risk.id} - ${risk.name}`,
    asset: getSelectedAssetLabel(),
    description: riskDescription.value.trim(),
    threat: risk.threat,
    weakness: risk.vulnerability,
    controlGapScore,
    likelihood,
    impactTotal,
    impact,
    riskScore,
    level,
    suggestions: risk.suggestions,
    assessedAt: new Date().toISOString()
  };

  renderResult(currentResult);
  saveStatus.classList.add("hidden");
  showStep(4);
}

function collectAnswers(group, count) {
  const values = [];
  for (let index = 0; index < count; index += 1) {
    const checked = document.querySelector(`input[name="${group}-${index}"]:checked`);
    if (!checked) return null;
    values.push(Number(checked.value));
  }
  return values;
}

function renderResult(result) {
  resultPanel.innerHTML = `
    <div class="result-grid">
      <div class="result-card">
        <span>Khả năng xảy ra</span>
        <strong>${result.likelihood.score} - ${result.likelihood.label}</strong>
      </div>
      <div class="result-card">
        <span>Mức độ ảnh hưởng</span>
        <strong>${result.impact.score} - ${result.impact.label}</strong>
      </div>
      <div class="result-card">
        <span>Điểm rủi ro</span>
        <strong>${result.riskScore}</strong>
      </div>
      <div class="result-card ${result.level.className}">
        <span>Mức rủi ro</span>
        <strong>${result.level.label}</strong>
      </div>
    </div>
    <div class="treatment-box">
      <h4>Biện pháp gợi ý</h4>
      <ul>${result.suggestions.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
}

async function saveRiskRecord() {
  if (!currentResult) return;

  const currentUser = getCurrentUser();
  saveRiskButton.disabled = true;

  try {
    await apiRequest("/api/risk-records", {
      method: "POST",
      body: JSON.stringify({
        userId: currentUser ? currentUser.id : null,
        username: currentUser ? currentUser.username : null,
        result: currentResult
      })
    });

    saveStatus.textContent = "Đã lưu kết quả vào hồ sơ rủi ro trong MySQL.";
    saveStatus.classList.remove("hidden");
    await loadRiskRecords();
  } catch (error) {
    saveStatus.textContent = error.message || "Không thể lưu hồ sơ rủi ro vào MySQL.";
    saveStatus.classList.remove("hidden");
  } finally {
    saveRiskButton.disabled = false;
  }
}

function validateRequired(input, errorElement) {
  const valid = input.value.trim().length > 0;
  input.classList.toggle("input-invalid", !valid);
  errorElement.classList.toggle("hidden", valid);
  return valid;
}

function togglePassword() {
  const show = passwordInput.type === "password";
  passwordInput.type = show ? "text" : "password";
  passwordToggle.textContent = show ? "Hide" : "Show";
  passwordToggle.setAttribute("aria-label", show ? "Ẩn mật khẩu" : "Hiện mật khẩu");
}

function clearMessages() {
  loginError.classList.add("hidden");
  usernameInput.classList.remove("input-invalid");
  passwordInput.classList.remove("input-invalid");
  usernameError.classList.add("hidden");
  passwordError.classList.add("hidden");
}

function saveSession(user) {
  const storage = rememberInput.checked ? localStorage : sessionStorage;
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY);
  storage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function getCurrentUser() {
  return readStoredUser(localStorage) || readStoredUser(sessionStorage);
}

function readStoredUser(storage) {
  try {
    return JSON.parse(storage.getItem(STORAGE_KEY));
  } catch (error) {
    return null;
  }
}

function populateAssetSelect() {
  assetSelect.innerHTML = assets.map((asset) => (
    `<option value="${asset.id}">${asset.id} - ${asset.name}</option>`
  )).join("");
  assetSelect.value = "TS03";
}

function populateManualRiskSelect() {
  manualRiskSelect.innerHTML = [
    `<option value="GEN">Checklist chung</option>`,
    ...riskLibrary.map((risk) => `<option value="${risk.id}">${risk.id} - ${risk.name}</option>`)
  ].join("");
}

function populateRiskSelect() {
  riskSelect.innerHTML = riskLibrary.map((risk) => (
    `<option value="${risk.id}">${risk.id} - ${risk.name}</option>`
  )).join("");
  riskSelect.value = "RR02";
}

function resetCurrentAssessment() {
  activeRisk = null;
  currentResult = null;
  proceedChecklistButton.disabled = true;
  resultPanel.innerHTML = "";
  saveStatus.classList.add("hidden");
  analysisCard.classList.add("hidden");
}

function getRiskById(riskId) {
  if (riskId === "GEN") return genericRisk;
  return riskLibrary.find((risk) => risk.id === riskId);
}

function getSelectedAssetLabel() {
  const asset = assets.find((item) => item.id === assetSelect.value);
  return asset ? `${asset.id} - ${asset.name}` : assetSelect.value;
}

function showDashboard(user) {
  loginPage.classList.add("hidden");
  dashboardPage.classList.remove("hidden");
  userSummary.textContent = formatUserDisplayName(user);
  document.title = "Dashboard - Library Risk Assessment";
  loadRiskRecords();
}

function formatUserDisplayName(user) {
  return user.username === "admin" ? "Người dùng" : user.username;
}

function handleLogout() {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY);
  loginForm.reset();
  clearMessages();
  dashboardPage.classList.add("hidden");
  loginPage.classList.remove("hidden");
  document.title = "Đăng nhập - Library Risk Assessment";
}

async function loadRiskRecords() {
  if (!riskRecordsBody) return;

  const currentUser = getCurrentUser();
  const query = currentUser
    ? `?username=${encodeURIComponent(currentUser.username)}`
    : "";

  riskRecordsBody.innerHTML = `<tr><td class="empty-row" colspan="9">Đang tải hồ sơ...</td></tr>`;
  recordDetailPanel.classList.add("hidden");

  try {
    const records = await apiRequest(`/api/risk-records${query}`);
    renderRiskRecords(records);
  } catch (error) {
    riskRecordsBody.innerHTML = `
      <tr>
        <td class="empty-row" colspan="9">${escapeHtml(error.message || "Không thể đọc hồ sơ từ MySQL.")}</td>
      </tr>
    `;
  }
}

function renderRiskRecords(records) {
  savedRiskRecords = records || [];

  if (!records || records.length === 0) {
    riskRecordsBody.innerHTML = `<tr><td class="empty-row" colspan="9">Chưa có hồ sơ rủi ro.</td></tr>`;
    recordDetailPanel.classList.add("hidden");
    return;
  }

  riskRecordsBody.innerHTML = records.map((record) => `
    <tr>
      <td>${escapeHtml(record.riskId)}</td>
      <td>${escapeHtml(record.asset)}</td>
      <td>${escapeHtml(record.description)}</td>
      <td>${escapeHtml(formatRecordMetric(record.likelihoodScore, record.likelihoodLabel))}</td>
      <td>${escapeHtml(formatRecordMetric(record.impactScore, record.impactLabel))}</td>
      <td>${escapeHtml(String(record.riskScore))}</td>
      <td>${escapeHtml(record.riskLevel)}</td>
      <td>${escapeHtml(record.assessedAt)}</td>
      <td>
        <button class="table-action-button" type="button" data-record-id="${escapeHtml(record.id)}">
          Xem
        </button>
      </td>
    </tr>
  `).join("");
}

function handleRiskRecordClick(event) {
  const button = event.target.closest("[data-record-id]");
  if (!button) return;

  const recordId = Number(button.dataset.recordId);
  const record = savedRiskRecords.find((item) => Number(item.id) === recordId);
  if (!record) return;

  renderRiskRecordDetail(record);
}

function renderRiskRecordDetail(record) {
  const suggestions = Array.isArray(record.suggestions) ? record.suggestions : [];

  recordDetailPanel.innerHTML = `
    <div class="detail-heading">
      <div>
        <span>Hồ sơ đã lưu</span>
        <h3>${escapeHtml(record.riskGroup)}</h3>
      </div>
      <strong class="${getRiskLevelClass(record.riskLevel)}">${escapeHtml(record.riskLevel)}</strong>
    </div>

    <div class="detail-grid">
      <div>
        <span>Tài sản</span>
        <p>${escapeHtml(record.asset)}</p>
      </div>
      <div>
        <span>Ngày đánh giá</span>
        <p>${escapeHtml(record.assessedAt)}</p>
      </div>
      <div>
        <span>Khả năng xảy ra</span>
        <p>${escapeHtml(formatRecordMetric(record.likelihoodScore, record.likelihoodLabel))}</p>
      </div>
      <div>
        <span>Mức độ ảnh hưởng</span>
        <p>${escapeHtml(formatRecordMetric(record.impactScore, record.impactLabel))}</p>
      </div>
      <div>
        <span>Điểm rủi ro</span>
        <p>${escapeHtml(String(record.riskScore))}</p>
      </div>
      <div>
        <span>Mã rủi ro</span>
        <p>${escapeHtml(record.riskId)}</p>
      </div>
    </div>

    <div class="detail-block">
      <span>Mô tả rủi ro</span>
      <p>${escapeHtml(record.description)}</p>
    </div>

    <div class="detail-grid two">
      <div>
        <span>Mối đe dọa</span>
        <p>${escapeHtml(record.threat)}</p>
      </div>
      <div>
        <span>Điểm yếu/lỗ hổng</span>
        <p>${escapeHtml(record.weakness)}</p>
      </div>
    </div>

    <div class="detail-block">
      <span>Biện pháp xử lý gợi ý</span>
      <ul>${suggestions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
  `;

  recordDetailPanel.classList.remove("hidden");
  recordDetailPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function getRiskLevelClass(level) {
  if (level === "Thấp") return "detail-level low";
  if (level === "Trung bình") return "detail-level medium";
  if (level === "Cao") return "detail-level high";
  return "detail-level critical";
}

function formatRecordMetric(score, label) {
  return `${score} - ${label}`;
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : null;

  if (!response.ok) {
    throw new Error(data && data.message ? data.message : "Không thể kết nối API.");
  }

  return data;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

function mapLikelihood(score) {
  if (score <= 1) return { score: 1, label: "Rất thấp" };
  if (score <= 3) return { score: 2, label: "Thấp" };
  if (score <= 5) return { score: 3, label: "Trung bình" };
  if (score <= 7) return { score: 4, label: "Cao" };
  return { score: 5, label: "Rất cao" };
}

function mapImpact(score) {
  if (score <= 1) return { score: 1, label: "Rất thấp" };
  if (score === 2) return { score: 2, label: "Thấp" };
  if (score === 3) return { score: 3, label: "Trung bình" };
  if (score === 4) return { score: 4, label: "Cao" };
  return { score: 5, label: "Rất cao" };
}

function mapRiskLevel(score) {
  if (score <= 4) return { label: "Thấp", className: "risk-low" };
  if (score <= 9) return { label: "Trung bình", className: "risk-medium" };
  if (score <= 16) return { label: "Cao", className: "risk-high" };
  return { label: "Rất cao", className: "risk-critical" };
}
