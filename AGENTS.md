# AGENTS.md — TFT: HỘI TỤ CHIẾN THUẬT

## 1. Mục đích của tệp này

Tệp này là đặc tả bắt buộc dành cho mọi AI hoặc lập trình viên tham gia xây dựng bản web game của **TFT: Hội Tụ Chiến Thuật**.

Mục tiêu là tạo **một trò chơi hoàn chỉnh, có thể chơi được từ đầu đến cuối**, không phải bản trình diễn giao diện, không phải mô phỏng rút gọn và không được tự ý bỏ bớt luật vì khó triển khai.

Nếu mã nguồn, thiết kế giao diện hoặc hành vi trong game mâu thuẫn với tệp này và Rulebook v4.0, phải ưu tiên theo thứ tự:

1. Luật ghi trực tiếp trên thẻ trong dữ liệu game.
2. Rulebook v4.0.
3. AGENTS.md này.
4. Thiết kế giao diện hoặc quyết định kỹ thuật cũ.

Nếu phát hiện mâu thuẫn thật sự giữa Rulebook và dữ liệu, không được âm thầm đoán. Phải ghi lỗi rõ ràng, thêm kiểm thử tái hiện và chọn cách xử lý ít làm thay đổi luật nhất.

---

## 2. Ràng buộc ngôn ngữ

Toàn bộ giao diện người chơi phải dùng **tiếng Việt chuẩn hóa**.

Không dùng thuật ngữ tiếng Anh trong giao diện, hướng dẫn, thông báo, nhật ký trận hoặc tên nút, ngoại trừ:

- tên riêng như TFT, Ornn, Jinx;
- tên thư viện, đường dẫn, tên biến, tên hàm, khóa dữ liệu và các định danh kỹ thuật nằm trong mã nguồn;
- nội dung kỹ thuật chỉ dành cho nhà phát triển.

Thuật ngữ bắt buộc trong giao diện:

- Vàng
- Kinh nghiệm
- Cấp
- Máu
- Điểm Danh Vọng
- Chợ Chung
- Kho Tướng Chung
- Hàng Hoàn Trả
- Băng Ghế
- Hàng Giữ
- Giai Đoạn
- Vòng Đấu
- Nhịp Chuẩn Bị
- Quyền Ưu Tiên
- Vòng Kỳ Ngộ
- Vòng Chọn Chung
- Lõi Nâng Cấp
- Thành Phần
- Trang Bị Hoàn Chỉnh
- Ảnh Chiếu
- Tộc/Hệ
- Tuyến Trước
- Hỏa Lực
- Hợp Lực
- Thử Thách Trung Lập
- Mục Tiêu Cá Nhân
- Mục Tiêu Công Khai

Không tự thay bằng các từ như “shop”, “round”, “turn”, “bench”, “augment”, “encounter”, “carousel”, “combat”, “level”, “experience” trong giao diện người chơi.

---

## 3. Mục tiêu sản phẩm

Xây dựng web game hỗ trợ đầy đủ **2–8 người chơi trên cùng thiết bị hoặc nhiều người dùng cục bộ**, tùy chế độ triển khai.

Phiên bản đầu tiên bắt buộc có thể:

- tạo ván;
- chọn số người chơi từ 2 đến 8;
- thiết lập đầy đủ Kho Tướng Chung theo số người;
- chạy đủ 12 Vòng Đấu;
- chạy đủ 4 Vòng Kỳ Ngộ;
- chọn đủ 3 Lõi Nâng Cấp;
- vận hành Chợ Chung dùng chung;
- thực hiện đủ 4 Nhịp Chuẩn Bị mỗi vòng;
- xử lý Mua Tướng, Làm Mới Chợ, Luyện Cấp, Giữ Tướng và Tích Lũy;
- quản lý Băng Ghế, Hàng Giữ và Kho Tướng;
- ghép 2★ và 3★;
- trang bị và chuyển Trang Bị;
- tính Tộc/Hệ;
- phân cặp Giao Tranh cho 2–8 người;
- tạo và xử lý Ảnh Chiếu khi số người lẻ;
- chạy Thử Thách Trung Lập;
- chạy Vòng Chọn Chung;
- theo dõi Mục Tiêu;
- tính Điểm Danh Vọng và phá hòa;
- lưu và tải lại ván đang chơi;
- tái hiện chính xác trạng thái sau khi tải lại.

Không được coi game là hoàn thành nếu chỉ có giao diện Chợ và nút “đánh tự động”.

---

## 4. Trải nghiệm mong muốn

Web phải có cảm giác như một game chiến thuật hoàn chỉnh, không giống bảng quản trị, trang dữ liệu hoặc ứng dụng CRUD.

Ưu tiên:

- bàn chơi chiếm phần lớn màn hình;
- thẻ tướng là vật thể trực quan chính;
- kéo thả tướng giữa Chợ, Băng Ghế và sân;
- hiệu ứng ghép sao rõ ràng;
- hiệu ứng đổi Cấp rõ ràng;
- phản hồi âm thanh và chuyển động cho mua tướng, ghép sao, nhận Vàng, nhận Kinh nghiệm, mất Máu, hoàn thành Mục Tiêu;
- trạng thái Chợ Chung luôn nhìn thấy rõ;
- người chơi dễ nhận ra thẻ nào đang bị tranh mua;
- không che thông tin quan trọng bằng cửa sổ quá lớn.

