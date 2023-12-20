<?php $data[$this->pages] = 'jadwal';
$data['focus'] = 'nama';

?>

<div class='row mb-3'>
	<div class='col-12 col-xs-12 col-md-11'>
		<div class='row'>
			<div class='col-6 col-xs-6 col-md-2 mb-3'>
				<?php $label = 'keahlian'; ?>
				<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
				<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default"></select>
			</div>
			<div class='col-6 col-xs-6 col-md-2 mb-3'>
				<?php $label = 'kelas'; ?>
				<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
				<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default"></select>
			</div>
			<div class='col-md-3 mb-3'>
				<?php $label = 'pengajar'; ?>
				<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
				<select onchange="getMapelByGuru($(this).val())" name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default"></select>
			</div>
			<div class='col-md-3 mb-2'>
				<?php $label = 'pelajaran'; ?>
				<label for="selectpickerIcons" class="form-label"><?= getLabel($label) ?></label>
				<select name="<?= $label ?>" id="<?= $label ?>" class="selectpicker w-100 show-tick" data-live-search="true" data-icon-base="bx" data-tick-icon="bx-check" data-style="btn-default"></select>
			</div>
			<div class="col-md-2">
				<?php $this->load->view($this->tahunAjaran) ?>
			</div>
		</div>
	</div>
	<div class='col-12 col-xs-12 col-md-1'>
		<button style='float: right; margin-top: 27px;width:100%' type='button' class='btn btn-primary' onclick="loadData(1,attrId('keahlian').val(),attrId('kelas').val(),attrId('pengajar').val(),attrId('pelajaran').val())">
			<i class='tf-icons bx bx-search-alt scaleX-n1-rtl bx-sm'></i>
		</button>
	</div>
</div>

<div class="row wrapperPage">
	<div class="col-xl" id="result-content"></div>
</div>



<script>
	var urlLocal = `transaksi/nilai/`;
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

	function hitungNilai(idx,val){
		let ulangan=Number(attrId(`ulangan_${idx}`).val())
		let keseharian=Number(attrId(`keseharian_${idx}`).val())
		let absen=Number(attrId(`absen_${idx}`).val())
		let hasil=Math.ceil(Number(ulangan+keseharian+absen)/3)
		let kkm=Number(attrId(`kkm_${idx}`).val())
		let kelipatan = 2;


		let nilaiHuruf='';
		if(hasil < kkm){
			nilaiHuruf = 'D'
		}
		else if(hasil >= kkm && hasil < 80){
			nilaiHuruf = 'C'
		}
		else if(hasil >= 80 && hasil < 90){
			nilaiHuruf = 'B'
		}
		else if(hasil >= 90 && hasil <= 100){
			nilaiHuruf = 'A'
		}


		let nilai=attrId(`nilai_${idx}`).val(`${hasil} / ${nilaiHuruf}`)

		if(hasil < kkm){
			attrId(`nilai_${idx}`).css({"color":"#FF3E1D"})
		}else{
			attrId(`nilai_${idx}`).css({'color': '#a3a4cc'})
		}
	}

	$(document).ready(function () {
		var arrSelect = ['kelas','keahlian','pengajar'];
		arrSelect.forEach(function (row) {
			setSelect(base_url + `masterdata/${row}/${strGetAll}`, `${row}`);
		});
		setTimeout(()=>{
			getMapelByGuru(attrId('pengajar').val())

		},1000)


	});

	function getMapelByGuru(idGuru){
		ajaxData(base_url + 'masterdata/pengajar/getPelajaranByGuru', {id: idGuru}, (res) => {
			setSelectTemplate(res,'pelajaran')
			// setTimeout(()=>{
			// 	loadData(1, attrId('keahlian').val(), attrId('kelas').val(),attrId('pengajar').val(),res[0]['id'])
			// },100)
		},false)
	}
	function loadData(page = 1, keahlian,kelas,pengajar,pelajaran) {

		let newUrl = base_url + 'transaksi/nilai/read/1?keahlian='+keahlian+"&kelas="+kelas+"&pengajar="+pengajar+"&pelajaran="+pelajaran;
		ajaxView(newUrl, null, function (res) {
			resultContent.html(res);

		},true);
	}

	function cari(e, val) {
		if (e.keyCode === 13) {
			anyPage.val(val);
			timeOut(function () {
				loadData(1, false);
			})
		}
	}



</script>
