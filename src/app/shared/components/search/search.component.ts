import { AsyncPipe, NgFor } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { HttpService } from 'src/app/pokemon-abilities/services/http-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatSelectModule, AsyncPipe, NgFor,  FormsModule, ReactiveFormsModule, MatButtonModule]
})
export class SearchComponent {

  public list$: any;
  public form!: FormGroup;
  @Output() onEmitValue: EventEmitter<any> = new EventEmitter(); 

  constructor( public httpService: HttpService){

  }

    ngOnInit(){
      this.list$ = this.httpService.search();
      this.form = new FormGroup({
        name: new FormControl('', Validators.required)
      });
    }

    search(){
      this.onEmitValue.emit(this.form.value);
    }
    


}
