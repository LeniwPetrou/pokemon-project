import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../services/http-service';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { Observable } from 'rxjs';
import { DynamicTableComponent } from 'src/app/shared/components/dynamic-table/dynamic-table.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  standalone: true,
  imports: [MatButtonModule, SharedModule, DynamicTableComponent, AsyncPipe, NgIf]
})
export class PokemonComponent implements OnInit {

  public pokemonList$?: Observable<any>;
  public limit = 10;

  constructor(
    public pokemonService: PokemonService) { 
  }

  ngOnInit(): void {
  }

  getPokemons (){
    this.pokemonList$ = this.pokemonService.getPokemons(this.limit, this.limit)
  }

  changePageTable(pageEvent: PageEvent){
    console.log('pageEvent::', pageEvent);
    let offset = pageEvent.pageIndex * pageEvent.pageSize;
    console.log('offset', offset);
    this.pokemonList$ = this.pokemonService.getPokemons(offset, this.limit)
  }

}
