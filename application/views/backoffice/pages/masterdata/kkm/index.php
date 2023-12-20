<?php $data[$this->pages] = 'kkm';
$data['focus'] = 'nilai';
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
					<div class="col-md-6 mb-3">
						<?php $label = 'nilai'; ?>
						<label for="nameBackdrop" class="form-label"><?= getLabel($label) ?></label>
						<input type="text" name="<?= $label ?>" id="<?= $label ?>" class="form-control">
					</div>
					<div class='col-md-6 mb-3'>
						<?php $label = 'pengajar'; ?>
						<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
						<select onchange="getMapelByGuru($(this).val())" name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default"></select>
					</div>
					<div class='col-md-6 mb-3'>
						<?php $label = 'pelajaran'; ?>
						<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
						<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default"></select>
					</div>
					<div class='col-md-6 mb-3'>
						<?php $label = 'keahlian'; ?>
						<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
						<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default"></select>
					</div>
					<div class='col-md-6 mb-3'>
						<?php $label = 'kelas'; ?>
						<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
						<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default"></select>
					</div>
					<div class='col-md-6 mb-3'>
						<?php $years = range(strftime('%Y', time()),1900); ?>
						<?php $label = 'tahun_ajaran'; ?>
						<label for='selectpickerIcons' class='form-label'><?= getLabel($label) ?></label>
						<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick"
								data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check"
								data-style="btn-default">
							<?php foreach($years as $year) : ?>
								<option value="<?php echo $year; ?>"><?php echo $year; ?></option>
							<?php endforeach; ?>
						</select>
					</div>
				</div>
			</div>
			<div class="modal-footer"><?php $this->load->view($this->buttonForm); ?></div>
		</form>
	</div>
</div>



<script>
	var urlLocal = `masterdata/kkm/`;
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
		var arrSelect = ['kelas','keahlian','pengajar'];
		arrSelect.forEach(function (row) {
			setSelect(base_url + `masterdata/${row}/${strGetAll}`, row);
		});
		loadData(1);

	});

	function getMapelByGuru(idGuru){
		// setSelect(base_url + 'masterdata/pengajar/getPelajaranByGuru','pelajaran');
		ajaxData(base_url + 'masterdata/pengajar/getPelajaranByGuru', {id: idGuru}, (res) => {
			console.log("guru",res)
			setSelectTemplate(res,'pelajaran')
		},false)
	}


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
			nilai: {
				required: true,
				min: 50,
				max:100,
				number: true,
			},
			'pengajar': {required: true},
			'pelajaran': {required: true},
			'keahlian': {required: true},
			'kelas': {required: true},
			'tahun_ajaran': {required: true},
		},
		errorPlacement: handleError(),
		submitHandler: function (form) {
			var formData = new FormData(formInput[0]);
			ajaxFile(base_url + urlLocal + urlSave, formData, function (res) {
				if (res.status) {
					loadData(`1`, false);
					delForm(formInput);
					paramForm.val(strAdd);
					modalForm.modal(strHide);
					notif(strSuccess);
				} else {
					notif(strFailed,res.message);
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
		attrId('param').val('edit')
		ajaxData(base_url + urlLocal + urlEdit, {id: id}, (res) => {
			if (res.status) {
				var data = res.res_data;
				setFocus("nilai");
				getMapelByGuru(data['id_guru'])
				attrId("id").val(data['id']);
				attrId("nilai").val(data['nilai']);
				setIdSelect("pelajaran",data['id_pelajaran']);
				setIdSelect("keahlian",data['id_keahlian']);
				setIdSelect("pengajar",data['id_guru']);
				setIdSelect("kelas",data['id_kelas']);
				setIdSelect("tahun_ajaran",data['tahun_ajaran']);

			} else {
				notif(strFailed);
			}
		});
	}
	modalForm.on(strShowModal,function (){
		console.log(attrId('param').val())


		if(attrId('param').val()!=='edit'){
			setTimeout(()=>{
				getMapelByGuru(attrId('pengajar').val())
			},1000)
		}

	})

	modalForm.on(strHideModal, function () {


		delForm(formInput);
		delImage();

	});
</script>
