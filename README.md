# TFT: Hội Tụ Chiến Thuật

Web game chiến thuật 2–8 người xây dựng theo Rulebook v4.0 và AGENTS.md.

## Chạy cục bộ

```bash
python -m http.server 8080
```

Mở http://localhost:8080.

## Kiểm thử

```bash
npm test
npm run verify
```

Dự án dùng ES modules thuần, không cần bước build. Bộ máy luật dùng RNG có hạt, Chợ Chung, Kho Tướng Chung, Hàng Hoàn Trả, 12 Vòng Đấu, bốn Nhịp Chuẩn Bị, Kỳ Ngộ, Lõi Nâng Cấp, Thử Thách Trung Lập, Vòng Chọn Chung, Mục Tiêu, Ảnh Chiếu và tính Điểm Danh Vọng.

Workflow GitHub Actions kiểm thử trước khi triển khai GitHub Pages.