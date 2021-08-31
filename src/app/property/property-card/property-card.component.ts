import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.sass']
})
export class PropertyCardComponent implements OnInit {

  property :any = {
    "id" : 1,
    "type": "house",
    "price": 12000,
    "name":"lux-House"
  }
  constructor() {

   }

  ngOnInit(): void {
  }

}
