import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCardComponent,NgFor],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Brudhavan",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":1,
      "Name":"Hygreeva",
      "Type":"House",
      "Price":13000
    },
    {
      "Id":1,
      "Name":"Legend",
      "Type":"House",
      "Price":14000
    },
    {
      "Id":1,
      "Name":"Madhu",
      "Type":"House",
      "Price":15000
    },
    {
      "Id":1,
      "Name":"Sriram",
      "Type":"House",
      "Price":16000
    }
            

]



}
