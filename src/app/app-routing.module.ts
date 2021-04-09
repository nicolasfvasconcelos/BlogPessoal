import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

//array de objetos de rotas 
const routes: Routes = [
 
  //path:'' --> vazio--> pra quando não tiver rota, ele redirecionar (redirectTo) pra tela que eu quero
  //pathMatch = pra trazer a tela completa
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
 
  //path=nome da rota --> falo que essa rota vai para um lugar (component: nomeComponent) 
  {path:'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
