var scroll=(function(){

    var scrollblock, //滚动块
        scrollcontent,  //被滚动的内容
        scrollbar,    //滚动条
        scrollpanel,    //滚动内容的滚动区域
        cdistance,  //滚动内容要滚动的距离
        bdistance,    //滚动块要滚动的距离
        minuTop, //滚动条头尾剩下的空白
        cTop,    //滚动内容的top
        startY=0,    //滚动动作开始初鼠标的位置
        bTop=0;    //滚动动作开始初滚动块的top



    function mouseDown(event){
        event=event||window.event;
        startY=event.clientY;
        bTop=scrollblock.offsetTop;
        cTop=scrollcontent.offsetTop;
        // if(scrollblock.setCapture){

        //     scrollblock.onmousemove=doDrag;
        //     scrollblock.onmouseup=stopDrag;
        //     scrollblock.setCapture();
        // }else{
        //     document.addEventListener("mousemove",doDrag,true);
        //     document.addEventListener("mouseup",stopDrag,true);
        // }
        document.onmousemove=function(){
            doDrag();
        }
        document.onmouseup=function(){
            stopDrag();
        }
        document.getElementsByTagName('body')[0].onselectstart=function(){
            return false;
        }

    }

    function doDrag(event){
        event=event||window.event;

        var newbTop=event.clientY-startY+bTop,
            newcTop=cTop-(event.clientY-startY)/bdistance*cdistance;

        if(newbTop<minuTop){
            newbTop=minuTop;
            newcTop=0;
        }else if(newbTop>bdistance+minuTop){
            newcTop=-cdistance;
            newbTop=bdistance+minuTop;
        }
        scrollblock.style.top=newbTop+'px';
        scrollcontent.style.top=newcTop+'px';

    }

    function stopDrag(event){
        // if(scrollblock.releaseCapture){
        //     // scrollblock.onmousemove=doDrag;
        //     // scrollblock.onmouseup=stopDrag;
        //     scrollblock.releaseCapture();
        // }else{
        //     document.removeEventListener("mousemove",doDrag,true);
        //     document.removeEventListener("mouseup",stopDrag,true);
        // }
        document.onmousemove=null;
        document.onmouseup=null;

        document.getElementsByTagName('body')[0].onselectstart=function(){
            return true;
        };
    }


    return{
        init:function(scrollpanel_id,scrollcontent_id,scrollbar_id,scrollblock_id){
            scrollblock=document.getElementById(scrollblock_id);
            scrollcontent=document.getElementById(scrollcontent_id);
            scrollbar=document.getElementById(scrollbar_id);
            scrollpanel=document.getElementById(scrollpanel_id);
            minuTop=scrollblock.offsetTop;
            cdistance=scrollcontent.offsetHeight-scrollpanel.offsetHeight;
            bdistance=scrollbar.offsetHeight-minuTop*2-scrollblock.offsetHeight;


            scrollblock.onmousedown=mouseDown;
            enclose(scrollpanel,scrollcontent,scrollbar,scrollblock,bdistance,cdistance,minuTop);
        }
    }



}());

scroll.init('scrollpanel','scrollcontent','scrollbar','scrollblock');
