/*
 * 
 * AutoBox
 * 
 * @requires jQuery v1.7 or later
 * @create By 2014-11-12
 * @author Ravens<34263626@qq.com>
 * 
 */


//自定义AutoMessageBox
// parms ={}
// parms.img = {ok|remind|quest}
var AutoBox = function(p){
    this.init(p);
}
AutoBox.prototype = {
    init:function(parms){//定义默认�?
        this.ip = imgpath?imgpath+'../images/whitestyle/':'./images/';
        this.id = (parms.id?'Msg_'+parms.id:'Msg_'+Math.random()*10000);
        this.W = parms.W?parms.W:280;
        this.H = parms.H?parms.H:'auto';
        this.img = parms.img?parms.img:'ok';
        this.title = parms.title?parms.title:'';
        this.content = parms.content?parms.content:'成功';
        this.Yes = parms.Yes?parms.Yes:false;
        this.No = parms.No?parms.No:false;
        this.t = parms.st?parms.st:1;
        this.noCon = parms.noCon?parms.noCon:false;
        this.noCBtn = parms.noCBtn?parms.noCBtn:false;
        this.ADD = parms.ADD?parms.ADD:false;
        this.src = parms.src?parms.src:false;
        this.cb = parms.cb?parms.cb:function(){};
        this.ok = parms.ok?parms.ok:function(){};
        this.yc = parms.yc?parms.yc:function(){};
        this.nc = parms.nc?parms.nc:function(){};
        this.autoClose = parms.autoClose?parms.autoClose:false;
        this.mask = parms.mask?parms.mask:false;
        this.parent = parms.parent?parms.parent:false;
        this.url = parms.url?parms.url:false
        this.urlID = parms.urlID?parms.urlID:false

        this.build();
    },
    build:function(){
        //半��明的边�?
        this.mb = $('<div id="'+this.id+'"></div>');
        this.mb.css({
            'position':'fixed',
            'display':'none',
            'left':($(window).width()-this.W)/2+3+'px',
            'z-index':'9999999',
            'overflow':'hidden',
            'width':this.W+'px',
            'background':'url('+this.ip+'mbox/boxbg.png) repeat',
            'padding':'3px'
        })
        if(this.parent){
            var pObj = $("#"+this.parent)
            this.mb.css('left',pObj.offset().left+((pObj.width()-this.W)/2+3))
        }
        //容器
        this.m = $('<div></div>');
        this.m.css({
            'overflow':'hidden',
            'width':this.W+'px',
            'font-size':'14px',
            'background':'#FFF',
            'padding-bottom':'30px'
        })
        if((this.noCBtn == true)&&(this.title == '')){
            this.m.css({
                'width':(this.W-20)+'px',
                'padding-left':'20px',
                'padding-bottom':'10px'
            })
        }
        //close
        this.cBtn = $('<img src="'+this.ip+'mbox/close.png" />');
        this.cBtn.css({
            'overflow':'hidden',
            'width':'12px',
            'height':'12px',
            'margin':'10px',
            'margin-bottom':'0px',
            'cursor':'pointer',
            'float':'right'
        });
        //title
        this.Title = $('<h6>'+this.title+'</h6>');
        this.Title.css({
            'overflow':'hidden',
            'max-width':this.W-32+'px',
            'height':'16px',
            'line-height':'16px',
            'margin':'10px',
            'font-size':'14px',
            'font-weight':'normal',
            'float':'left'
        });
        //Con
        this.Con = $('<div></div>');
        this.Con.css({
            'overflow':'hidden',
            'width':'100%',
            'display':'block;',
            'text-align':'center',
            'margin':'0px auto'
        })
        //Con
        this.ConFont = $('<p style="display:inline-block;background:url('+this.ip+'mbox/'+this.img+'.png) no-repeat left center;padding-left:60px;padding-right:10px;padding-top:15px;line-height:25px;padding-bottom:10px;">'+this.content+'</p>');
        if((this.noCBtn == true)&&(this.title == '')){
            this.ConFont.css({'margin-top':'10px','line-height':'20px'});
        }
        //ifram
        this.ifram = $('<iframe name="'+this.urlID+'" id="'+this.urlID+'" frameborder="0" style="width: 100%; border: 0px none;" src="'+this.url+'"></iframe>').height(this.H)

        //bottons
        this.Btns = $('<div style="text-align:center;"></div>');
        this.BtnYes = $('<button>'+this.Yes+'</botton>');
        this.BtnYes.css({
            'margin':'5px'
        })
        this.BtnNo = $('<button>'+this.No+'</botton>');
        this.BtnNo.css({
            'margin':'5px',
            'background':'#9A9A9A'
        });

        //Mask
        this.Mask = $('<div id="Mask"></div>');
        this.Mask.css({
            'overflow':'hidden',
            'z-index':'9999998',
            'width':'100%',
            'height':$(window).height(),
            'position':'fixed',
            'top':'0px',
            'left':'0px',
            'background':'#FFF',
            'opacity':0.2
        });

        this.builder();
    },
    builder:function(){
        //
        var me = this;
        this.mb.append(this.m);
        if(this.noCBtn == false){
            this.m.append(this.cBtn);
        }
        if(this.title != ''){
            this.m.append(this.Title);
        }
        this.m.append(this.Con);

        if(this.noCon == false && !this.url){
            this.Con.append(this.ConFont);
        }
        if(this.url){
            this.Con.append(this.ifram);
        }
        this.Con.append(this.ADD);

        this.Con.append(this.Btns);
        if(me.Yes || me.No){
            if(me.Yes){
                this.Btns.append(this.BtnYes)
            };
            if(me.No){
                this.Btns.append(this.BtnNo)
            }
        }

        this.show();
    },
    show:function(){
        var me = this;
        if(this.mask) $('body').append(this.Mask);
        if($("#"+this.id).length>0) $("#"+this.id).remove();
        $('body').append(this.mb);
        this.mb.css('top',($(window).height()-this.mb.height())/2);
        if(this.mb.height()>$(window).height()){
            $(window).css('overflow','hidden');
            $(this.mb).css({
                'position':'absolute',
                'top':30+$(window).scrollTop()
            })
        }
        $(this.mb).fadeIn(this.t*1000);
        $(this.mb).find('a.closeMB').click(function(){//
            me.close();
            me.complete();
        });
        //
        $(this.cBtn).click(function(){//
            me.close();
            me.closed();
        }).bind('mouseover',function(){//
            $(this).css('transform','rotate(30deg)');
        }).bind('mouseout',function(){//
            $(this).css('transform','rotate(0deg)');
        });

        if(this.Yes || this.No){
            $(this.BtnYes).click(function(){//
                me.close();
                me.YesClick();
            });
            $(this.BtnNo).click(function(){//
                me.close();
                me.NoClick();
            });
        }else{
            $(this.mb).find('button.closeMB').click(function(){//
                me.close();
                me.complete();
            });
        }
        if (this.autoClose) {//
            setTimeout(function(){//
                me.close();
                me.complete();
            },this.autoClose*1000);
        };
        if (this.url) {
        }
    },
    close:function(){
        var me = this;
        $(this.Mask).remove();
        $(this.mb).fadeOut(500,function(){//
            $(this).remove();
        });

    },
    closed:function(){
        this.cb();
    },
    complete:function(){
        this.ok();
    },
    YesClick:function(){
        this.yc();
    },
    NoClick:function(){
        this.nc();
    }
}


