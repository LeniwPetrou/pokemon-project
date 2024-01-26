import { Component, OnInit, forwardRef } from '@angular/core';
import { HttpService } from '../services/http-service';
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
import { QuestionService } from '../services/question-service';
import { ActionsConfigService } from '../services/actions-config-service';
import { IActionConfig } from 'src/app/shared/interfaces/actions-interface';

@Component({
  selector: 'app-pokemon-species',
  templateUrl: './pokemon-species.component.html',
  styleUrls: ['./pokemon-species.component.scss'],
  standalone: true,
  imports: [forwardRef(() => SharedModule), DynamicTableComponent, AsyncPipe, NgIf, SearchComponent, TableScrollingViewportComponent]
})
export class PokemonSpeciesComponent implements OnInit {

  public list$?: Observable<any>;
  public columnConfig!: IColumnConfig; 
  public formVal!: string;
  public questions!: Observable<QuestionBase<string>[]>;
  public range!: ListRange;
  public list?: any;
  public listSlice$ = new BehaviorSubject<any>(0);
  public actionsConfig?: IActionConfig[];

  constructor(
    public httpService: HttpService,
    private tableConfigService: TableConfigService,
    private backgroundService: BackgroundService,
    private questionService: QuestionService,
    private actionsConfigService: ActionsConfigService
    ) { 
  }

  ngOnInit(): void {
    this.columnConfig = this.tableConfigService.getColumnConfig();
    this.backgroundService.setBackground('https://wallpapercave.com/wp/wp2763494.jpg');
    this.questions = this.questionService.getQuestions();
    this.actionsConfig = this.actionsConfigService.getActionConfig();
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
