import { Injectable } from "@angular/core";
import {
   HttpEvent,
   HttpHandler,
   HttpInterceptor,
   HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
   providedIn: "root",
})
export class TokenInterceptor implements HttpInterceptor {
   constructor(private authService: AuthService) {}

   intercept(
      request: HttpRequest<any>,
      next: HttpHandler
   ): Observable<HttpEvent<any>> {
      request = request.clone({
         setHeaders: {
            "Access-Control-Allow-Origin": "*",
         },
      });
      if (this.authService.getToken()) {
         request = request.clone({
            setHeaders: {
               Authorization: `Bearer ${this.authService.getToken()}`,
            },
         });
      }

      return next.handle(request);
   }
}
