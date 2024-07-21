import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private _authService: AuthService, private router: Router) { }

  login(): void {
    this._authService.login(this.usuario, this.password).subscribe(
      response => {
        this._authService.saveToken(response.data);
        this.router.navigate(['/']);
        setTimeout(() => {
          window.location.reload();
        }, 500) 

      },
      error => {
        alert('Error al iniciar sesión');
      }
    );
  }
}
