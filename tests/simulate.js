import assert from 'node:assert/strict';import {GameEngine,conservation} from '../src/game.js';import {CHAMPIONS} from '../src/data.js';

function cheapestEncounter(g,p){return [...g.state.kyNgoHienTai.luaChon].sort((a,b)=>a.cost-b.cost).find(x=>x.cost<=p.vang);}
function autoplay(n,seed){const g=new GameEngine(Array.from({length:n},(_,i)=>`P${i+1}`),seed);const baseline=conservation(g);let guard=0;
  while(g.state.pha!=='ket-thuc'&&guard++<5000){
    if(g.state.pha==='ky-ngo'){for(const p of g.state.nguoiChoi)if(!g.state.kyNgoHienTai.choices[p.id])g.chooseEncounter(p.id,cheapestEncounter(g,p).id);continue;}
    if(g.state.pha==='loi'){for(const p of g.state.nguoiChoi)if(!g.state.loiDangDung.choices[p.id])g.chooseAugment(p.id,g.state.loiDangDung.offers[p.id][0]);continue;}
    if(g.state.pha==='chuan-bi'){for(const p of g.state.nguoiChoi){if(g.state.pendingActions[p.id])continue;const action=!p.hanhDongDaDungTrongVong.includes('tich-luy')?{type:'tich-luy'}:{type:'luyen-cap',times:p.vang>=4?1:0};if(action.times===0)action.type='mua',action.targets=[];g.submitAction(p.id,action);}if(g.state.pendingRefreshBuy)g.resolveRefreshBuy(null);continue;}
    if(g.state.pha==='sap-doi-hinh'){for(const p of g.state.nguoiChoi){while(p.san.filter(Boolean).length<p.cap){const bi=p.bangGhe.findIndex(Boolean);if(bi<0)break;try{g.moveCard(p.id,'bangGhe',bi,'san');}catch{break;}}}g.confirmLineup();continue;}
    if(g.state.pha==='chon-chung'){const pid=g.state.carousel.order[g.state.carousel.turn];const idx=g.state.carousel.choices.findIndex(x=>!x.takenBy);const p=g.player(pid);if(p.bangGhe.findIndex(x=>!x)<0){const si=p.san.findIndex(Boolean);if(si>=0)g.sell(pid,'san',si);else{const bi=p.bangGhe.findIndex(Boolean);if(bi>=0)g.sell(pid,'bangGhe',bi);}}g.chooseCarousel(pid,idx);continue;}
    throw new Error(`Pha không xử lý: ${g.state.pha}`);
  }
  assert.equal(g.state.pha,'ket-thuc');assert.equal(g.state.vong,12);for(const p of g.state.nguoiChoi)assert.ok(p.mau>=0);return g;
}
for(const n of [2,4,6,8]){for(let i=0;i<100;i++)autoplay(n,`sim-${n}-${i}`);console.log(`✓ 100 ván ${n} người`);}console.log('✓ 400 mô phỏng toàn ván hoàn tất');
