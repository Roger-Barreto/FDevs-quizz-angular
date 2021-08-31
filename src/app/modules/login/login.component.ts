import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioLogin } from 'src/app/shared/models/types/usuario-login';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public email: string;
  public senha: string;

  private authSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const acesso: UsuarioLogin = {
      email: this.email,
      senha: this.senha,
    }

    this.authSubscription = this.authService.entrar(acesso).subscribe(response => {
      localStorage.setItem('token', response.body.AccessToken);
    });
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
