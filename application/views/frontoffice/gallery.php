<section class='innerpage-titlev3'>
	<div class='container'>
		<div class='row'>
			<div class='col-md-12'>
				<div class='ipt-text'>
					<h3>Gallery Elmiere</h3>
				</div>
			</div>
		</div>
	</div>
</section>


<section class='portfolio-area portfolio-page-content bgDark section-padding'>
	<div class='container-fluid'>

		<div class='shuffle-wrapper'>

			<div class='row shuffle-box sbox_V1'>
				<?php foreach ($gallery as $row): ?>
				<figure class='single-shuffle col-3' data-groups='[&quot;design&quot;]'>
					<div class='aspect'>
						<div class='aspect__inner ssf-content'>
							<img src="<?=base_url().$row['image']?>" alt/>
							<div class='ssf-hover'>
								<a data-fancybox='group-4' class='fancyGallery'
								   href="<?=base_url().$row['image']?>">
									<i class='fa fa-search-plus' aria-hidden='true'></i>
								</a>
							</div>
						</div>
					</div>
				</figure>
				<?php endforeach;?>
			</div>
		</div>
	</div>
</section>
