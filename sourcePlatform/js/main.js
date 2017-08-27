
//提取条目到数组
var courseArrayList = [] ;
//当前课程系数
var curr_course_index = 0 ;
//显示页码的数量
var page_number_count = 5 ;
//当前页面
var curr_page_index = 1 ;
var every_page_count = 5 ;
//当前课程id
var curr_course_id = null ;

var firstLoadJson = {
    teacherId : "FmYE4FAgW6Fi1iqV98yjUfQGyuibJRnU" ,
    currCourseTotalCount : 43 ,
    courseNameListSideBar : [
        {
            courseId :"FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            courseName : "有机化学" ,
            courseSection : [
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第零章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第一章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第二章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第三章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第四章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第五章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第六章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第七章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第八章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第九章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第十章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第十一章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第十二章"
                }
            ]
        },
        {
            courseId :"FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            courseName : "高等代数" ,
            courseSection : []
        } ,
        {
            courseId :"FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            courseName : "静态立体化学" ,
            courseSection : []
        }
    ],
    courseBasicInfoList_R : [
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "高分子结构萃取流程1" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 0 ,
            co_or_sp : 0 ,
        },
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqVCEy45fQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "高分子结构萃取流程2" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        },
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "高分子结构萃取流程3" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 1 ,
        },
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "高分子结构萃取流程4" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        },
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "高分子结构萃取流程5" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        }

    ]

}

var sidebarCourseLoadJson = {
    teacherId : "FmY45FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
    currCourseTotalCount : 18 ,
    courseNameListSideBar : [
        {
            courseId :"FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            courseName : "有机化学" ,
            courseSection : []
        },
        {
            courseId :"FmYE4FAgW6Fi1iqV777jUfQGpLSbJRnU" ,
            courseName : "高等代数" ,
            courseSection : [
                {
                sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                sectionName : "高等数学第零章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第一章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第二章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第三章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第四章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第五章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "语文课第六章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第七章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第八章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第九章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第十章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第十一章" ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    sectionName : "高等数学第十二章"
                }
            ]
        } ,
        {
            courseId :"FmYE4FAgW6F999iqV98yjUfQGpLSbJRnU" ,
            courseName : "静态立体化学" ,
            courseSection : []
        }
    ],
    courseBasicInfoList_R : [
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "应用化学第零章" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 0 ,
            co_or_sp : 0 ,
        },
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqVCEy45fQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "应用化学第1章" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        },
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "应用化学第2章" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 1 ,
        },
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "应用化学第2章" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        },
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "应用化学第3章" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        }

    ]

}

var curr_page_json = {
    courseId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
    currCourseTotalCount : 18 ,
    courseBasicInfoList_R : [
        {
            sectionId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview2.png" ,
            s_title : "碳架分类" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 0 ,
            co_or_sp : 0 ,
        },
        {
            sectionId : "FmYE4FAgW6Fi1iqVCEy45fQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview2.png" ,
            s_title : "开链化合物" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        },
        {
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "官能团分类" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 1 ,
        },
        {
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview2.png" ,
            s_title : "有机化学中的酸碱概念" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        },
        {
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "酸碱的电离理论" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        }

    ]

}

//获取当前课程ID
function getCurrCourseId(obj){
    if(obj != null && obj != ''){
        curr_course_id = obj ;
    }else{
        return ;
    }

}

//传参数
function pageNoToGetJson(n , courseId){
    var argsJson = {
        //courseId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
        courseId : courseId ,
        pageNo : n
    }
    return JSON.parse(JSON.stringify(argsJson)) ;
}

function getParameter(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}


function sideBarListStr(obj){
    var cNamelist = obj.courseNameListSideBar ;
    var courseNameStr = '' ;
    for(var i = 0 ; i < cNamelist.length ; i++){
        var cSection = cNamelist[i].courseSection ;
        var templateA = '<div dataNo="'+ cNamelist[i].courseId +'" class="courseListA">'+ cNamelist[i].courseName +'</div>' ;
        courseNameStr += templateA ;
        if(cSection.length > 0){
            for(var j = 0 ; j < cSection.length ; j++ ){
                var templateB = '<div dataNo="'+ cSection[j].sectionId +'" class="courseListB">'+ cSection[j].sectionName +'</div>' ;
                courseNameStr += templateB ;
            }
        }
    }
    return courseNameStr ;
}

