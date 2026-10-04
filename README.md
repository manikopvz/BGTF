# TFT: Hội Tụ Chiến Thuật — BGTF

Web game chiến thuật 2–8 người trên cùng thiết bị, xây dựng theo **Rulebook v4.0** và `AGENTS.md`.

## Tình trạng

- Bộ máy luật trạng thái quyết định hoàn toàn, dùng RNG có hạt.
- 12 Vòng Đấu / 4 Giai Đoạn / 4 Nhịp Chuẩn Bị.
- Chợ Chung, Kho Tướng Chung, Hàng Hoàn Trả, Hàng Giữ, Quyền Ưu Tiên.
- 5 Hành Động: Mua Tướng, Làm Mới Chợ, Luyện Cấp, Giữ Tướng, Tích Lũy.
- Ghép 2★/3★, Băng Ghế, sân, Trang Bị, Tộc/Hệ.
- Vòng Kỳ Ngộ, Lõi Nâng Cấp, Thử Thách Trung Lập, Vòng Chọn Chung, Mục Tiêu.
- Giao Tranh bằng 3 chỉ số độc lập; hỗ trợ Ảnh Chiếu khi số người lẻ.
- Điểm Danh Vọng và phá hòa cuối Vòng 12.
- Lưu/tải bằng `localStorage`, PWA/offline sau lần tải đầu.
- Giao diện tiếng Việt, responsive cho máy tính và điện thoại.

> **Lưu ý dữ liệu nội dung:** Rulebook/AGENTS mô tả cơ chế nhưng không cung cấp toàn bộ danh sách và nội dung 228 Thẻ Tướng, 72 Lõi, 24 Kỳ Ngộ, 32 Mục Tiêu Cá Nhân, 18 Mục Tiêu Công Khai, 24 Thử Thách và toàn bộ công thức Trang Bị. Vì vậy repo hiện dùng **gói nội dung khởi tạo** trong `src/data.js` để toàn bộ vòng lặp game có thể chạy và kiểm thử. Bộ máy luật được tách riêng để thay dữ liệu thẻ chính thức mà không phải viết lại game.

## Chạy cục bộ

```bash
python -m http.server 8080
```

Mở `http://localhost:8080`.

## Kiểm thử

```bash
npm test
npm run simulate
npm run verify
```

`npm run simulate` chạy 400 ván tự động: 100 ván cho 2, 4, 6 và 8 người.

## Triển khai

Workflow `.github/workflows/pages.yml` kiểm thử trước, sau đó deploy nội dung tĩnh lên GitHub Pages.
