$(function(){

    var winWid = $(window).width() ;
    var winHei = $(window).height();
    console.log(winWid + "---" + winHei);
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

    var player = new prismplayer({
        id: 'J_prismPlayer',
        width: '100%',
        // height:'780px',
        height:videoHei + 'px',
        autoplay: true,
        //播放方式一：推荐
//        vid : '1e067a2831b641db90d570b6480fbc40',
//        playauth : '',
        //播放方式二
        prismType:2,
        vid : 'c99f5f927caf426d893655ea08a5642b',
        accId : 'LTAICNs9WNKWyN90',
        accSecret : '9MYgT69NghzGPsat9Q9dPgxwTW0BJR',
        apiKey : '3bvbij83xl15o17ucnz8grr2cvsiaknjavqjvwk3447ec33iac8wp65zd1i5il4h',
        flashApiKey : 'gwp9svnnfoa5pe9algfqchxjowkfosh4fea7m8pjdcw8fh3nofpdguitu5ojg6nb',
        showBarTime: 3000000,
        //cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png'
    });


    var nowD = 0 ;

    function playvideo(n){
        nowD =  n % 2;
       //player.play() ;
       player.pause() ;

        player = new prismplayer({
            id: 'J_prismPlayer',
            width: '100%',
            // height:'780px',
            height:videoHei + 'px',
            autoplay: true,
            prismType:2,
            vid : (nowD == 0) ? 'c99f5f927caf426d893655ea08a5642b' : '551432ab146d4253b61184a9a3ed0f25' ,
            accId : 'LTAICNs9WNKWyN90',
            accSecret : '9MYgT69NghzGPsat9Q9dPgxwTW0BJR',
            apiKey : '3bvbij83xl15o17ucnz8grr2cvsiaknjavqjvwk3447ec33iac8wp65zd1i5il4h',
            flashApiKey : 'gwp9svnnfoa5pe9algfqchxjowkfosh4fea7m8pjdcw8fh3nofpdguitu5ojg6nb',
            showBarTime: 3000000,
            //cover: 'http://liveroom-img.oss-cn-qingdao.aliyuncs.com/logo.png'
        });

    }
    //playvideo(0) ;

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


})








































