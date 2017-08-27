/**
 * Created by DELL on 2017/6/27.
 */
$(".selectUserInfo").dropdown({
    action : 'hide' 
}) ;

//--------------------------------------------视频信息--------------------
//弹窗遮罩层
$(".add_vdo").click(function(){
	$('.vdo_win')
		  .modal('show');
});
//弹窗遮罩层


//视频点击删除

$(".outline").click(function(){
	$delet=$(this);
	$('.vdo_confirm').modal({
		closable  : false,
		onDeny    : function(){
			$('.vdo_confirm').modal('hide');
			return false;
		},
		onApprove : function() {
			var $div=$delet.parent().parent().parent();
			$div.fadeOut("slow",function(){
				$div.remove();
				video1();
			});
		}
	})
	.modal('show');
});

//视频点击删除

//为空的时候显示的图片
$(function(){
	video1();
});

function video1(){
	var vdoBody = $(".vdo_content").children();
	if(vdoBody.length===0){
		$(".list_empty").css("display","block");
	}	
	}
//为空的时候显示的图片
//--------------------------------------------视频信息--------------------

//--------------------------------------------文档信息--------------------
//文档信息点击删除
$(".doc_delete").click(function(){
	$delet=$(this);
	$('.doc_confirm').modal({
			closable  : false,
			onDeny    : function(){
				$('.doc_confirm').modal('hide');
				return false;
			},
			onApprove : function() {
				var $div=$delet.parent().parent();
				$div.fadeOut("slow",function(){
					$div.remove();
					video2();
				});
			}
		})
		.modal('show');
});

//文档信息点击删除

//文档信息为空的时候显示的图片
$(function(){
	video2();
});

function video2(){
	var vdoBody = $(".doc_listBody").children();
	var listBody = $(".doc_listBody").children();
	if(vdoBody.length===0){
		$(".doclist_empty").css("display","block");
	}
	if(listBody.length===0){
		$(".doc_listBody").remove();
	}
	}

$(".add_doc").click(function(){
    $(".doc_ok").click(function(){
        $(".doc_addlist").slideUp("slow");
        $(".doc_list").show("1000");
    });
});
$(".amend_doc").click(function(){
    var text = $(this).parent().prev().text();
    $(this).parent().parent().hide();
    $(".doc_ok").click(function(){
        $(".doc_addlist").slideUp("slow");
        $(".doc_list").show("1000");
    });
    $("#doc_Title").val(text);
});

$(function(){
    $(".add_doc").click(function(){
    $(".doc_addlist").slideDown("slow");
    });
    $(".amend_doc").click(function(){
        $(".doc_addlist").slideDown("slow");
    });
    $(".doc_slideup").click(function(){
      $(".doc_addlist").slideUp("1000");
      $(".doc_list").show("1000");
    });
});
//--------------------------------------------文档信息---------------------




