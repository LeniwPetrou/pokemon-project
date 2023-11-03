import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { Dropdown } from 'src/app/shared/types/question-base copy';
import { HttpService } from './http-service';
import { SharedService } from 'src/app/shared/components/services/shared-service';

@Injectable({ 
  providedIn: 'root'
})
export class QuestionService {

  constructor(public sharedService: SharedService){
  }

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new Dropdown({
        key: 'pokemon',
        label: 'Pokemons',
        options: this.sharedService.searchAbilities(),
        order: 3
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}