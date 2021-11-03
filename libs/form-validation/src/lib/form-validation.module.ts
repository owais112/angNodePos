import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {TreeSelectModule} from 'primeng/treeselect';
import {TableModule} from 'primeng/table';
import { FormValidationComponent } from 'libs/form-validation/src/public-api';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [
    FormValidationComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule, 
    FormsModule,
    PanelModule,
    DropdownModule,
    TreeSelectModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule
  ],
  exports: [
    FormValidationComponent
  ],
  providers: [  ]
})
export class FormValidationModule { }

