$(function(){

    var winWid = $(window).width() ;
    var winHei = $(window).height();
    console.log(winWid);
    var minWinWid = 1024 ;
    var topHei = 50 ;
    var switchWid = 16 ;
    var courseListConWid = 336 ;
    var listShowOrHideBtnHei = 18 ;
    var videoWid = ( winWid  - courseListConWid) || 1696 ;
    var videoHei = (winHei -  topHei) || 848 ;
    //列表切换图标的top
    var listShowOrHideBtnTop = (videoHei - listShowOrHideBtnHei) / 2 || 300 ;
    var switchStatus = false ;

    $("#videoLeftCon").css({
        width : (!switchStatus ? (winWid - courseListConWid) : (winWid - switchWid) )
    })
    $("#courseListCon").css({
        left : (!switchStatus ? (winWid - courseListConWid) : (winWid - switchWid))
    })

    $("#videoCon").css({
        height:videoHei + "px"
    })

    $("#listSwitch span").css({
        marginTop : listShowOrHideBtnTop
    })

    var nowD = 0 ;
    var videoarr = new Array() ;
    videoarr.push('http://movie.ks.js.cn/flv/2012/02/6-3.flv');
    videoarr.push('http://movie.ks.js.cn/flv/2012/02/6-1.flv');
    videoarr.push('http://movie.ks.js.cn/flv/2011/11/8-1.flv');
    videoarr.push('http://movie.ks.js.cn/flv/2014/04/24-2.flv');

    var html5arr = new Array(0) ;
    html5arr.push(['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4']);
    html5arr.push(['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4']);
    html5arr.push(['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4']);
    html5arr.push(['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4']);

    function playvideo(n){
        nowD =  n % 4;
        var flashvars = {
            f: videoarr[nowD],
            c: 0,
            p: 1,
            e: 0,
            my_url: encodeURIComponent(window.location.href)
        };
        var video = ['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
        //CKobject.embed('js/ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '100%', '100%', false, flashvars, html5arr[n]);
        CKobject.embed('js/ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '100%', videoHei, false, flashvars, html5arr[nowD]);

    }
    playvideo(0) ;

    $(document).on('click',"#courseListCon li",function(){
        var index = $(this).index();
        console.log(index);
        $("#courseListCon li").removeClass("curSelLi");
        $(this).addClass("curSelLi");
        playvideo(index) ;
    })

    $("#listSwitch").click(function(){
        switchStatus = !switchStatus ;
        if(switchStatus == true){
            $("#listCon").hide();
            $("#courseListCon").css({
                width:switchWid,
                left:(winWid - switchWid)+ "px"
            });
            $("#videoLeftCon").css({
                width:(winWid - switchWid)+ "px"
            });

            $("#toShowListBtn").show();
            $("#toHideListBtn").hide();

        }else{
            $("#listCon").show();
            $("#courseListCon").css({
                width:courseListConWid + 'px',
                left:(winWid - courseListConWid)+ "px"
            });
            $("#videoLeftCon").css({
                width : ( winWid - courseListConWid)+ "px"
            });
            $("#toShowListBtn").hide();
            $("#toHideListBtn").show();
        }

    })

    $(window).resize(function(){
        var curWinWid = $(window).width() ;
        if( curWinWid < 1024){
            return ;
        }

        $("#videoLeftCon").css({
            width : (!switchStatus ? (curWinWid - courseListConWid) : (curWinWid - switchWid) )
        })
        $("#courseListCon").css({
            left : (!switchStatus ? (curWinWid - courseListConWid) : (curWinWid - switchWid))
        })

        $("#videoCon").css({
            height:videoHei
        })
    })

    $("#listCon").niceScroll({
        cursorborder:"",
        cursorcolor:"#6e6e6e",
        cursorwidth: "8px",
        cursorborderradius: "4px",
        boxzoom:false
    });

    


//        var flashvars = {
//            f : 'http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4' ,
//            c : 0 ,
//            b : 1 ,
//            i : 'http://www.ckplayer.com/static/images/cqdw.jpg'
//        }
//        var params = {
//            bgcolor : '#FFF' ,
//            allowFullScreen : true ,
//            allowScriptAccess : 'always' ,
//            wmode : 'transparent'
//        }
//        CKobject.embedSWF('js/ckplayer/ckplayer.swf','a1','ckplayer_a1',videowid ,videoHei,flashvars,params);
//
//        var video = ['http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4->video/mp4'] ;
//        var support = ['iPad','iPhone','ios','android+false','msie10+false'];
//        CKobject.embedHTML5('a1','ckplayer_a1',videowid ,videoHei,flashvars,support);

})








































