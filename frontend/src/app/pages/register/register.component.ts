import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    usuario: '',
    nombres: '',
    primer_apellido: '',
    segundo_apellido: '',
    password: ''
  };

  constructor(private _authService: AuthService,  private router: Router) { }

  onSubmit() {
    this._authService.register(this.user).subscribe(
      response => {
        console.log(response);
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);

      },
      error => {
        console.log(error);
        alert('Error al registrar usuario')
      }
    );
  }
}
