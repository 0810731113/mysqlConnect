var videoPercent = 0 ;

accessid= 'LTAIOzCOPhMcXFAh';
accesskey= 'CRWJQgBKQAoWI2XaGGYTLDD7WLZXW7';

host = 'http://eeclass-kejian-store-1.oss-cn-shanghai.aliyuncs.com';

//当前修改的第几行
var currTableModifyIndex = null ;

//当前图片，避免多次上传同一张图片
var cur_image_file = null ;
var imageUrlRoot = "image.eeclasscloud.com" ;

var client = new OSS.Wrapper({
    region: 'oss-cn-shanghai',
    accessKeyId: accessid ,
    accessKeySecret: accesskey ,
    bucket: 'eeclass-kejian-store-1'
})

function random_string(len){
    var len = len || 32 ;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890' ;
    var maxPos = chars.length ;
    var pwd = '' ;
    for(i = 0 ; i < len ; i++){
        pwd += chars.charAt(Math.floor(Math.random() * maxPos )) ;
    }
    return pwd ;
}

function get_suffix(filename){

    var pos = filename.lastIndexOf('.') ;
    var suffix = '' ;
    if(pos != -1){
        suffix = filename.substring(pos);
    }
    return suffix ;
}

function calculate_object_name(filename , len){
    if(filename  == null || filename == ''){
        console.log("获取文件名称错误!!!!");
        return ''
    }
    //console.log(random_string(len) + get_suffix(filename))
    g_object_name = random_string(len) + get_suffix(filename) ;
    return g_object_name;
}

var tableJson ={
    userId : "" ,
    tableHtml : [{
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        previewUrl : "http://image.eeclasscloud.com/2B8bmauFxVHJrVZl3OL4aJKHVa9vosOP.jpg" ,
        courseName : '地球环境科学概论' ,
        mainKey : "地球 环境 科学 地理" ,
        honor : "教授 讲师" ,
        school : "中山大学" ,
        college : "化工学院" ,
        major : "应用化学"
    } ,
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        previewUrl : "http://image.eeclasscloud.com/LwSg6pSHed9YonC1gsBHnLCfdce7Wb4v.jpg" ,
        courseName : '地球环境科学概论' ,
        mainKey : "地球 环境 科学 地理" ,
        honor : "教授 讲师" ,
        school : "云南大学" ,
        college : "建筑学院" ,
        major : "应用化学"
    },
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        previewUrl : "http://image.eeclasscloud.com/2B8bmauFxVHJrVZl3OL4aJKHVa9vosOP.jpg" ,
        courseName : '外交学概论' ,
        mainKey : "政治 外交 跨国贸易 博弈论" ,
        honor : "博士生导师" ,
        school : "哈佛大学" ,
        college : "政治经济学院" ,
        major : "应用化学"
    } ,
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        previewUrl : "http://image.eeclasscloud.com/LwSg6pSHed9YonC1gsBHnLCfdce7Wb4v.jpg" ,
        courseName : '高分子有机材料合成' ,
        mainKey : "高分子 化学 材料" ,
        honor : "院士" ,
        school : "南京大学" ,
        college : "材料学院" ,
        major : "香精香料专业"
    },
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        courseName : '物理化学' ,
        previewUrl : "http://image.eeclasscloud.com/2B8bmauFxVHJrVZl3OL4aJKHVa9vosOP.jpg" ,
        mainKey : "物理化学 气体压力 熵值" ,
        honor : "教授 讲师" ,
        school : "中山大学" ,
        college : "化工学院" ,
        major : "应用化学"
    } ,
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        courseName : '流体力学' ,
        previewUrl : "http://image.eeclasscloud.com/LwSg6pSHed9YonC1gsBHnLCfdce7Wb4v.jpg" ,
        mainKey : "流体 力学 水压" ,
        honor : "教授 讲师" ,
        school : "中山大学" ,
        college : "化工学院" ,
        major : "应用化学"
    }]
}



