import { Component, OnInit } from '@angular/core';
import { CoasterService } from '../coaster.service';
import { Coaster } from '../coaster-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usa-list',
  templateUrl: './usa-list.component.html',
  styleUrls: ['./usa-list.component.css']
})
export class UsaListComponent implements OnInit {

  public coasters$: Observable<Coaster[]>;
  constructor(public coasterService: CoasterService) { }

  ngOnInit(): void {
    this.coasters$ = this.coasterService.getCoastersByContinent('USA');
  }

}
