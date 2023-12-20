<?php $data[$this->pages] = 'gallery';
$data['focus'] = 'caption';
$this->load->view($this->generalHeader, $data) ?>
<div class="row wrapperPage">
	<div class="col-xl" id="result-content"></div>
</div>
<div class="modal fade" id="modal<?=$data[$this->pages] ?>" data-bs-backdrop="static" tabindex="-1">
	<div class="modal-dialog">
		<form class="modal-content form_input" id="form_input">
			<input type="hidden" name="<?= $this->id ?>" id="<?= $this->id ?>">
			<input type="hidden" name="<?= $this->param ?>" id="<?= $this->param ?>" value="add">
			<div class="modal-header">
				<h5 class="modal-title"></h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div class="row mb-3">
					<div class="col-md-12 mb-3">
						<?php $label = 'caption'; ?>
						<label for="<?=$label?>" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'client'; ?>
						<label for="<?=$label?>" class="form-label"><?=getLabel($label) ?></label>
						<select  for="<?=$label?>"  name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick"
								 data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check"
								 data-style="btn-default"></select>
					</div>
					<div class='col-md-12'>
						<div class='row'>
							<?php $label = $this->fileUpload; ?>

							<div class="col-md-12">
								<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?> </label>
								<label class="error-file-upload"></label>
							</div>
							<div class="col-8 col-xs-8 col-md-9">
								<input type="hidden" name="<?= $label ?>ed[]" id="<?= $label ?>ed" value=""/>
								<input data-error="file-upload" class="form-control" type="file" name="<?= $label ?>[]"
									   id="<?= $label ?>" onchange="return ValidateFileUpload('<?= $label ?>')"
									   accept="image/png, image/jpeg">
							</div>
							<div class="col-4 col-xs-4 col-md-3" style="">
								<img style="max-height: 40px;border-radius: .375rem" src="<?= $this->noImage ?>"
									 id="result_image">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer"><?php $this->load->view($this->buttonForm); ?></div>
		</form>
	</div>
</div>



<script>
	var urlLocal = `gallery/`;
	var urlRead = strRead,
		urlSave = strSave,
		urlDelete = strDelete,
		urlEdit = strEdit;
	var pages = "<?=$data[$this->pages]?>";
	var nama = attrId('caption');
	var modalForm = attrId(`${strModal}${pages}`);
	var formInput = attrId(strFormInput);
	var paramForm = attrId(strParam);
	var resultContent = attrId(strResultContent);
	var anyPage = attrId(`${strAny}${pages}`);
	var no = 1;


	$(document).ready(function () {
		var arrSelect = ['client'];
		arrSelect.forEach(function (row) {
			setSelect(base_url + `${row}/${strGetAll}`, row);
		});
		loadData(1);
	});
	function nextLoad(par) {
		let lastRow = toInt(attrId(`${strLastRows}${pages}`).val());
		let totalRow = toInt(attrId(`${strTotalRows}${pages}`).val());
		totalRow > lastRow && loadData(toInt(no) + par);
	}

	function prevLoad(par) {
		no > 1 && loadData(toInt(no) - par);
	}

	function loadData(page = 1, isCache = true) {
		no = page;
		var where = page;
		var any = anyPage.val() !== '' ? '?any=' + anyPage.val() : '';
		var totalRows = isNumber(attrId(`${strTotalRows}${pages}`).val());
		var url = base_url + urlLocal + urlRead;

		where += any;
		if (!isCache) {
			if (totalRows === 0) {
				localCache.remove(url + where);
			} else {
				for (var i = 0; i < totalRows; i++) {
					localCache.remove(url + `${i + 1}${any}`);
				}
			}
		}
		let newUrl = "/"+urlRead + where;
//    if(handleIsEmpty(localStorage[`perpage_${pages}`])){
//        newUrl=urlLocal + urlRead+where+`/${localStorage[`perpage_${pages}`]}`
//    }
		ajaxView(newUrl, null, function (res) {
			resultContent.html(res);
		});
	}

	function cari(e, val) {
		if (e.keyCode === 13) {
			anyPage.val(val);
			timeOut(function () {
				loadData(1, false);
			})
		}
	}

	formInput.validate({
		rules: {
			caption: {
				required: true,
			},
			'file_upload[]': {required: true}
		},
		errorPlacement: handleError(),
		submitHandler: function (form) {
			var formData = new FormData(formInput[0]);
			ajaxFile(base_url + urlLocal + urlSave, formData, function (res) {
				if (res.status) {
					validateSaveHmtl(nama.val(), anyPage.val(), paramForm.val(), function (page, searchName) {
						if (!searchName) anyPage.val("")
						loadData(`1`, false);
						delForm(formInput);
						paramForm.val(strAdd);
						modalForm.modal(strHide);
						notif(strSuccess);
					})
				} else {
					notif(strFailed);
				}
			})

		}
	});

	function hapus(id) {
		validateDeleteHtml(base_url + urlLocal + urlDelete, id, anyPage.val(), function (page, isCache) {
			loadData(1);
		})
	}

	function ubah(id) {
		ajaxData(base_url + urlLocal + urlEdit, {id: id}, (res) => {
			if (res.status) {
				var data = res.res_data;
				setFocus("caption");
				attrId("param").val("edit")
				attrId("id").val(data['id']);
				attrId("caption").val(data['caption']);
				setIdSelect('client', data['id_client']);
				setFileImage(`${data['image']}`, 'client')

			} else {
				notif(strFailed);
			}
		});
	}

	modalForm.on(strHideModal, function () {
		delForm(formInput);
		delImage();
		delValueSelect(strModel)
	});
</script>