Không dùng thiết kế “một khối chữ + nhiều nút vuông” làm giao diện chính.

---

## 5. Nguyên tắc kiến trúc

Game phải được xây theo kiến trúc **trạng thái quyết định hoàn toàn**.

Mọi hành động người chơi phải đi qua một bộ máy luật trung tâm. Giao diện không được tự sửa trực tiếp trạng thái.

Cấu trúc khuyến nghị:

```text
src/
  app/
  game/
    data/
    engine/
    rules/
    state/
    actions/
    scoring/
    pairing/
    encounters/
    objectives/
    combat/
    validation/
  ui/
    board/
    market/
    player/
    cards/
    overlays/
    effects/
  audio/
  assets/
  tests/
```

Bộ máy luật phải chạy độc lập với giao diện để có thể kiểm thử hoàn toàn bằng mã.

---

## 6. Mô hình trạng thái ván chơi

Trạng thái tối thiểu phải có dạng tương đương:

```ts
interface TrangThaiVan {
  phienBanDuLieu: string;
  hatNgauNhien: string;
  soNguoiChoi: number;
  giaiDoan: 1 | 2 | 3 | 4;
  vong: number;
  nhipChuanBi: number;
  pha: PhaVan;
  nguoiUuTien: string;
  nguoiChoi: NguoiChoi[];
  choChung: OCho[];
  khoTuong: Record<BacTuong, string[]>;
  hangHoanTra: Record<BacTuong, string[]>;
  loiDangDung: LoiNangCapState[];
  kyNgoHienTai?: KyNgoState;
  thuThachHienTai?: ThuThachState;
  mucTieuCongKhai: MucTieuState[];
  lichSuGiaoTranh: KetQuaGiaoTranh[];
  nhatKy: SuKienGame[];
}
```

Không dùng trạng thái rời rạc nằm trong nhiều thành phần giao diện làm nguồn dữ liệu thật.

---

## 7. Trạng thái người chơi

Mỗi người chơi tối thiểu phải lưu:

```ts
interface NguoiChoi {
  id: string;
  ten: string;
  mauNhanDien: string;
  mau: number;
  vang: number;
  kinhNghiem: number;
  cap: number;
  diemDanhVong: number;
  chuoi: {
    loai: 'thang' | 'thua' | 'khong';
    soLan: number;
  };
  san: LaTuong[];
  bangGhe: LaTuong[];
  hangGiu: HangGiuItem[];
  thanhPhan: string[];
  trangBiRoi: string[];
  loiNangCap: string[];
  mucTieuCaNhan: MucTieuState[];
  hanhDongDaDungTrongVong: string[];
  soTranThang: number;
  lichSuDoiThu: string[];
}
```

Máu được phép bằng 0. Người chơi có 0 Máu vẫn tiếp tục chơi đến hết Vòng 12.

---

## 8. Thẻ tướng

Tướng phải được thể hiện bằng **thẻ bài**, không phải quân token.

Một tướng trong dữ liệu tối thiểu gồm:

```ts
interface TuongDuLieu {
  id: string;
  ten: string;
  bac: 1 | 2 | 3 | 4 | 5;
  toc: string;
  he: string;
  chiSo: {
    motSao: BoChiSo;
    haiSao: BoChiSo;
    baSao?: BoChiSo;
  };
  kyNang: {
    motSao: HieuUng[];
    haiSao: HieuUng[];
    baSao?: HieuUng[];
  };
  anhThe: string;
  gioiHanViTri?: DieuKienViTri[];
}
```

`BoChiSo` phải chứa:

- Tuyến Trước;
- Hỏa Lực;
- Hợp Lực.

Không tạo một biến “sức mạnh tổng” duy nhất để thay thế ba chỉ số.

---

## 9. Số bản sao tướng

Bộ máy phải tự cấu hình số bản sao theo số người chơi:

| Số người | Bậc 1 | Bậc 2 | Bậc 3 | Bậc 4 | Bậc 5 |
|---|---:|---:|---:|---:|---:|
| 2–3 | 6 | 6 | 5 | 4 | 3 |
| 4–5 | 8 | 7 | 6 | 5 | 4 |
| 6–8 | 10 | 9 | 8 | 6 | 5 |

Mỗi con số là số bản sao **cho từng tướng**, không phải tổng số thẻ của cả bậc.

Phải có kiểm thử xác nhận tổng thẻ còn trong Kho + Chợ + Băng Ghế + sân + Hàng Giữ + Hàng Hoàn Trả luôn bằng tổng số thẻ ban đầu của từng tướng.

---

## 10. Chợ Chung

Không có Chợ riêng từng người.

Kích thước:

- 2–3 người: 8 ô;
- 4–5 người: 12 ô;
- 6–8 người: 16 ô.

Mỗi dãy có 4 ô.

Cấu trúc bậc theo Giai Đoạn phải lấy từ dữ liệu cấu hình, không viết cứng rải rác trong giao diện.

