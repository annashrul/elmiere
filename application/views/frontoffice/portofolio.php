<!--<section class='innerpage-titlev3'>-->
<!--	<div class='container'>-->
<!--		<div class='row'>-->
<!--			<div class='col-md-12'>-->
<!--				<div class='ipt-text'>-->
<!--					<h3>Portfolio - Elmiere</h3>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--</section>-->


<section class='albums-area'>
    <div class='container'>
        <div class='row'>
            <?php foreach ($portofolio as $key=>$row): $slug=str_replace(' & ', '_', strtolower($row['name']));?>
            <div class='col-md-4 col-xs-6 col-sm-6'>
                <div class='single-album' style="border-radius:10px">
                    <div class='album-cat-title'>
                        <a href="<?=base_url().'photos/'.$row['slug']?>"><span><?=$row['name']?></span></a>
                    </div>
                    <div class='s-album-img'>
                        <?php foreach ($row['gallery'] as $key=>$gallery): if( $key < 3){?>
                        <img src="<?=base_url().$gallery?>" alt>
                        <?php } endforeach;?>
                    </div>
                </div>
            </div>
            <?php endforeach;?>
        </div>
    </div>
</section>