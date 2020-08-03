
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeAdminModule } from './home-admin/home-admin.module';
import { ProductsModule } from './products/products.module';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './articles/components/add-article/add-article.component';
import { EditArticleComponent } from './articles/components/edit-article/edit-article.component';
import { PreviewArticleComponent } from './articles/components/preview-article/preview-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    AddArticleComponent,
    EditArticleComponent,
    PreviewArticleComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule, 
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeAdminModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
