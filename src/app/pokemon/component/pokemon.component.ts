import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PokemonService } from '../services/http-service';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { Observable } from 'rxjs';
import { DynamicTableComponent } from 'src/app/shared/components/dynamic-table/dynamic-table.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { TableService } from '../services/table-service';
import { IColumnConfig } from 'src/app/shared/interfaces/column-interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  standalone: true,
  imports: [MatButtonModule, SharedModule, DynamicTableComponent, AsyncPipe, NgIf]
})
export class PokemonComponent implements OnInit {

  public pokemonList$?: Observable<any>;
  public columnConfig!: IColumnConfig;

  constructor(
    public pokemonService: PokemonService,
    private cdref: ChangeDetectorRef, 
    private tableService: TableService ) { 
  }

  ngOnInit(): void {
     this.columnConfig = this.tableService.getColumnConfig();
  }

  getPokemons (){
    this.pokemonList$ = this.pokemonService.getPokemons(10, 10)
  }

  changePageTable(pageEvent: PageEvent){
    console.log('pageEvent::', pageEvent);
    let offset = pageEvent.pageIndex * pageEvent.pageSize;
    let limit = pageEvent.pageSize * pageEvent.pageIndex;
    console.log('limit', limit);
    this.pokemonList$ = this.pokemonService.getPokemons(offset, limit)
  }

  
  // ngAfterContentChecked() {

  //   this.cdref.detectChanges();

  // }

}