//未登�?
var noLoginTrip = function (){
    if(typeof(imgpath) == 'undefined') imgpath = '';
    var html = '';
    html += '<div style="overflow:hidden;text-align:left;">'
    html += '<div style="float:left;width:229px;border-right:1px solid #DDD;height:100px;padding-left:20px;">'
    html += '<p style="font-weight:bold;margin-top:20px;">�?<a href="/user/login.html" target="_blank">登录</a>51CTO</p>'
    html += '<p>没有账号�?<a href="/user/register.html" target="_blank">注册51CTO账号</a></p>'
    html += '</div>'
    html += '<div style="float:right;width:200px;padding-left:50px;line-height:2;">'
    html += '<p>使用其他帐号登录</p>'
    html += '<p style="margin-bottom:5px;"><a href="http://home.51cto.com/third-party/auth?type=qq" target="_blank"><img src="'+imgpath+'whitestyle/other_login_icon_qq.png"></a></p>'
    //html += '<p style="margin-bottom:5px;"><a href="javascript:void(0);" target="_blank"><img src="'+imgpath+'whitestyle/other_login_icon_wx.png"></a></p>'
    html += '<p style="margin-bottom:5px;"><a href="http://home.51cto.com/third-party/auth?type=sina" target="_blank"><img src="'+imgpath+'whitestyle/other_login_icon_wb.png"></a></p>'
    html += '<p style="margin-bottom:5px;"><a href="http://home.51cto.com/third-party/auth?type=github" target="_blank"><img src="'+imgpath+'whitestyle/other_login_icon_gh.png"></a></p>'
    html += '</div>'
    html += '</div>'
    new AutoBox({
        title:'请登�?51CTO',
        noCon:true,
        W:500,
        H:100,
        ADD:html,
        cb:function(){
            window.location.reload()
        }
    })
}