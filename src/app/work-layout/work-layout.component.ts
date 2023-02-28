import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-work-layout',
  templateUrl: './work-layout.component.html',
  styleUrls: ['./work-layout.component.css']
})
export class WorkLayoutComponent implements OnInit, OnDestroy{

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  logout() {
    this.authService.logout()
  }

}
