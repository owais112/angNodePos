import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {TreeSelectModule} from 'primeng/treeselect';
import { MainService } from './main.service';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    PanelModule,
    DropdownModule,
    TreeSelectModule,
    TableModule
  ],
  exports: [
    MainComponent
  ],
  providers: [ MainService ]
})
export class MainModule { }
