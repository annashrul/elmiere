var localCache = {
    data: {},
    remove  : (url) => delete localCache.data[url],
    exist   : (url) => localCache.data.hasOwnProperty(url) && localCache.data[url] !== null,
    get     : (url) => localCache.data[url],
    set     : (url, cachedData, callback)=> {
        localCache.remove(url);
        localCache.data[url] = cachedData;
        if ($.isFunction(callback)) callback(cachedData);
    }
};

function validateDeleteHtml(url,id,any,callback){
    var currentPage = attrId(strActiveRows).val();
    var countPerPage= toInt(attrId(strCountPerPage).val());
    deleteData(url,id,()=>{
		callback(1,false)
        // if(countPerPage > 1 && any !== '')callback(currentPage,false);
        // if(countPerPage > 1 && any === '')callback(currentPage,false);
        // if(countPerPage === 1 && any !== '')callback(1,false);
        // if(countPerPage === 1 && any === '')callback(1,false);
    });
}

function validateSaveHmtl(title,any,param,callback){
    var totalRows=isNumber(attrId(strTotalRows),1);
    var searchName=title.toLowerCase().includes(any.toLowerCase());
    var currentPage=isNumber(attrId(strActiveRows),1);
    if(param===strEdit){
        if(totalRows > 1 && !searchName) callback(currentPage,searchName)
        if(totalRows > 1 && searchName) callback(currentPage,searchName)
        if(totalRows === 1 && !searchName) callback(1,searchName)
        if(totalRows === 1 && searchName) callback(currentPage,searchName)
    }
    else{
        callback(1,searchName)
    }

}

