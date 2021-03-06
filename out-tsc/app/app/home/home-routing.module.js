import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
const routes = [
    {
        path: 'home',
        component: HomePage,
        //se cargan todas las paginas una vez autenticado el usuario
        //paginas que se mostraran con el menu tabs
        children: [
            {
                path: 'articulos',
                loadChildren: () => import('../pages/articulos/articulos.module').then(m => m.ArticulosPageModule)
            },
            {
                path: 'detallearticulo',
                loadChildren: () => import('../pages/detallearticulo/detallearticulo.module').then(m => m.DetallearticuloPageModule)
            },
            {
                path: 'nuevoarticulo',
                loadChildren: () => import('../pages/nuevoarticulo/nuevoarticulo.module').then(m => m.NuevoarticuloPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: 'chatgeneral',
                loadChildren: () => import('../pages/chatgeneral/chatgeneral.module').then(m => m.ChatgeneralPageModule)
            },
            {
                path: 'detallever/:id',
                loadChildren: () => import('../pages/detallever/detallever.module').then(m => m.DetalleverPageModule)
            },
            {
                path: 'articuloeditar/:id',
                loadChildren: () => import('../pages/articuloeditar/articuloeditar.module').then(m => m.ArticuloeditarPageModule)
            },
            {
                path: 'showprofile/:id',
                loadChildren: () => import('../pages/showprofile/showprofile.module').then(m => m.ShowprofilePageModule)
            },
            {
                path: 'rentados',
                loadChildren: () => import('../pages/rentados/rentados.module').then(m => m.RentadosPageModule)
            },
            {
                path: 'comentario/:id',
                loadChildren: () => import('../pages/comentario/comentario.module').then(m => m.ComentarioPageModule)
            }
        ]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], HomePageRoutingModule);
export { HomePageRoutingModule };
//# sourceMappingURL=home-routing.module.js.map