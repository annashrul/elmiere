<?php
/**
 * Created by PhpStorm.
 * User: annashrulyusuf
 * Date: 2/13/2022
 * Time: 1:25 AM
 */

class Slider extends MY_Controller
{
	public function __construct()
	{
		parent::__construct();
		$parent=$this->uri->segment(2);

		$child=$this->uri->segment(3);
		$v = $parent;
		$this->pathFile = $this->folder . $v . '/';
		$this->indexFile = $this->pathFile . $this->index;
		$this->dataFile = $this->pathFile . 'data';
		$this->tbl  = 'slider';
	}

	public function index()
	{
		$data[$this->title] = $this->pathFile;
		$data[$this->page] = $this->indexFile;


		view($this->layout, $data);
	}
	public function getView(){
		$data[$this->title] = $this->pathFile;
		return view($this->indexFile,$data);
	}
	public function read($pages=1){
		$limit                  = $this->limit;
		$uriSegment             = 4;
		$orLike                 = "title LIKE '%"._get($this->any)."%'";
		$where                  = _get($this->any) && _get($this->any) != null ? $orLike : '';
		$pagin                  = pagin($this->tbl,$this->id,$where,$limit,$uriSegment);
		$row                    = $this->M_crud->read_data($this->tbl,'*',$where,$this->id.' desc',null,$pagin[$this->perPage],$pagin[$this->start]);
		$data[$this->totalRows]      = (int)$pagin[$this->totalRows];
		$data[$this->lastRows]       = (int)$pages * (int)$pagin[$this->perPage];
		$data[$this->currentPages]   = (int)$pages;
		$data[$this->countPerPage]   = count($row);
		$data[$this->no]             = ($pages*$limit)-$limit;
		$data[$this->pages]          = 'slider';
		$data['pagination']= $pagin;
		return view($this->dataFile,['data'=>$data,'row'=>$row]);
	}

	public function simpan()
	{
		$data['title'] = _post('title');
		$data['caption'] = _post('caption');
		$configUpload = upload('slider',_post($this->fileUploaded),$_FILES[$this->fileUpload]);
		$data['image'] = $configUpload;
		$response[$this->status]=createData($this->tbl,$data,[$this->param=>_post($this->param),$this->id=>_post($this->id)]);
		echo json_encode($response);
	}

	public function hapus()
	{
		$get_id = $this->M_crud->get_data($this->tbl, 'image', $this->id . "='" . _post($this->id) . "'");
		$resImage = explode(',', $get_id['image']);
		$where = [$this->id => _post($this->id)];
		$result = $this->M_crud->delete_data($this->tbl, $where);
		if ($result) {
			foreach ($resImage as $val) {
				if (file_exists($val)) {
					unlink($val);
				}
			}
		}
		echo json_encode([$this->status => $result]);
	}

	public function edit()
	{
		echo json_encode(editData($this->tbl, _post($this->id)));
	}
	public function check_column()
	{
		$judul = _post('title');
		$where = "title='" . $judul . "'";
		_post('param') == 'edit' ? ($where .= " AND title <>'" . $judul . "'") : null;
		$isExist = $this->M_crud->get_data($this->tbl, 'title', $where);
		echo $isExist == null ? 'true' : 'false';
	}

	public function getAll(){
		$read_data = $this->M_crud->read_data($this->tbl,'id,nama');
		echo json_encode($read_data);
	}
}

