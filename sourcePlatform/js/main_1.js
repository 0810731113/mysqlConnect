

$(".selectUserInfo").dropdown({
    action : 'hide' 
}) ;

$(document).on("click" , ".courseListA" , function(){

    $(this).parents(".siderBarBox").find(".courseListB").hide() ;
    $(this).nextUntil(".courseListA").toggle() ;

})

//提取条目到数组
var courseArrayList = [] ;
//当前课程系数
var curr_course_index = 0 ;
//显示页码的数量
var page_number_count = 5 ;
//当前页面
var curr_page_index = 1 ;
var every_page_count = 5 ;

var courseJsonBasicInfo = {
    s_id : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
    courseList : [
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            courseName : "有机化学" ,
            courseMajor : [
                {
                    sectionId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "高分子结构萃取流程1" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 0 ,
                    co_or_sp : 0 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqVCEy45fQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "高分子结构萃取流程2" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 1 ,
                    co_or_sp : 0 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "高分子结构萃取流程3" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 1 ,
                    co_or_sp : 1 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "高分子结构萃取流程4" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 1 ,
                    co_or_sp : 0 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "高分子结构萃取流程5" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 1 ,
                    co_or_sp : 0 ,
                }
            ]
        },
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            courseName : "高等代数" ,
            courseMajor : [
                {
                    sectionId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "数域整数的整除性" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 0 ,
                    co_or_sp : 1 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqVCEy45fQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "一元多项式" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 1 ,
                    co_or_sp : 0 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "整除的概念" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 0 ,
                    co_or_sp : 0 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "最大公因式" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 1 ,
                    co_or_sp : 1 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "复系数与实系数多项式" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 0 ,
                    co_or_sp : 1 ,
                }
            ]
        } ,
        {
            courseId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            courseName : "静态立体化学" ,
            courseMajor : [
                {
                    sectionId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "异构现象" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 0 ,
                    co_or_sp : 1 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqVCEy45fQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "立体结构的表示方法" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 1 ,
                    co_or_sp : 0 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "赤型/苏型标记法" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 0 ,
                    co_or_sp : 0 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "顺式加成反应" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 1 ,
                    co_or_sp : 1 ,
                },
                {
                    sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
                    s_addTime : "2012-12-31" ,
                    s_preview : "./img/preview1.png" ,
                    s_title : "还原为顺式烯烃" ,
                    s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
                    pu_or_pr : 0 ,
                    co_or_sp : 1 ,
                }
            ]
        }

    ]
}

