import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../services/http-service';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { Observable } from 'rxjs';
import { DynamicTableComponent } from 'src/app/shared/components/dynamic-table/dynamic-table.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { TableConfigService } from '../services/table-config-service';
import { IColumnConfig } from 'src/app/shared/interfaces/column-interface';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { QuestionBase } from 'src/app/shared/types/control-type';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  standalone: true,
  imports: [MatButtonModule, SharedModule, DynamicTableComponent, AsyncPipe, NgIf, SearchComponent]
})
export class PokemonComponent implements OnInit {

  public list$?: Observable<any>;
  public columnConfig!: IColumnConfig; 
  public formVal!: string;
  public questions!: Observable<QuestionBase<string>[]>;

  constructor(
    public httpService: HttpService,
    private tableConfigService: TableConfigService) { 
  }

  ngOnInit(): void {
     this.columnConfig = this.tableConfigService.getColumnConfig();
  }

  getPokemons (){
    this.list$ = this.httpService.search(10, 2000)
  }

  getEmittedValue(formValue: any){
    this.formVal = formValue;
    let val = Object.values(this.formVal);
    this.list$ = this.httpService.searchByName(val[0])
  }
}