```ts
const CAU_TRUC_CHO = {
  '2-3': {
    1: [5,3,0,0,0],
    2: [3,3,2,0,0],
    3: [1,2,3,2,0],
    4: [1,1,2,2,2]
  },
  '4-5': {
    1: [7,5,0,0,0],
    2: [4,4,4,0,0],
    3: [2,3,4,3,0],
    4: [1,2,3,3,3]
  },
  '6-8': {
    1: [9,7,0,0,0],
    2: [5,6,5,0,0],
    3: [3,4,5,4,0],
    4: [2,3,4,4,3]
  }
};
```

Đầu mỗi Vòng Đấu:

1. toàn bộ thẻ Chợ còn lại được đưa vào Hàng Hoàn Trả;
2. Hàng Hoàn Trả được hợp nhất lại vào đúng Kho;
3. mở Chợ mới theo cấu trúc Giai Đoạn.

Khi một tướng được mua, ô đó được bổ sung ngay bằng thẻ cùng bậc.

---

## 11. Hàng Hoàn Trả

Mọi thẻ tướng rời quyền sở hữu hoặc bị thay khỏi Chợ phải đi qua Hàng Hoàn Trả.

Không được tạo bản sao mới từ hư không.

Khi một Kho bậc hết giữa vòng:

1. nếu Hàng Hoàn Trả bậc đó còn thẻ, xáo lại để tạo Kho mới;
2. nếu cả hai đều hết, ô Chợ bậc đó để trống.

Đây là hành vi bắt buộc để cơ chế tranh tướng có ý nghĩa.

---

## 12. Trình tự toàn ván

Ván có 12 Vòng Đấu:

- Giai Đoạn I: Vòng 1–3;
- Giai Đoạn II: Vòng 4–6;
- Giai Đoạn III: Vòng 7–9;
- Giai Đoạn IV: Vòng 10–12.

Vòng Kỳ Ngộ trước:

- Vòng 1;
- Vòng 4;
- Vòng 7;
- Vòng 10.

Lõi Nâng Cấp trước:

- Vòng 2: Bạc;
- Vòng 6: Vàng;
- Vòng 10: Đa Sắc.

Thử Thách Trung Lập:

- Vòng 3;
- Vòng 6;
- Vòng 9;
- Vòng 12.

Vòng Chọn Chung:

- sau Vòng 3;
- sau Vòng 6;
- sau Vòng 9.

Các Vòng Giao Tranh:

- 1, 2, 4, 5, 7, 8, 10, 11.

---

## 13. Trình tự một Vòng Đấu

Bộ máy luật phải đi qua đúng thứ tự:

1. Thu Nhập.
2. Nhận 2 Kinh nghiệm tự nhiên.
3. Mở Chợ Chung.
4. Nhịp Chuẩn Bị 1.
5. Nhịp Chuẩn Bị 2.
6. Nhịp Chuẩn Bị 3.
7. Nhịp Chuẩn Bị 4.
8. Sắp Đội Hình.
9. Giao Tranh hoặc Thử Thách Trung Lập.
10. Kiểm tra Mục Tiêu.
11. Dọn Vòng.
12. Vòng Chọn Chung nếu có.

Không cho phép giao diện bỏ qua một pha nếu trạng thái chưa hợp lệ.

---

## 14. Thu nhập

Mỗi vòng:

- +5 Vàng cơ bản;
- +Lãi;
- +Chuỗi;
- +hiệu ứng thẻ.

Lãi:

- 0–9 Vàng: +0;
- 10–19: +1;
- 20–29: +2;
- 30 trở lên: +3.

Chuỗi thắng và Chuỗi thua:

- 2–3 kết quả liên tiếp: +1;
- 4–5: +2;
- 6 trở lên: +3.

Thử Thách Trung Lập không thay đổi Chuỗi.

---

## 15. Kinh nghiệm và Cấp

Mỗi vòng mọi người nhận +2 Kinh nghiệm tự nhiên.

Ngưỡng:

```text
1→2: 2
2→3: 4
3→4: 6
4→5: 8
5→6: 12
6→7: 18
7→8: 24
8→9: 32
9→10: 44
```

Tổng từ Cấp 1 đến Cấp 10: 150.

Số tướng tối đa trên sân = Cấp hiện tại.

Không được tự động bán hoặc loại tướng khi người chơi giảm giới hạn do hiệu ứng đặc biệt; thay vào đó trạng thái phải yêu cầu người chơi chỉnh đội hình trước khi tiếp tục.

---

## 16. Bốn Nhịp Chuẩn Bị

Mỗi Nhịp:

1. mọi người chọn một hành động;
2. khóa lựa chọn;
3. lật đồng thời;
4. hành động không xung đột giải quyết đồng thời;
5. hành động liên quan Chợ giải quyết theo Quyền Ưu Tiên;
6. chạy toàn bộ hiệu ứng phát sinh;
7. cho phép Hành Động Phụ;
8. xác nhận kết thúc Nhịp.

Với chế độ cùng thiết bị, cần giao diện chọn kín lần lượt hoặc che màn hình để người sau không biết lựa chọn trước đó.

---

## 17. Năm Hành Động

### Mua Tướng

- mua tối đa 2 tướng;
- nguồn: Chợ Chung hoặc Hàng Giữ;
- trả đúng giá;
- thẻ mua từ Chợ được bổ sung ngay cùng bậc.

### Làm Mới Chợ

- giá 2 Vàng;
- chọn đúng 1 dãy 4 ô;
- trả bốn thẻ cũ vào Hàng Hoàn Trả;
- mở bốn thẻ mới đúng bậc của từng ô;
- người thực hiện được mua ngay tối đa 1 tướng trong dãy vừa mở.

