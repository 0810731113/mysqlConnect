
var videoPercent = 0 ;

$("#example5").progress({
    percent : 0 ,
    text: {
        active  : '{value} % {total} uploaded',
        success : '恭喜,上传成功'
    }
})

function set_upload_param(up, filename, ret)
{
    g_object_name = g_dirname;

    if (filename != '') {
        suffix = get_suffix(filename)
        calculate_object_name(filename)
    }
    new_multipart_params = {
        'key' : g_object_name,
        'policy': policyBase64,
        'OSSAccessKeyId': accessid,
        'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
        'signature': signature,
    };

    up.setOption({
        'url': host,
        'multipart_params': new_multipart_params
    });

    up.start();
}

var uploader = new plupload.Uploader({
    runtimes : 'html5,flash,silverlight,html4',
    browse_button : 'addVideoBtn',
    //multi_selection: false,
    multi_selection : false ,
    container: document.getElementById('uploadVideoToOSS'),
    flash_swf_url : 'secretlib/plupload-2.1.2/js/Moxie.swf',
    silverlight_xap_url : 'secretlib/plupload-2.1.2/js/Moxie.xap',
    url : 'http://oss.aliyuncs.com',
    
    init: {
        PostInit: function() {
            document.getElementById('ossfile').innerHTML = '';
            document.getElementById('uploadVideoBtn').onclick = function() {
                set_upload_param(uploader, '', false);
                return false;
            };
        },

        FilesAdded: function(up, files) {
            plupload.each(files, function(file) {
                console.log(file);

                // var htmlStr = '<div class="ui" id="'+ file.id +'" style="line-height: 2rem;">'+ file.name +' ( '+ plupload.formatSize(file.size) +' )</div>' +
                //     '<div class="ui indicating progress" data-value="0" data-total="100" id="example5">'+
                //     '<div class="bar"></div>'+
                //     '<div class="label">准备上传...</div></div>'

                // $("#addVideoAndProgress").append(htmlStr) ;
                var fileInfo = file.name+" ("+ plupload.formatSize(file.size) +")" ;

                $("#example5").progress({
                    percent : 1 ,
                    text: {
                        active  : '{value} % {total} uploaded',
                        success : '恭喜,上传成功'
                    }
                })

                $("#example5").progress('update progress') ;

                $("#addVideoLocalName").text(file.name);



            });
        },

        BeforeUpload: function(up, file) {
            //check_object_radio();
            //get_dirname();
            set_upload_param(up, file.name, true);
        },

        UploadProgress: function(up, file) {
            videoPercent = file.percent ;
            //debugger
            $("#example5").progress({
                percent : file.percent ,
                text: {
                    active  : '{value} % {total} uploaded',
                    success : '恭喜,上传成功'
                }
            })
            //$("#example5").progress('update progress') ;

        },

        FileUploaded: function(up, file, info) {
            if (info.status == 200)
            {
                //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                console.log(get_uploaded_object_name(file.name));
                console.log("上传成功!!!") ;

                $("#example5").progress('update progress') ;
                
            }
            else
            {
                //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                console.log(info.response) ;
            }
        },

        Error: function(up, err) {
            //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
            console.log(err.response);
        }
    }
});

uploader.init();




