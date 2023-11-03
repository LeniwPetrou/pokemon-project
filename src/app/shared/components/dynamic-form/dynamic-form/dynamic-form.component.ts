import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/shared/services/question-control.service';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone: true,
  imports: [NgFor, DynamicFormQuestionComponent]
})
export class DynamicFormComponent {
  @Input() questions: QuestionBase<string>[] | null = [];
  @Input() form!: FormGroup;

  ngOnInit(){
    console.log('questions::', this.questions);
  }
}
