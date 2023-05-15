import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayautPageComponent } from './pages/layaut-page/layaut-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MaterialModule } from '../material/material.module';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { HeroPipe } from './pipes/hero.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [
    HeroPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    LayautPageComponent,
    CardHeroComponent,
    HeroPipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    PrimengModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    ConfirmationService
  ]
})
export class HeroesModule { }
