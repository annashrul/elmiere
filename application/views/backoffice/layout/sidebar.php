<!-- Menu -->
<aside id='layout-menu' class='layout-menu menu-vertical menu bg-menu-theme'>
	<div class='app-brand demo'>
		<a href='javascript:void(0)' class='app-brand-link' >
              <span class='app-brand-logo demo'>
             <img
					 id="logoSite"
					 src='https://darunnajah.com/wp-content/uploads/2020/06/Master-File-Logo-60-Tahun-Darunnajah-01-1-1024x1024.png'
					 alt=''
					 style='width:100px;'>
              </span>
			<span class='app-brand-text demo menu-text fw-bolder ms-2 titleSite'><?= ucwords($this->session->nama) ?></span>
		</a>
		<a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
			<i class="bx bx-chevron-left bx-sm align-middle"></i>
		</a>
	</div>

	<div class="menu-inner-shadow"></div>

	<ul class="menu-inner py-1">
		<?php $uriParent = $this->uri->segment(2);
		$uriChild = $this->uri->segment(3);

//		var_dump($uriParent);
//		var_dump($uriChild);
//		die();
		$menu = [
				['icon' => 'bx-chart', 'title' => 'Service','controller'=>'service', 'child' => []],
				['icon' => 'bx-body', 'title' => 'Client','controller'=>'client', 'child' => []],
				['icon' => 'bx-star', 'title' => 'Testimoni','controller'=>'testimoni', 'child' => []],
				['icon' => 'bx-images', 'title' => 'Gallery','controller'=>'gallery', 'child' => []],
				['icon' => 'bx-camera', 'title' => 'Portofolio','controller'=>'portofolio', 'child' => []],
				['icon' => 'bx-user-voice', 'title' => 'Partner','controller'=>'partner', 'child' => []],
				['icon' => 'bx-slider', 'title' => 'Slider','controller'=>'slider', 'child' => []],
				['icon' => 'bx-info-circle', 'title' => 'About','controller'=>'about', 'child' => []],
				['icon' => 'bx-cog', 'title' => 'Setting','controller'=>'setting', 'child' => []],

//				['icon' => 'bx-book-content', 'title' => 'Section', 'child' => [
//						['title' => 'Banner'],
//						['title' => 'Tentang'],
//						['title' => 'Faq'],
//						['title' => 'Tutorial'],
//				]],
//				['icon' => 'bx-check-shield', 'title' => 'Layanan', 'child' => []],
//				['icon' => 'bx-diamond', 'title' => 'Partner', 'child' => []],
//				['icon' => 'bx-happy-alt', 'title' => 'Testimoni', 'child' => []],
//				['icon' => 'bx-globe', 'title' => 'Socmed', 'child' => []],
		] ?>
		<?php foreach ($menu as $val): $titleParent = str_replace(' ', '', strtolower($val['title']));

			if (count($val['child']) == 0): ?>
				<li class="menu-item <?= $titleParent ?>">
					<a href='javascript:void(0);' class='menu-link' onclick="loadView('<?= $titleParent ?>',null)">
						<i class="menu-icon tf-icons bx <?= $val['icon'] ?>"></i>
						<div data-i18n='Analytics'><?= ucwords($val['title']) ?></div>
					</a>
				</li>
			<?php else: ?>
				<li class="menu-item <?=$uriParent==$titleParent?'open':null?>">
					<a href="javascript:void(0);" class="menu-link menu-toggle">
						<i class="menu-icon tf-icons bx <?= $val['icon'] ?>"></i>
						<div data-i18n="Account Settings"><?= $val['title'] ?></div>
					</a>
					<ul class="menu-sub">
						<?php foreach ($val['child'] as $item): ?>
							<li class="menu-item <?=$uriChild==$item['controller']?'active':null?>">
								<a href="<?=base_url('backoffice/'.$titleParent.'/'.$item['controller'])?>" class="menu-link">
									<div data-i18n="Account"><?=$item['title'] ?></div>
								</a>
							</li>
						<?php endforeach; ?>
					</ul>
				</li>
			<?php endif;endforeach; ?>
	</ul>
</aside>
<!-- / Menu -->

<script>

</script>
