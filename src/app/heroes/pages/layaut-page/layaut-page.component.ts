import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layaut-page',
  templateUrl: './layaut-page.component.html',
  styles: [
  ]
})
export class LayautPageComponent implements OnInit {
  items: MenuItem[]=[];
  constructor() { }

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

}
