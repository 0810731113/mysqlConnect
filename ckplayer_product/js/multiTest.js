
function playerstop() {
    setTimeend();
}
function setTimeend() {//获取下一部视频的播放ID
    nowD++;
    if (nowD >= videoarr.length ) {
        nowD = 0;
    }
    playvideo(nowD);
}
function Close() {//关闭播放列表
    CKobject._K_('a2').style.display = 'none';
    CKobject._K_('playerlist').style.display = 'none';
    CKobject._K_('a3').style.display = 'block';
    CKobject._K_('a1').style.width = '970px';
    CKobject.getObjectById('ckplayer_a1').width = 970;
}
function Open() {//打开播放列表
    CKobject._K_('a2').style.display = 'block';
    CKobject._K_('playerlist').style.display = 'block';
    CKobject._K_('a3').style.display = 'none';
    CKobject._K_('a1').style.width = '770px';
    CKobject.getObjectById('ckplayer_a1').width = 770;
}
var nowD = 0;//目前播放的视频的编号(在数组里的编号)
var frontTime = false;//前置广告倒计时是否在运行中
var frontHtime = false;//后置广告是否在进行中
var videoarr = new Array();//新建一个数组来存flash端视频地址，添加方法就像下面一样
videoarr.push('http://movie.ks.js.cn/flv/2012/02/6-3.flv');
videoarr.push('http://movie.ks.js.cn/flv/2012/02/6-1.flv');
videoarr.push('http://movie.ks.js.cn/flv/2011/11/8-1.flv');
videoarr.push('http://movie.ks.js.cn/flv/2014/04/24-2.flv');
var html5arr = new Array();//新建一个数组来保存HTML5端用到的视频地址，注意，因为本演示只有一种mp4文件，所以html5下所有用到的视频地址都是相同的，请见谅，另外，该数组是一个二维数组
html5arr.push(['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4']);
html5arr.push(['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4']);
html5arr.push(['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4']);
html5arr.push(['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4']);
function playvideo(n) {
    nowD = n;
    var flashvars = {
        f: videoarr[n],
        c: 0,
        p: 1,
        e: 0,
        my_url: encodeURIComponent(window.location.href)
    };
    for (i = 0; i < videoarr.length; i++) {//这里是用来改变右边列表背景色
        if (i != nowD) {
            CKobject._K_('vli_' + i).style.backgroundColor = '#262626';
        }
        else {
            CKobject._K_('vli_' + i).style.backgroundColor = '#DAF2FF';
        }
    }

    var video = ['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
    CKobject.embed('/ckplayer/6.6/ckplayer.swf', 'a1', 'ckplayer_a1', '100%', '100%', false, flashvars, html5arr[n]);
}
playvideo(0);




























