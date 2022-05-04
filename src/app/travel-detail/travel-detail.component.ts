import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Intefaces */
import { Travel } from '../interfaces/travel/travel';

/* Services */
import { TravelsService } from '../travels.service';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.sass'],
})
export class TravelDetailComponent implements OnInit {
  travel: Travel | undefined;
  profile: Boolean = true;

  constructor(
    private travelsService: TravelsService,
    private route: ActivatedRoute
  ) {}

  getTravel(): void {
    const id = String(this.route.snapshot.paramMap.get('id_travel'));
    this.travelsService.getTravel(id).subscribe((data) => {
      this.travel = data;
    });
  }

  deleteTravel(id_travel: number | undefined): void {
    const id = String(id_travel);
    this.travelsService.deleteTravel(id).subscribe((data) => {
      this.travel = undefined;
    });
  }

  ngOnInit(): void {
    this.getTravel();
  }
}
