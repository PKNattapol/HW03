'use strict';

function search() {
	var url = '';
	document.getElementById('data').innerHTML = '';
	var text = document.getElementById('text').value;

	if (document.getElementById('name').checked) {
		var url = 'https://api.punkapi.com/v2/beers/?beer_name=' + text;
	} else {
		var url = 'https://api.punkapi.com/v2/beers/?food=' + text;
	}

	fetch(url).then(function (r) {
		return r.json();
	}).then(function (data) {
		var result = "";
		for (var i = 0; i < data.length; i++) {
			result += '<div class="row" id="item">' + '<div class="col-sm-3">' + '<center>' + '<image src="' + data[i].image_url + '" id="img"/>' + '<center>' + '</div>' + '<div class="col-sm-9">' + '<b>Name : </b>' + data[i].name + '<br />' + '<b>Food Pairing : </b>' + data[i].food_pairing + '<br />' + '<b>Tagline : </b>' + data[i].tagline + '<br />' + '<b>Description : </b>' + data[i].description + '</div>' + '</div>';
		}
		document.getElementById('data').innerHTML = result;
	});
}
