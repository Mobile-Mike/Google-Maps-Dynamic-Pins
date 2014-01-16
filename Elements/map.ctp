<?php if(isset($showPins) && $showPins == 'events'): ?>
<?php echo $this->Html->script('https://maps.googleapis.com/maps/api/js?sensor=true'); ?>
<?php echo $this->Html->script('mapscript'); ?>
<div id="MapLocations">
<?php foreach($locations as $location):?>
	<div class="location">
	<?php
		echo "<span class=\"id\" style=\"display:none;\">". $location['Location']['id']."</span>";
		echo "<span class=\"title\" style=\"display:block; width: 180px;\">{$location['Location']['title']}</span>"; // Forma de doble comilla con php dentro
		echo "<span class=\"description\" style=\"display:none;\">". $location['Location']['description']."</span>"; // Concatenando texto
		echo "<span class=\"image\"  style=\"display:none;\">". $location['Location']['image']. "</span>";  // Comilla doble con comillas doble dentro \
		echo "<span class=\"latitude\" style=\"display:none;\">". $location['Location']['latitude']. "</span>";
		echo "<span class=\"longitude\" style=\"display:none;\">". $location['Location']['longitude']. "</span>";
		echo '<span class="date" style="display:none;">'.$location['Location']['date']. "</span>"; // Comilla simple con comillas dobles dentro
	?>
	</div>
<?php endforeach; ?>
</div>
<?php elseif(isset($showPins) && $showPins == 'retrieveCords'): ?>
<?php echo $this->Html->script('https://maps.googleapis.com/maps/api/js?sensor=true'); ?>
<?php echo $this->Html->script('mapscript'); ?>
<?php endif; ?>
<div id="map-canvas"/>