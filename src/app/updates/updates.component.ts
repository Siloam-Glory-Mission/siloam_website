import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent {
  isButtonDisabled = false;
  isButtonsDisabled = false;
  validityTimeInSeconds = 2592000; // Set the desired validity time in seconds
  lastClickTime: any;
  lastClickTimes: any;
  examdata: any;

  constructor(
    private authservice: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authservice.getData().subscribe((data: any) => {
      this.examdata = data.data;
      if (!this.examdata) {
        window.location.href = '#/session;';
      }
    });
    this.loadButtonState();
    this.loadButtonStates();
  }

  loadButtonState(): void {
    const storedButtonState = localStorage.getItem('buttonState');
    if (storedButtonState) {
      const { isDisabled, lastClickTime } = JSON.parse(storedButtonState);
      this.isButtonDisabled = isDisabled;
      this.lastClickTime = lastClickTime;
    }
  }

  loadButtonStates(): void {
    const storedButtonStates = localStorage.getItem('buttonStates');
    if (storedButtonStates) {
      const { isDisabled, lastClickTimes } = JSON.parse(storedButtonStates);
      this.isButtonsDisabled = isDisabled;
      this.lastClickTimes = lastClickTimes;
    }
  }

  saveButtonState(): void {
    const buttonState = {
      isDisabled: this.isButtonDisabled,
      lastClickTime: this.lastClickTime
    };
    localStorage.setItem('buttonState', JSON.stringify(buttonState));
  }

  saveButtonStates(): void {
    const buttonStates = {
      isDisabled: this.isButtonsDisabled,
      lastClickTimes: this.lastClickTimes
    };
    localStorage.setItem('buttonStates', JSON.stringify(buttonStates));
  }

  executeQuery(): void {
    if (this.isButtonDisabled) {
      return; // Exit if the button is already disabled
    }

    const currentTime = Date.now();
    if (this.lastClickTime && currentTime - this.lastClickTime < this.validityTimeInSeconds * 1000) {
      return; // Exit if the button is clicked within the validity time
    }

    this.isButtonDisabled = true;
    this.lastClickTime = currentTime;
    this.saveButtonState();

    this.authservice.updateage().subscribe(
      (data: any) => {
    //    console.log(data);
        this.isButtonDisabled = true;
        this.saveButtonState();
        this.toastr.success(data.message);
      },
      error => {
        console.error(error); // Handle the error

        // Re-enable the button if an error occurs
        this.isButtonDisabled = false;
        this.saveButtonState();
      }
    );
  }

  spiritualage(): void {
    if (this.isButtonsDisabled) {
      return; // Exit if the button is already disabled
    }

    const currentTime = Date.now();
    if (this.lastClickTimes && currentTime - this.lastClickTimes < this.validityTimeInSeconds * 1000) {
      return; // Exit if the button is clicked within the validity time
    }

    this.isButtonsDisabled = true;
    this.lastClickTimes = currentTime;
    this.saveButtonStates();

    this.authservice.spiritualage().subscribe(
      (data: any) => {
       // console.log(data);
        this.isButtonsDisabled = true;
        this.saveButtonStates();
        this.toastr.success(data.message)
        // Handle the response as needed
      },
      error => {
        console.error(error); // Handle the error

        // Re-enable the button if an error occurs
        this.isButtonsDisabled = false;
        this.saveButtonStates();
      }
    );
  }
}
