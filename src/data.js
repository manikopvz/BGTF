export const CHAMPIONS = [
  ['annie','Annie',1,'Hỏa','Pháp Sư',2,3,2],['poppy','Poppy',1,'Yordle','Hộ Vệ',4,1,2],['tristana','Tristana',1,'Yordle','Xạ Thủ',1,4,2],['maokai','Maokai',1,'Rừng','Hộ Vệ',4,1,3],['yasuo','Yasuo',1,'Lãng Khách','Đấu Sĩ',3,3,1],['caitlyn','Caitlyn',1,'Piltover','Xạ Thủ',1,4,2],
  ['ahri','Ahri',2,'Ionia','Pháp Sư',2,5,3],['garen','Garen',2,'Demacia','Hộ Vệ',6,2,2],['jax','Jax',2,'Ionia','Đấu Sĩ',4,4,2],['teemo','Teemo',2,'Yordle','Xạ Thủ',1,5,4],['vi','Vi',2,'Piltover','Đấu Sĩ',5,3,2],['zyra','Zyra',2,'Rừng','Pháp Sư',2,5,4],
  ['jinx','Jinx',3,'Piltover','Xạ Thủ',2,7,3],['neeko','Neeko',3,'Ixtal','Hộ Vệ',7,3,4],['shen','Shen',3,'Ionia','Hộ Vệ',8,2,4],['vex','Vex',3,'Bóng Tối','Pháp Sư',3,7,5],['riven','Riven',3,'Ionia','Đấu Sĩ',5,6,3],['swain','Swain',3,'Noxus','Pháp Sư',5,5,5],
  ['ornn','Ornn',4,'Freljord','Hộ Vệ',10,4,6],['sejuani','Sejuani',4,'Freljord','Đấu Sĩ',9,5,5],['fiora','Fiora',4,'Demacia','Đấu Sĩ',6,9,4],['karma','Karma',4,'Ionia','Pháp Sư',4,9,7],['xayah','Xayah',4,'Ionia','Xạ Thủ',4,10,5],['galio','Galio',4,'Demacia','Hộ Vệ',11,4,5],
  ['sett','Sett',5,'Ionia','Đấu Sĩ',10,10,7],['ryze','Ryze',5,'Runeterra','Pháp Sư',6,12,10],['gwen','Gwen',5,'Bóng Tối','Đấu Sĩ',8,12,7],['azir','Azir',5,'Shurima','Pháp Sư',6,13,9],['yone','Yone',5,'Ionia','Đấu Sĩ',8,13,6],['kayle','Kayle',5,'Demacia','Xạ Thủ',5,14,8]
].map(([id,ten,bac,toc,he,tuyenTruoc,hoaLuc,hopLuc])=>({
  id,ten,bac,toc,he,gia:bac,
  chiSo:{1:{tuyenTruoc,hoaLuc,hopLuc},2:{tuyenTruoc:tuyenTruoc+3,hoaLuc:hoaLuc+3,hopLuc:hopLuc+2},3:{tuyenTruoc:tuyenTruoc+7,hoaLuc:hoaLuc+7,hopLuc:hopLuc+5}},
  kyNang:`${ten} tạo lợi thế chiến thuật theo vai trò ${he}.`
}));

export const TRAITS = {
  'Hộ Vệ':{moc:[2,4],bonus:{2:{tuyenTruoc:2},4:{tuyenTruoc:5,hopLuc:1}}},
  'Đấu Sĩ':{moc:[2,4],bonus:{2:{tuyenTruoc:1,hoaLuc:1},4:{tuyenTruoc:3,hoaLuc:3}}},
  'Pháp Sư':{moc:[2,4],bonus:{2:{hoaLuc:2,hopLuc:1},4:{hoaLuc:5,hopLuc:2}}},
  'Xạ Thủ':{moc:[2,4],bonus:{2:{hoaLuc:3},4:{hoaLuc:6}}},
  'Ionia':{moc:[2,4,6],bonus:{2:{hopLuc:2},4:{hopLuc:4},6:{tuyenTruoc:2,hoaLuc:2,hopLuc:6}}},
  'Demacia':{moc:[2,4],bonus:{2:{tuyenTruoc:1,hopLuc:1},4:{tuyenTruoc:3,hopLuc:3}}},
  'Piltover':{moc:[2],bonus:{2:{hoaLuc:1,hopLuc:2}}},
  'Yordle':{moc:[2],bonus:{2:{hopLuc:3}}},
  'Freljord':{moc:[2],bonus:{2:{tuyenTruoc:3,hopLuc:1}}},
  'Bóng Tối':{moc:[2],bonus:{2:{hoaLuc:2,hopLuc:2}}}
};

export const COMPONENTS = [
  {id:'kiem',ten:'Kiếm B.F.'},{id:'giap',ten:'Giáp Lưới'},{id:'gay',ten:'Gậy Quá Khổ'},
  {id:'cung',ten:'Cung Gỗ'},{id:'nuoc',ten:'Nước Mắt'},{id:'dai',ten:'Đai Khổng Lồ'}
];