### Luyện Cấp

- 4 Vàng = 4 Kinh nghiệm;
- tối đa 3 lần mua trong cùng một hành động;
- tăng Cấp ngay khi đủ ngưỡng.

### Giữ Tướng

- trả 1 Vàng đặt cọc;
- chuyển 1 tướng từ Chợ vào Hàng Giữ;
- bổ sung Chợ ngay;
- tối đa 2 tướng đang giữ;
- phải mua trước khi kết thúc Vòng Đấu kế tiếp;
- khi mua, trừ 1 Vàng đặt cọc khỏi giá;
- quá hạn: mất cọc, trả tướng vào Hàng Hoàn Trả.

### Tích Lũy

- +2 Vàng;
- tối đa 1 lần mỗi Vòng Đấu.

---

## 18. Hành Động Phụ

Không tốn Nhịp:

- bán tướng;
- ghép sao;
- chuyển tướng giữa sân và Băng Ghế;
- đổi vị trí;
- gắn hoặc chuyển Trang Bị;
- xác nhận Mục Tiêu đã hoàn thành.

Chỉ được thực hiện trong thời điểm Rulebook cho phép.

---

## 19. Ghép sao

- 3 bản cùng tên → 2★;
- 6 bản cùng tên → 3★.

Trong trạng thái dữ liệu, không được xóa dấu vết số bản sao.

Khuyến nghị biểu diễn:

```ts
interface LaTuong {
  tuongId: string;
  soBanSao: 1 | 3 | 6;
  sao: 1 | 2 | 3;
  trangBi: string[];
}
```

Khi bán, phải hoàn trả đúng số bản sao về Hàng Hoàn Trả.

---

## 20. Băng Ghế và Hàng Giữ

Băng Ghế:

- 8 ô;
- tính là tướng đã rời Kho;
- không kích hoạt Tộc/Hệ;
- được ghép sao.

Hàng Giữ:

- 2 ô;
- tướng chưa được xem là sở hữu hoàn toàn;
- vẫn rời Kho;
- không ghép sao;
- không kích hoạt Tộc/Hệ;
- có hạn dùng.

Giao diện phải hiển thị rõ bộ đếm thời hạn của từng tướng trong Hàng Giữ.

---

## 21. Trang Bị

- 2 Thành Phần tạo 1 Trang Bị Hoàn Chỉnh;
- mỗi tướng tối đa 3 Trang Bị;
- được chuyển tự do trong Nhịp Chuẩn Bị trừ khi hiệu ứng khóa;
- bán tướng không làm mất Trang Bị;
- công thức phải được định nghĩa bằng dữ liệu.

Không viết riêng từng công thức bằng điều kiện `if` trong thành phần giao diện.

---

## 22. Tộc/Hệ

Bộ máy Tộc/Hệ phải là hệ thống dữ liệu tổng quát.

Mỗi Tộc/Hệ có:

```ts
interface TocHeDuLieu {
  id: string;
  ten: string;
  moc: number[];
  hieuUngTheoMoc: Record<number, HieuUng[]>;
}
```

Chỉ tướng trên sân tính Tộc/Hệ.

Hai thẻ cùng tên trên sân chỉ đóng góp một lần vào số lượng của cùng Tộc/Hệ.

Tộc/Hệ có thể tác động tới kinh tế, Kinh nghiệm, Chợ, Trang Bị, Kỳ Ngộ, Mục Tiêu, ba chỉ số giao tranh hoặc điểm cuối ván.

Không giả định Tộc/Hệ chỉ là cộng sức mạnh.

---

## 23. Vòng Kỳ Ngộ

Không có cơ chế bỏ phiếu Cổng.

Mỗi Kỳ Ngộ có một trong ba kiểu:

- Cá Nhân;
- Chung Sức;
- Mạo Hiểm.

Mỗi thẻ phải định nghĩa:

```ts
interface KyNgoDuLieu {
  id: string;
  ten: string;
  loai: 'ca-nhan' | 'chung-suc' | 'mao-hiem';
  moTa: string;
  luaChon: LuaChonKyNgo[];
  cachGiaiQuyet: string;
}
```

Nếu lựa chọn bí mật, máy khách không được làm lộ lựa chọn của người khác trước khi tất cả khóa lựa chọn.

Kỳ Ngộ phải có lịch sử kết quả để người chơi xem lại.

---

## 24. Lõi Nâng Cấp

Mỗi người tối đa 3 Lõi.

Lựa chọn:

- rút 3;
- chọn 1;
- một lần trong cả ván được bỏ cả 3 và rút lại 3.

Hiệu ứng Lõi phải dùng cùng hệ thống hiệu ứng tổng quát với tướng, Tộc/Hệ và Trang Bị nếu có thể.

Không cho giao diện tự cộng chỉ số Lõi ngoài bộ máy luật.

---

## 25. Giao tranh

Giao tranh dùng ba chỉ số độc lập:

- Tuyến Trước;
- Hỏa Lực;
- Hợp Lực.

Không thay bằng một chỉ số sức mạnh tổng.

Quy trình:

