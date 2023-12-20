<?php $data[$this->pages] = 'testimoni';
$data['focus'] = 'title';
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
						<?php $label = 'title'; ?>
						<label for="<?= $label ?>" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'caption'; ?>
						<label for="<?= $label ?>" class="form-label"><?= getLabel($label) ?></label>
						<textarea name="<?= $label ?>" id="<?= $label ?>" class="form-control"></textarea>
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'image'; ?>
						<label for="nameBackdrop" class="form-label">Link <?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>

				</div>
			</div>
			<div class="modal-footer"><?php $this->load->view($this->buttonForm); ?></div>
		</form>
	</div>
</div>



<script>
	var urlLocal = `testimoni/`;
	var urlRead = strRead,
		urlSave = strSave,
		urlDelete = strDelete,
		urlEdit = strEdit;
	var pages = "<?=$data[$this->pages]?>";
	var nama = attrId('title');
	var modalForm = attrId(`${strModal}${pages}`);
	var formInput = attrId(strFormInput);
	var paramForm = attrId(strParam);
	var resultContent = attrId(strResultContent);
	var anyPage = attrId(`${strAny}${pages}`);
	var no = 1;


	$(document).ready(function () {
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
			title: {
				required: true,
				remote: {
					url: `testimoni/check_column`,
					type: "post",
					data: {
						param: function () {
							return paramForm.val();
						}
					}
				}
			},

			'caption': {
				required: true
			}
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
				setFocus("title");
				attrId("param").val("edit")
				attrId("id").val(data['id']);
				attrId('title').val(data['title']);
				attrId('caption').val(data['caption']);
				attrId("image").val(data['image']);
			} else {
				notif(strFailed);
			}
		});
	}

	modalForm.on(strHideModal, function () {
		delForm(formInput);
		// delImage();
		// delValueSelect(strModel)
	});
</script>
