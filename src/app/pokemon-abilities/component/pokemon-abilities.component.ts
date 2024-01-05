import { Component, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { Observable } from 'rxjs';
import { DynamicTableComponent } from 'src/app/shared/components/dynamic-table/dynamic-table.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { IColumnConfig } from 'src/app/shared/interfaces/column-interface';
import { HttpService } from '../services/http-service';
import { TableConfigService } from '../services/table-config-service';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { QuestionService } from '../services/question-service';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { BackgroundService } from 'src/app/shared/services/background-image-service';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss'],
  standalone: true,
  imports: [MatButtonModule, SharedModule, DynamicTableComponent, AsyncPipe, NgIf, SearchComponent]
})
export class PokemonAbilitiesComponent {

  public list$?: Observable<any>;
  public columnConfig!: IColumnConfig;
  public formVal!: string;
  public questions?: Observable<QuestionBase<string>[]>;

  constructor(
    public httpService: HttpService,
    private tableConfigService: TableConfigService,
    private questionService: QuestionService,
    private backgroundService: BackgroundService) { 
  }

  ngOnInit(): void {
    this.columnConfig = this.tableConfigService.getColumnConfig();
    this.questions = this.questionService.getQuestions();
    this.backgroundService.setBackground('https://images2.alphacoders.com/963/963354.png');
  }

  getEmittedValue(formValue: any){
    this.formVal = formValue;
    let val = Object.values(this.formVal);
    this.list$ = this.httpService.searchByName(val[0])
  }
}