export const ITEMS = [
  {id:'vo-cuc',ten:'Vô Cực Kiếm',a:'kiem',b:'kiem',bonus:{hoaLuc:4}},
  {id:'thien-than',ten:'Giáp Thiên Thần',a:'kiem',b:'giap',bonus:{tuyenTruoc:2,hoaLuc:2}},
  {id:'quyen-truong',ten:'Quyền Trượng',a:'gay',b:'gay',bonus:{hoaLuc:3,hopLuc:2}},
  {id:'cuong-cung',ten:'Cuồng Cung',a:'cung',b:'cung',bonus:{hoaLuc:4}},
  {id:'thanh-kiem',ten:'Thánh Kiếm',a:'kiem',b:'cung',bonus:{hoaLuc:3,hopLuc:1}},
  {id:'day-chuyen',ten:'Dây Chuyền',a:'giap',b:'dai',bonus:{tuyenTruoc:4}},
  {id:'bua-bang',ten:'Bùa Băng',a:'nuoc',b:'giap',bonus:{tuyenTruoc:2,hopLuc:2}},
  {id:'vong-nang-luong',ten:'Vòng Năng Lượng',a:'nuoc',b:'gay',bonus:{hoaLuc:2,hopLuc:3}},
  {id:'giap-mau',ten:'Giáp Máu',a:'dai',b:'dai',bonus:{tuyenTruoc:5}}
];

export const AUGMENTS = {
  bac:[
    {id:'lai-kep',ten:'Lãi Kép',moTa:'Giới hạn Lãi tăng lên 4.',effect:{interestCap:4}},
    {id:'tap-luyen',ten:'Tập Luyện',moTa:'Nhận ngay 4 Kinh nghiệm.',effect:{xp:4}},
    {id:'tui-vang',ten:'Túi Vàng',moTa:'Nhận ngay 6 Vàng.',effect:{gold:6}}
  ],
  vang:[
    {id:'thuong-vu',ten:'Thương Vụ',moTa:'Nhận 10 Vàng.',effect:{gold:10}},
    {id:'tien-do',ten:'Tiến Độ',moTa:'Nhận 8 Kinh nghiệm.',effect:{xp:8}},
    {id:'kho-do',ten:'Kho Đồ',moTa:'Nhận 2 Thành Phần.',effect:{components:2}}
  ],
  'da-sac':[
    {id:'kho-bau',ten:'Kho Báu',moTa:'Nhận 16 Vàng và 1 Thành Phần.',effect:{gold:16,components:1}},
    {id:'tang-toc',ten:'Tăng Tốc',moTa:'Nhận 16 Kinh nghiệm.',effect:{xp:16}},
    {id:'xuong-lon',ten:'Xưởng Lớn',moTa:'Nhận 3 Thành Phần.',effect:{components:3}}
  ]
};

export const ENCOUNTERS = [
  {id:'ornn',ten:'Xưởng của Ornn',loai:'ca-nhan',moTa:'Đổi Vàng lấy tài nguyên.',luaChon:[
    {id:'bo-qua',ten:'Rời xưởng',cost:0,reward:{}},
    {id:'nho',ten:'Đầu tư nhỏ',cost:2,reward:{components:1}},
    {id:'vua',ten:'Đầu tư vừa',cost:4,reward:{components:1,gold:2}},
    {id:'lon',ten:'Đầu tư lớn',cost:7,reward:{components:2}}
  ]},
  {id:'hoi-cho',ten:'Hội Chợ Runeterra',loai:'chung-suc',moTa:'Mỗi người bí mật đóng góp.',luaChon:[
    {id:'0',ten:'Không góp',cost:0,reward:{}},{id:'2',ten:'Góp 2 Vàng',cost:2,reward:{}},{id:'4',ten:'Góp 4 Vàng',cost:4,reward:{}}
  ]},
  {id:'cong-nguyen',ten:'Cổng Nguyên Tố',loai:'mao-hiem',moTa:'Chọn mức rủi ro.',luaChon:[
    {id:'an-toan',ten:'An toàn',cost:0,reward:{gold:2}},
    {id:'mao-hiem',ten:'Mạo hiểm',cost:0,reward:{gold:5},risk:{health:2}}
  ]}
];

export const OBJECTIVES = [
  {id:'kinh-te',ten:'Nhà Kinh Tế',moTa:'Kết thúc một vòng với ít nhất 30 Vàng.',points:2,test:p=>p.vang>=30},
  {id:'cap-cao',ten:'Bậc Thầy Huấn Luyện',moTa:'Đạt Cấp 8.',points:2,test:p=>p.cap>=8},
  {id:'sao-sang',ten:'Ngôi Sao',moTa:'Sở hữu ít nhất một tướng 3★.',points:3,test:p=>[...p.san,...p.bangGhe].some(x=>x?.sao===3)},
  {id:'da-dang',ten:'Đa Dạng',moTa:'Kích hoạt ít nhất 3 Tộc/Hệ.',points:2,test:(p,s)=>Object.keys(s.activeTraits(p.id)).length>=3},
  {id:'tich-luy',ten:'Kho Vàng',moTa:'Kết thúc ván với ít nhất 40 Vàng.',points:3,test:p=>p.vang>=40}
];

export const NEUTRAL = [
  {stage:1,ten:'Bầy Quái Nhỏ',thresholds:{tuyenTruoc:5,hoaLuc:5,hopLuc:4}},
  {stage:2,ten:'Hộ Vệ Cổ',thresholds:{tuyenTruoc:11,hoaLuc:10,hopLuc:8}},
  {stage:3,ten:'Rồng Núi',thresholds:{tuyenTruoc:17,hoaLuc:17,hopLuc:14}},
  {stage:4,ten:'Thực Thể Hư Không',thresholds:{tuyenTruoc:24,hoaLuc:25,hopLuc:20}}
];