function sectionBasicInfoList(obj){
    var sourceArr = obj.courseBasicInfoList_R ;
    var sectionStr = '' ;
    //获取当秦课程Id
    getCurrCourseId(sourceArr[0].courseId) ;

    for(var i = 0 ; i < sourceArr.length ; i++){
        var pu_or_pr = (sourceArr[i].pu_or_pr == 0 ) ? "公开课" : "私有课"  ;
        var co_or_sp = (sourceArr[i].co_or_sp == 0 ) ? "公共基础课" : "专业课" ;
        var template = '<div class="courseListEveryone" datano="'+ sourceArr[i].sectionId +'">'+
            '<div class="addTimeAndOparite">'+
            '<div class="addTime">'+
            '添加时间:'+
            '<span>'+ sourceArr[i].s_addTime +'</span>'+
            '</div>'+
            '<div class="opariteCourse">'+
            '<span class="modifyCourse">修改</span> |'+
            '<span class="deleteCourse">删除</span>'+
            '</div>'+
            '</div>'+
            '<div class="everyoneCourseMain">'+
            '<a class="previewImgCon"><img src="'+ sourceArr[i].s_preview +'" alt=""></a>'+
            '<div class="courseText">'+
            '<div class="courseTitle">'+
            '<a href="" class="courseTitleText">'+ sourceArr[i].s_title +'</a>'+
            '<a class="ui orange label lableMargin">'+ pu_or_pr +'</a>'+
            '<a class="ui teal label lableMargin">'+ co_or_sp +'</a>'+
            '</div>'+
            '<div class="courseSummary">'+ sourceArr[i].s_summary +'</div>' +
            '</div></div></div>' ;

        sectionStr += template ;
    }

    return sectionStr ;
}

//清除子元素
function emptyChild(sel){
    sel.empty() ;
}

//添加html
function addHtml(obj , sel){
    sel.prepend(obj) ;
}

/*
function toListPage( n ){
    var pageNo = parseInt(n);
    if(curr_page_index == pageNo ){
        return ;
    }

    var data = pageNoToGetJson(pageNo , curr_course_id) ;

    $.ajax({
        type : "post" ,
        url : "/getPageContent" ,
        data : data ,
        dataType : "json" ,
        success : function(data){

            emptyChild($(".mainListCon")) ;
            //addHtml(sectionBasicInfoList(curr_page_json) , $(".mainListCon") ) ;
            addHtml(sectionBasicInfoList(data) , $(".mainListCon") ) ;


            curr_page_index = pageNo ;
        },

        error : function(XMLHttpRequest , textStatus , errorThrown){


        }

    })
}
*/

function toListPage( n ){
    var pageNo = parseInt(n);
    if(curr_page_index == pageNo ){
        return ;
    }

    var data = pageNoToGetJson(pageNo , curr_course_id) ;

    emptyChild($(".mainListCon")) ;
    //addHtml(sectionBasicInfoList(curr_page_json) , $(".mainListCon") ) ;
    addHtml(sectionBasicInfoList(curr_page_json) , $(".mainListCon") ) ;

    curr_page_index = pageNo ;

}

//加载分页器
function toAnotherPage(page , size , count){
    console.log(page) ;
    toListPage( page ) ;
    //curr_page_index = page ;
}

function reloadPager( total , every_page_count ){
    var totalPage = Math.ceil( total / every_page_count );
    var totalRecords = total ;

    var pp = new Paging() ;
    pp.init({
        target : "#kkpager" ,
        pagesize : every_page_count ,
        count : total ,
        //toolbar : true ,
        callback : toAnotherPage ,
    })
    pp.render({
        current : curr_page_index
    })
}


//侧栏课程点击
function getSidebarContent(courseId){

    if(courseId == null || courseId == ''){
        console.log("发生错误,请重来!!!") ;
        return ;
    }

    if(curr_course_id == courseId){
        console.log("你点击的是同一课程!!!") ;
        return ;
    }

    emptyChild($(".siderBarBox")) ;
    emptyChild($(".mainListCon")) ;
    emptyChild($("#kkpager")) ;

    addHtml(sideBarListStr( sidebarCourseLoadJson ) , $(".siderBarBox")) ;
    addHtml(sectionBasicInfoList( sidebarCourseLoadJson ) , $(".mainListCon") ) ;

    reloadPager( sidebarCourseLoadJson.currCourseTotalCount , every_page_count )

    curr_course_id = courseId ;
}



$(".selectUserInfo").dropdown({
    action : 'hide'
}) ;

$(document).on("click" , ".courseListA" , function(){

    //firstLoadJson = sidebarCourseLoadJson ;
    var courseId = $(this).attr("datano") ;
    if(courseId == null || courseId == '' ){
        return ;
    }

    getSidebarContent(courseId) ;

    //$(this).parents(".siderBarBox").find(".courseListB").hide() ;
    //$(this).nextUntil(".courseListA").toggle() ;

})









































































































