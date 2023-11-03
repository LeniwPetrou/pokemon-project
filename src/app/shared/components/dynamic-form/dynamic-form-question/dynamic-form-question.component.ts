import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { TextComponent } from '../text/text.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, NgSwitch, NgSwitchCase, TextComponent, DropdownComponent]
})
export class DynamicFormQuestionComponent {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
