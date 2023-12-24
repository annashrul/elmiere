<section class='exclusive-service-area section-padding'>
	<div class='container'>
		<div class='row'>
			<div class='col-md-12'>
				<div class='section-titleV1'>
					<p class='wow fadeInUp' data-wow-delay='.15s'>OUR ICON</p>
					<h3 class='wow fadeInUp' data-wow-delay='.35s'>EXCLUSIVE ICONS</h3>
				</div>
			</div>
		</div>
		<div class='row' style="vertical-align: middle">
			<?php
			for ($i=1;$i<51;$i++):
			?>
			<div class='col-2 col-md-2 col-xs-2 col-sm-2 col-lg-1 ' style="padding: 1px;margin-bottom: 1px">
				<div class="div" style='border:1px solid #fff;padding-top:10px;text-align:center;border-radius: 7px'>
					<i class='flaticon-<?= $i ?>' style='font-size: 30px;text-align: center'></i>
					<p style='font-size: 11px'>flaticon-<?= $i ?></p>
				</div>

			</div>
			<?php endfor;?>
		</div>
	</div>
</section>