function ajaxData(url, req, callback, isCache=true) {
    NProgress.configure({showSpinner: true});
    setButtonAction(false);
    if(!handleIsEmpty(req)) req=null;
    if(!handleIsEmpty(isCache)) isCache=true;
    var page=pageActiveName;
    var uri=url.split("/")[8];
	console.log("uri 8",url.split("/"))
    let uriGetAll=uri;
    if(uri===undefined) uri = url.split("/")[7];
	let activePageSetModal =  url.split("/")[5];
	if(url.split("/")[6]!=='edit'){
		activePageSetModal = url.split("/")[6];
	}
	console.log('activePageSetModal',activePageSetModal)
	var attrParam=attrId("param");
    var attrModalTitle=attrClass("modal-title");
    var attrInfoPagin=attrId(`notedPagination${page}`);
    var attrResultContent=attrId(`result-content-${page}`);

	console.log("url",url)

    $.ajax({
        url: url,
        type: "POST",
        dataType:'JSON',
        data: req,
        beforeSend: ()=>{
            if(uri==="simpan")setButtonAction(true);
            else NProgress.start();
            var getJson=localCache.get(url);

            if (uri!=="edit"&&isCache&&localCache.exist(url)) {
                NProgress.done();
                NProgress.remove();
                var segment7=uriGetAll;
                if(segment7===undefined) segment7 = url.split("/")[5];
                if(url.split("/")[7]==='getAll'){

                }
                setSelectTemplate(getJson.responseJSON,segment7);
                attrInfoPagin.html("Menampilkan Total "+getJson.responseJSON.no+" Dari "+getJson.responseJSON.totalRows+" Data")
                attrResultContent.html(getJson.responseJSON.result);
                var totalRows=parseInt(getJson.responseJSON.totalRows,10);
                var lastRows=parseInt(getJson.responseJSON.lastRows,10);
                var activeRows=parseInt(getJson.responseJSON.currentPages,10);
                setIsActivePaginationTable(totalRows,lastRows,activeRows,page)
                scrollToBottom();
                return false;
            }
            return true;
        },
        complete: (jqXHR, textStatus)=>{
            if(uri==="simpan") setButtonAction(false);
            localCache.set(url, jqXHR, function(res){});
            NProgress.done();
            NProgress.remove();
        },
        success: (res)=>{
            if(uri==='read'){
                setIsActivePaginationTable(res.totalRows,res.lastRows,res.currentPages,page)
                attrInfoPagin.html("Menampilkan Total "+res.no+" Dari "+res.totalRows+" Data")
            }
	        if(uri==='edit'){
		        attrId(`${strModal}${activePageSetModal}`).modal(strShow);
		        attrParam.val("edit");
		        attrModalTitle.text("Ubah "+ucWords(activePageSetModal))
		        inShowModalMobile();
	        }
            attrResultContent.html(res.result);
            scrollToBottom();
            callback(res);

        },
        error: (jqXHR, exception, thrownError)=> handleErrorRequest(jqXHR, exception, thrownError)
    });
}
function ajaxView(url, req, callback, isUrl,isCache=true){
    NProgress.configure({showSpinner: true});
    if(!handleIsEmpty(req)) req=null;
	isUrl = typeof isUrl === 'undefined' ? false:true
    // if(!handleIsEmpty(isUrl)) isUrl=true;
    // if(!handleIsEmpty(isCache)) isCache=true;
	// console.log(window.location)
    // var baseUrlAjax=isUrl?base_url + url:url;
	console.log(isUrl,isUrl?url:window.location+url)
	// console.log(isUrl,window.location+url)
    $.ajax({
        url: isUrl?url:window.location+url,
        type: "POST",
        data: req,
        beforeSend: ()=> {
	        // $('body').append('<div class="first-loader"><img src="'+spin+'"></div>');
            NProgress.start();
            if (localCache.exist( window.location+url)) {
                timeOut(() => handleErroImage())
                NProgress.done();
                NProgress.remove();
                var getJson=localCache.get( window.location+url);
                attrId("result-content").html(getJson.responseText);
                return false;
            }
            return true;
        },
        complete: (jqXHR, textStatus)=> {
	        // $('.first-loader').remove()
            // localCache.set( window.location+url, jqXHR);
            NProgress.done();NProgress.remove();
            timeOut(() => handleErroImage())
        },
        success:(res)=>{
            callback(res)
            timeOut(() => handleErroImage())
        },
        error: (jqXHR, exception, thrownError)=> handleErrorRequest(jqXHR, exception, thrownError)
    });
}
let i=0;
function ajaxFile(url, req, callback){
    if(!handleIsEmpty(req)) req=null;
    NProgress.configure({showSpinner: false});
	$.ajax({
		url: url,
		type: "POST",
		dataType: "JSON",
		data: req,
		mimeType: "multipart/form-data",
		contentType: false,
		processData: false,
		beforeSend: ()=> {
			NProgress.start();
			var checkSave=url.toLowerCase().includes("simpan".toLowerCase());
			if(checkSave){
				localCache.remove(url.replaceAll("simpan","getAll"));
			}
			setButtonAction(true);
		},
		complete: (jqXHR, textStatus)=>{
			NProgress.done();
			NProgress.remove();
			setButtonAction(false);
		},
		success: callback,
		error: (jqXHR, exception, thrownError) => {
			i++;
			handleErrorRequest(jqXHR, exception, thrownError)
		}
	});

}
function deleteData(url,id,callback) {
    swal({
        title: ucWords("Anda yakin akan hapus data ini?"),
        text: ucWords("Data yang dihapus tidak bisa dikembalikan lagi"),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#696cff",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
        closeOnConfirm: false
    }).then((isConfirm)=> {
        if (isConfirm) {
            ajaxData(url, { id: id }, (res)=> {
                swal.close();
                if (res.status) {
                    callback();
                    notif("hapus");
                } else {
                    notif("error");
                }
            },false);
        }
    });
}
function handleErrorRequest(jqXHR, exception, thrownError){
    NProgress.done();
    NProgress.remove();
    var msg = '';
    if (jqXHR.status === 0) {
        msg = 'Tidak ada koneksi.\n Periksa jaringan.';
    } else if (jqXHR.status === 404) {
        msg = 'Halaman yang diminta tidak ditemukan. [404]';
    } else if (jqXHR.status === 500) {
        msg = 'Terjadi kesalahan server [500].';
    } else if (exception === 'parsererror') {
        msg = 'Permitaan data gagal [JSON]';
    } else if (exception === 'timeout') {
        msg = 'Kesalahan waktu habis.';
    } else if (exception === 'abort') {
        msg = 'Permintaan ajax dibatalkan.';
    } else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
    }
    notif("error",msg);
	setTimeout(()=>{
		// window.location.reload();
	})
}
