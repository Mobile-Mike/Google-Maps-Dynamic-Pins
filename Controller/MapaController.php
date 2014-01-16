<?php
class MapaController extends AppController{
	public $uses = array('Location');
	public function index(){
		$locations = $this->Location->find('all');
		$this->set('locations', $locations);
	}
}
?>