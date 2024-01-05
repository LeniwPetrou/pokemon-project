import { Component, Input, forwardRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { StoreDataService } from 'src/app/shared/services/store-data-service';
import { IColumnConfig } from '../../interfaces/column-interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ExpandedElementComponent } from '../expanded-element/expanded-element.component';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  standalone: true,
  imports: [forwardRef(() => SharedModule), NgIf, NgFor, ExpandedElementComponent],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class DynamicTableComponent{

  @Input() set list (list: any[])  {
    this.loadData(list)
  }
  @Input() columnConfig!: IColumnConfig;
  @Input() expand?: boolean;
  public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<any[]>();
  public columnsToDisplayWithExpand!: any[];
  public expandedElement?: any;

  constructor(public storeDataService: StoreDataService){
  }

  ngOnInit(){
    this.displayedColumns = Object?.keys(this.columnConfig);
    this.columnsToDisplayWithExpand = this.expand ? [...this.displayedColumns, 'expand'] : [...this.displayedColumns];
  }

  loadData(list: any[]){
    this.dataSource = new MatTableDataSource<any[]>(list);
  }
}
