const localCache = {
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
    let currentPage = attrId(strActiveRows).val();
    let countPerPage= toInt(attrId(strCountPerPage).val());
    deleteData(url,id,()=>{
		callback(1,false)
        // if(countPerPage > 1 && any !== '')callback(currentPage,false);
        // if(countPerPage > 1 && any === '')callback(currentPage,false);
        // if(countPerPage === 1 && any !== '')callback(1,false);
        // if(countPerPage === 1 && any === '')callback(1,false);
    });
}

function validateSaveHmtl(title,any,param,callback){
    let totalRows=isNumber(attrId(strTotalRows),1);
    let searchName=title.toLowerCase().includes(any.toLowerCase());
    let currentPage=isNumber(attrId(strActiveRows),1);
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

function uriSegment(url){
    let extractUrl=url.split("/");
    return {
        folderController:isLocal ? extractUrl[5] :extractUrl[3],
        controller:isLocal ?extractUrl[6] :extractUrl[4],
        method:isLocal ?extractUrl[7] :extractUrl[5],
    }

}

function ajaxData(url, req, callback, isCache=true) {
    NProgress.configure({showSpinner: true});
    setButtonAction(false);
    if(!handleIsEmpty(req)) req=null;
    if(!handleIsEmpty(isCache)) isCache=true;
    let page=pageActiveName;

    const {folderController,controller,method} = uriSegment(url);
	let attrParam=attrId("param");
    let attrModalTitle=attrClass("modal-title");
    let attrInfoPagin=attrId(`notedPagination${page}`);
    let attrResultContent=attrId(`result-content-${page}`);
    let activePageSetModal =  folderController;
	if(controller!=='edit')activePageSetModal = controller;

    $.ajax({
        url: url,
        type: "POST",
        dataType:'JSON',
        data: req,
        beforeSend: ()=>{
            if(method==="simpan")setButtonAction(true);
            else NProgress.start();
            let getJson=localCache.get(url);

            if (method!=="edit"&&isCache&&localCache.exist(url)) {
                NProgress.done();
                NProgress.remove();
                setSelectTemplate(getJson.responseJSON,method===undefined?folderController:method);
                attrInfoPagin.html("Menampilkan Total "+getJson.responseJSON.no+" Dari "+getJson.responseJSON.totalRows+" Data")
                attrResultContent.html(getJson.responseJSON.result);
                let totalRows=parseInt(getJson.responseJSON.totalRows,10);
                let lastRows=parseInt(getJson.responseJSON.lastRows,10);
                let activeRows=parseInt(getJson.responseJSON.currentPages,10);
                setIsActivePaginationTable(totalRows,lastRows,activeRows,page)
                scrollToBottom();
                return false;
            }
            return true;
        },
        complete: (jqXHR, textStatus)=>{
            if(method==="simpan") setButtonAction(false);
            localCache.set(url, jqXHR, function(res){});
            NProgress.done();
            NProgress.remove();
        },
        success: (res)=>{
            if(method==='read'){
                setIsActivePaginationTable(res.totalRows,res.lastRows,res.currentPages,page)
                attrInfoPagin.html("Menampilkan Total "+res.no+" Dari "+res.totalRows+" Data")
            }
	        if(method==='edit'){
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
	// console.log(isUrl,window.location+url)
    $.ajax({
        url: isUrl?url:window.location+url,
        type: "POST",
        data: req,
        beforeSend: ()=> {
            NProgress.start();
            if (localCache.exist( window.location+url)) {
                timeOut(() => handleErroImage())
                NProgress.done();
                NProgress.remove();
                let getJson=localCache.get( window.location+url);
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
			let checkSave=url.toLowerCase().includes("simpan".toLowerCase());
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
    let msg = '';
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
