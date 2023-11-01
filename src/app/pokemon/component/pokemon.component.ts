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

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  standalone: true,
  imports: [MatButtonModule, SharedModule, DynamicTableComponent, AsyncPipe, NgIf]
})
export class PokemonComponent implements OnInit {

  public list$?: Observable<any>;
  public columnConfig!: IColumnConfig;
  public hasPagination: boolean = true;

  constructor(
    public httpService: HttpService,
    private cdref: ChangeDetectorRef, 
    private tableConfigService: TableConfigService ) { 
  }

  ngOnInit(): void {
     this.columnConfig = this.tableConfigService.getColumnConfig();
  }

  getPokemons (){
    this.list$ = this.httpService.getPokemons(10, 10)
  }

  changePageTable(pageEvent: PageEvent){
    console.log('pageEvent::', pageEvent);
    let offset = pageEvent.pageIndex * pageEvent.pageSize;
    let limit = pageEvent.pageSize * pageEvent.pageIndex;
    console.log('limit', limit);
    this.list$ = this.httpService.getPokemons(offset, limit)
  }

  
  // ngAfterContentChecked() {

  //   this.cdref.detectChanges();

  // }

}
