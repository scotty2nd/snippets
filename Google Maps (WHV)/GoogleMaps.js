var directionDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
	//Daten aus den HTML Atrributen holen wenn welche existieren
	var Koordinaten = $('#map_canvas').data('koordinaten') || '';
	var KoordinatenListe = $('#map_canvas').data('koordinatenliste') || '';
	var Titel =  $('#map_canvas').data('titel') || '';
	var TitelListe =  $('#map_canvas').data('titelliste') || '';
	var Anschrift =  $('#map_canvas').data('anschrift') || '';
	var AnschriftListe =  $('#map_canvas').data('anschriftliste') || '';
	var Postleitzahl =  $('#map_canvas').data('postleitzahl') || '';
	var PostleitzahlListe =  $('#map_canvas').data('postleitzahlliste') || '';
	var Ort = $('#map_canvas').data('ort') || '';
	var OrtListe = $('#map_canvas').data('ortliste') || '';
	var PfadListe = $('#map_canvas').data('pfadliste') || '';
	var BildListe = $('#map_canvas').data('bildliste') || '';
	var MarkerImg = $('#map_canvas').data('marker_img') || '';
	var myLatlngArray = [];
	var infoBubbleArray = [];

	var rendererOptions = { draggable: true };
	directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
							
	var mapOptions = {
		zoom: 12, //aktueller Zoom //minZoom: 8, //minimal einstellbarer Zoom, //maxZoom: 32, //maximal einstellbarer Zoom
		center: new google.maps.LatLng(Koordinaten.split(',')[0], Koordinaten.split(',')[1]), //Zentriere den Kartenauschnitt auf meine Koordinaten
		disableDefaultUI: true,	//Standart Google Maps User Interface aussschalten
		scrollwheel: true, //Der Benutzer darf mit dem Mausrad die Karte zoomen
		zoomControl: true, //Tasten zum raus und rein zoomen anzeigen
		zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL, position: google.maps.ControlPosition.LEFT_TOP },	//Es sollen die kleinen Zoom Tasten oben links angezeigt werden 
		styles: [	{		featureType:'water',		elementType:'all',		stylers:[			{hue:'#71d6ff'},			{saturation:100},			{lightness:-5},			{visibility:'on'}		]	},{		featureType:'poi',		elementType:'all',		stylers:[			{hue:'#ffffff'},			{saturation:-100},			{lightness:100},			{visibility:'off'}		]	},{		featureType:'transit',		elementType:'all',		stylers:[			{hue:'#ffffff'},			{saturation:0},			{lightness:100},			{visibility:'off'}		]	},{		featureType:'road.highway',		elementType:'geometry',		stylers:[			{hue:'#deecec'},			{saturation:-73},			{lightness:72},			{visibility:'on'}		]	},{		featureType:'road.highway',		elementType:'labels',		stylers:[			{hue:'#bababa'},			{saturation:-100},			{lightness:25},			{visibility:'on'}		]	},{		featureType:'landscape',		elementType:'geometry',		stylers:[			{hue:'#e3e3e3'},			{saturation:-100},			{lightness:0},			{visibility:'on'}		]	},{		featureType:'road',		elementType:'geometry',		stylers:[			{hue:'#ffffff'},			{saturation:-100},			{lightness:100},			{visibility:'simplified'}		]	},{		featureType:'administrative',		elementType:'labels',		stylers:[			{hue:'#59cfff'},			{saturation:100},			{lightness:34},			{visibility:'on'}		]	}] //Custom Map Style von snazzymaps.com
	};
	
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions); // die Karte mit meinem map_canvas div verbinden
	
	//Ein Marker Auf der Karte
	if(Koordinaten != ''){
		var myLatlng = new google.maps.LatLng(Koordinaten.split(',')[0], Koordinaten.split(',')[1]);		//Da die beiden Koordinaten in einem String übergeben werden müssenn diese für die Verwendung als Koordinaten noch gesplittet werden sonst nur graue Karte 
	
		var marker = new google.maps.Marker({																								//Neuen Marker erstellen
			position: myLatlng,																																//Position des Markers angeben
			map: map,																																					//Auf welcher Karte soll der Marker hinzugefügt werden
			icon: MarkerImg																																				//Welches Icon soll für den Marker verwendet werden
		});
		
		var infoBubble = new InfoBubble({																										//Existiert noch kein InfoBubble dann erstelle ein neues
			content: '<div class="mapInfoBox">' + Titel + '<br/><span>' + Anschrift + '<br/>' + Postleitzahl + ' ' + Ort + '</span></div><div class="mapInfoBoxSideBar"><a id="Fahrrad" href="http://maps.google.com/maps?saddr=&daddr=' + Koordinaten.split(',')[0] + ',' + Koordinaten.split(',')[1] + '&dirflg=b" title=""><div><img src="img/FahrradIcon.png" alt="FahrradIcon"></div></a><a id="Auto" href="http://maps.google.com/maps?saddr=&daddr=' + Koordinaten.split(',')[0] + ',' + Koordinaten.split(',')[1] + '&dirflg=d" title=""><div><img src="img/AutoIcon.png" alt="AutoIcon"></div></a><a id="Bus" href="http://maps.google.com/maps?saddr=&daddr=' + Koordinaten.split(',')[0] + ',' + Koordinaten.split(',')[1] + '&dirflg=r" title=""><div><img src="img/BusIcon.png" alt="BusIcon"></div></a></div>', //Inhalt den man selber wählen kann je nach belieben
			borderRadius: 0,																															//Das InfoBubble soll keine Abgerundeten
			padding: 0,																																		//Es soll ebenfalls kein Padding am Rand des InfoBubbles erscheinen
			arrowSize: 10,																																//Pfeilgröße am unteren Rand
			borderWidth: 0,																																//Rahmenbreite ist auf 0 gesetzt da hier kein Rahmen gewünscht ist
			borderColor: '#2c2c2c',																												//Rahmenfarbe aber da hier kein Rahmen zu sehen ist, ist es uninteressant welche Farbe man angibt
			disableAutoPan: false,																												//Wenn das InfoBubble nicht beim Klick komplett sichtbar ist wird es so verschoben das es komplett sichtbar wird
			hideCloseButton: true,																												//Den Standart Schließen Knopf ausblenden
			arrowPosition: 0,																															//Der Pfeil zum Marker soll ganz links vom InfoBubble beginnen
			maxWidth: 275,																																//Breite des InfoBubbles
			shadowStyle: 0,																																//Der Schattenstyle des Info Bubbles möglich sind Werte 0, 1 und 2
			maxHeight: 111,																																//Höhe des InfoBubble
			arrowStyle: 2																																	//Die Neigung des Pfeils hier folgende Werte möglich 0, 1 und 2
		});
		
		infoBubble.open(map, marker);
		
		google.maps.event.addListener(marker, 'click', function() {		//Klick Event wenn auf einen Marker geklickt wird

			if(infoBubble.isOpen()) {																													//Enthält die Variable InfoBubble etwas bedeutet dass, das ein InfoBuuble schon geöffnet wurde
				infoBubble.close();																															//Aktuelles InfoBubble schließen 
			}else{
				infoBubble.open(map, this);																											//InfoBubble dem Marker hinzufügen
			}

		});//Ende Klick Event

		marker.setMap(map);																																	//Marker der Karte hinzufügen
	}//Ende If Koordinaten 

	//Mehrer Marker auf der Karte
	if(KoordinatenListe != ''){
		//Daten aus Data Tag teilen
		var KoordinatenArray = KoordinatenListe.split('/');
		var TitelArray = TitelListe.split('/');
		var AnschriftArray = AnschriftListe.split('/');
		var PostleitzahlArray = PostleitzahlListe.split('/');
		var OrtArray = OrtListe.split('/');
		var PfadArray = PfadListe.split(',');
		var BildArray = BildListe.split(',');
	
		for(var y = 0; y < KoordinatenArray.length; y++ ) {
			//Koordinaten für jeden Marker erstellen
			myLatlngArray[y] = new google.maps.LatLng(KoordinatenArray[y].split(',')[0], KoordinatenArray[y].split(',')[1]);
			
			//Marker für jeden Wert erstellen
			var marker = new google.maps.Marker({
				position: myLatlngArray[y],
				map: map,
				icon: MarkerImg
				});
			
			//Marker ID zuweisen ist nachher wichtig für die Zuordnung des richtigen InfoBubbles
			marker.set('id', y);
			
			//Alle InfoBubbles erstellen 
			infoBubbleArray[y] = new InfoBubble({	//Existiert noch kein InfoBubble dann erstelle ein neues
				content: '<div class="mapInfoBox">' + TitelArray[y] + '<br/><span>' + AnschriftArray[y] + '<br/>' + PostleitzahlArray[y] + ' ' + OrtArray[y] + '</span><a class="blockLink" href="' + PfadArray[y] + '" title="' + PfadArray[y] + '">Weitere Informationen</a></div>', //Inhalt den man selber wählen kann je nach belieben
				 borderRadius: 0, 		//Das InfoBubble soll keine Abgerundeten
				 padding: 0,			//Es soll ebenfalls kein Padding am Rand des InfoBubbles erscheinen
				 arrowSize: 10,			//Pfeilgröße am unteren Rand
				 borderWidth: 0,		//Rahmenbreite ist auf 0 gesetzt da hier kein Rahmen gewünscht ist
				 borderColor: '#2c2c2c',	//Rahmenfarbe aber da hier kein Rahmen zu sehen ist, ist es uninteressant welche Farbe man angibt
				 disableAutoPan: false,		//Wenn das InfoBubble nicht beim Klick komplett sichtbar ist wird es so verschoben das es komplett sichtbar wird
				 hideCloseButton: true,		//Den Standart Schließen Knopf ausblenden
				 arrowPosition: 0,		//Der Pfeil zum Marker soll ganz links vom InfoBubble beginnen
				 maxWidth: 275,			//Breite des InfoBubbles
				 shadowStyle: 0,		//Der Schattenstyle des Info Bubbles möglich sind Werte 0, 1 und 2
				 maxHeight: 111,		//Höhe des InfoBubble
				 arrowStyle: 2			//Die Neigung des Pfeils hier folgende Werte möglich 0, 1 und 2
			});
			
			//Wird auf einen Marker geklickt
			google.maps.event.addListener(marker, 'click', function () {
				
				//Marker ID abfragen
				var markerID = this.get("id");
				
				for(var b = 0; b < KoordinatenArray.length; b++ ) {
					
					if(b != markerID){
						//Schliesse alle InfoBubbles außer das des angeklickten Markers
						infoBubbleArray[b].close();
					}else if(b == markerID){
						//Wenn das InfoBubble des Angeklickten Markers schon geöffnet ist dann schliesse es sonst zeige dieses
						if(infoBubbleArray[markerID].isOpen()) {
							infoBubbleArray[markerID].close();
						}else{
							infoBubbleArray[markerID].open(map, this);
						}
					}
					
				}//Ende Schleife b
			});//Ende Klick Event
		}//Ende Schleife y

		var bounds = new google.maps.LatLngBounds();

		for(var g = 0; g < KoordinatenArray.length; g++ ) {
			bounds.extend(myLatlngArray[g]);
		}

		map.fitBounds(bounds);
	}//Ende If KoordinatenListe
}//Ende Initialize
