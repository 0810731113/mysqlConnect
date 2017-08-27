$('#btn1').on('click',function(e){
    $.ajax({
        type : "GET" ,
        //url : "http://www.eeclasscloud.com:3001/mailform" ,
        url : "http://192.168.3.112:3001/mailform" ,
        data : {
            username:"李波" ,
            tel: "15021359488",
            mail:"895842425@qq.com",
            content:"我对你们的产品感兴趣，请及时联系我",
            title : "流利货架"
        } ,
        dataType : "json" ,
        success : function(data){
            console.log(data) ;
        }
    })
})






































































