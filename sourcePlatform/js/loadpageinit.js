$(function(){

    addHtml(sideBarListStr(firstLoadJson) , $(".siderBarBox")) ;
    addHtml(sectionBasicInfoList(firstLoadJson) , $(".mainListCon") ) ;

    //reloadPager( firstLoadJson.currCourseTotalCount , every_page_count ) ;
    //reloadPager( 43 , 5 ) ;
    reloadPager( firstLoadJson.currCourseTotalCount , every_page_count ) ;

})














































































