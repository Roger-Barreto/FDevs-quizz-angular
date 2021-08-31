import { environment } from "./../../../environments/environment.prod";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { UsuarioRegistro } from "src/app/shared/models/types/usuario-registro";
import { Usuario } from "src/app/shared/models/types/usuario";
import { UsuarioLogin } from "src/app/shared/models/types/usuario-login";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   constructor(private http: HttpClient) {}

   public getToken(): string {
      return localStorage.getItem("token");
   }

   public isAuthenticated(): boolean {
      const token = this.getToken();

      return token ? true : false;
   }

   registrar(usuarioRegistro: UsuarioRegistro): Observable<HttpResponse<Usuario>> {
      return this.http.post<Usuario>(
         `${environment.ApiUrl}/autenticacao/registrar`,
         usuarioRegistro,
         { observe: "response" }
      );
   }

   entrar(login: UsuarioLogin): Observable<HttpResponse<Usuario>> {
      return this.http.post<Usuario>(
         `${environment.ApiUrl}/autenticacao/acessar`,
         login,
         { observe: "response" }
      );
   }
}
