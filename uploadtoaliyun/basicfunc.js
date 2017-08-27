//进度条
var videoPercent = 0 ;

accessid= 'LTAIOzCOPhMcXFAh';
accesskey= 'CRWJQgBKQAoWI2XaGGYTLDD7WLZXW7';

host = 'http://eeclass-kejian-store-1.oss-cn-shanghai.aliyuncs.com';

g_dirname = ''
g_object_name = ''
g_object_name_type = 'random_name' ;
now = timestamp = Date.parse(new Date()) / 1000;

var policyText = {
    "expiration": "2020-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
    "conditions": [
        ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
    ]
};

var policyBase64 = Base64.encode(JSON.stringify(policyText)) ;
message = policyBase64 ;
var bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, { asBytes: true }) ;
var signature = Crypto.util.bytesToBase64(bytes);


//当前图片，避免多次上传同一张图片
var cur_image_file = null ;
var imageUrlRoot = "image.eeclasscloud.com" ;

var client = new OSS.Wrapper({
    region: 'oss-cn-shanghai',
    accessKeyId: accessid ,
    accessKeySecret: accesskey ,
    bucket: 'eeclass-kejian-store-1'
})

//满足基本信息参数
var allConditionDone = true ;
var allConditionNone = true ;

var teacherInfo = {
    id : "10000001" ,
    name : "张大千"
}

var courseBasicInfo = {
    courseId : '' ,
    teacherId : 'FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU' ,
    courseName : '' ,
    mainKey : '' ,
    previewUrl : '' ,
    pu_or_pr : 0 ,
    co_or_sp : 0 ,
    summary : ''
}

//视频信息
var videosInfo = [] ;

var videoInfo = {
    videoId : '' ,
    courseId : '' ,
    name : '' ,
    url : '' ,
    videoNo : '' ,
    chapterName : '' ,
    chapterNo : ''

} ;

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

function get_uploaded_object_name(filename){
    return g_object_name ;
}

$('#basicInfo.ui.form')
    .form({
        on: 'blur' ,
        fields: {
            courseName_minkey : {
                identifier  : 'courseName',
                rules: [
                    {
                        type   : 'minLength[4]',
                        prompt : '请输入课程名称'
                    }
                ]
            },
            mainkey_minLen: {
                identifier  : 'mainkeyInput' ,
                rules: [
                    {
                        type   : 'minLength[4]',
                        prompt : 'Please enter at least 100 characters'
                    }
                ]
            },
            summary_minLen : {
                identifier  : 'courseSummary' ,
                rules: [
                    {
                        type   : 'minLength[20]',
                        prompt : 'Please enter at least 100 characters'
                    }
                ]
            },
        }
    });














































