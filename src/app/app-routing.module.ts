import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { CursoComponent } from './curso/curso.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'lista-cursos', component: CursoComponent},
  {path:'lista-disciplinas', component: DisciplinaComponent},
  {path: 'home', component: HomeComponent},

  {path: '**', component: PaginaNaoEncontradaComponent} // utilizamos "**" como mensagem de erro para quando o sistema não encontra o mapeamento.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