function tableHtml(obj){
    var tableStrs = '' ;
    var listObjs = obj.tableHtml ;
    for(var i = 0 ; i < listObjs.length ; i++){
        var listObj = listObjs[i] ;
        var tableListLine = '<tr class="everyTrLine">'+
            '<td> <img class="ui tiny image" src="'+ listObj.previewUrl +'" /></td>'+
            '<td><a href="#">'+ listObj.courseName +'</a></td>'+
            '<td>'+ listObj.mainKey +'</td>'+
            '<td>'+ listObj.honor +'</td>'+
            '<td>'+ listObj.school + ' , ' + listObj.college + ' , '+ listObj.major +'</td>'+
            '<td class="collapsing">'+
            '<a class="ui label modifyBtn">修改</a>'+
            '<a class="ui label modifyPreviewBtn">修改缩略图</a>'+
            '<a class="ui label deleteBtn">删除</a>'+
            '</td>'+
            '</tr>' ;

        tableStrs += tableListLine ;
    }
    return tableStrs ;
}

function tableListHtml( obj){
    $("#courseList tbody").empty() ;
    $("#courseList tbody").append(obj) ;

}

function modifyCoursePreviewImg(){

    var modifyImgStr = '<tr class="modifyPreviewTr" >' +
        '<td colspan="6">'+
        '<div class="previewImgBox">'+
        '<div id="previewRegion">'+
        '<img id="previewImg" src="image-text.png" alt="" class="ui small img" />'+
        '<input type="file" id="previewFile" style="display:none ;" >'+
        '</div>'+
        '<div>'+
        '<button class="ui disabled teal button" id="uploadPreviewBtn"> 上传 </button>'+
        '</div>'+
        '</div>'+
        '</td>'+
        '</tr>' ;

    return modifyImgStr ;
}


//修改课程基本信息

/*function modifyCourseInfo(){
    var modifyInfoStr = '<tr class="modifyBasicInfoTr">'+
        '<td colspan="6">'+
        '<div class="ui form popupBasicInfoMargin">'+
        '<div class="required field">'+
        '<label>课程名称</label>'+
        '<div class="ui fluid icon input">'+
        '<input name="courseName" type="text" placeholder="4-30个字符" id="courseName">'+
        '</div>'+
        '</div>'+
        '<div class="two fields">'+
        '<div class="field">'+
        '<label>关键字</label>'+
        '<div class="ui fluid icon input">'+
        '<input name="modifyMainKey" type="text" placeholder="4-30个字符" id="modifyMainKey">'+
        '</div>'+
        '</div>'+
        '<div class="field">'+
        '<label>头衔</label>'+
        '<div class="ui fluid icon input">'+
        '<input name="teachHonor" type="text" placeholder="4-30个字符" id="teachHonor">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="three fields">'+
        '<div class="required field" id="selSchool">'+
        '<label>选择学校</label>'+
        '<div class="ui fluid search selection dropdown">'+
        '<input type="hidden" name="college">'+
        '<i class="dropdown icon"></i>'+
        '<div class="default text">选择学校</div>'+
        '<div class="menu">'+
        '<div class="item" data-value="fudan">复旦大学</div>'+
        '<div class="item" data-value="shanghaijiaoda">上海交通大学</div>'+
        '<div class="item" data-value="tongji">同济大学</div>'+
        '<div class="item" data-value="huadongshifan">华东师范大学</div>'+
        '<div class="item" data-value="shanghaicaijing">上海财经大学</div>'+
        '<div class="item" data-value="donghua">东华大学</div>'+
        '<div class="item" data-value="huadongligong">华东理工大学</div>'+
        '<div class="item" data-value="huadongzhengfa">华东政法大学</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="required field" id="selCollege">'+
        '<label>选择学院</label>'+
        '<div class="ui fluid search selection dropdown">'+
        '<input type="hidden" name="college">'+
        '<i class="dropdown icon"></i>'+
        '<div class="default text">选择院系</div>'+
        '<div class="menu">'+
        '<div class="item" data-value="huagong">化工学院</div>'+
        '<div class="item" data-value="huagong">机电学院</div>'+
        '<div class="item" data-value="huagong">轨道交通学院</div>'+
        '<div class="item" data-value="huagong">建筑设计学院</div>'+
        '<div class="item" data-value="huagong">计算机科学学院</div>'+
        '<div class="item" data-value="huagong">材料工程学院</div>'+
        '<div class="item" data-value="huagong">传媒学院</div>'+
        '<div class="item" data-value="huagong">外国语学院</div>'+
        '<div class="item" data-value="huagong">物理学院</div>'+
        '<div class="item" data-value="huagong">地球工程与科学学院</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="required field" id="selMajor">'+
        '<label>选择专业</label>'+
        '<div class="ui fluid search selection dropdown">'+
        '<input type="hidden" name="major">'+
        '<i class="dropdown icon"></i>'+
        '<div class="default text">选择专业</div>'+
        '<div class="menu">'+
        '<div class="item" data-value="biaomianjinshi">表面精饰</div>'+
        '<div class="item" data-value="biaomianjinshi">精细化工</div>'+
        '<div class="item" data-value="biaomianjinshi">有机化学</div>'+
        '<div class="item" data-value="biaomianjinshi">物理化学</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="field">'+
        '<div style="display:inline-block ;float: right ; margin:12px;">'+
        '<a class="ui teal button modifyBasicInfoConfirmBtn">确定修改</a>'+
        '<a class="ui button modifyBasicInfoCancelBtn">取消</a>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</td>'+
        '</tr>' ;

    return modifyInfoStr ;
}*/

