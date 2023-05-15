import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent implements OnInit {
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
  msgs: Message[] = [];
  constructor(
    private heroesServices: HeroesService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private confirmationService: ConfirmationService
  ) {}
  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });
  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }
  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRouter.params
      .pipe(switchMap(({ id }) => this.heroesServices.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/');
        this.heroForm.reset(hero);
        return;
      });
  }

  onSubmit() {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesServices.updateHero(this.currentHero).subscribe({
        next: (hero) => {
          this._snackBar.open(
            `Se actualizo el personaje ${hero.superhero}`,
            'ok',
            {
              duration: 5000,
            }
          );

          this.router.navigate(['heroes/list']);
        },
        error(err) {
          console.log('error', err);
        },
      });
      return;
    }
    this.heroesServices.addHero(this.currentHero).subscribe({
      next: (hero) => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this._snackBar.open(`Se agrego el personaje ${hero.superhero}`, 'ok', {
          duration: 5000,
        });
      },
      error(err) {
        console.log('error', err);
      },
    });
    /*  this.heroesServices.addHero(this.heroForm.value) */
  }
  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Hero id is required');
    this.confirmationService.confirm({
      message: `Estas seguro de Eliminar este personaje?  ${this.currentHero.superhero}`,
      header: 'Confirmacion de eliminacion',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.heroesServices.deleteHeroById(this.currentHero.id).subscribe({
          next: (response) => {
            if (response) {
              this.router.navigate(['heroes/list']);
              this._snackBar.open(`Se elimino el personaje `, 'ok', {
                duration: 5000,
              });
            }
          },
        });

        this.msgs = [
          { severity: 'info', summary: 'Confirmed', detail: 'Record deleted' },
        ];
      },
      reject: () => {
        this.msgs = [
          {
            severity: 'info',
            summary: 'Rejected',
            detail: 'You have rejected',
          },
        ];
      },
    });
  }
}
