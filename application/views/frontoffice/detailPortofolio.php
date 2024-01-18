<!--<section class='innerpage-titlev3'>-->
<!--	<div class='container'>-->
<!--		<div class='row'>-->
<!--			<div class='col-md-12'>-->
<!--				<div class='ipt-text'>-->
<!--					<h3>--><?//=$detail[0]['name']?><!--</h3>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--</section>-->


<section class='portfolio-area bgDark section-padding'>
	<div class='container-fluid'>
		<div class='row'>
			<div class='col-md-12'>
				<div class='section-titleV1'>
					<p>Our Recent Works</p>
					<h3><?=$detail[0]['name']?></h3>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-8">
				<div class='shuffle-wrapper'>
					<div class='row shuffle-box sbox_V1'>
						<?php foreach ($detail as $row) : $col='3';
							if(count($detail) == 1){
								$col='12';
							}
							else if(count($detail) == 2){
								$col='6';
							}
							else if(count($detail) == 3){
								$col='4';
							}
							else{
								$col='3';
							}
						?>
							<figure class='single-shuffle col-<?=$col?>' data-groups='[&quot;design&quot;]'>
								<div class='aspect'>
									<div class='aspect__inner ssf-content'>
										<img src="<?=base_url().$row['image']?>" alt/>
										<div class='ssf-hover'>
											<a data-fancybox='group-4' class='fancyGallery'
											   href="<?=base_url().$row['image']?>">
												<img src='https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/assets/img/icon/focus.png' alt>
											</a>
										</div>
									</div>
								</div>
							</figure>
						<?php endforeach;?>
					</div>
				</div>
			</div>
			<div class='col-md-4'>
				<div class='sidebar-widget s-featured-post' style='margin:0 '>
					<h4>Other Client</h4>
					<?php foreach ($client as $row): ?>
						<a class="client-elmiere" href="<?= base_url() . 'photos/' . $row['slug'] ?>"
						   style="color:black;border:1px solid black;padding:5px"><?= $row['name'] ?></a>
					<?php endforeach; ?>
				</div>
			</div>
		</div>

	</div>
</section>

<section class='blog-wrapper'>
	<div class="container-fluid">
		<?php if($detail[0]['youtube']!=''){?>
			<iframe width="100%" style="height: 100vh" src="https://www.youtube.com/embed/<?=$detail[0]['youtube']?>&rel=0"
					title='YouTube video player' frameborder='0'
					allow=''
					allowfullscreen></iframe>
		<?php } ?>
	</div>


</section>
