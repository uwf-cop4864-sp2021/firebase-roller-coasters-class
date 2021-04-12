import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CoasterService } from '../coasters/coaster.service';
import { Coaster } from '../coasters/coaster-model';

@Component({
  selector: 'app-create-coaster',
  templateUrl: './create-coaster.component.html',
  styleUrls: ['./create-coaster.component.css']
})
export class CreateCoasterComponent implements OnInit {

  public coasterForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    location: new FormControl('USA', [Validators.required, Validators.minLength(3)]),
    url: new FormControl(null, [Validators.required])
  });

  constructor(public coasterService: CoasterService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Coaster Form Value', this.coasterForm.value);

    this.coasterService.createCoaster( this.coasterForm.value );
  }

}
