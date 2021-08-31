import { CadastrarComponent } from "./modules/cadastrar/cadastrar.component";
import { LoginComponent } from "./modules/login/login.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

export const routes = [
   {
      path: "",
      Component: AppComponent,
      children: [
         {
            path: "",
            pathMatch: "full",
            redirectTo: "login",
         },
         {
            path: "login",
            loadChildren: () =>
               import("./modules/login/login.module").then(
                  (m) => m.LoginModule
               ),
         },
         {
            path: "cadastrar",
            loadChildren: () =>
               import("./modules/cadastrar/cadastrar.module").then(
                  (m) => m.CadastrarModule
               ),
         },
         {
            path: "home",
            pathMatch: "full",
            loadChildren: () =>
               import("./modules/home/home.module").then((m) => m.HomeModule),
         },
         {
            path: "quizzes/:codigo",
            pathMatch: "full",
            loadChildren: () =>
               import("./modules/quizz/quizz.module").then(
                  (m) => m.QuizzModule
               ),
         },
      ],
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes), CommonModule],
   bootstrap: [AppComponent],
   exports: [RouterModule],
})
export class AppRoutingModule {}
