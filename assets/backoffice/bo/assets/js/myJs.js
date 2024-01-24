
let getChild        = [];
let getParent       = [];
let defaultPage     = 'dashboard'
let pageActiveName  = defaultPage; // default page active
let Delta           = Quill.import('delta');
let siteTitle		= 'Tripisia';

function handleErroImage(){
    $("img").on("error", ()=>{
        $(this).attr("src",base_assets+noImage);
    });
}

function imgModal(res) {
    handleErroImage()
    let img = res.split("|")[0];
    let title = res.split("|")[1];
	attrId("modalImg").modal("show");
	attrId("rowImage").attr("src", img);
	attrId("rowTitle").html(title);

}

function loadView(parent,child,param){
    if(!handleIsEmpty(param)) param='';
    let pages       = parent;
    let folderSite  = attrId("folderSite");
    let methodSite  = attrId("methodSite");
    let resultView  = attrId("resultView");
    let isChild     = attrId("isChild");
    let wrapperPage = attrClass("wrapperPage");
    let activeText  = "";
    let urlActive   = '';
    let url         = '';

    if(!handleIsEmpty(child)&&child!==""){
        pageActiveName  = pages;
        urlActive       = pages+"/getView";
        url             = pages;
        folderSite.html('<b class="main-color">'+ucWords(parent.replaceAll("-"," "))+'</b>');
        folderSite.addClass(activeText)
        methodSite.removeClass(activeText);
        methodSite.html("");
    }
    else{
        pageActiveName	= child;
		urlActive		= `${pages}/${child}/getVIew/1`;
		url				= `${pages}/${child}`;
        folderSite.removeClass(activeText);
        folderSite.html(ucWords(parent.replaceAll("-"," ")));
        isChild.removeClass(activeText);
        methodSite.addClass(activeText);
        methodSite.html('<i class="bx bx-chevrons-right"></i><b class="main-color">'+ucWords(child)+'</b>');
    }

    let nextURL   = base_url+url;
    let nextTitle = siteTitle;
    let nextState = { prevUrl: window.location.href , additionalInformation: 'Updated the URL with JS' };
    window.history.pushState(nextState, nextTitle, nextURL);
    window.history.replaceState(nextState, nextTitle, nextURL);
    let prevURL=window.history.state.prevUrl;
    if((!handleIsEmpty(param))||param==='load'){
        let urlBaseAjax=base_url+urlActive;
        $.ajax({
            async:true,
            cache: true,
            url:urlBaseAjax,
            type:"POST",
            beforeSend: function() {
                if (localCache.exist(urlBaseAjax)) {
                    let getJson=localCache.get(urlBaseAjax);
                    resultView.html(getJson.responseText);
                    setView(pages,child);
                    return false;
                }
                return true;
            },
            complete: function(jqXHR, textStatus) {
                localCache.set(urlBaseAjax, jqXHR, function(res){});
            },
            success:function(res){
                resultView.html(res);
                wrapperPage.attr("data-aos","fade-up")
                setView(pages,child);
				location.hash=""
            },
            error: function(jqXHR, exception, thrownError) {
                handleErrorRequest(jqXHR, exception, thrownError)
            }
        })
    }
}
function setView(pages,child){
    pageActiveName=!handleIsEmpty(child)?pages:child;
    getParent.push({'id':pages});
    getChild.push({'id':!handleIsEmpty(child)?pages:child});
    let isActive    = 'active';
    let isOpen      = 'open';
    let attrPages   = attrClass(pages);
    if(getChild.length>0){
        const resChild = filterArray(getChild);
        resChild.forEach(function(e){
            let dataChildId=e.id;
            let attrChildId=attrClass(dataChildId);
            if(!handleIsEmpty(child)){
                if(getParent.length>0){
                    const resParent = filterArray(getParent);
                    resParent.forEach((item)=>{
                        let parentIdData    = item.id;
                        let parentIdSelector= attrClass(parentIdData);
                        parentIdSelector.removeClass(isOpen);
                        parentIdSelector.removeClass(isActive);
                        attrClass(`${parentIdData}-${dataChildId}`).removeClass(isActive);
                    })
                }
                timeOut(function(){
                    attrChildId.removeClass(isActive);
                    if(dataChildId === pages)attrPages.addClass(isActive);
                })
            }
            else{
                attrPages.addClass(isOpen)
                attrPages.addClass(isActive)
                attrChildId.removeClass(isActive);
                if(getParent.length>0){
                    const resParent = filterArray(getParent);
                    resParent.forEach((item)=>{
                        let dataParentId    = item.id;
                        let parentIdSelector= attrClass(dataParentId);
                        parentIdSelector.removeClass(isActive);
                        attrClass(`${dataParentId}-${dataChildId}`).removeClass(isActive);
                    })
                }
                timeOut(function(){
                    attrClass(`${pages}-${dataChildId}`).removeClass(isActive);
                    if(dataChildId === child){
                        attrPages.addClass(isActive);
                        attrClass(`${pages}-${child}`).addClass(isActive);
                    }
                })
            }
        })
    }
    // if(pages===defaultPage) renderChart();
}
function setIsActivePaginationTable(totalRows,lastRows,activeRows,page){
    attrId(`${strTotalRows}${page}`).val(totalRows);
    attrId(`${strLastRows}${page}`).val(lastRows);
    attrId(`${strActiveRows}${page}`).val(activeRows);
    attrId(`${strCurrentPage}${page}`).html(activeRows);
    attrId(`${strNextPage}${page}`).attr("disabled",totalRows <= lastRows);
    attrId(`${strPrevPage}${page}`).attr("disabled",activeRows === 1);
    attrId(`${strTotalAllData}`).val(totalRows);

}
function ValidateFileUpload(selector,res) {
    if(!handleIsEmpty(res)) res = strResultImage;
    let fuData = document.getElementById(selector);
    let FileUploadPath 	= fuData.value;
    attrId(`alr_${selector}`).text("");
    if (FileUploadPath === '') {} else {

        let Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
		const allowExtension=['gif','png','bmp','jpeg','jpg','webp','avif'];
		let isAllow=allowExtension.filter((v)=>v.includes(Extension))

		console.log(isAllow,Extension)

		if(isAllow.length>0){

			if (fuData.files && fuData.files[0]) {

				let reader = new FileReader();
				reader.onload = (e) =>{
					attrId(res).attr('src', e.target.result);
				};
				reader.readAsDataURL(fuData.files[0]);
			}
			attrId(`error-${selector}`).text("");
		}
        else{
            attrId(`error-${selector}`).text("extension tidak diterima");
        }
    }
}
function notif(type,msg) {
    if(!handleIsEmpty(type)) type="success"
    if(!handleIsEmpty(msg)) msg=""
    toastr.options = {
        "closeButton"       : false,
        "debug"             : false,
        "newestOnTop"       : false,
        "progressBar"       : true,
        "positionClass"     : "toast-top-right",
        "preventDuplicates" : false,
        "onclick"           : null,
        "showDuration"      : "10000",
        "hideDuration"      : "10000",
        "timeOut"           : "10000",
        "extendedTimeOut"   : "300",
        "showEasing"        : "swing",
        "hideEasing"        : "linear",
        "showMethod"        : "fadeIn",
        "hideMethod"        : "fadeOut",
		"width":"300px",
        iconClasses: {
            error   : 'bx bx-message-error',
            info    : 'bx bx-info-circle',
            success : 'bx bx-check-circle',
            warning : 'bx bx-info-circle'
        }
    };
    if (type === "success") {
        msg=handleIsEmpty(msg)?msg:"Data Berhasil Disimpan";
        toastr.options.timeOut = 10000; // 1.5s
        toastr.success(msg);
    } else if (type === "hapus") {
        msg=handleIsEmpty(msg)?msg:"Data Berhasil Dihapus";
        toastr.options.timeOut = 10000; // 1.5s
        toastr.success(msg);
    }
    else if (type === "error_input") {
	    msg=handleIsEmpty(msg)?msg:"Silahkan Lengkapi Form Yang Tersedia";
	    toastr.options.timeOut = 10000; // 1.5s
	    toastr.error(msg);
    }else if (type === "error" || type === "failed") {
        msg=handleIsEmpty(msg)?msg:"Terjadi Kesalahan Server";
        toastr.options.timeOut = 10000; // 1.5s
        toastr.error(msg);
    }

}
function handleError() {
    return function(error, element) {
        if (element.attr("data-error") === "select-multiple") {
            return error.insertAfter(".error-select-multiple");
        }
        else if (element.attr("data-error") === "tag-multiple") {
            attrClass("tagify-container:eq(0) input:eq(0)").focus(function(){});
            return error.insertAfter(".error-tag-multiple");
        }
        else if (element.attr("data-error") === "file-upload") {
            return error.insertAfter(".error-file-upload");
        }
        else if (element.attr("name") === "file_upload[]") {
            return error.insertAfter(".label-file-upload");
        }
        else if (element.attr("name") === "deskripsi") {
            return error.insertBefore("textarea#deskripsi");
        } else {
            return error.insertBefore(element);
        }
    }
}
function setButtonAction(isNone){
    if(!handleIsEmpty(isNone)) isNone=true;
    attrClass("btn-save").css({'display':isNone?'none':'block'});
    attrClass("btn-loading").css({'display':isNone?'block':'none'});
}
function setPrevImg(img,selector){
    if(!handleIsEmpty(selector)) selector=strResultImage;
    attrId(selector).attr("src",base_assets+img);
}
function setValueImg(img,pathImg,selector){
    if(!handleIsEmpty(selector)) selector=strFileUpload;
    toDataUrl(base_assets+img,function(x){
        const dT = new ClipboardEvent('').clipboardData ||  new DataTransfer();
        dT.items.add(new File([x], img.replaceAll(pathImg,""),{type: "image/jpeg"}));
        document.querySelector('#'+selector).files = dT.files;
    });
}
function showModal(id,labelFocus,page){
    inShowModalMobile();
    attrClass("err-deskripsi").text("");
    attrId(id).modal(strShow);
    setFocus(!handleIsEmpty(labelFocus)?'':labelFocus);
    setButtonAction(false);
    delForm(attrId(strFormInput));
    attrClass(strModalTitle).text(`Tambah ${ucWords(page)}`);
    attrId(strParam).val("add");
    attrName(`${strFileUploaded}[]`).val("");
    let dataSelect=attrClass("selectpicker");
    if(dataSelect.length>0){
        for(let i=0;i<dataSelect.length;i++){
            let isSelectMultiple=$(dataSelect[i]).attr("multiple");
            if(isSelectMultiple===undefined){
                let getId   = $(dataSelect[i]).attr("name");
                let getVal  = $(dataSelect[i][0]).attr('value');
                attrId(getId).selectpicker('val', getVal);
            }
        }
    }

}
function inShowModalMobile(){
    setTimeout(()=>{
        let txtFullScreen="modal-fullscreen";
        let attrModalDialog=attrClass("modal-dialog");
        if(!attrModalDialog.hasClass(txtFullScreen)){
            let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
            checkDevice()?attrModalDialog.addClass(txtFullScreen):attrModalDialog.removeClass(txtFullScreen);
        }
    },300)

}
function setValueSelect(id,val){
    attrId(id).selectpicker('val', val);
}
function setSelect(url,id){
    ajaxData(url,null,(res)=>{
		setSelectTemplate(res,id)
	},false)
}
function setSelectTemplate(res,id){
    let $select = attrId(id);
    $select.html('');
    $.each(res, (index, value)=>{
        $select.append('<option value="'+value.id+ '" id="' + value.id+ '">' + value.nama+ '</option>');
    });
    $select.selectpicker('refresh');
}
function isQuillEmpty(value,quilEditor) {
    let attrDesc="err-deskripsi";
    if(!isQuill()){
        attrClass(attrDesc).text("tidak boleh kosong");
        setTimeout(()=>{quilEditor.focus()},300);
        return false;
    }

    else if(value.length < 50){
        attrClass(attrDesc).text("minimal 50 karakter");
        setTimeout(()=>{quilEditor.focus();},300);
        return false;
    }
    attrClass(attrDesc).text('');
    return true;
}
function isQuill(value,idx){
    let attrDesc="err-deskripsi";
    if(handleIsEmpty(idx)) attrDesc+=`-${idx}`;
    if(value.replace(/<(.|\n)*?>/g, '').trim().length === 0 && !value.includes("<img")){
        attrClass(attrDesc).text("tidak boleh kosong");
        return false;
    }
    attrClass(attrDesc).text('');
    return true;

}
function setCkeditor(id,label){
    if(!handleIsEmpty(label)) label="Tulis sesuatu disini...";

    let quill =  new Quill(`#${id}`,{
        bounds: `#${id}`,
        placeholder: label,
        modules: {
            formula: 0,
            clipboard: {
                matchVisual: false,
                matchers: [['BR', lineBreakMatcher]]
            },
            toolbar: {
                container:[
                    [{font: []}],
                    [{header: [1, 2, 3, 4, 5, 6, false]}],
                    ["bold", "italic", "underline", "strike"],
                    [{list: "ordered"},{list: "bullet"},{indent: "-1"},{indent: "+1"}],
                    ["link", "image", "video", "formula"],
                    [{color: []},{background: []}],
                    [{script: "super"},{script: "sub"}],
                    ['blockquote', 'code-block'],
                    ["direction",{align: []}],
                    ["clean"]
                ]
            },
            keyboard: {
                bindings: {
                    linebreak: {
                        key: 13,
                        shiftKey: true,
                        handler: (range)=>{
                            let currentLeaf = this.quill.getLeaf(range.index)[0]
                            let nextLeaf = this.quill.getLeaf(range.index + 1)[0]
                            this.quill.insertEmbed(range.index, 'break', true, 'user');
                            if (nextLeaf === null || (currentLeaf.parent !== nextLeaf.parent)) {
                                this.quill.insertEmbed(range.index, 'break', true, 'user');
                            }
                            this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
                        }
                    }
                }
            }
        },
        theme: "snow",
        handlers: {
            formula: (value)=> {
                this.quill.theme.tooltip.edit('formula');
            },
            'link': (value)=> {
                if (value) {
                    let href = prompt('Enter the URL');
                    this.quill.format('link', href);
                } else {
                    this.quill.format('link', false);
                }
            },
            image: (value)=> {
                let fileInput = this.container.querySelector('input.ql-image[type=file]');
                if (fileInput === null) {
                    fileInput = document.createElement('input');
                    fileInput.setAttribute('type', 'file');
                    fileInput.setAttribute('accept', 'image/*');
                    fileInput.classList.add('ql-image');
                    fileInput.addEventListener('change', ()=>{
                        if (fileInput.files !== null && fileInput.files[0] !== null) {
                            let reader = new FileReader();
                            reader.onload = (e)=>{
                                let range = this.quill.getSelection(true);
                                this.quill.updateContents(
                                    new Delta().retain(range.index).delete(range.length).insert({ image: e.target.result }),
                                    Emitter.sources.USER
                                );
                                fileInput.value = "";
                            }
                            reader.readAsDataURL(fileInput.files[0]);
                        }
                    });
                    this.container.appendChild(fileInput);
                }
                fileInput.click();
            },
            video: function(value) {
                this.quill.theme.tooltip.edit('video');
            }
        }
    });
    quill.on('selection-change');
    return quill;
}
function setTags(attr,data){
    return new Tagify(document.querySelector(attr),{
        whitelist: data,
        dropdown: {
            maxItems: 20,
            classname: "tags-look",
            enabled: 0,
            closeOnSelect: false
        }
    });
}
function tempFieldImage(data){
    let id      = `${strFileUpload}_${data.no}`;
    let resId   = `${strResultImage}_${data.no}`;
    let imgHtml = '';

	const onImage=()=>{
		return ValidateFileUpload(id,resId)
	}
	imgHtml+=`<div class="col-9 col-xs-9 col-md-10 mb-1" id="wrapInputImg_${data.no}">
	     <input class="form-control" type="file" name="${strFileUpload}[]" id="${id}" onchange="return ValidateFileUpload('${id}','${resId}')" accept="image/png, image/jpeg, .webp, .avif"\\>
   	</div>
   	<div class="col-3 col-xs-3 col-md-2 mb-1" id="wrapResultImg_${data.no}">
   		<img style="height: 40px;border-radius: .375rem" src="${base_assets}${noImage}" id="${resId}" >
   </div>
        <input type="hidden" name="${strFileUploaded}[]" id="${strFileUploaded}${data.no}" value=""/>
	`
    // imgHtml+='<div class="col-9 col-xs-9 col-md-10 mb-1" id="wrapInputImg_'+data.no+'">';
    // imgHtml+='<input class="form-control" type="file" name="'+strFileUpload+'[]" id="'+id+'" onchange="onImage()" accept="image/png, image/jpeg, .webp, .avif"\>';
    // imgHtml+='</div>';
    // imgHtml+='<div class="col-3 col-xs-3 col-md-2 mb-1" id="wrapResultImg_'+data.no+'">';
    // imgHtml+='<img style="height: 40px;border-radius: .375rem" src="'+base_assets+noImage+'" id="'+resId+'" alt="'+base_assets+noImage+'">';
    // imgHtml+='</div>';
    // imgHtml+='<input type="hidden" name="'+strFileUploaded+'[]" id="'+strFileUploaded+'_'+data.no+'" value=""/>';

    return imgHtml;
}
function checkDevice(){
    return window.matchMedia("only screen and (max-width: 760px)").matches;
}
function scrollToBottom(){
//        setTimeout(function(){$("html, body").animate({ scrollTop: $(document).height() }, 300);},300)
}
function isMoney(field, tipe){
    if(!handleIsEmpty(tipe)) tipe="-";
    let value = attrId(field).val();
    if(value !== '' && value !== '0' && value !== 0){
        let min = value.split("-");
        let dec = value.split(".");
        let str;
        str = hapusSparator(dec[0],'-');
        str = hapusSparator(str,',').toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        if(tipe==='-' && min[0]==='' && min[1]!==undefined){
            str = '-' + hapusmin(str);
        }
        if(dec[1]!==undefined){
            str = str + '.' + hapusmin(hapuskoma(dec[1]));
        }
        attrId(field).val(str);
    } else {
        attrId(field).val('');
    }
}
function hapusSparator(str,sparator){
    str = str.toString();
    while (str.search(sparator) >= 0) {
        str = (str + "").replace(sparator, '');
    }
    return str;
}
function timeOut(callback){
    setTimeout(()=>{
        callback();
    },10)
}
function setFocus(labelFocus) {
    setTimeout(()=>{
        attrId(labelFocus).focus();
    },600)
}
function attrId(attr){
    return $(`#${attr}`);
}
function attrClass(attr){
    return $(`.${attr}`);
}
function attrName(attr){
    return $(`input[name='${attr}']`);
}
function handleIsEmpty(data){
    return !(data === "" || data === null || data === undefined);

}
function ucWords(str){
    return (str + '').replace(/^([a-z])|\s+([a-z])/g,  ($1)=> {
        return $1.toUpperCase();
    });
}
function toInt(num){
    return parseInt(num,10);
}
function isNumber(num,setDefault){
    let isDefault = !handleIsEmpty(setDefault)?0:setDefault;
    return isNaN(toInt(num))?isDefault:toInt(num);
}
function filterArray(data){
    return Array.from(data.reduce((m, {id}) => m.set(id, [...(m.get(id) || [])]), new Map), ([id]) => ({id}))
}
function lineBreakMatcher() {
    let newDelta = new Delta();
    newDelta.insert({'break': ''});
    return newDelta;
}
function toDataUrl(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = ()=>{
        callback(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}
function getStorage(key){
    return localStorage.getItem(key);
}
function setStorage(key,val){
    return localStorage.setItem(key,val);
}
function rmStorage(key){
    return localStorage.removeItem(key)
}
function setIdSelect(id,data){
    attrId(id).val(data);
    setValueSelect(id,data);
}
function setFileImage(img,folder,idx,isUrl=true){
    let strPrev     = strResultImage;
    let strFile     = strFileUpload;
    let strValFile  = strFileUploaded;

    if(handleIsEmpty(idx)){
        strPrev		+= `_${idx}`;
        strFile		+= `_${idx}`;
        strValFile	+= `_${idx}`;
    }

    setPrevImg(img,strPrev);
    setValueImg(img,`${strUpload}/${folder}/`,strFile);

    attrId(strValFile).val(img);
}
function setQuill(quill,data){
    return quill.clipboard.dangerouslyPasteHTML(data);
}
function setTagify(tag,data){
    return tag.addTags(JSON.parse(data));
}
function delQuill(quill){
    return quill.clipboard.dangerouslyPasteHTML('');
}
function delImage(){
    return setPrevImg(noImage);
}
function delTagify(tag){
    return tag.removeAllTags();
}
function delForm(formInput){
    attrClass("error").text("")
    formInput[0].reset();
    formInput.validate().resetForm();
}
function delValueSelect(id){
    return setValueSelect(id,[]);
}

function onOffQuill(param,id){
    this[param].on('selection-change', (range)=> {setCssQuillEmpty(id,!range,param)})
}

function setCssQuillEmpty(id,isTrue,param){
    if(isTrue){
        let strBorder="1px solid #444564";
        attrId(id).css({"border-top":"none"});
        attrId(id).css({"border-right":strBorder});
        attrId(id).css({"border-left":strBorder});
        attrId(id).css({"border-bottom":strBorder});
    }
    else{
        eval(param).focus();
        attrId(id).css({"border":"1px solid #696cff"});

    }
}
let noRow=0;
let dataRow=[];
function actionRow(param,idx){
    if(param==='add'){
        dataRow.push(`data${noRow}`);
        noRow+=1;
        timeOut(()=>{
            let html = templateRow();
            attrId("wrapperRow").append(html);
            timeOut(()=>{attrId(`btnRow1`).prop("disabled", true);})
        });
    }
    else{
        let index = dataRow.indexOf(dataRow[idx-1]);
        if (index !== -1) dataRow.splice(index, 1);
        timeOut(()=>{
			attrId(`container${idx}`).remove();
		})
    }
}

function templateRow(){
    let html="";
    html+= '<div class="d-flex" id="container'+noRow+'">';
    html+= '<input type="file" name="'+strFileUpload+'[]" id="'+strFileUpload+'_'+noRow+'_x" class="form-control" style="margin-right: 5px">';
    html+= '<button onclick="actionRow(`del`,\''+noRow+'\')" id="btnRow'+noRow+'" class="btn btn-outline-danger" style="float:right;"><i class="bx bx-trash"></i></button>';
    html+= '</div>';
    return html;
}
