import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { Observable } from 'rxjs';
import { DynamicTableComponent } from 'src/app/shared/components/dynamic-table/dynamic-table.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { IColumnConfig } from 'src/app/shared/interfaces/column-interface';
import { HttpService } from '../services/http-service';
import { TableConfigService } from '../services/table-config-service';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss'],
  standalone: true,
  imports: [MatButtonModule, SharedModule, DynamicTableComponent, AsyncPipe, NgIf]
})
export class PokemonAbilitiesComponent {

  public list$?: Observable<any>;
  public columnConfig!: IColumnConfig;
  public hasPagination: boolean = false;

  constructor(
    public httpService: HttpService,
    private tableConfigService: TableConfigService) { 
  }

  ngOnInit(): void {
     this.columnConfig = this.tableConfigService.getColumnConfig();
  }

  getApiCall (){
    this.list$ = this.httpService.getApiCall('stench')
  }
}
