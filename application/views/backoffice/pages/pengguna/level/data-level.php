<?php $no=$data[$this->no]; if($row!=null):?>
	<div class="card">
		<div class="card-body">
			<div class="table-responsive text-nowrap">
				<table class="table border-top table-hover">
					<thead>
					<tr>
						<th width="1%" class="text-center"><?=$this->no?></th>
						<th width="1%" class="text-center">#</th>
						<th width="1%" >Nama</th>
						<th>Menu</th>
					</tr>
					</thead>
					<tbody class="table-border-bottom-0">
					<?php foreach ($row as $val): $no++;$newAkses="";
					$arrAkses=json_decode($val['akses']);
						$newArrAkses=[];
						foreach ((array)$arrAkses as $key=>$res){
							if($res->isActive){
								$newArrAkses[]=$res;
							}
						}

						foreach ($newArrAkses as $key=>$res){
							if($key==count($newArrAkses)-1){
								$newAkses.= str_replace("_"," ",$res->title);
							}else{
								$newAkses.= str_replace("_"," ",$res->title).', ';
							}
						}
						?>
						<tr>
							<td class="text-center"><?=$no?></td>
							<td class="text-center">
								<div class="dropdown">
									<button type="button" class="btn btn-xs rounded-pill btn-icon btn-primary p-0 dropdown-toggle hide-arrow" aria-expanded="false" data-bs-boundary="window"  data-bs-toggle="dropdown"><i class="bx bx-chevron-down"></i></button>
									<div class="dropdown-menu">
										<a class="dropdown-item" href="javascript:void(0);" onclick="ubah('<?=$val[$this->id]?>')"><i class="bx bx-edit-alt me-2"></i> Ubah</a>
										<a class="dropdown-item" href="javascript:void(0);" onclick="hapus('<?=$val[$this->id]?>')"><i class="bx bx-trash me-2"></i> Hapus</a>
									</div>
								</div>
							</td>
							<td><?=isEmpty($val['name'])?'-':$val['name']?></td>
							<td><?=$newAkses?></td>
						</tr>
						<?php $data[$this->no] = $no-1; endforeach;?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<?php $this->load->view($this->paginHtml,$data); else: ?>
	<div class="row"><div class="col-md-12"><p><i class="bx bx-info-circle"></i><?=$this->msgNoData?></p></div></div>
<?php endif; ?>