//输入
//修改课程基本信息
function modifyCourseInfo(){
    //var index = currTableModifyIndex ;
    var currCon = tableJson.tableHtml[ currTableModifyIndex ] ;

    var modifyInfoStr = '<tr class="modifyBasicInfoTr">'+
        '<td colspan="6">'+
        '<div class="ui form popupBasicInfoMargin">'+
        '<div class="required field">'+
        '<label>课程名称</label>'+
        '<div class="ui fluid icon input">'+
        '<input name="courseName" type="text" value="'+ currCon.courseName +'" placeholder="4-30个字符" id="courseName">'+
        '</div>'+
        '</div>'+
        '<div class="two fields">'+
        '<div class="field">'+
        '<label>关键字</label>'+
        '<div class="ui fluid icon input">'+
        '<input name="modifyMainKey" type="text" value="'+ currCon.mainKey +'" placeholder="4-30个字符" id="modifyMainKey">'+
        '</div>'+
        '</div>'+
        '<div class="field">'+
        '<label>头衔</label>'+
        '<div class="ui fluid icon input">'+
        '<input name="teachHonor" type="text" value="'+ currCon.honor +'" placeholder="4-30个字符" id="teachHonor">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="three fields">'+
        '<div class="required field" id="selSchool">'+
        '<label>选择学校</label>'+
        '<div class="ui fluid search selection dropdown">'+
        '<input type="hidden" name="college">'+
        '<i class="dropdown icon"></i>'+
        '<div class="default text">'+ currCon.school +'</div>'+
        '<div class="menu">'+
        '<div class="item" data-value="fudan">复旦大学</div>'+
        '<div class="item" data-value="shanghaijiaoda">上海交通大学</div>'+
        '<div class="item" data-value="tongji">同济大学</div>'+
        '<div class="item" data-value="huadongshifan">华东师范大学</div>'+
        '<div class="item" data-value="shanghaicaijing">上海财经大学</div>'+
        '<div class="item" data-value="donghua">东华大学</div>'+
        '<div class="item" data-value="huadongligong">华东理工大学</div>'+
        '<div class="item" data-value="huadongzhengfa">华东政法大学</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="required field" id="selCollege">'+
        '<label>选择学院</label>'+
        '<div class="ui fluid search selection dropdown">'+
        '<input type="hidden" name="college">'+
        '<i class="dropdown icon"></i>'+
        '<div class="default text">'+ currCon.college +'</div>'+
        '<div class="menu">'+
        '<div class="item" data-value="huagong">化工学院</div>'+
        '<div class="item" data-value="huagong">机电学院</div>'+
        '<div class="item" data-value="huagong">轨道交通学院</div>'+
        '<div class="item" data-value="huagong">建筑设计学院</div>'+
        '<div class="item" data-value="huagong">计算机科学学院</div>'+
        '<div class="item" data-value="huagong">材料工程学院</div>'+
        '<div class="item" data-value="huagong">传媒学院</div>'+
        '<div class="item" data-value="huagong">外国语学院</div>'+
        '<div class="item" data-value="huagong">物理学院</div>'+
        '<div class="item" data-value="huagong">地球工程与科学学院</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="required field" id="selMajor">'+
        '<label>选择专业</label>'+
        '<div class="ui fluid search selection dropdown">'+
        '<input type="hidden" name="major">'+
        '<i class="dropdown icon"></i>'+
        '<div class="default text">'+ currCon.major +'</div>'+
        '<div class="menu">'+
        '<div class="item" data-value="biaomianjinshi">表面精饰</div>'+
        '<div class="item" data-value="biaomianjinshi">精细化工</div>'+
        '<div class="item" data-value="biaomianjinshi">有机化学</div>'+
        '<div class="item" data-value="biaomianjinshi">物理化学</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<div class="field">'+
        '<div style="display:inline-block ;float: right ; margin:12px;">'+
        '<a class="ui teal button modifyBasicInfoConfirmBtn">确定修改</a>'+
        '<a class="ui button modifyBasicInfoCancelBtn">取消</a>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</td>'+
        '</tr>' ;

    return modifyInfoStr ;
}