var firstLoadJson = {
    teacherId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
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
            sectionId : "FmYE4FAgW6Fi1iqVCEyjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "高分子结构萃取流程1" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 0 ,
            co_or_sp : 0 ,
        },
        {
            sectionId : "FmYE4FAgW6Fi1iqVCEy45fQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "高分子结构萃取流程2" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        },
        {
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "高分子结构萃取流程3" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 1 ,
        },
        {
            sectionId : "FmYE4FAgW6Fi1iqV98yjUfQGpLSbJRnU" ,
            s_addTime : "2012-12-31" ,
            s_preview : "./img/preview1.png" ,
            s_title : "高分子结构萃取流程4" ,
            s_summary : "如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架，算是做个阶段性总结。本文的核心是侧重于HTML/CSS的框架，JS框架或以JS为核心的框架不讨论,如果只介绍这个框架，没什么内容，框架相关feature站点上有不需要说，所以干脆列出自己常用的几个前端框架" ,
            pu_or_pr : 1 ,
            co_or_sp : 0 ,
        },
        {
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

function getParameter(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}


// function addPaging(obj){
//     var total = obj.currCourseTotalCount ;
//     var pageNum = (total % every_page_count == 0) ? (Math.floor(total / every_page_count)) : (Math.ceil(total / every_page_count)) ;
//     var pagingStr = '' ;
//     console.log(pageNum) ;
//     //curr_page_index = 0 ;
//     //every_page_count
//
//     var templateA = '<div class="ui pagination menu">' ;
//     templateA += '<a class="icon item">首页</a>' ;
//     templateA += '<a class="icon item"><i class="left chevron icon"></i> 上一页</a>' ;
//
//     if( pageNum <= page_number_count ){
//         for(var i = 0 ; i < pageNum.length ; i++){
//             templateA += '<a class="item" currpageindex = "'+ i +'">'+ i +'</a>' ;
//         }
//
//     }else{
//         if(curr_page_index > (Math.ceil(page_number_count / 2))){
//             templateA += '<a class="item">...</a>' ;
//         }
//         for(var j = curr_page_index - 2 ; j < curr_page_index + 3 ; j++  ){
//             templateA += '<a class="item" currpageindex="'+ j +'">'+ j +'</a>' ;
//         }
//         if( curr_page_index < pageNum - (Math.floor(page_number_count / 2))  ){
//
//         }
//     }
//
//
//     var templateA = '<div class="ui pagination menu">'+
//         '<a class="icon item">首页</a>'+
//         '<a class="icon item"><i class="left chevron icon"></i> 上一页</a>'+
//         '<a class="item">1</a>'+
//         '<a class="item">2</a>'+
//         '<a class="item">3</a>'+
//         '<a class="item">4</a>'+
//         '<a class="item">5</a>'+
//         '<a class="item">6</a>'+
//         '<a class="icon item">下一页 <i class="right chevron icon"></i></a>'+
//         '<a class="icon item">末页</a>'+
//         '</div>' ;
//
//     var templateB = '<div class="marginVirture"></div>' ;
//
//     var templateC = '<div class="ui pagination menu selectPageBox">'+
//         '<a class="item">第</a>'+
//         '<select class="item ui dropdown selectPage">'+
//         '<option value="0">0</option>'+
//         '<option value="1">1</option>'+
//         '<option value="2">2</option>'+
//         '<option value="1">3</option>'+
//         '<option value="2">4</option>'+
//         '<option value="1">5</option>'+
//         '<option value="2">6</option>'+
//         '</select>'+
//         '<a class="item">页</a>'+
//         '</div>' ;
//
//     pagingStr  =  templateA + templateB + templateC ;
//
//
//
// }


//addPaging(firstLoadJson) ;





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
    for(var i = 0 ; i < sourceArr.length ; i++){
        var pu_or_pr = (sourceArr[i].pu_or_pr == 0 ) ? "公开课" : "私有课"  ;
        var co_or_sp = (sourceArr[i].co_or_sp == 0 ) ? "公共基础课" : "专业课" ;
        var template = '<div class="courseListEveryone">'+
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



function addHtml(obj , sel){
    sel.prepend(obj) ;
}

addHtml(sideBarListStr(firstLoadJson) , $(".siderBarBox")) ;
addHtml(sectionBasicInfoList(firstLoadJson) , $(".mainListCon") ) ;


//提取对象的内容到数组
// function getSectionList(obj){
//
//     for(var i = 0 ; i < obj.length ; i++ ){
//         var sectionArr = obj[i].courseMajor ;
//         for(var j = 0 ; j < sectionArr.length ; j++){
//             courseArrayList.push(JSON.parse(JSON.stringify(sectionArr[j]))) ;
//         }
//     }
//
//     return courseArrayList ;
// }



//console.log(getSectionList(courseJsonBasicInfo.courseList));

//console.log( getSectionList(courseJsonBasicInfo.courseList) ) ;


// function addCourseList_R(obj){
//
//     var addCourseStr = '' ;
//
//     var template = '<div class="courseListEveryone">'+
//         '<div class="addTimeAndOparite">'+
//         '<div class="addTime">'+
//         '添加时间:'+
//         '<span>'+ aCourseMajor[j].s_addTime +'</span>'+
//         '</div>'+
//         '<div class="opariteCourse">'+
//         '<span class="modifyCourse">修改</span> |'+
//         '<span class="deleteCourse">删除</span>'+
//         '</div>'+
//         '</div>'+
//         '<div class="everyoneCourseMain">'+
//         '<a class="previewImgCon"><img src="'+ aCourseMajor[j].s_preview +'" alt=""></a>'+
//         '<div class="courseText">'+
//         '<div class="courseTitle">'+
//         '<a href="" class="courseTitleText">'+ aCourseMajor[j].s_title +'</a>'+
//         '<a class="ui orange label lableMargin">'+ ((aCourseMajor[j].pu_or_pr == 0) ? "公开课" : "私有课") +'</a>'+
//         '<a class="ui teal label lableMargin">'+ ((aCourseMajor[j].co_or_sp == 0) ? "专业课" : "公共课") +'</a>'+
//         '</div>'+
//         '<div class="courseSummary">'+ aCourseMajor[j].s_summary +'</div>'+
//         '</div>'+
//         '</div>'+
//         '</div>'
//
//
// }


// function showStrList_R(str){
//
//     $(".mainListCon").prepend(str);
//
// }

// showStrList_R( addCourseList_R(courseJsonBasicInfo.courseList) ) ;













































































































