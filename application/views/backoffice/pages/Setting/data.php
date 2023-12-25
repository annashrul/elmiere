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
						<th width='1%'>Logo</th>
						<th>Name</th>
						<th width='1%'>WhatsApp</th>
						<th width='1%'>facebook</th>
						<th width='1%'>instagram</th>
						<th width='1%'>twitter</th>
						<th width='1%'>linkedin</th>
						<th width='1%'>pinterest</th>
						<th width='1%'>behance</th>

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
							<td><img id="logoSite0" src='<?= base_url().$val['image'] ?>' style='height:50px;max-width: 70px;border-radius: 10px' alt=''></td>
							<td><?= $val['name'] ?></td>
							<td><a href="https://wa.me/<?=$val['whatsapp']?>?text=hallo" target="_blank"><?= $val['whatsapp'] ?></a></td>
							<td><a href="<?= $val['facebook'] ?>" target="_blank"><?= $val['facebook'] ?></a></td>
							<td><a href="<?= $val['instagram'] ?>" target="_blank"><?= $val['instagram'] ?></a></td>
							<td><a href="<?= $val['twitter'] ?>" target="_blank"><?= $val['twitter'] ?></a></td>
							<td><a href="<?= $val['linkedin'] ?>" target="_blank"><?= $val['linkedin'] ?></a></td>
							<td><a href="<?= $val['pinterest'] ?>" target="_blank"><?= $val['pinterest'] ?></a></td>
							<td><a href="<?= $val['behance'] ?>" target="_blank"><?= $val['behance'] ?></a></td>
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

