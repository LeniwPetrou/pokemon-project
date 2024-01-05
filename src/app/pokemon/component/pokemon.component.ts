import { Component, OnInit, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { HttpService } from '../services/http-service';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { BehaviorSubject, Observable } from 'rxjs';
import { DynamicTableComponent } from 'src/app/shared/components/dynamic-table/dynamic-table.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { TableConfigService } from '../services/table-config-service';
import { IColumnConfig } from 'src/app/shared/interfaces/column-interface';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { ListRange } from '@angular/cdk/collections';
import { TableScrollingViewportComponent } from 'src/app/shared/components/table-scrolling-viewport/table-scrolling-viewport.component';
import { BackgroundService } from 'src/app/shared/services/background-image-service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  standalone: true,
  imports: [MatButtonModule, SharedModule, DynamicTableComponent, AsyncPipe, NgIf, SearchComponent, TableScrollingViewportComponent]
})
export class PokemonComponent implements OnInit {

  public list$?: Observable<any>;
  public columnConfig!: IColumnConfig; 
  public formVal!: string;
  public questions!: Observable<QuestionBase<string>[]>;
  public range!: ListRange;
  public list?: any;
  public listSlice$ = new BehaviorSubject<any>(0);

  constructor(
    public httpService: HttpService,
    private tableConfigService: TableConfigService,
    private backgroundService: BackgroundService
    ) { 
  }

  ngOnInit(): void {
    this.columnConfig = this.tableConfigService.getColumnConfig();
    this.backgroundService.setBackground('https://cdn.wallpapersafari.com/14/63/ZtyKPO.jpg')
  }
  
  getPokemons (){
    this.list$ = this.httpService.search(10, 2000)
    this.updateListSlice();
  }

  getEmittedValue(formValue: any){
    this.formVal = formValue;
    let val = Object.values(this.formVal);
    this.list$ = this.httpService.searchByName(val[0])
  }
  
  updateTableSlice(range: ListRange) {
    this.range = range;
    this.updateListSlice();
  }

  updateListSlice(){
    this.list$?.subscribe( data => 
      {
        this.list = data;
        let listSlice = this.list.slice(this.range?.start, this.range?.end);
        this.listSlice$.next(listSlice);
      })
  }
}
