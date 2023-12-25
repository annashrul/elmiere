<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function iconCustom(){
		$data['pages'] = 'frontoffice/iconCustom';
		$this->load->view('frontoffice/index',$data);

	}
	public function index()
	{

		$data['slider'] = $this->M_crud->read_data('slider','*');
		$data['about'] = $this->M_crud->read_data('about','*')[0];
		$data['service'] = $this->M_crud->read_data('service','*');
		$data['gallery'] = $this->M_crud->read_data('v_gallery','*',"name='None'");
		$portofolio=[];
		foreach ($this->M_crud->read_data('client','*',"name!='None'") as $row){
			$gallery =  [];
			$resultGallery=$this->M_crud->read_data('gallery','*',"id_client='".$row['id']."'");
			if(count($resultGallery) > 0){
				foreach ($resultGallery as $val){
					if($val['id_client'] == $row['id']){
						$gallery[] =  $val['image'];
					}
				}
				$row['gallery'] = $gallery;
				$portofolio[]=$row;
			}
		}
		$data['portofolio'] = $portofolio;
//		echo "<pre/>";
//		var_dump($portofolio);die();
		$data['pages'] = 'frontoffice/home';
		$this->load->view('frontoffice/index', $data);
	}

	public function portofolio(){
		$portofolio=[];
		foreach ($this->M_crud->read_data('client','*',"name!='None'") as $row){
			$gallery =  [];
			$resultGallery=$this->M_crud->read_data('gallery','*',"id_client='".$row['id']."'");
			if(count($resultGallery) > 0){
				foreach ($resultGallery as $val){
					if($val['id_client'] == $row['id']){
						$gallery[] =  $val['image'];
					}
				}
				$row['gallery'] = $gallery;
				$portofolio[]=$row;
			}
		}
		$data['portofolio'] = $portofolio;
		$data['pages'] = 'frontoffice/portofolio';
		$this->load->view('frontoffice/index', $data);
	}
	public function detailPortofolio($slug){
		$data['pages'] = 'frontoffice/detailPortofolio';
		$data['detail'] = $this->M_crud->read_data('v_gallery','*',"slug='$slug'");
		$data['client'] = $this->M_crud->read_data('v_gallery','*',"slug!='$slug' and name!='None'",null,'name');
//		echo "<pre/>";
//		var_dump($data['client']);die();
		$this->load->view('frontoffice/index', $data);
	}
	public function gallery(){
		$data['pages'] = 'frontoffice/gallery';
		$data['gallery'] = $this->M_crud->read_data('v_gallery','*',"name='None'");
//		echo "<pre/>";
//		var_dump($data);die();
		$this->load->view('frontoffice/index', $data);
	}

}
