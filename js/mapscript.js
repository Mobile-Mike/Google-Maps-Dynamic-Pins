window.addEvent('domready', function(){
	var MapLocations = $('MapLocations');
	var lat_lng = {
		'latitude':$('LocationLatitude'),
		'longitude':$('LocationLongitude')
	}
	if(MapLocations){
		displayEvents();
	}else if(lat_lng){
		retrieveCoords()();
	}
	function displayEvents(){
		var Locations = [];
		MapLocations.getElements('.location').each(function(location, i){ 
			var LocationDictionary = {
				'id':location.getElement('.id').get('text'),
				'title':location.getElement('.title').get('text'),
				'description':location.getElement('.description').get('text'),
				'latitude':location.getElement('.latitude').get('text'),
				'longitude':location.getElement('.longitude').get('text'),
				'date':location.getElement('.date').get('text'),
				'image':location.getElement('.image').get('text')
			};
			Locations.push(LocationDictionary);
		});

		function initialize() {
			var companyLocation = new google.maps.LatLng(20.672975,-103.362986);
			var companyPin = {
				url: 'icos/company_pin_icon.png'
			}
			var mapOptions = {
				zoom: 16,
				center: companyLocation,
				mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP]},
				mapTypeControl: false,
				panControl: true,
				zoomControl: true,
				scaleControl: false,
				streetViewControl: false
			};
			var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			var companyMarker = new google.maps.Marker({
				position: companyLocation,
				map: map,
				icon: companyPin,
				title:"Place Company Name"
			});
			var infoWindows		= [];
			var markers			= [];
			Locations.each(function(location, i){
				var infoWindow_Content = 
					"<span><img src='/files/locations/image/" + location.image + "' " + "height='80px'></span>" +
					"<div style='font-size: 20px; margin-bottom: 0px;'>" + location.title + "</div>" + 
					"<p>" + location.description + "</p>" + 
					"<p>" + location.date + "</p>";

				markers[i] = new google.maps.Marker({
						position: (new google.maps.LatLng(location.latitude,location.longitude)),
						map: map,
						icon: companyPin,
						title:location.title
				});
				infoWindows[i] = new google.maps.InfoWindow({
					content: infoWindow_Content,
					minWidth: 300,
					maxWidth: 300
				});
				new google.maps.event.addListener(markers[i], 'click', function(){
					infoWindows[i].open(map, markers[i]);
				});
				
			});
		};
		google.maps.event.addDomListener(window, 'load', initialize);
	}

	function retrieveCoords() {
		function initialize() {
			var companyLocation = new google.maps.LatLng(20.672975,-103.362986);
			var companyPin = {
				url: '/icos/company_pin_icon.png'
			}
			var mapOptions = {
				zoom: 16,
				center: companyLocation,
				mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP]},
				mapTypeControl: false,
				panControl: true,
				zoomControl: true,
				scaleControl: false,
				streetViewControl: false
			};
			var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

			//Get position from dragged pin
			var contentString = 'Arrastra el pin al lugar deseado para obtener las coordenadas de éste.';
			var infowindow = new google.maps.InfoWindow({
				content: contentString,
				minWidth: 300,
				maxWidth: 300
			});
			var marker = new google.maps.Marker({
				position: companyLocation,
				map: map,
				icon: companyPin,
				title: 'lolsies for funsies',
				draggable: true
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
			infowindow.open(map,marker);

			//Put coordinates in their respective fields…
			google.maps.event.addListener(marker, 'dragend', function(lat_lng) {
				$('LocationLatitude').set('value', lat_lng.latLng.lat());
				$('LocationLongitude').set('value', lat_lng.latLng.lng());
			});
		}
		google.maps.event.addDomListener(window, 'load', initialize);
	}
});
