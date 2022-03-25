import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {     path: '', redirectTo: 'books', pathMatch: 'full'   },
  {     path: 'books', loadChildren: () => import('./books/books.module').then( m => m.BooksPageModule) },
  {
    path: 'book-detail',
    loadChildren: () => import('./books/book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
