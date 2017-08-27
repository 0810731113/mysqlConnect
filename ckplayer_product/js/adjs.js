
function loadedHandler(){
    if(CKobject.getObjectById('ckplayer_a1').getType()){//说明使用html5播放器
        CKobject.getObjectById('ckplayer_a1').addListener('play',playHandler);
        CKobject.getObjectById('ckplayer_a1').addListener('pause',pauseHandler);
    }
    else{
        CKobject.getObjectById('ckplayer_a1').addListener('play','playHandler');
        CKobject.getObjectById('ckplayer_a1').addListener('pause','pauseHandler');
    }
}
function playHandler(){
    CKobject._K_('yytf').style.display='none';
}
function pauseHandler(){
    CKobject._K_('yytf').style.display='block';
    CKobject._K_('yytf').className='yytf_2';
}
function playerstop(){
    CKobject._K_('yytf').style.display='block';
    CKobject._K_('yytf').className='yytf_1';
    CKobject._K_('daojs').style.display='block';
    CKobject._K_('djs').innerHTML=15;
    setTimeend();
    alert('播放结束，正在播放结束广告');
}
var frontTime=false;//前置广告倒计时是否在运行中
var frontHtime=false;//后置广告是否在进行中
var flashvars={
    f:'http://movie.ks.js.cn/flv/2012/02/6-3.flv',
    c:0,
    p:2,
    e:0,
    loaded:'loadedHandler'
};
CKobject.embed('/ckplayer/6.6/ckplayer.swf','a1','ckplayer_a1','600','400',false,flashvars,['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4']);
CKobject._K_('djs').innerHTML=15;
settime();
function settime(){//前置广告倒计时
    var nowT=parseInt(CKobject._K_('djs').innerHTML);
    if(nowT>0){
        frontTime=true;
        CKobject._K_('djs').innerHTML=nowT-1;
        setTimeout('settime()',1000)
    }
    else{
        frontTime=false;
        CKobject._K_('yytf').style.display='none';
        CKobject._K_('daojs').style.display='none';
        CKobject.getObjectById('ckplayer_a1').videoPlay();
    }
}
function setTimeend(){//后置广告倒计时
    var nowT=parseInt(CKobject._K_('djs').innerHTML);
    if(nowT>0){
        CKobject._K_('djs').innerHTML=nowT-1;
        setTimeout('setTimeend()',1000)
    }
    else{
        alert('广告结束，执行其它动作');
    }
}
























