1. tính ba chỉ số của mỗi đội;
2. áp dụng hiệu ứng vị trí;
3. áp dụng Tộc/Hệ;
4. áp dụng Trang Bị;
5. áp dụng Lõi;
6. áp dụng kỹ năng;
7. so từng chỉ số;
8. đội thắng ít nhất 2/3 thắng trận.

Nếu 1 thắng – 1 thua – 1 hòa:

- so tổng Sao;
- nếu tiếp tục hòa: trận Hòa.

Sát thương:

- thắng: 2;
- thắng 3/3: +1;
- tổng Sao cao hơn ít nhất 4: +1;
- thông thường tối đa 4.

Máu tối thiểu 0.

Không loại người chơi khi Máu = 0.

---

## 26. Phân cặp

Cần một mô-đun riêng để tạo phân cặp ổn định cho 2–8 người.

Mục tiêu:

- tránh lặp đối thủ quá sớm;
- mọi người có số trận trực tiếp tương đương;
- với số lẻ, luân phiên người gặp Ảnh Chiếu;
- lịch sử phải xác định được bằng hạt ngẫu nhiên của ván.

Không chọn đối thủ hoàn toàn ngẫu nhiên mỗi vòng.

Phải có kiểm thử cho 2, 3, 4, 5, 6, 7 và 8 người.

---

## 27. Ảnh Chiếu

Ảnh Chiếu là bản sao chỉ đọc của đội hình một người khác tại thời điểm khóa đội hình.

Không chia sẻ tham chiếu có thể sửa.

Người tạo Ảnh Chiếu:

- không mất Máu;
- không thay Chuỗi;
- không nhận thưởng.

Người đấu với Ảnh Chiếu xử lý kết quả như trận bình thường.

---

## 28. Thử Thách Trung Lập

Vòng 3, 6, 9, 12.

Mỗi thẻ có ba ngưỡng:

- Tuyến Trước;
- Hỏa Lực;
- Hợp Lực.

Phần thưởng:

- đạt 1: 1 Thành Phần ngẫu nhiên;
- đạt 2: xem 2, chọn 1;
- đạt 3: xem 3, chọn 1 và chọn +2 Vàng hoặc +2 Kinh nghiệm.

Không mất Máu.

Không thay Chuỗi.

---

## 29. Vòng Chọn Chung

Sau Vòng 3, 6, 9.

Số lựa chọn = số người chơi + 2.

Mỗi lựa chọn gồm:

- 1 tướng;
- 1 Thành Phần.

Thứ tự:

1. Máu thấp hơn;
2. nếu hòa, Điểm Danh Vọng hiện tại thấp hơn;
3. nếu hòa, người có Quyền Ưu Tiên thấp hơn được chọn trước.

Giao diện phải khóa lựa chọn đã bị lấy ngay lập tức.

---

## 30. Mục Tiêu

Mục Tiêu Cá Nhân:

- mỗi người giữ 2;
- bí mật;
- có thể hoàn thành cả hai.

Mục Tiêu Công Khai:

- 3 thẻ;
- người đầu lấy đủ điểm;
- người thứ hai ít hơn 1;
- sau người thứ hai, thẻ đóng.

Hệ thống Mục Tiêu phải hỗ trợ điều kiện theo sự kiện, không quét toàn bộ trạng thái bằng mã đặc thù ở mọi khung hình.

Khuyến nghị dùng bộ lắng nghe sự kiện game.

---

## 31. Điểm Danh Vọng

Điểm cuối ván:

### Giao tranh

- 0–2 thắng: 0;
- 3–4: 2;
- 5–6: 4;
- 7: 5;
- 8: 6.

### Máu

- 0: 0;
- 1–10: 1;
- 11–20: 3;
- 21–30: 5;
- 31–40: 6.

### Cấp

- 1–7: 0;
- 8: 2;
- 9: 4;
- 10: 6.

### Vàng

- mỗi 10 Vàng: +1;
- tối đa 4.

### Đội hình

- mỗi Tộc/Hệ đang kích hoạt: +1, tối đa 6;
- mỗi tướng 3★: +2, tối đa 6.

Sau đó cộng Mục Tiêu, Lõi, Kỳ Ngộ và các hiệu ứng cuối ván.

Phá hòa:

1. Máu;
2. số Mục Tiêu hoàn thành;
3. Cấp;
4. số trận thắng;
5. Vàng;
6. đồng chiến thắng.

---

## 32. Chế độ 2 người

Ngoài luật chung:

- Chợ 8 ô;
- từ Vòng 4, trước khi mở Chợ, rút ngẫu nhiên 2 tướng thuộc các bậc đang xuất hiện và đặt vào khu Bị Tranh Mua;
- hai thẻ này không thể mua trong vòng;
- cuối vòng trả vào Hàng Hoàn Trả.

Đây là quy tắc bắt buộc, không phải tùy chọn.

---

## 33. Chế độ 6–8 người

Bắt buộc tối ưu để không kéo dài vô hạn.

- lựa chọn hành động đồng thời;
- Luyện Cấp và Tích Lũy giải quyết đồng thời;
- chỉ xử lý tuần tự những người đang tác động trực tiếp lên Chợ;
- hiệu ứng hình ảnh không được khóa giao diện quá lâu;
- mọi hoạt ảnh quan trọng phải có khả năng tăng tốc hoặc bỏ qua sau lần xem đầu tiên.

---

