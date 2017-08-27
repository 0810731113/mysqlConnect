/*
var duck = {
    duckSinging: function(){
        console.log( '嘎嘎嘎' );
    }
};

var chicken = {
    duckSinging: function(){
        console.log( '嘎嘎嘎' );
    }
};

var choir = []; // 合唱团
var joinChoir = function( animal ){
    if ( animal && typeof animal.duckSinging === 'function' ){
        choir.push( animal );
        console.log( '恭喜加入合唱团' );
        console.log( '合唱团已有成员数量:' + choir.length );
    }
};

joinChoir( duck );
joinChoir( chicken );

*/

var params = ['zhangsan','wwwoooowwwoooowww'] ;
var sqlStr = 'SELECT * FROM `user` WHERE `username`=? AND `password`=?'

function paramToSql(sql,args){
    var reg = /\?{1,2}/g ;
    var index = 0 ;
    sql = sql.replace(reg,function(a,b,c,d){
        //console.log(a+'\t'+b+'\t'+c + '\t' + d);
        return '"'+params[index++]+'"' ;
    })
    console.log(sql);
    return sql ;
}
paramToSql(sqlStr,params) ;

//sql = "SELECT sc.*,s.supplier_name FROM shop_cart sc LEFT JOIN supplier s ON sc.supplier_id = s.supplier_id " +
//    "WHERE isbuy = '"+0+"' AND sc.school_id = ? AND sc.laboratory_id = ? ORDER BY s.supplier_name";

