import { Component, OnInit } from '@angular/core';
import { CoasterService } from '../coaster.service';
import { Coaster } from '../coaster-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asia-list',
  templateUrl: './asia-list.component.html',
  styleUrls: ['./asia-list.component.css']
})
export class AsiaListComponent implements OnInit {

  public coasters: Observable<Coaster[]>;
  constructor(public coasterService: CoasterService) { }

  ngOnInit(): void {
    this.coasters = this.coasterService.getCoastersByContinent('Asia');
  }

}
