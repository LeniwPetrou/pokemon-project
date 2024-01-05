import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { Dropdown } from 'src/app/shared/types/question-base copy';
import { SharedService } from 'src/app/shared/services/shared-service';

@Injectable({ 
  providedIn: 'root'
})
export class QuestionService {

  constructor(public sharedService: SharedService){
  }

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new Dropdown({
        key: 'abilities',
        label: 'Abilities',
        options: this.sharedService.searchAbilities(10, 2000),
        required: true,
        cssClass: 'col-12',
        order: 1
      })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}