## 34. Ngẫu nhiên có thể tái hiện

Mọi hành động ngẫu nhiên phải sử dụng một bộ sinh ngẫu nhiên có hạt.

Không gọi trực tiếp `Math.random()` trong luật game.

Cần lưu `hatNgauNhien` và số bước đã dùng để:

- tải lại ván;
- tái hiện lỗi;
- kiểm thử;
- xem lại trận.

---

## 35. Hệ thống sự kiện

Mọi thay đổi quan trọng phải phát ra sự kiện, ví dụ:

```text
VONG_BAT_DAU
THU_NHAP
KINH_NGHIEM_NHAN
CAP_TANG
CHO_MO
TUONG_MUA
TUONG_BAN
CHO_LAM_MOI
TUONG_GIU
TUONG_HET_HAN_GIU
TUONG_GHEP_2_SAO
TUONG_GHEP_3_SAO
TRANG_BI_GHEP
TOC_HE_KICH_HOAT
KY_NGO_LUA_CHON
GIAO_TRANH_KET_THUC
MAU_THAY_DOI
MUC_TIEU_HOAN_THANH
VONG_KET_THUC
VAN_KET_THUC
```

Nhật ký ván phải được tạo từ các sự kiện này.

---

## 36. Hoàn tác và xác nhận

Không cho phép hoàn tác sau khi hành động đã làm lộ thông tin ngẫu nhiên mới cho người chơi, ví dụ:

- Làm Mới Chợ;
- rút Lõi mới;
- mở kết quả Kỳ Ngộ;
- rút Thành Phần.

Những thao tác không làm lộ thông tin mới như đổi vị trí tướng có thể hoàn tác trong cùng Nhịp trước khi xác nhận sẵn sàng.

---

## 37. Lưu ván

Bắt buộc có lưu tự động:

- sau mỗi Nhịp;
- sau Giao Tranh;
- sau Kỳ Ngộ;
- sau Vòng Chọn Chung;
- khi chuyển Vòng.

Tệp lưu hoặc dữ liệu lưu phải chứa đủ trạng thái để khôi phục chính xác.

Không lưu chỉ giao diện rồi tái tạo ngẫu nhiên lại khi tải.

---

## 38. Phiên bản dữ liệu

Mọi tệp lưu phải có `phienBanDuLieu`.

Khi thay đổi cấu trúc trạng thái, phải có hàm chuyển đổi phiên bản cũ hoặc báo rõ tệp lưu không tương thích.

Không được âm thầm bỏ dữ liệu không hiểu.

---

## 39. Dữ liệu nội dung

Champion, Tộc/Hệ, Trang Bị, Lõi, Kỳ Ngộ, Mục Tiêu và Thử Thách phải nằm trong tệp dữ liệu riêng.

Không viết toàn bộ nội dung vào mã xử lý luật.

Khuyến nghị:

```text
src/game/data/tuong.json
src/game/data/toc-he.json
src/game/data/trang-bi.json
src/game/data/loi-nang-cap.json
src/game/data/ky-ngo.json
src/game/data/muc-tieu.json
src/game/data/thu-thach.json
```

Mỗi tệp phải có lược đồ kiểm tra dữ liệu khi khởi động.

---

## 40. Giao diện Chợ Chung

Chợ phải là khu vực trung tâm dễ nhìn.

Mỗi ô cần hiển thị:

- ảnh tướng;
- tên;
- bậc;
- giá;
- Tộc/Hệ;
- trạng thái đang được người nào chọn nếu hành động đang giải quyết;
- trạng thái trống khi Kho hết.

Không giấu bậc hoặc giá sau thao tác rê chuột trên màn hình cảm ứng.

---

## 41. Giao diện Thẻ Tướng

Mặt thẻ phải đọc được ở kích thước bình thường.

Thông tin ưu tiên:

1. tên;
2. bậc;
3. Sao;
4. Tộc/Hệ;
5. ba chỉ số;
6. Trang Bị;
7. kỹ năng.

Khi thẻ đạt 2★ hoặc 3★, phải có biến đổi trực quan rõ ràng nhưng không làm thay đổi kích thước bố cục gây nhảy giao diện.

---

## 42. Giao diện Bảng Người Chơi

Phải có:

- sân 10 vị trí;
- Băng Ghế 8 ô;
- Hàng Giữ 2 ô;
- Vàng;
- Máu;
- Cấp;
- Kinh nghiệm;
- Lãi dự kiến;
- Chuỗi;
- Lõi;
- Tộc/Hệ đang hoạt động;
- Mục Tiêu đã công khai;
- Trang Bị chưa gắn.

---

## 43. Phản hồi tương tác

Các hành động quan trọng cần phản hồi trực quan và âm thanh riêng:

- mua tướng;
- bán tướng;
- ghép 2★;
- ghép 3★;
- tăng Cấp;
- ghép Trang Bị;
- kích hoạt mốc Tộc/Hệ;
- nhận Lõi;
- hoàn thành Mục Tiêu;
- mất Máu;
- kết thúc Vòng Kỳ Ngộ.

Không dùng cùng một hiệu ứng âm thanh cho mọi thao tác.

---

## 44. Hỗ trợ màn hình nhỏ

Game phải dùng được trên điện thoại, nhưng không được biến thành danh sách thẻ đơn giản.

