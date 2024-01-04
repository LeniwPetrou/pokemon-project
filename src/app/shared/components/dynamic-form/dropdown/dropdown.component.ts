import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { QuestionBase } from 'src/app/shared/types/control-type';
import { MatInputModule } from "@angular/material/input";
import { ReplaySubject, Subject, take, takeUntil } from 'rxjs';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [MatSelectModule, AsyncPipe, NgFor,  FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, NgIf, NgxMatSelectSearchModule]
})

export class DropdownComponent {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  @ViewChild('singleSelect', { static: true }) singleSelect?: MatSelect;

  get isValid() { return this.form.controls[this.question.key].valid; }
  public optionCtrl: FormControl = new FormControl();
  public optionFilterCtrl: FormControl = new FormControl();
  public options?: any;
  public filteredOptions: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  protected _onDestroy = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.question.options.subscribe( (value: any) => {
      this.options = value;
      this.filteredOptions.next(this.options.slice());
    })
    this.optionFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterOptions();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  protected setInitialValue() {
    this.filteredOptions
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect!.compareWith = (a: any, b: any) => a && b && a.id === b.id;
      });
  }

  protected filterOptions() {
    if (!this.options) {
      return;
    }
    let search = this.optionFilterCtrl.value;
    if (!search) {
      this.filteredOptions.next(this.options.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredOptions.next(
      this.options.filter((option:any) => option.value.toLowerCase().indexOf(search) > -1)
    );
  }
}
