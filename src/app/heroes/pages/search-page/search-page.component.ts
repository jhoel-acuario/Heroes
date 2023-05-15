import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { FormControl } from '@angular/forms';
import {
  AutoComplete,
  AUTOCOMPLETE_VALUE_ACCESSOR,
} from 'primeng/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [],
})
export class SearchPageComponent implements OnInit {
  text: string = '';
  results: Hero[] = [];
  public selectedHero?: Hero;
  public searInput = new FormControl('');
  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {}

  searchHero() {
    const value: string = this.searInput.value || '';
    this.heroesServices.getSuggestions(value).subscribe(
      (data) => {
        this.results = data;
        console.log(this.results);
      },
      (error) => {
        // Manejo de errores
        console.error('Ocurrió un error:', error);
      }
    );
  }

  onSelectOption(event: any): void {
    console.log('evenmt', event);
    this.selectedHero = event;
    if (event) {
      this.selectedHero = undefined;
      return;
    }
  }
}
