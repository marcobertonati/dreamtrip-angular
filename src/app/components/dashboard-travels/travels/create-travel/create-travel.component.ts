import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TravelsService } from 'src/app/travels.service';

interface ShowTravel {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.component.html',
  styleUrls: ['./create-travel.component.sass'],
})
export class CreateTravelComponent implements OnInit {
  showTravel: ShowTravel[] = [
    { value: '0', viewValue: 'Yes' },
    { value: '1', viewValue: 'No' },
  ];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _travelsService: TravelsService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      city: ['', Validators.required],
      country: ['', Validators.required],
      date: ['', Validators.required],
      budget: ['', Validators.required],
      comment: ['', Validators.required],
      contact: ['', Validators.required],
      active: ['', Validators.required],
    });
  }

  createTravel() {
    this._travelsService.addTravel(this.form.value).subscribe();
    this.router.navigate(['/dashboard/travels']);
    this._snackBar.open('Travel created', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  ngOnInit(): void {}
}
