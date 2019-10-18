import { Component, OnInit } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-agm',
  templateUrl: './agm.component.html',
  styleUrls: ['./agm.component.scss']
})
export class AgmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  zoom: number = 17;
  
  // initial center position for the map
  lat: number = 27.884460;
  lng: number = 78.079646;
  name="Keyenceindia"
  clickedMarker( index: number) {
    console.log(`clicked the marker: ${index}`)
  }
 
  
  markerDragEnd( $event: MouseEvent) {
    console.log('dragEnd', $event);
  }
  
  labelOptions = {
    color: 'green',
    fontFamily: '',
    fontSize: '14px',
    fontWeight: 'bold',
    text: 'Some Text',
    backgroundcolor:'green'
    }
}
