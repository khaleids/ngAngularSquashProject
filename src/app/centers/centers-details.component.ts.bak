import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ICenter} from './center'
@Component({
  selector: 'pm-centers-details',
  templateUrl: './centers-details.component.html',
  styleUrls: ['./centers-details.component.css']
})
export class CentersDetailsComponent implements OnInit {
    pageTitle: string ='Center Details';
    center: ICenter;

  constructor(private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.center =     {
        "centerId": id,
        "centerName": "Leaf Rake",
        "centerAddress": "GDN-0011",
        
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }
  onBack(): void {
    this._router.navigate(['/centers']);
  }

}
