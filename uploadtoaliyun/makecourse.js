
$("#selCollege .dropdown").dropdown({
    //action : 'hide' ,
    onChange : function(value , text , $selectedItem){
        console.log("text: " + text);
        console.log("value: " + value)
        console.log($selectedItem);
    }
})

$("#selMajor .dropdown").dropdown({
    onChange : function(value , text , $selectedItem){
        console.log("text: " + text);
        console.log("value: " + value)
        console.log($selectedItem);
    }
})

$("#agreeClause").checkbox({
    
});

$("#switchSteps > div").click(function(){
    //$("this").parents("#switchSteps").find(".step").removeClass("active");
    $("#switchSteps").find("i").removeClass("teal") ;
    $(this).find("i").addClass("teal") ;
    $("#switchSteps > div").removeClass("active") ;
    $(this).addClass("active") ;
    var index = $(this).index() ;
    if(index==0){
        $("#basicInfo").show();
    }else{
        $("#basicInfo").hide();
    }

});

$("#cofirmBasicInfo").click(function(){
    //debugger
    $("#switchSteps > div").removeClass("disabled") ;
});

$("#concelBasicInfo").click(function(){
    
    $("#switchSteps > div").addClass("disabled") ;
    $("#switchSteps > div").eq(0).removeClass("disabled") ;
    $("#switchSteps > div").removeClass("active") ;
    $("#switchSteps > div").eq(0).addClass("active") ;
    $("#switchSteps").find("i").removeClass("teal") ;
    $("#switchSteps").find("i").eq(0).addClass("teal") ;

});

$("#previewRegion img").click(function(){
    $("#previewFile").trigger("click");
    //console.log("点击触发事件!!!!");
})

// $("#previewFile").click(function(){
//     console.log("代理点击事件被触发!!!");
// });

$("#previewFile").change(function(){
    //var preview = document.querySelector('img') ;
    //var preview = document.querySelector('img') ;
    var preview = document.querySelector('#previewImg') ;
    console.log(preview);
    //var file  = document.querySelector('input[type=file]').files[0];
    var file  = document.querySelector('#previewFile').files[0];

    //不能再前端直接改名
    //file.name = "xjajajsakdskdjsjhsj.jpg" ;
    if(file == null || file == ''){
        console.log("没有检测到文件,请重新选择");
        return
    }
    if(file.size < 1048576){
        if(/image\//.test(file.type)){
            var reader = new FileReader() ;
            reader.onloadend = function(){
                preview.src = reader.result ;
                $("#uploadPreviewBtn").removeClass("disabled");
            }
            if(file){
                reader.readAsDataURL(file) ;
            }else{
                preview.src = "image-text.png" ;
            }
        }else{
            console.log("你输入的格式不对,请输入正确的图片!!!!!");
            return ;
        }
    }else{
        console.log("文件太大，请重新选择!!!");
        return ;
    }

    $("#uploadPreviewBtn").click(function(){

        $("#uploadPreviewBtn").addClass("disabled");
        var file  = document.querySelector('input[type=file]').files[0];
        if(file == null || file == ''){
            console.log("没有文件被选择,请检查!!!");
            return ;
        }
        if(file.size >= 1048576 || !(/image\//.test(file.type)) ){
            console.log("文件不符合要求,请重新选择!!!")

        }
        if(cur_image_file == file){
            console.log("图片已经上传过，请重新选择!!!");
            return
        }
        cur_image_file = file ;
        var storeAs = calculate_object_name(file.name,32) ;
        client.multipartUpload(storeAs,file).then(function(result){

            if(result == {} || result == null && result == ''){
                console.log("上传失败!!!");
                return ;
            }
            console.log(result);
            var src_url = "http://"+imageUrlRoot + "/" + result.name ;
            console.log(src_url);

            courseBasicInfo.previewUrl = imageUrlRoot + "/" + result.name ;

            $("#uploadPreviewBtn").text("已上传") ;
            $("#previewImg").attr("src" , src_url ) ;

            addCourseBtnOn() ;

        }).catch(function(err){
            console.log("上传失败 --> " + err) ;
        })
    })
});



$("#courseName").keyup(function(){
    courseBasicInfo.courseName = $(this).val() ;
    console.log(courseBasicInfo.courseName);
    addCourseBtnOn()
})

$("#mainkeyInput").keyup(function(){
    courseBasicInfo.mainKey = $(this).val() ;
    console.log(courseBasicInfo.mainKey);
    addCourseBtnOn()
})

$("#courseSummary").keyup(function(){
    courseBasicInfo.summary = $(this).val() ;
    console.log(courseBasicInfo.summary);
    addCourseBtnOn()
})

$(":radio[name=pu_or_pr]").change(function(){
    courseBasicInfo.pu_or_pr = $(this).val()=="public" ? 1 : 0  ;
    console.log(courseBasicInfo.pu_or_pr);
})

$(":radio[name=co_or_sp]").change(function(){
    courseBasicInfo.co_or_sp = $(this).val() == "common" ? 1 : 0 ;
    console.log(courseBasicInfo.co_or_sp);
})

function validationBasicInfo(){
    var cName = courseBasicInfo.courseName ;
    var mKey = courseBasicInfo.mainKey ;
    var url = courseBasicInfo.previewUrl ;
    var summ = courseBasicInfo.summary ;

    if(cName.length >= 4 && cName.length < 30){
        if(mKey.length >= 4 && mKey.length < 30 ){
            if(url.length != ''){
                if(summ.length >= 20 && summ.length <120){
                    return true ;
                }
            }
        }
    }
    return false ;
}

//验证信息是否完整
function addCourseBtnOn(){
    if(validationBasicInfo()){
        $("#cofirmBasicInfo").removeClass("disabled");
    }else{
        $("#cofirmBasicInfo").addClass("disabled");
    }
}

$("#cofirmBasicInfo").click(function(){
    //console.log( courseBasicInfo );
    if(validationBasicInfo()){
        courseBasicInfo.courseId = random_string(32) ;
    }else{
        console.log("请将信息输入完整!!!");
        return ;
    }

    // var courseBasicInfo = {
    //     courseId : random_string(32) ,
    //     teacherId : 'FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU' ,
    //     courseName : '地球生态与环境科学' ,
    //     mainKey : '地球 环境 生态 环保' ,
    //     previewUrl : 'image.eeclasscloud.com/e5Nnbhf2R7kwmr5Q386FQeQ2RSp2SBJ2.jpg' ,
    //     pu_or_pr : 1 ,
    //     co_or_sp : 0 ,
    //     summary : '地球，是宇宙的奇迹，生命的摇篮，人类共同的家园。她给人类提供生存的空间和资源，使人类在这里生息繁衍。让我们一起来认识地球，保护地球吧！'  ,
    //     //time : new Date()
    // }

    $.ajax({
        url : '/basicinfo' ,
        type : 'post' ,
        cache : false ,
        data : courseBasicInfo ,
        dataType : 'json' ,
        success : function(data){
            console.log('返回如下数据:');
            console.log(data);
        },
        error : function(){
            console.log("上传出错");
        }
    })


})












































































