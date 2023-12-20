<?php $no = $data[$this->no];
if ($row != null): ?>
	<div class="card">
		<div class="card-body">
			<div class="table-responsive">
				<table class="table border-top table-hover">
					<thead>
					<tr>
						<th width="1%" class="text-center"><?= $this->no ?></th>
						<th width="1%" class="text-center">#</th>
						<th width='1%'>Logo</th>
						<th>Title</th>
						<th>Caption</th>
					</tr>
					</thead>
					<tbody class="table-border-bottom-0">
					<?php foreach ($row as $val):
						$no++;
						?>
						<tr>
							<td width="1%" class="text-center"><?= $no ?></td>
							<td width="1%" class="text-center">
								<a class='dropdown-item' href='javascript:void(0);'
								   onclick="ubah('<?= $val[$this->id] ?>')"><i class='bx bx-edit-alt me-2'></i>Edit</a>
							</td>
							<td><img src='<?= base_url().$val['image'] ?>' style='height:70px;max-width: 100px;border-radius: 10px' alt=''></td>
							<td style='white-space:normal !important;'><?= $val['title'] ?></td>
							<td style="white-space:normal !important;"><?= $val['caption'] ?></td>
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

