import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layaut-page',
  templateUrl: './layaut-page.component.html',
  styles: [
  ]
})
export class LayautPageComponent implements OnInit {
  items: MenuItem[]=[];
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Heroes',
          icon:'pi pi-bolt',
          items: [{
                  label: 'Listado',
                  icon: 'pi pi-list',
                  routerLink:'list'

              },
              {label: 'Añadir', routerLink:'new-hero',icon:'pi pi-fw pi-plus'},
              {label: 'Buscar', routerLink:'search' , icon:'pi pi-search'},
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }
  get user():User| undefined{
    return this.authService.currentUser
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
