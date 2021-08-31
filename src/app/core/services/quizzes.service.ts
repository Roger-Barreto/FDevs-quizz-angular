import { Quizz } from "./../../shared/models/types/quizz";
import { environment } from "./../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PontuacaoTotal } from "src/app/shared/models/types/pontuacao-total";
import { QuizzCadastro } from "src/app/shared/models/types/quizz-cadastro";
import { Resposta } from "src/app/shared/models/types/resposta";

@Injectable({ providedIn: "root" })
export class QuizzesService {
   constructor(private http: HttpClient) {}

   getAll(): Observable<HttpResponse<Quizz[]>> {
      return this.http.get<Quizz[]>(`${environment.ApiUrl}/quizzes`, {
         observe: "response",
      });
   }

   getById(id: number): Observable<HttpResponse<Quizz>> {
      return this.http.get<Quizz>(`${environment.ApiUrl}/quizzes/${id}`, {
         observe: "response",
      });
   }

   getPontuacao(): Observable<HttpResponse<PontuacaoTotal>> {
      return this.http.get<PontuacaoTotal>(
         `${environment.ApiUrl}/quizzes/pontuacao`,
         { observe: "response" }
      );
   }

   post(quizz: QuizzCadastro): Observable<HttpResponse<Quizz>> {
      return this.http.post<Quizz>(`${environment.ApiUrl}/quizzes`, quizz, {
         observe: "response",
      });
   }

   put(novoQuizz: QuizzCadastro, id: number): Observable<HttpResponse<Quizz>> {
      return this.http.put<Quizz>(
         `${environment.ApiUrl}/quizzes/${id}`,
         novoQuizz,
         { observe: "response" }
      );
   }

   delete(id: number): Observable<HttpResponse<any>> {
      return this.http.delete(`${environment.ApiUrl}/quizzes/${id}`, {
         observe: "response",
      });
   }

   responderPergunta(resposta: Resposta): Observable<HttpResponse<any>> {
      return this.http.post<any>(`${environment.ApiUrl}/respostas`, resposta, {
         observe: "response",
      });
   }
}
