import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [],
})
export class ListPageComponent implements OnInit {
   heroes: Hero[] = [];
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.allHeroes()
    console.log(this.heroes);
  }

  allHeroes() {
    this.heroesService.getHeroes().subscribe((response) =>{
        this.heroes= response
    });
  }
}
