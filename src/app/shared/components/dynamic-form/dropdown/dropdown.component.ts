import { AsyncPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [MatSelectModule, AsyncPipe, NgFor,  FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule]
})

export class DropdownComponent {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
