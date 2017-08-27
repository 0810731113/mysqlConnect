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

//选择学校学院专业
var curr_school_index = 0 ;
var curr_college_index = 2 ;
var curr_major_index = 2 ;

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
        school : "清华大学" ,
        college : "化工学院" ,
        major : "应用化学"
    } ,
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        previewUrl : "http://image.eeclasscloud.com/LwSg6pSHed9YonC1gsBHnLCfdce7Wb4v.jpg" ,
        courseName : '地球环境科学概论' ,
        mainKey : "地球 环境 科学 地理" ,
        honor : "教授 讲师" ,
        school : "清华大学" ,
        college : "建筑学院" ,
        major : "风景园林"
    },
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        previewUrl : "http://image.eeclasscloud.com/2B8bmauFxVHJrVZl3OL4aJKHVa9vosOP.jpg" ,
        courseName : '外交学概论' ,
        mainKey : "政治 外交 跨国贸易 博弈论" ,
        honor : "博士生导师" ,
        school : "北京大学" ,
        college : "教育学院" ,
        major : "人文教育"
    } ,
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        previewUrl : "http://image.eeclasscloud.com/LwSg6pSHed9YonC1gsBHnLCfdce7Wb4v.jpg" ,
        courseName : '高分子有机材料合成' ,
        mainKey : "高分子 化学 材料" ,
        honor : "院士" ,
        school : "北京大学" ,
        college : "体育学院" ,
        major : "武术与民族传统体育"
    },
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        courseName : '物理化学' ,
        previewUrl : "http://image.eeclasscloud.com/2B8bmauFxVHJrVZl3OL4aJKHVa9vosOP.jpg" ,
        mainKey : "物理化学 气体压力 熵值" ,
        honor : "教授 讲师" ,
        school : "复旦大学" ,
        college : "文学院" ,
        major : "西方文学"
    } ,
    {
        courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
        courseName : '流体力学' ,
        previewUrl : "http://image.eeclasscloud.com/LwSg6pSHed9YonC1gsBHnLCfdce7Wb4v.jpg" ,
        mainKey : "流体 力学 水压" ,
        honor : "教授 讲师" ,
        school : "复旦大学" ,
        college : "政治学院" ,
        major : "政治学与行政学"
    }]
}

var addNewCourseJson = {
    courseId : "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT" ,
    courseName : "" ,
    previewUrl : "" ,
    mainKey : "" ,
    honor : "" ,
    school : "" ,
    college : "" ,
    major : ""
}

var SCMList = {

    "0" : ["清华大学" , "北京大学" , "复旦大学" ] ,
    "0_0" : ["经管学院","人文学院" , "建筑学院" ,"化工学院"] ,
    "0_0_0" : ["市场营销" , "旅游管理" , "商务策划" , "项目管理"] ,
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

} ;

function cleanAddNewCourseJson(){
    addNewCourseJson = {
        courseId: "AkWu2dqYabstyINx7Xg5K0DXePr2jGLT",
        courseName: "",
        previewUrl: "",
        mainKey: "",
        honor: "",
        school: "",
        college: "",
        major: ""
    }
}

function cleanAddCourseInputContent(){
    $("#courseNameAdd").val('')  ;
    $("#modifyMainKeyAdd").val('')  ;
    $("#teachHonorAdd").val('')  ;
}

//初始化课程添加
function initAddCourseContent(){
    cleanAddNewCourseJson() ;
    cleanAddCourseInputContent() ;
}



//验证参数
function validationAddInput(o){
    if(!/[a-zA-Z0-9_]{32}/.test(o.courseId) ){
        console.log("程序出现错误!") ;
        return false ;
    }
    if(o.courseName.length > 30  || o.courseName.length < 4){
        console.log("请输入正确的课程名称!!!");
        return false
    }
    if(o.mainKey.length > 30  || o.mainKey.length < 4){
        console.log("请输入正确的关键字!!!");
        return false
    }
    if(o.honor.length > 20  || o.honor.length < 2){
        console.log("请输入正确的头衔!!!");
        return false
    }
    if(o.previewUrl.length > 120  || o.previewUrl.length < 40){
        console.log("请选择适当的图片");
        return false
    }
    if(o.school.length > 30  || o.school.length < 4){
        console.log("请选择学校");
        return false
    }
    if(o.college.length > 30  || o.college.length < 4){
        console.log("请选择合适的院系");
        return false
    }
    if(o.college.length > 30  || o.college.length < 4){
        console.log("请选择合适的专业");
        return false
    }
    return true

}

//是否可以添加课程
function addCourseBtnToggleDisabled( o ){
    var canAdd = validationAddInput(o) ;
    if(canAdd){
        $("#confirmAddCourse").removeClass("disabled");
    }else{
        $("#confirmAddCourse").addClass("disabled");
    }
}

