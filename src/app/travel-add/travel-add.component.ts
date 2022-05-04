import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Interface */
import { Travel } from '../interfaces/travel/travel';

/* Services */
import { TravelsService } from '../travels.service';

@Component({
  selector: 'app-travel-add',
  templateUrl: './travel-add.component.html',
  styleUrls: ['./travel-add.component.sass'],
})
export class TravelAddComponent implements OnInit {
  travel: Travel = {
    country: '',
    city: '',
    date: '',
    budget: '',
    comment: '',
    contact: '',
    active: true,
  };



  constructor(
    private travelsService: TravelsService,
    private route: ActivatedRoute
  ) {}

  /* Methods */
  addTravel(): void {
    console.log(this.travel);
    if (this.travel) {
      this.travelsService.addTravel(this.travel).subscribe();
    }
  }

  ngOnInit(): void {}
}