//删除表格修改界面基本信息
function deleteModifyCourseEditBox(obj , fn ){

    $("#courseList .modifyPreviewTr").remove() ;
    $("#courseList .modifyBasicInfoTr").remove() ;
    var className = $(obj).attr("class");
    console.log(className) ;
    if(className.indexOf('modifyPreviewBtn') >= 0){
        currTableModifyIndex =  $(".modifyPreviewBtn").index( obj ) ;
    }else if(className.indexOf('modifyBtn') >= 0){
        currTableModifyIndex =  $(".modifyBtn").index( obj ) ;
    }else{
        console.log("你进错了地方!!!") ;
    }

    console.log( currTableModifyIndex ) ;
    $(obj).closest("tr").after(fn) ;

    activeSelectSchoolInfo() ;

}

//修改数据到data
function modifyInfoToDataChange(key , value){
    tableJson.tableHtml[currTableModifyIndex][key] = value ;
}

// function cumputerThisTrLineNo(pointParent , obj){
//     currTableModifyIndex = obj.closest(pointParent).index(obj) ;
//     return currTableModifyIndex ;
// }

Array.prototype.del = function(index){

    if(isNaN(index) || index >= this.length){
        return false ;
    }
    for(var i = 0 ,n  = 0 ; i < this.length ; i++ ){
        if(this[i] != this[index]){
            this[n++] = this[i] ;
        }
    }
    this.length -= 1 ;
};

Array.prototype.indexOf = function(val){
    for(var i = 0 ; i < this.length ; i++){
        if(this[i]  == val) return i ;
    }
    return -1 ;
}

Array.prototype.remove = function(val){
    var index = this.indexOf(val) ;
    if(index > -1){
        this.splice(index , 1 ) ;
    }
}

var SCMList = {
    "0" : ["清华大学" , "北京大学" , "复旦大学" ] ,
    "0_0" : ["经管学院","人文学院" , "建筑学院" ,"化工学院"] ,
    "0_0_0" : ["市场营销" ,"旅游管理","商务策划" , "项目管理"] ,
    "0_0_1" : ["文化产业管理"  , "社会保障工作" , "思想政治学院"] ,
    "0_0_2" : ["城乡规划"  , "风景园林" , "室内设计" , "建筑环境与设备工程"] ,
    "0_0_3" : ["应用化学"  , "表面精饰" , "有机合成"] ,
    "0_1" : ["教育学院" , "外国语学院" , "体育学院" ] ,
    "0_1_0" : ["科学教育" , "人文教育" , "艺术教育" , "学前教育"] ,
    "0_1_1" : ["英语","俄语","西班牙语" ,"阿拉伯语"] ,
    "0_1_2" : ["体育教育" , "社会体育指导与管理" , "武术与民族传统体育" , "运动人体科学"] ,
    "0_2" : ["文学院" , "政治学院" , "经贸学院" , "金融学院"] ,
    "0_2_0" : ["汉语言文学","少数民族语言文学","古典文献学","西方文学"] ,
    "0_2_1" : ["政治学与行政学","国际政治","外交学"] ,
    "0_2_2" : ["国际经济与贸易","贸易经济","投资分析","经济哲学"] ,
    "0_2_3" : ["金融学","金融工程","保险学","投资学"]
}









































