Trên màn hình nhỏ:

- Chợ Chung có thể cuộn ngang theo dãy;
- sân và Băng Ghế có chế độ phóng to;
- bảng thông tin người chơi thu gọn thành thanh cạnh;
- kéo thả phải có lựa chọn thay thế bằng chạm → chọn vị trí;
- không yêu cầu rê chuột.

---

## 45. Khả năng tiếp cận

Bắt buộc:

- không dùng màu làm dấu hiệu duy nhất;
- có biểu tượng và chữ cho bậc tướng;
- có nhãn mô tả cho nút;
- hỗ trợ điều khiển bàn phím ở máy tính;
- tùy chọn giảm chuyển động;
- âm lượng nhạc và hiệu ứng tách riêng;
- chữ quan trọng đủ tương phản.

---

## 46. Không được làm giả cơ chế

Nghiêm cấm:

- hiển thị nút nhưng chưa có luật phía sau;
- tạo tướng vô hạn khi Kho hết;
- cho mỗi người một Chợ riêng;
- bỏ Hàng Hoàn Trả;
- bỏ Quyền Ưu Tiên;
- gộp ba chỉ số Giao Tranh thành một điểm tổng duy nhất;
- bỏ Ảnh Chiếu ở bàn số lẻ;
- bỏ Kỳ Ngộ và thay bằng hiệu ứng ngẫu nhiên tự động;
- tự động chọn Mục Tiêu hoặc Lõi thay người chơi;
- giảm 12 vòng còn vài vòng cho bản “demo” nhưng vẫn gọi là hoàn chỉnh;
- thay tướng bằng token nếu giao diện đã có khả năng hiển thị thẻ.

Nếu cần tạo bản thử nghiệm kỹ thuật, phải ghi rõ đó là bản thử nghiệm và không được đánh dấu hoàn thành.

---

## 47. Kiểm thử bắt buộc

Tối thiểu phải có kiểm thử tự động cho:

### Kho Tướng

- tổng số bản sao được bảo toàn;
- mua làm giảm Kho;
- bán đưa vào Hàng Hoàn Trả;
- cuối vòng quay lại Kho;
- hết Kho xử lý đúng.

### Chợ

- số ô đúng cho 2–8 người;
- cấu trúc bậc đúng từng Giai Đoạn;
- mua bổ sung đúng bậc;
- Làm Mới đúng một dãy 4;
- Hàng Giữ đúng thời hạn.

### Cấp

- ngưỡng Kinh nghiệm chính xác;
- Kinh nghiệm dư được giữ;
- số tướng trên sân không vượt Cấp.

### Ghép sao

- 3 bản → 2★;
- 6 bản → 3★;
- bán hoàn trả đúng số bản sao.

### Kinh tế

- Lãi đúng mốc;
- Chuỗi đúng mốc;
- Tích Lũy chỉ một lần mỗi vòng.

### Giao tranh

- so ba chỉ số;
- xử lý hòa;
- sát thương;
- Ảnh Chiếu;
- Máu không âm.

### Kỳ Ngộ

- lựa chọn bí mật không bị lộ;
- đóng góp chung chính xác;
- hiệu ứng giải quyết đúng thứ tự.

### Điểm cuối ván

- từng nguồn điểm;
- giới hạn tối đa;
- phá hòa.

---

## 48. Kiểm thử toàn ván

Phải có mô phỏng tự động ít nhất:

- 100 ván 2 người;
- 100 ván 4 người;
- 100 ván 6 người;
- 100 ván 8 người.

Mục tiêu không phải chứng minh cân bằng tuyệt đối mà để phát hiện:

- trạng thái kẹt;
- Chợ không thể bổ sung;
- số bản sao âm;
- người chơi không thể thực hiện hành động hợp lệ;
- vòng không kết thúc;
- lỗi điểm;
- lỗi Hàng Giữ;
- lỗi phân cặp;
- sai lệch quá lớn về thời lượng xử lý.

---

## 49. Kiểm tra tính cân bằng bằng dữ liệu

Thu thập ít nhất:

- Cấp cuối ván;
- Vàng trung bình từng vòng;
- số lần Làm Mới;
- số lần Luyện Cấp;
- số tướng 2★/3★;
- số điểm theo từng nguồn;
- số trận thắng;
- Máu cuối;
- số Mục Tiêu hoàn thành;
- Lõi được chọn;
- Tộc/Hệ được dùng;
- tỷ lệ thắng theo chiến thuật.

Không cân bằng chỉ dựa trên cảm giác của một ván.

---

## 50. Hiệu năng

Với 8 người, trạng thái có nhiều thẻ nhưng vẫn nhỏ.

Không cần tối ưu vi mô quá sớm, nhưng phải tránh:

- tính lại toàn bộ mọi Tộc/Hệ trên mọi khung hình;
- dựng lại toàn bộ bàn khi chỉ một ô thay đổi;
- chạy hoạt ảnh nối tiếp quá dài;
- gọi mạng cho nội dung tĩnh trong mỗi thao tác.

Dữ liệu tĩnh nên tải một lần và lưu bộ nhớ đệm.

---

## 51. Ngoại tuyến

Nếu triển khai theo dạng ứng dụng web cài đặt được, trò chơi cơ bản phải có thể chạy ngoại tuyến sau khi tải tài nguyên lần đầu.

