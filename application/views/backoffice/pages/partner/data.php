<?php $no = $data[$this->no];
$avatar = 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png';
if ($row != null): ?>
	<div class="card">
		<div class="card-body">
			<div class="table-responsive text-nowrap">
				<table class="table border-top table-hover">
					<thead>
					<tr>
						<th width="1%" class="text-center"><?= $this->no ?></th>
						<th width="1%" class="text-center">#</th>
						<th width='1%' class='text-center'>Logo</th>
						<th>Nama</th>
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
									<button type="button"
											class="btn btn-xs rounded-pill btn-icon btn-primary p-0 dropdown-toggle hide-arrow"
											data-bs-toggle="dropdown"><i class="bx bx-chevron-down"></i></button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="javascript:void(0);"
										   onclick="ubah('<?= $val[$this->id] ?>')"><i class="bx bx-edit-alt me-2"></i>Edit</a>
										<a class="dropdown-item" href="javascript:void(0);"
										   onclick="hapus('<?= $val[$this->id] ?>')"><i class="bx bx-trash me-2"></i>Delete</a>
									</div>
								</div>
							</td>
							<td class='text-center'><img src="<?= $val['image'] == '' ?$this->noImage : $val['image'] ?>" style='max-height:50px;max-width: 100px;border-radius: 10px' alt=''></td>
							<td>
								<?= $val['name'] ?>
							</td>
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

