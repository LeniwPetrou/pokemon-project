import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { MatInputModule } from "@angular/material/input";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  standalone: true, 
  imports: [FormsModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, NgIf]
})
export class TextComponent {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
