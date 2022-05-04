import { Component, OnInit } from '@angular/core';
import { Travel } from '../interfaces/travel/travel';
import { TravelsService } from '../travels.service';

import { TRAVELS } from '../mock/travel/travel.mock';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass'],
})
export class TravelsComponent implements OnInit {
  travels: Travel[] = [];

  constructor(private travelsService: TravelsService) {}

  getAllTravels(): void {
    this.travelsService.getAllTravels().subscribe((data) => {
      this.travels = data;
    });
  }

  ngOnInit(): void {
    this.getAllTravels();
  }
}
