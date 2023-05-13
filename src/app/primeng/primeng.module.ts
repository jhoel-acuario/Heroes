import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { TagModule } from 'primeng/tag';
import {PanelModule} from 'primeng/panel';
import {AutoCompleteModule} from 'primeng/autocomplete';

@NgModule({
  declarations: [],
  imports: [

  ],
  exports:[
    PasswordModule,
    ButtonModule,
    SplitterModule,
    ScrollPanelModule,
    ToolbarModule,
    MenubarModule,
    InputTextModule,
    PanelModule,
    CardModule,
    TagModule,
    AutoCompleteModule

  ]
})
export class PrimengModule { }
