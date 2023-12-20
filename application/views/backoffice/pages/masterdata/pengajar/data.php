<?php $no = $data[$this->no];
if ($row != null): ?>
	<div class="card">
		<div class="card-body">
			<div class="table-responsive text-nowrap">
				<table class="table border-top table-hover">
					<thead>
					<tr>
						<th width="1%" class="text-center"><?= $this->no ?></th>
						<th width="1%" class="text-center">#</th>
						<th>Nama</th>
						<th width="1%">No Identitas</th>
						<th width="1%">Jabatan</th>
						<th width='1%'>No Telepon</th>
						<th width="1%">Jenis Kelamin</th>
						<th width="1%">Pendidikan</th>
						<th width="1%">Email</th>
						<th width="1%">Kelahiran</th>
						<th width="1%">Pelajaran</th>
						<th width="1%"><?= $this->status ?></th>
					</tr>
					</thead>
					<tbody class="table-border-bottom-0">
					<?php foreach ($row as $val):
						$no++;
						?>
						<tr>
							<td width="1%" class="text-center"><?= $no ?></td>
							<td width="1%" class="text-center">
								<div class="dropdown">
									<button type="button" class="btn btn-xs rounded-pill btn-icon btn-primary p-0 dropdown-toggle hide-arrow"  data-bs-toggle="dropdown"><i class="bx bx-chevron-down"></i></button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="javascript:void(0);" onclick="ubah('<?= $val[$this->id] ?>')"><i class="bx bx-edit-alt me-2"></i>Ubah</a>
										<a class="dropdown-item" href="javascript:void(0);" onclick="hapus('<?= $val[$this->id] ?>')"><i class="bx bx-trash me-2"></i>Hapus</a>
									</div>
								</div>
							</td>
							<td ><?=$val['nama']?></td>
							<td ><?=$val['no_identitas']?></td>
							<td ><?=$val['jabatan']?></td>
							<td ><?=$val['no_telepon']?></td>
							<td ><?=strtoupper($val['jenis_kelamin'])?></td>
							<td ><?=$val['pendidikan']?></td>
							<td ><?=$val['email']?></td>
							<td ><?=$val['tempat_lahir']?>, <?=$val['tanggal_lahir']?></td>
							<td ><?=$val['pelajaran']?></td>
							<td width="1%"><?=status($val[$this->status]) ?></td>
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

