import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsuarioRegistro } from 'src/app/shared/models/types/usuario-registro';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit, OnDestroy {
  public email: string;
  public senha: string;
  public nome: string;
  public sobrenome: string;
  public telefone: string;
  public imagemUrl: string;

  private authSubscription: Subscription
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const registro: UsuarioRegistro = {
      nome: this.nome,
      sobreNome: this.sobrenome,
      email: this.email,
      telefone: this.telefone,
      imagemUrl: this.imagemUrl,
      senha: this.senha,
    }

    this.authSubscription = this.authService.registrar(registro).subscribe(
      response => {
        localStorage.setItem('token', response.body.AccessToken);
        this.router.navigate(['/login']);
      },
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
