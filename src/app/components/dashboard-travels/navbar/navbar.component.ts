import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];
  constructor(private _menuService: MenuService) {}

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu() {
    this._menuService.getMenu().subscribe((menu) => {
      this.menu = menu;
    });
  }
}
