import test from 'node:test';import assert from 'node:assert/strict';
import {GameEngine,MARKET_STRUCTURE,XP_NEED,conservation} from '../src/game.js';import {CHAMPIONS} from '../src/data.js';

test('khởi tạo 2–8 người ở Cấp 1, 40 Máu, 5 Vàng',()=>{for(let n=2;n<=8;n++){const g=new GameEngine(Array.from({length:n},(_,i)=>`P${i}`),`seed-${n}`);for(const p of g.state.nguoiChoi){assert.equal(p.cap,1);assert.equal(p.mau,40);assert.equal(p.vang,5);assert.equal(p.bangGhe.filter(Boolean).length,1);}}});

test('kích thước Chợ đúng theo số người sau Kỳ Ngộ đầu',()=>{for(const n of [2,3,4,5,6,7,8]){const g=new GameEngine(Array.from({length:n},(_,i)=>`P${i}`),`market-${n}`);for(const p of g.state.nguoiChoi)g.chooseEncounter(p.id,g.state.kyNgoHienTai.luaChon.find(x=>x.cost===0)?.id||g.state.kyNgoHienTai.luaChon[0].id);assert.equal(g.state.choChung.length,n<=3?8:n<=5?12:16);}});

test('ngưỡng Kinh nghiệm đúng',()=>assert.deepEqual(XP_NEED,[0,2,4,6,8,12,18,24,32,44]));

test('bảo toàn số bản sao khi mua và bán',()=>{const g=new GameEngine(['A','B'],'copies');for(const p of g.state.nguoiChoi)g.chooseEncounter(p.id,g.state.kyNgoHienTai.luaChon.find(x=>x.cost===0)?.id||g.state.kyNgoHienTai.luaChon[0].id);const baseline=conservation(g);const p=g.state.nguoiChoi[0];p.vang=99;g.buy(p.id,'market',0);const idx=p.bangGhe.findIndex(x=>x);g.sell(p.id,'bangGhe',idx);assert.deepEqual(conservation(g),baseline);});

test('Chợ cấu hình có tổng ô đúng',()=>{for(const grp of Object.keys(MARKET_STRUCTURE))for(const stage of [1,2,3,4]){const sum=MARKET_STRUCTURE[grp][stage].reduce((a,b)=>a+b,0);assert.equal(sum,grp==='2-3'?8:grp==='4-5'?12:16);}});

test('RNG cùng hạt cho cùng trạng thái đầu',()=>{const a=new GameEngine(['A','B'],'same'),b=new GameEngine(['A','B'],'same');assert.deepEqual(a.state.khoTuong,b.state.khoTuong);assert.deepEqual(a.state.nguoiChoi.map(p=>p.bangGhe),b.state.nguoiChoi.map(p=>p.bangGhe));});
