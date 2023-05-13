import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [],
})
export class SearchPageComponent implements OnInit {
  text: string = '';
  results: string[] = [];
  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {}

  search(event: { query: any }) {
    /* this.heroesServices(event.query).then((data: string[]) => {
      this.results = data;
    }); */
  }

  handleDropdown() {
    //event.query = current value in input field
  }
}
