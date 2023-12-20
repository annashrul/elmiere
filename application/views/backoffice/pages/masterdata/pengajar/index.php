<?php $data[$this->pages] = 'pengajar';
$data['focus'] = 'nama';
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
						<?php $label = 'nama'; ?>
						<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'email'; ?>
						<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'no_identitas'; ?>
						<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'no_telepon'; ?>
						<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'jenis_kelamin'; ?>
						<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
						<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick"
								data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check"
								data-style="btn-default">
							<option value="pria">Pria</option>
							<option value="wanita">Wanita</option>
						</select>
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'pendidikan'; ?>
						<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'jabatan'; ?>
						<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
						<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default"></select>
					</div>
					<div class='col-md-12 mb-3'>
						<?php $label = 'alamat'; ?>
						<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>

					<div class='col-md-6 mb-3'>
						<?php $label = 'tanggal_lahir'; ?>
						<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?></label>
						<input type="date" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>
					<div class='col-md-6 mb-3'>
						<?php $label = 'tempat_lahir'; ?>
						<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>

					<div class='col-md-12 mb-3'>
						<?php $label = 'pelajaran' ?>
						<label for="selectpickerIcons" class="form-label label-<?= $label ?>"><?= ucwords($label) ?></label>
						<label class="error-select-multiple"></label>
						<select data-error="select-multiple" class="selectpicker w-100 show-tick" name="<?= $label . '[]' ?>" id="<?= $label ?>" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default" data-live-search="true" data-actions-box="true" multiple></select>
					</div>

					<div class="col-md-12 mb-3">
						<?php $label = 'status'; ?>
						<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
						<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default">
							<option value="1">Aktif</option>
							<option value="0">Tidak Aktif</option>
						</select>
					</div>
				</div>
			</div>
			<div class="modal-footer"><?php $this->load->view($this->buttonForm); ?></div>
		</form>
	</div>
</div>



<script>
	var urlLocal = `masterdata/pengajar/`;
	var urlRead = strRead,
		urlSave = strSave,
		urlDelete = strDelete,
		urlEdit = strEdit;
	var pages = "<?=$data[$this->pages]?>";
	var nama = attrId(strNama);
	var modalForm = attrId(`${strModal}${pages}`);
	var formInput = attrId(strFormInput);
	var paramForm = attrId(strParam);
	var resultContent = attrId(strResultContent);
	var anyPage = attrId(`${strAny}${pages}`);
	var no = 1;


	$(document).ready(function () {
		var arrSelect = ['jabatan','pelajaran'];
		arrSelect.forEach(function (row) {
			setSelect(base_url + `masterdata/${row}/${strGetAll}`, row);
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
			nama: {
				required: true,
				remote: {
					url: `pengajar/check_column`,
					type: "post",
					data: {
						param: function () {
							return paramForm.val();
						}
					}
				}
			},
			'email': {required: true,email:true},
			'no_identitas': {required: true},
			'no_telepon': {required: true},
			'jenis_kelamin': {required: true},
			'pendidikan': {required: true},
			'jabatan': {required: true},
			'alamat': {required: true},
			'status': {required: true},
			'tanggal_lahir': {required: true},
			'tempat_lahir': {required: true},
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
				setFocus("nama");
				attrId("param").val("edit")
				attrId("id").val(data['id']);
				attrId("nama").val(data['nama']);
				attrId("no_identitas").val(data['no_identitas']);
				attrId("jabatan").val(data['id_jabatan']);
				attrId("email").val(data['email']);
				attrId("no_telepon").val(data['no_telepon']);
				attrId("pendidikan").val(data['pendidikan']);
				attrId("alamat").val(data['alamat']);
				attrId("tanggal_lahir").val(data['tanggal_lahir']);
				attrId("tempat_lahir").val(data['tempat_lahir']);
				setIdSelect('jabatan', data['id_jabatan']);
				setIdSelect('jenis_kelamin', data['jenis_kelamin']);
				setIdSelect("status", data['status']);
				let newPelajaran = data['pelajaran'].split(",")
				setValueSelect('pelajaran', data['pelajaran'].split(','))
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
