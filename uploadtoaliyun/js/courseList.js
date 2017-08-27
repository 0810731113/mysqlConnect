//修改操作
    var $modifyBtn = $("#courseList .modifyBtn") ;

    //修改缩略图参数
   /* $(document).on("click" , "#courseList .modifyPreviewBtn" , function(){

        currTableModifyIndex = $(".modifyPreviewBtn").index( $(this) ) ;
        console.log(currTableModifyIndex) ;

        var myLength = $("#courseList .modifyPreviewBtn").length ;
        //var index = $(".modifyBtn").index( $(this) ) ;

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
    });*/

    $(document).on("click" , "#courseList .modifyPreviewBtn" , function(){
        // $("#courseList .modifyPreviewTr").remove() ;
        // $("#courseList .modifyBasicInfoTr").remove() ;
        // currTableModifyIndex = $(".modifyPreviewBtn").index( $(this) ) ;

        deleteModifyCourseEditBox($(this) , modifyCoursePreviewImg) ;

        // $(this).closest("tr").after(modifyCoursePreviewImg()) ;
        // console.log();
    })

$(document).on("click" , "#courseList .modifyBtn" , function(){

    // $("#courseList .modifyPreviewTr").remove() ;
    // $("#courseList .modifyBasicInfoTr").remove() ;
    //currTableModifyIndex = $(".modifyPreviewBtn").index( $(this) ) ;
    deleteModifyCourseEditBox($(this) , modifyCourseInfo ) ;

    // $(this).closest("tr").after(modifyCourseInfo()) ;
    // console.log();
})
    //修改基本信息
    /*$(document).on("click" , "#courseList .modifyBtn" , function(){

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
    });*/


    /*$(document).on("click" , "#courseList .deleteBtn" , function(){

        var $deleteBtn = $("#courseList .deleteBtn") ;
        var index = $deleteBtn.index( $(this) ) ;
        console.log(" myIndex: -> " + index) ;

    });*/

    $(document).on("click" , "#previewRegion img" ,function(){
        $("#previewFile").trigger("click");
        //console.log("点击触发事件!!!!");
    })

$(document).on("click" , "#previewFile" ,function(){
    console.log("代理点击事件被触发!!!");
});

    $(document).on("change" , "#previewFile" ,function(){

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

$(document).on("click" , "#uploadPreviewBtn" ,function(){

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

        //addNewcourse
        if($("#previewImg").attr("todo") == "addNew"){

            modifyAddInfoToJson("previewUrl" ,src_url) ;
            $("#previewImg").attr("src" , src_url ) ;

        } else{

            $("#uploadPreviewBtn").text("已上传") ;
            $("#previewImg").attr("src" , src_url ) ;

            if(currTableModifyIndex != null){
                tableJson.tableHtml[currTableModifyIndex].previewUrl = src_url ;
                tableListHtml( tableHtml(tableJson) ) ;
            }

            $(this).closest("tr.modifyPreviewTr").remove() ;
        }


    }).catch(function(err){
        console.log("上传失败 --> " + err) ;
    })

})


//激活下拉选择框
function activeSelectSchoolInfo(){

    $("#selSchool .dropdown").dropdown({
        // action : 'hide' ,
        onChange : function(value ,text , $selectedItem){

            curr_school_index = value ;
            loadSCM(curr_school_index , curr_college_index ) ;
            modifyInfoToDataChange("school" ,text)
        }
    }) ;

    $("#selCollege .dropdown").dropdown({
        // action : 'hide' ,
        onChange : function(value ,text , $selectedItem){

            curr_college_index = value ;
            loadSCM(curr_school_index , curr_college_index) ;
            modifyInfoToDataChange("college" ,text)
        }
    }) ;

    $("#selMajor .dropdown").dropdown({
        // action : 'hide' ,
        onChange : function(value ,text , $selectedItem){

            curr_major_index = value ;
            modifyInfoToDataChange("major" , text)
        }
    }) ;
}


