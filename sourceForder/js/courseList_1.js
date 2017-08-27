//修改操作
    var $modifyBtn = $("#courseList .modifyBtn") ;

    //修改缩略图参数
    $(document).on("click" , "#courseList .modifyPreviewBtn" , function(){

        currTableModifyIndex = $(".modifyPreviewBtn").index( $(this) ) ;
        console.log(currTableModifyIndex) ;

        var myLength = $("#courseList .modifyPreviewBtn").length ;
        //var index = $(".modifyBtn").index( $(this) ) ;
        //console.log("myLength: -> " + myLength + " myIndex: -> " + index) ;
        //弹出修改
        //$("#modifyModalImg").modal('show') ;

        $("#modifyModalImg").modal({
                closable : false ,
                onDeny : function(){
                    console.log("取消");
                },
                onApprove : function(){
                    console.log("确定");
                }
            })
            .modal('show') ;
    });

    $(document).on("click" , "#courseList .modifyBtn" , function(){

        var myLength = $("#courseList .modifyBtn").length ;
        var index = $(".modifyBtn").index( $(this) ) ;
        console.log("myLength: -> " + myLength + " myIndex: -> " + index) ;
        //弹出修改
        //$("#modifyModalImg").modal('show') ;

        $("#modifyModalInfo").modal({
                closable : false ,
                onDeny : function(){
                    console.log("取消");
                },
                onApprove : function(){
                    console.log("确定");

                }
            })
            .modal('show') ;
    });


    $(document).on("click" , "#courseList .deleteBtn" , function(){

        var $deleteBtn = $("#courseList .deleteBtn") ;
        var index = $deleteBtn.index( $(this) ) ;
        console.log(" myIndex: -> " + index) ;

    });

    $("#previewRegion img").click(function(){
        $("#previewFile").trigger("click");
        //console.log("点击触发事件!!!!");
    })

// $("#previewFile").click(function(){
//     console.log("代理点击事件被触发!!!");
// });

    $("#previewFile").change(function(){

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

    });

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


        //courseBasicInfo.previewUrl = imageUrlRoot + "/" + result.name ;

        $("#uploadPreviewBtn").text("已上传") ;
        $("#previewImg").attr("src" , src_url ) ;

        if(currTableModifyIndex != null){
            tableJson.tableHtml[currTableModifyIndex].previewUrl = src_url ;
            tableListHtml( tableHtml(tableJson) ) ;
        }

    }).catch(function(err){
        console.log("上传失败 --> " + err) ;
    })

})



$("#selSchool .dropdown").dropdown({
    // action : 'hide' ,
    onChange : function(value ,text , $selectedItem){
        console.log("text: " + text);
        console.log("value: " + value)
        console.log($selectedItem);
    }
}) ;

$("#selCollege .dropdown").dropdown({
    // action : 'hide' ,
    onChange : function(value ,text , $selectedItem){
        console.log("text: " + text);
        console.log("value: " + value)
        console.log($selectedItem);
    }
}) ;

$("#selMajor .dropdown").dropdown({
    // action : 'hide' ,
    onChange : function(value ,text , $selectedItem){
        console.log("text: " + text);
        console.log("value: " + value)
        console.log($selectedItem);
    }
}) ;


























































































