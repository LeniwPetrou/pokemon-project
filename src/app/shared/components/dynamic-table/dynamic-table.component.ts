import { ChangeDetectionStrategy, Component, Input, ChangeDetectorRef } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { StoreDataService } from 'src/app/shared/services/store-data-service';
import { IColumnConfig } from '../../interfaces/column-interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { ExpandedElementComponent } from '../expanded-element/expanded-element.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  standalone: true,
  imports: [MatTableModule, NgIf, MatPaginatorModule, NgFor, MatIconModule, MatExpansionModule, MatButtonModule, ExpandedElementComponent, MatFormFieldModule, MatInputModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicTableComponent {

  @Input() set list (list: any[])  {
    this.loadData(list)
  }
  @Input() columnConfig!: IColumnConfig;
  @Input() expand?: boolean;
  public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<any[]>();

  public columnsToDisplayWithExpand!: any[];
  public expandedElement?: any;

  constructor(public storeDataService: StoreDataService,
    private cdr: ChangeDetectorRef){
  }

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  ngOnInit(){
    this.displayedColumns = Object?.keys(this.columnConfig);
    this.columnsToDisplayWithExpand = this.expand ? [...this.displayedColumns, 'expand'] : [...this.displayedColumns];
  }

  loadData(list: any[]){
    this.dataSource = new MatTableDataSource<any[]>(list);
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.target?.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
