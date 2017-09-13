import { Component,OnInit } from '@angular/core';
import { ICenter } from './center';
import { CenterService } from "./center.service";

@Component({
  //  selector: 'pm-centers',
    templateUrl: './centers-list.component.html',
    styleUrls: ['./centers-list.component.css']
    
})
export class CentersListComponent implements OnInit {
    pageTitle: string = 'Centers List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string

    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter=value;
        this.filteredCenters = this.listFilter? this.performFilter(this.listFilter):this.centers;
    }
    filteredCenters: ICenter[];
    centers:ICenter[]=[];

    constructor(private _centerService: CenterService) {

    } 
    onRatingClicked (message: string):void{
        this.pageTitle='Center List'+message;
    }

    performFilter(filterBy:string): ICenter[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.centers.filter((center:ICenter)=> 
                center.centerName.toLocaleLowerCase().indexOf(filterBy)!== -1);
    }
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void {
        this._centerService.getCenters()
            .subscribe(centers => {
                    this.centers=centers;
                    this.filteredCenters=this.centers;
            },
                    error => this.errorMessage = <any>error
        );
    }
}