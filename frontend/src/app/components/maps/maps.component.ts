import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { TeachersService } from '../../services/teachers/teachers.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  
  title: string = 'Location';
  lat: number; // number = -34.5942217;
  lng: number; // number = -58.4744191;
  zoom: number = 10;
  allMarkers = [];
  markers = [];
  zoomIn : boolean;
  direction :number;
  labelOptions = {};
  filteredMarkers = [];
  
  teacherPos : {
    lat: number,
    lng: number
  }
  constructor(private teacherSerive: TeachersService) {
  
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  handleMarkers(data){
    console.log(data);
    this.markers = Object.values(data.data);
    
  }
  
  changeStatusMarkers(value){
    console.log("nuevo orden", value);
    this.filteredMarkers = value;
  }
  

  filterLanguage(language, data){
    let arr = [];
    data.forEach(element => {
      if (element.native_language == language){
          arr.push(element);
        }
    });
    this.filteredMarkers = arr;
    return arr;
  }

  updateMarkers(bounds){
    
    if(this.zoomIn !== undefined){
      // zoom out
      if(this.direction > bounds ){
        this.zoomIn = false;
        this.direction = bounds;
      }else{
        this.zoomIn = true;
        this.direction = bounds;
      }

      if(!this.zoomIn){
        console.log("zoom out");
        for (let mark of this.markers) {
   
          let teacherPos = { lat: mark.lat, lng: mark.lng };

          if (bounds.contains(teacherPos)) {
            this.filteredMarkers.push(mark);
          }
        }

      }

    }
    
  }

  checkMarkersInBounds(bounds) {
    console.log(bounds);
    
     this.filteredMarkers = [];

    for (let mark of this.markers) {
     
      let teacherPos = { lat: mark.lat, lng: mark.lng };

      if (bounds.contains(teacherPos)) {
        this.filteredMarkers.push(mark);
      }
    }
    console.log("tecaher count", this.markers.length);
    this.markers = this.filteredMarkers;
  }
/*
  mapClicked($event: MouseEvent) {
    console.log("lat", $event.coords.lat);
    console.log("lng", $event.coords.lng);

    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }*/
 /* 
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }*/
  
   ngOnInit() {
    
     this.teacherSerive.markersUpdated.subscribe(
        value => this.changeStatusMarkers(value)
        )

     this.teacherSerive.getAll().subscribe(
       data => this.handleMarkers(data),
       error => console.log(error)
     )
   
    // just an interface for type safety.
    interface marker {
      lat: number;
      lng: number;
      label?: string;
      draggable: boolean;
    }

    this.labelOptions = {
      color: '#ee4646',
      fontFamily: '',
      fontSize: '12px',
      fontWeight: 'bold',
      letterSpacing:'0.5px'
      
    }


  }

}
