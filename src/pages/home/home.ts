import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform : Platform, public googleMaps:GoogleMaps, private geolocation: Geolocation, private storage: Storage) {
      platform.ready().then(() => {
         this.loadMap();
    });
  }

  // Load map only after view is initialized
// ngAfterViewInit() {
//  this.loadMap();
// }

loadMap() {
  this.geolocation.getCurrentPosition().then((resp) => {
 resp.coords.latitude
 resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});

 // make sure to create following structure in your view.html file
 // and add a height (for example 100%) to it, else the map won't be visible
 // <ion-content>
 //  <div #map id="map" style="height:100%;"></div>
 // </ion-content>

 // create a new map by passing HTMLElement
 let element: HTMLElement = document.getElementById('map');

 let map: GoogleMap = this.googleMaps.create(element);

 // listen to MAP_READY event
 // You must wait for this event to fire before adding something to the map or modifying it in anyway
 map.one(GoogleMapsEvent.MAP_READY).then(
   () => {
     console.log('Map is ready!');
     // Now you can add elements to the map like the marker
   }
 );

 // create LatLng object
 let ionic: LatLng = new LatLng(43.0741904,-89.3809802);
let ionic2: LatLng = new LatLng(34.022042,-118.273154);
let ionic3: LatLng = new LatLng(34.039685,-118.294463);
let ionic4: LatLng = new LatLng(33.974903,-118.352178);
let ionic5: LatLng = new LatLng(33.892293,-118.279765);
let ionic6: LatLng = new LatLng(33.925040,-118.168584);
let ionic7: LatLng = new LatLng(33.915073,-118.334868);
let ionic8: LatLng = new LatLng(34.042062,-118.308336);
 // create CameraPosition
 let position: CameraPosition = {
   target: ionic,
   zoom: 18,
   tilt: 30
 };

 // move the map's camera to position
 map.moveCamera(position);

 // create new marker
 let markerOptions: MarkerOptions = {
   position: ionic,
   title: 'Ionic'
 };
let markerOptions2: MarkerOptions = {
   position: ionic,
   title: 'Fur Baby Rescue'
 };
  let markerOptions3: MarkerOptions = {
   position: ionic,
   title: 'Washington Dog & Cat Hospital'
  };
  let markerOptions4: MarkerOptions = {
   position: ionic,
   title: 'Centinela Animal Hospital'
  };
  let markerOptions5: MarkerOptions = {
   position: ionic,
   title: 'Pet Harbor'
  };
  let markerOptions6: MarkerOptions = {
   position: ionic,
   title: 'Los Angeles County Animal shelter'
  };
  let markerOptions7: MarkerOptions = {
   position: ionic,
   title: 'South Bay Pet Adoption Center'
  };
  let markerOptions8: MarkerOptions = {
   position: ionic,
   title: 'Western Animal Hospital'
  };
   map.addMarker(markerOptions)
   .then((marker: Marker) => {
      marker.showInfoWindow();
    });
    map.addMarker(markerOptions2)
   .then((marker2: Marker) => {
      marker2.showInfoWindow();
    });
     map.addMarker(markerOptions3)
   .then((marker3: Marker) => {
      marker3.showInfoWindow();
    });
     map.addMarker(markerOptions4)
   .then((marker4: Marker) => {
      marker4.showInfoWindow();
    });
     map.addMarker(markerOptions5)
   .then((marker5: Marker) => {
      marker5.showInfoWindow();
    });
     map.addMarker(markerOptions6)
   .then((marker6: Marker) => {
      marker6.showInfoWindow();
    });
     map.addMarker(markerOptions7)
   .then((marker7: Marker) => {
      marker7.showInfoWindow();
    });
     map.addMarker(markerOptions8)
   .then((marker8: Marker) => {
      marker8.showInfoWindow();
    });
 }

}
