import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICenter, ICourts } from './center'
import { CenterService } from "./center.service";
@Component({
  selector: 'pm-centers-details',
  templateUrl: './centers-details.component.html',
  styleUrls: ['./centers-details.component.css']
})
export class CentersDetailsComponent implements OnInit {
  pageTitle: string = 'Center Details';
  errorMessage: string;

  center: ICenter;
  court: ICourts;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _centertService: CenterService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.getCenter(id);
    // $(document).ready(planetmap)
  }

  getCenter(id: number): ICenter {
    let center: ICenter;
    this._centertService.getCenter(id).subscribe(
      center => this.center = center,
      error => this.errorMessage = <any>error
    );
    return center;
  }
  onBack(): void {
    this._router.navigate(['/centers']);
  }
  getCourt(i: number): string {
    // let courtNum = this.shi[i];
    let courtStat = this.center.courts[i].status;
    return courtStat;
  }
  shi(): number[] {

    let center = this.center;
    let courts: any[] = center.courts;

    console.log(courts);
    let total: any[] = [];
    for (let i = 0; i < courts.length; i++) {

      total.push(i);

    }
    return total;
  }


}