//反向求参
function SCMtoNum(school , college , major){

    if(school != null && school != ''){
        for(var i = 0 ; i < SCMList["0"].length ; i++){
            if(school == SCMList["0"][i]){
                curr_school_index = i ;
            }
        }
    }else{
        console.log("请检查学校名称!!!") ;
        return
    }
    var collgeKey = "0_" + curr_school_index ;

    if(college != null && college != ''){
        for(var j = 0 ; j < SCMList[collgeKey].length ; j++){
            if(college == SCMList[collgeKey][j]){
                curr_college_index = j ;
            }
        }
    }else{
        console.log("请检查学院名称!!!");
        return ;
    }

    var majorKey = collgeKey + "_" + curr_college_index ;

    if(major != null && major != ''){
        for(var k = 0 ; k < SCMList[majorKey].length ; k++){
            if(major == SCMList[majorKey][k]){
                curr_major_index = k ;
            }
        }

    }else{
        console.log("请检查专业名称!!!");
    }
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

//tableListHtml( tableHtml(tableJson) ) ;

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
        '<div class="item" data-value="0">化工学院</div>'+
        '<div class="item" data-value="1">机电学院</div>'+
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
        '<div class="item" data-value="0">表面精饰</div>'+
        '<div class="item" data-value="1">精细化工</div>'+
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

        var t_curr_json = tableJson.tableHtml[currTableModifyIndex] ;
        SCMtoNum(t_curr_json.school , t_curr_json.college , t_curr_json.major) ;

    }else{
        console.log("你进错了地方!!!") ;
    }

    console.log( currTableModifyIndex ) ;
    $(obj).closest("tr").after(fn) ;
    loadSCM(curr_school_index , curr_college_index ) ;
    activeSelectSchoolInfo() ;

}

//修改数据到data
function modifyInfoToDataChange(key , value){
    tableJson.tableHtml[currTableModifyIndex][key] = value ;
}

//添加新课程信息
function modifyAddInfoToJson(key , value){
    addNewCourseJson[key] = value ;
    addCourseBtnToggleDisabled( addNewCourseJson ) ;
    console.log( addNewCourseJson );
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

//加载学院
function loadSCM(school , college  ){

    $("#selSchool .menu").empty() ;
    var schools = SCMList["0"] ;
    var schoolLists = '' ;
    var collegeLists = '' ;
    var majorLists = '' ;
    var collegeKey = '' ;
    var majorKey = '' ;
    for(var i = 0 ; i < schools.length ; i++){
        schoolLists += '<div class="item" data-value="'+ i +'">'+ schools[i] +'</div>' ;
    }
    $("#selSchool .menu").append(schoolLists) ;

    $("#selCollege .menu").empty() ;
    if(school != null || school != ''){

        collegeKey = "0_" + school ;

        for(var j = 0 ; j < SCMList[collegeKey].length ; j++){
            collegeLists += '<div class="item" data-value="'+ j +'">'+ SCMList[collegeKey][j] +'</div>' ;
        }
    }
    $("#selCollege .menu").append(collegeLists) ;

    $("#selMajor .menu").empty() ;
    if( college != null || college != '' ){
        majorKey = collegeKey + "_" + college ;
        for(var k = 0 ; k < SCMList[majorKey].length ; k++){
            majorLists += '<div class="item" data-value="'+ k +'">'+ SCMList[majorKey][k] +'</div>'
        }
    }
    $("#selMajor .menu").append(majorLists) ;

    activeSelectSchoolInfo() ;
}

function loadSCMAdd( school , college ){

    $("#selSchoolAdd .menu").empty() ;
    var schools = SCMList["0"] ;
    var schoolLists = '' ;
    var collegeLists = '' ;
    var majorLists = '' ;
    var collegeKey = '' ;
    var majorKey = '' ;
    for(var i = 0 ; i < schools.length ; i++){
        schoolLists += '<div class="item" data-value="'+ i +'">'+ schools[i] +'</div>' ;
    }
    $("#selSchoolAdd .menu").append(schoolLists) ;

    $("#selCollegeAdd .menu").empty() ;

    collegeKey = "0_" + school ;

    for(var j = 0 ; j < SCMList[collegeKey].length ; j++){
        collegeLists += '<div class="item" data-value="'+ j +'">'+ SCMList[collegeKey][j] +'</div>' ;
    }

    $("#selCollegeAdd .menu").append(collegeLists) ;

    $("#selMajorAdd .menu").empty() ;

    majorKey = collegeKey + "_" + college ;
    for(var k = 0 ; k < SCMList[majorKey].length ; k++){
        majorLists += '<div class="item" data-value="'+ k +'">'+ SCMList[majorKey][k] +'</div>'
    }

    $("#selMajorAdd .menu").append(majorLists) ;

    activeSelectSchoolInfo() ;

}

//validation the add input content



$('.popupBasicInfoMargin.ui.form')
    .form({
        on: 'blur' ,
        fields: {
            courseName_minkey : {
                identifier  : 'courseNameAdd',
                rules: [
                    {
                        type   : 'minLength[4]',
                        prompt : '请输入课程名称'
                    }
                ]
            },
            mainkey_minLen: {
                identifier  : 'modifyMainKeyAdd' ,
                rules: [
                    {
                        type   : 'minLength[4]',
                        prompt : 'Please enter at least 4 characters'
                    }
                ]
            },
            summary_minLen : {
                identifier  : 'teachHonorAdd' ,
                rules: [
                    {
                        type   : 'minLength[4]',
                        prompt : 'Please enter at least 2 characters'
                    }
                ]
            },
        }
    });





















































































































