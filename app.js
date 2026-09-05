let id=null;
const $=x=>document.getElementById(x);
function success(p){const a=p.coords.latitude,b=p.coords.longitude,c=p.coords.accuracy;
$('lat').textContent=a.toFixed(6);$('lng').textContent=b.toFixed(6);$('acc').textContent=Math.round(c)+' m';
$('maps').href='https://www.google.com/maps?q='+a+','+b;$('maps').classList.remove('disabled');
$('status').textContent='Localização atualizada às '+new Date().toLocaleTimeString('pt-BR');}
function fail(e){$('status').textContent=e.code===1?'Permissão negada.':e.code===2?'Localização indisponível.':'Tempo esgotado.';}
$('start').onclick=()=>{if(!navigator.geolocation){$('status').textContent='GPS não suportado neste navegador.';return}
$('status').textContent='Solicitando permissão...';id=navigator.geolocation.watchPosition(success,fail,{enableHighAccuracy:true,maximumAge:5000,timeout:15000});
$('start').disabled=true;$('stop').disabled=false};
$('stop').onclick=()=>{if(id!==null)navigator.geolocation.clearWatch(id);id=null;$('start').disabled=false;$('stop').disabled=true;$('status').textContent='Compartilhamento parado.'};