Không phụ thuộc máy chủ để:

- tính luật;
- rút thẻ;
- lưu ván cục bộ;
- chạy AI;
- hiển thị tài nguyên đã đóng gói.

---

## 52. Đối thủ AI

Nếu bổ sung đối thủ AI, AI phải dùng cùng bộ máy hành động như người thật.

AI không được:

- nhìn Mục Tiêu bí mật của đối thủ;
- biết trước thẻ ngẫu nhiên;
- tạo Vàng miễn phí;
- mua tướng đã bị người khác lấy;
- bỏ qua Quyền Ưu Tiên.

AI nên đánh giá:

- kinh tế;
- khả năng nâng Cấp;
- xác suất hoàn thiện Sao theo số bản còn lại;
- Tộc/Hệ;
- Mục Tiêu;
- sức mạnh ba chỉ số;
- mức tranh tướng;
- giá trị Kỳ Ngộ.

---

## 53. Chế độ xem luật

Trong game phải có một mục Luật với:

- tìm kiếm thuật ngữ;
- bảng Cấp;
- bảng Lãi;
- Chuỗi;
- cấu trúc Chợ;
- lịch Vòng Đấu;
- công thức Trang Bị;
- giải thích ba chỉ số;
- giải thích từng Tộc/Hệ;
- lịch sử Kỳ Ngộ đang áp dụng.

Không bắt người chơi rời game để đọc file ngoài.

---

## 54. Nhật ký ván

Nhật ký phải viết bằng tiếng Việt dễ hiểu, ví dụ:

```text
Vòng 5 — Nhịp 2
Mai mua Ahri với giá 3 Vàng.
Mai sở hữu đủ 3 bản Ahri và nâng Ahri lên 2★.
Nam dùng Làm Mới Chợ ở dãy 2.
Bốn tướng cũ được đưa vào Hàng Hoàn Trả.
```

Không hiển thị tên hàm hoặc khóa dữ liệu kỹ thuật cho người chơi.

---

## 55. Công cụ dành cho phát triển

Chế độ phát triển nên có:

- xem toàn bộ trạng thái;
- xem Kho còn bao nhiêu bản từng tướng;
- ép chuyển vòng;
- cấp Vàng/Kinh nghiệm;
- ép rút Kỳ Ngộ;
- kiểm tra điểm;
- lưu ảnh chụp trạng thái;
- sao chép hạt ngẫu nhiên;
- phát lại chuỗi hành động.

Các công cụ này không xuất hiện trong bản người chơi thông thường.

---

## 56. Điều kiện hoàn thành

Một phiên bản chỉ được coi là hoàn thành khi:

1. chạy được từ chuẩn bị đến tính điểm cuối Vòng 12;
2. hỗ trợ 2–8 người;
3. không có cơ chế giả;
4. mọi luật trong Rulebook đều có triển khai tương ứng;
5. tải lại ván không làm thay đổi trạng thái;
6. kiểm thử bắt buộc đều vượt qua;
7. không có lỗi nghiêm trọng trong mô phỏng 8 người;
8. giao diện dùng tiếng Việt nhất quán;
9. không còn thuật ngữ tiếng Anh hiển thị ngoài tên riêng;
10. Chợ Chung, Kho Tướng và số bản sao luôn nhất quán;
11. người chơi 0 Máu vẫn tiếp tục được;
12. Vòng Kỳ Ngộ, Lõi, Mục Tiêu, Thử Thách Trung Lập và Vòng Chọn Chung đều hoạt động thật.

---

## 57. Quy trình làm việc bắt buộc cho AI

Khi được yêu cầu thêm hoặc sửa tính năng:

1. đọc Rulebook và AGENTS.md trước;
2. xác định luật bị ảnh hưởng;
3. kiểm tra mô hình dữ liệu;
4. sửa bộ máy luật trước giao diện;
5. thêm hoặc sửa kiểm thử;
6. chạy kiểm thử;
7. chạy một ván mô phỏng liên quan;
8. sau đó mới hoàn thiện giao diện và hiệu ứng;
9. kiểm tra lại trên 2 người và 8 người nếu thay đổi có liên quan số người;
10. không báo “hoàn thành” khi kiểm thử còn lỗi.

Nếu phát hiện một yêu cầu mới phá vỡ luật hiện có, phải mô tả xung đột rõ ràng trước khi thay đổi.

---

## 58. Điều cấm cuối cùng

Không biến dự án thành:

- trang web thống kê;
- trình xem thẻ;
- game chỉ bấm nút và xem số;
- bản sao trực tiếp của Dune: Imperium;
- mô phỏng TFT điện tử 1:1 với từng đòn đánh;
- trò chơi mà giao tranh là nguồn điểm áp đảo;
- trò chơi mà người chơi chỉ có một quyết định nhỏ mỗi vòng.

Lõi trải nghiệm phải luôn là:

**quản lý kinh tế → đọc Chợ Chung → tranh tướng → nâng Cấp → ghép sao → xây Tộc/Hệ → ghép Trang Bị → phản ứng với Kỳ Ngộ → hoàn thành Mục Tiêu → điều chỉnh đội hình → Giao Tranh → tích lũy Điểm Danh Vọng.**

Đây là chuẩn tham chiếu chính thức để AI triển khai web game.
