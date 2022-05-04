import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Intefaces */
import { Travel } from '../interfaces/travel/travel';

/* Services */
import { TravelsService } from '../travels.service';

@Component({
  selector: 'app-travel-update',
  templateUrl: './travel-update.component.html',
  styleUrls: ['./travel-update.component.sass'],
})
export class TravelUpdateComponent implements OnInit {

  travel: Travel | undefined;
  profile: Boolean = true;

  constructor(
    private travelsService: TravelsService,
    private route: ActivatedRoute,
  ) {}

  /*Methods */

  
  ngOnInit(): void {
    this.getTravel();
  }

  getTravel(): void {
    const id = String(this.route.snapshot.paramMap.get('id_travel'));
    this.travelsService.getTravel(id).subscribe((data) => {
      this.travel = data;
    });
  }

  updateTravel(): void {
    if (this.travel) {
      this.travelsService.updateTravel(this.travel)
        .subscribe();
    }

  }

}
