import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  viewButtons = false;

  constructor(
    private _authService: AuthService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    
    if (this._authService.isAuthenticated()) {
      this.viewButtons = true;
    } else {
      this.viewButtons = false;

    }
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);

  }

  movies() {
    this.router.navigate(['/movies']);

  }

  close() {
    this._authService.logout();
    this.router.navigate(['/login']);
    window.location.reload();


  }

}