//添加里的下拉选择

function activeSelectSchoolInfoAdd(){

    $("#selSchoolAdd .dropdown").dropdown({
        // action : 'hide' ,
        onChange : function(value ,text , $selectedItem){

            curr_school_index = value ;
            loadSCMAdd(curr_school_index , curr_college_index) ;
            modifyAddInfoToJson("school" , text)
        }
    }) ;

    $("#selCollegeAdd .dropdown").dropdown({
        // action : 'hide' ,
        onChange : function(value ,text , $selectedItem){

            curr_college_index = value ;
            loadSCMAdd(curr_school_index , curr_college_index) ;
            modifyAddInfoToJson("college" , text)
        }
    }) ;

    $("#selMajorAdd .dropdown").dropdown({
        // action : 'hide' ,
        onChange : function(value ,text , $selectedItem){

            curr_major_index = value ;
            modifyAddInfoToJson("major" , text)

        }
    }) ;

}


$(document).on("keyup" , "#courseName" ,function(){
    //console.log($(this).val());
    modifyInfoToDataChange("courseName" , $(this).val()) ;
})

$(document).on("keyup" , "#modifyMainKey" ,function(){
    //console.log($(this).val());
    modifyInfoToDataChange("mainKey" , $(this).val()) ;
})
$(document).on("keyup" , "#teachHonor" ,function(){
    //console.log($(this).val());
    modifyInfoToDataChange("honor" , $(this).val()) ;
})


//addNewCourse
$(document).on("keyup" , "#courseNameAdd" ,function(){
    console.log($(this).val());
    modifyAddInfoToJson("courseName" , $(this).val()) ;
})

$(document).on("keyup" , "#modifyMainKeyAdd" ,function(){
    console.log($(this).val());
    modifyAddInfoToJson("mainKey" , $(this).val()) ;
})
$(document).on("keyup" , "#teachHonorAdd" ,function(){
    console.log($(this).val());
    modifyAddInfoToJson("honor" , $(this).val()) ;
})


$(document).on("click" ,"tr.modifyBasicInfoTr .modifyBasicInfoConfirmBtn" , function(){
    tableListHtml( tableHtml(tableJson) ) ;
})

$(document).on("click" ,"tr.modifyBasicInfoTr .modifyBasicInfoCancelBtn" , function(){
    $(this).closest("tr.modifyBasicInfoTr").remove() ;
})

$(document).on("click" , "tr.everyTrLine .deleteBtn" , function(){
    console.log("delete") ;
    // $(this).closest("tr.everyTrLine").remove() ;
    //var index = cumputerThisTrLineNo("tr" , $(this)) ;
    currTableModifyIndex = $("#courseList .deleteBtn").index($(this)) ;
    console.log(currTableModifyIndex);
    // tableJson.tableHtml = _.remove(tableJson.tableHtml , function(n){
    //     return currTableModifyIndex ;
    // }) ;
    tableJson.tableHtml.del(currTableModifyIndex)

    console.log(tableJson.tableHtml.length) ;

    tableListHtml( tableHtml(tableJson) )

})

$("#addNewCourseBtn").click(function(){

    $("#courseList .modifyPreviewTr").remove() ;
    $("#courseList .modifyBasicInfoTr").remove() ;

    initAddCourseContent();
    loadSCMAdd( 0 , 0 ) ;

    $("#modifyModalInfo").modal({
            closable : false ,
            onDeny : function(){
                console.log("取消");
                cleanAddNewCourseJson() ;
            },
            onApprove : function(){

                console.log("确定");
                addNewCourseJson.courseId = random_string(32) ;
                var jsonToAdd = JSON.parse(JSON.stringify(addNewCourseJson)) ;
                tableJson.tableHtml.push(jsonToAdd);
                tableListHtml( tableHtml(tableJson) ) ;

                cleanAddNewCourseJson() ;

            }
        })
        .modal('show') ;

    activeSelectSchoolInfoAdd() ;
    
});





























































































