import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './articles/components/add-article/add-article.component';
import { EditArticleComponent } from './articles/components/edit-article/edit-article.component';
import { PreviewArticleComponent } from './articles/components/preview-article/preview-article.component';

const routes: Routes = [

  {path :'', pathMatch:'full', redirectTo:'home'},
  {path: 'home', component:HomeComponent},
  {path:'admin',component:HomeAdminComponent},
  {path:'produits',loadChildren:'./products/products.module#ProductsModule'},
  {path:'articles',component:ArticlesComponent,
  children:[
    {path:'',redirectTo:'add',pathMatch:'full'},
    {path:'add',component:AddArticleComponent},
    {path:'edit/id',component:EditArticleComponent},
    {path:'preview/id',component:PreviewArticleComponent},
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
