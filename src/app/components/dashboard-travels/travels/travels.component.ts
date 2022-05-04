import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Travel } from 'src/app/interfaces/travel/travel';
import { TravelsService } from '../../../travels.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass'],
})
export class TravelsComponent implements OnInit {
  displayedColumns: string[] = [
    'id_travel',
    'country',
    'city',
    'date',
    'budget',
    'comment',
    'contact',
    'active',
    'actions',
  ];

  travel!: Travel[];
  dataSourceTravel = new MatTableDataSource(this.travel);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private travelService: TravelsService,
    private _snackBar: MatSnackBar
  ) {}

  getAllTravels(): void {
    this.travelService.getAllTravels().subscribe((data) => {
      this.travel = data;
      this.dataSourceTravel = new MatTableDataSource(this.travel);
      this.dataSourceTravel.paginator = this.paginator;
      this.dataSourceTravel.sort = this.sort;
    });
  }

  deleteTravel(id_travel: number): void {
    const id = String(id_travel);
    this.travelService.deleteTravel(id).subscribe((data) => {
      this.getAllTravels();
      this._snackBar.open('Travel deleted!', '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    });
  }

  travelFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTravel.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getAllTravels();
  }

  ngAfterViewInit() {}
}
