import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { ViewIdComponent } from './view-id/view-id.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // by-default home screen will be displayed
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    children: [
      { path: 'view', component: ViewComponent },
      { path: 'edit', component: EditComponent },
      { path: 'view-id', component: ViewIdComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'product-id/:id', component: ProductIdComponent },
  { path: 'order/:id', component: OrderViewComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
