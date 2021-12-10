import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
        /*
        Se o path for vazio, so a URL padrão,
        Direciona para /tarefas/listar,
        full = Passando a URL completa correta.
        */
    },
    ...TarefaRoutes
    /*
    Permite concatenar Arrays.
    Automaticamente o TyScript irá fazer um Merge.
    Adicionando os valores do TarefasRoutes na rota principal.
    */
];

@NgModule({//forRoot = para garantir que esse modulo de Rotas seja unico
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
