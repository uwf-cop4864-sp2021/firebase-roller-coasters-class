import { Component, OnInit } from '@angular/core';
import { Coaster } from '../coaster-model';
import { CoasterService } from '../coaster.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-europe-list',
  templateUrl: './europe-list.component.html',
  styleUrls: ['./europe-list.component.css']
})
export class EuropeListComponent implements OnInit {

  public coasters: Observable<Coaster[]>;
  constructor(public coasterService: CoasterService) { }

  ngOnInit(): void {
    this.coasters = this.coasterService.getCoastersByContinent('Europe');
  }


}
