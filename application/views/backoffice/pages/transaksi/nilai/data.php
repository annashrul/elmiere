<?php $no = $data[$this->no];
if ($row != null): ?>
	<div class="card">
		<div class="card-body">
			<div class="table-responsive text-nowrap">
				<table class="table border-top table-hover">
					<thead>
					<tr>
						<th width="1%" class="text-center"><?= $this->no ?></th>
						<th>Nama</th>
						<th>Ulangan (30%)</th>
						<th>Keseharian (30%)</th>
						<th>Absen (40%)</th>
						<th>KKM</th>
						<th>Hasil</th>
					</tr>
					</thead>
					<tbody class="table-border-bottom-0">
					<?php foreach ($row as $key=>$val):
						$no++;
						?>
						<tr>
							<td width="1%" class="text-center"><?= $no ?></td>
							<td id="nama_<?=$key?>"><?=$val['nama']?></td>
							<td><input type="text" id="ulangan_<?=$key?>" class="text-right form-control" onchange="hitungNilai('<?=$key?>',$(this).val())"></td>
							<td><input type="text" id="keseharian_<?=$key?>" class="text-right  form-control" onchange="hitungNilai('<?=$key?>',$(this).val())"></td>
							<td><input type="text" id="absen_<?=$key?>" class="text-right form-control" onchange="hitungNilai('<?=$key?>',$(this).val())"></td>
							<td><input style="width: 100px" type="text" id="kkm_<?=$key?>" class="text-right form-control" value="<?=$data['kkm']?>" disabled></td>
							<td><input style='width: 100px' type="text" id="nilai_<?=$key?>" class="text-right form-control" disabled></td>
						</tr>
						<?php $data[$this->no] = $no - 1; endforeach; ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<?php $this->load->view($this->paginHtml, $data); else: ?>
	<div class="row">
		<div class="col-md-12">
			<p><i class="bx bx-info-circle"></i><?= $this->msgNoData ?></p>
		</div>
	</div>
<?php endif; ?>

